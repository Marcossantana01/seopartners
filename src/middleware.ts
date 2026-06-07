import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Minimal middleware placeholder required by Next.js during development.
// This keeps behavior neutral and allows adding access control later.
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  // apply to all routes (adjust later as needed)
  matcher: "/:path*",
};
