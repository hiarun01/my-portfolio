import {NextRequest, NextResponse} from "next/server";

// In-memory storage for demo purposes
// In production, use a database like Redis, MongoDB, or PostgreSQL
const visitorData = {
  count: 0,
  uniqueIPs: new Set<string>(),
};

export async function GET(request: NextRequest) {
  try {
    // Get client IP address
    const forwarded = request.headers.get("x-forwarded-for");
    const realIP = request.headers.get("x-real-ip");
    const clientIP = forwarded?.split(",")[0] || realIP || "unknown";

    // Check if this IP has visited before
    if (!visitorData.uniqueIPs.has(clientIP)) {
      visitorData.uniqueIPs.add(clientIP);
      visitorData.count++;
    }

    return NextResponse.json({
      count: visitorData.count,
      success: true,
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      {error: "Failed to track visitor", success: false},
      {status: 500}
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP address
    const forwarded = request.headers.get("x-forwarded-for");
    const realIP = request.headers.get("x-real-ip");
    const clientIP = forwarded?.split(",")[0] || realIP || "unknown";

    // Always increment for POST requests (page visits)
    if (!visitorData.uniqueIPs.has(clientIP)) {
      visitorData.uniqueIPs.add(clientIP);
      visitorData.count++;
    }

    return NextResponse.json({
      count: visitorData.count,
      success: true,
    });
  } catch (error) {
    console.error("Error tracking visitor:", error);
    return NextResponse.json(
      {error: "Failed to track visitor", success: false},
      {status: 500}
    );
  }
}
