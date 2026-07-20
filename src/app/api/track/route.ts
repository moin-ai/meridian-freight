import { NextResponse } from "next/server";
import { trackSchema } from "@/lib/schemas";

/**
 * PLACEHOLDER tracking endpoint.
 * Returns a deterministic mock timeline derived from the tracking number so the
 * UI is fully functional. Replace the body below with a real carrier API call.
 */
const STAGES = [
  { status: "Booking Confirmed", location: "Origin", icon: "task_alt" },
  { status: "Collected from Shipper", location: "Origin Depot", icon: "inventory_2" },
  { status: "Departed Origin Port", location: "Port Klang, MY", icon: "directions_boat" },
  { status: "In Transit", location: "South China Sea", icon: "public" },
  { status: "Arrived Destination Port", location: "Singapore", icon: "anchor" },
  { status: "Out for Delivery", location: "Destination Hub", icon: "local_shipping" },
  { status: "Delivered", location: "Consignee", icon: "where_to_vote" },
];

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = trackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  const tn = parsed.data.trackingNumber.trim().toUpperCase();
  const h = hash(tn);
  const currentIndex = h % STAGES.length;
  const now = Date.now();

  const timeline = STAGES.map((stage, i) => {
    const done = i <= currentIndex;
    const ts = new Date(now - (currentIndex - i) * 26 * 3600 * 1000);
    return {
      ...stage,
      done,
      current: i === currentIndex,
      timestamp: done ? ts.toISOString() : null,
    };
  });

  return NextResponse.json({
    ok: true,
    trackingNumber: tn,
    mode: ["Sea", "Air", "Land"][h % 3],
    eta: new Date(now + (STAGES.length - currentIndex) * 24 * 3600 * 1000).toISOString(),
    currentStatus: STAGES[currentIndex].status,
    timeline,
  });
}
