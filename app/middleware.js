import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const ADMIN_PATHS = ["/admin/dashboard"];

export async function middleware(req) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("admin_token");

  if (ADMIN_PATHS.includes(url.pathname)) {
    if (!token) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token.value, secret);
      return NextResponse.next();
    } catch (e) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
