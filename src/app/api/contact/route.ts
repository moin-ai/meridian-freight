import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // TODO: integrate email (Resend/SES) or CRM here.
  console.log("[contact] new enquiry:", parsed.data);

  return NextResponse.json({
    ok: true,
    message: "Thank you — our team will get back to you shortly.",
  });
}
