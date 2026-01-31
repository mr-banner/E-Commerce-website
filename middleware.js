import { NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function middleware(request) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const res = await fetch(`${BACKEND_URL}/validateToken`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (!data.isValid) {
      const response = NextResponse.redirect(
        new URL("/login", request.url)
      );
      response.cookies.delete("token");
      response.cookies.delete("userName");
      return response;
    }
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/productlist/:path*"],
};
