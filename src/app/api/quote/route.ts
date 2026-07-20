import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // TODO: integrate email/CRM or rate-engine here.
  const reference = `AP-${Date.now().toString(36).toUpperCase()}`;
  console.log("[quote] new request:", reference, parsed.data);

  return NextResponse.json({
    ok: true,
    reference,
    message: "Your quote request has been received. We'll respond within one business day.",
  });
}
