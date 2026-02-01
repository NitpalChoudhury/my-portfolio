import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json(
        { success: false, message: "Password required" },
        { status: 400 }
      );
    }

    // ENV PASSWORD CHECK
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: "Incorrect password" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Login successful" },
      { status: 200 }
    );
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Server error", error: String(error) },
      { status: 500 }
    );
  }
}
