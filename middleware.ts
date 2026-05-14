import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname

  // Homepage allow
  if (pathname === "/") {
    return NextResponse.next()
  }

  // Maintenance image allow
  if (pathname.startsWith("/maintenance.png")) {
    return NextResponse.next()
  }

  if (pathname.startsWith("/_next")) {
    return NextResponse.next()
  }

 
  return NextResponse.redirect(new URL("/", request.url))
}