import {NextRequest, NextResponse} from "next/server";
import {promises as fs} from "fs";
import path from "path";

// Simple storage - saves visitor count to a file
const DATA_FILE = path.join(process.cwd(), "visitors.json");

// What we store in the file
interface VisitorData {
  totalVisitors: number;
  visitedIPs: string[];
}

// Get visitor's IP address
function getVisitorIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  return forwarded?.split(",")[0] || realIP || "unknown";
}

// Read visitor data from file (or create new if doesn't exist)
async function getVisitorData(): Promise<VisitorData> {
  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(fileContent);
  } catch {
    // File doesn't exist, start with 0 visitors
    return {totalVisitors: 0, visitedIPs: []};
  }
}

// Save visitor data to file
async function saveVisitorData(data: VisitorData): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET: Just return current visitor count
export async function GET() {
  try {
    const data = await getVisitorData();
    return NextResponse.json({count: data.totalVisitors});
  } catch {
    return NextResponse.json({count: 0});
  }
}

// POST: Track a new visitor (only count new IPs)
export async function POST(request: NextRequest) {
  try {
    const visitorIP = getVisitorIP(request);
    const data = await getVisitorData();

    // If this IP hasn't visited before, count it
    if (!data.visitedIPs.includes(visitorIP)) {
      data.visitedIPs.push(visitorIP);
      data.totalVisitors++;
      await saveVisitorData(data);
    }

    return NextResponse.json({count: data.totalVisitors});
  } catch {
    return NextResponse.json({count: 0});
  }
}
