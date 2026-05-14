import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname

  if (pathname === "/") {
    return NextResponse.next()
  }

  // Maintenance image allow
  if (pathname.startsWith("/maintenance.png")) {
    return NextResponse.next()
  }

  // Next.js static files allow
  if (pathname.startsWith("/_next")) {
    return NextResponse.next()
  }

  // Baaki sab redirect
  return NextResponse.redirect(new URL("/", request.url))
}