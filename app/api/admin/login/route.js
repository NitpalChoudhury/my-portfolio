import { NextResponse } from "next/server";

export async function POST(req) {
  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, message: "Incorrect password" },
      { status: 401 }
    );
  }

  // set cookie
  return NextResponse.json(
    { success: true },
    {
      status: 200,
      headers: {
        "Set-Cookie": `admin-auth=valid; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`
      }
    }
  );
}

export function GET() {
  return NextResponse.json({ error: "Method Not Allowed" }, { status: 405 });
}
