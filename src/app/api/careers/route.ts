import { NextResponse } from "next/server";
import { careersSchema } from "@/lib/schemas";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = careersSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // TODO: forward to HR inbox / ATS here.
  console.log("[careers] new application:", parsed.data);

  return NextResponse.json({
    ok: true,
    message: "Application received. Our HR team will reach out if there's a fit.",
  });
}
