import {NextRequest, NextResponse} from "next/server";
import {promises as fs} from "fs";
import path from "path";

const VIEWS_FILE = path.join(process.cwd(), "data", "views.json");

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, {recursive: true});
  }
}

// Get client IP address
function getClientIP(request: NextRequest): string {
  // Check various headers for IP address
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");

  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, get the first one
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback to connection remote address
  return request.ip || "unknown";
}

// Read current view data
async function getViewData() {
  try {
    await ensureDataDir();
    const data = await fs.readFile(VIEWS_FILE, "utf8");
    return JSON.parse(data);
  } catch {
    // If file doesn't exist, start with empty data
    return {
      totalViews: 0,
      uniqueIPs: [],
      lastUpdated: new Date().toISOString(),
    };
  }
}

// Save view data
async function saveViewData(viewData: any) {
  await ensureDataDir();
  await fs.writeFile(VIEWS_FILE, JSON.stringify(viewData, null, 2));
}

// GET - Return current view count
export async function GET() {
  try {
    const viewData = await getViewData();

    return NextResponse.json({
      totalViews: viewData.totalViews,
      lastUpdated: viewData.lastUpdated,
    });
  } catch (error) {
    console.error("Error getting views:", error);
    return NextResponse.json({error: "Failed to get views"}, {status: 500});
  }
}

// POST - Increment view count if IP is new
export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);
    const viewData = await getViewData();

    // Ensure uniqueIPs is an array
    if (!Array.isArray(viewData.uniqueIPs)) {
      viewData.uniqueIPs = [];
    }

    // Only increment if this IP hasn't been seen before
    const isNewVisitor = !viewData.uniqueIPs.includes(clientIP);

    if (isNewVisitor) {
      viewData.uniqueIPs.push(clientIP);
      viewData.totalViews += 1;
      viewData.lastUpdated = new Date().toISOString();

      await saveViewData(viewData);
    }

    return NextResponse.json({
      totalViews: viewData.totalViews,
      lastUpdated: viewData.lastUpdated,
      isNewVisitor,
    });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return NextResponse.json(
      {error: "Failed to increment views"},
      {status: 500}
    );
  }
}
