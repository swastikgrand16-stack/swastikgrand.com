import { NextResponse, type NextRequest } from "next/server";

const handTapDestination = "/products/hss-threading-taps/hss-hand-taps";

const legacyHandTapPaths = new Set([
  "/products/hss-hand-taps/hss-hand-tap",
  "/hss-threading-taps/hand-taps/hss-hand-tap-manufacturers",
]);

export function proxy(request: NextRequest) {
  const normalizedPath = request.nextUrl.pathname.replace(/\/+$/, "");
  if (legacyHandTapPaths.has(normalizedPath)) {
    return NextResponse.redirect(new URL(handTapDestination, request.url), 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/products/hss-hand-taps/hss-hand-tap/:path*",
    "/hss-threading-taps/hand-taps/hss-hand-tap-manufacturers/:path*",
  ],
};
