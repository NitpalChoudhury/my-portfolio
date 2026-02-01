import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ success: true });

  // Remove admin token cookie
  response.cookies.set("admin_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    expires: new Date(0), // expire immediately
  });

  return response;
}
