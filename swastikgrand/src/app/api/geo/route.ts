import { NextResponse } from "next/server";

const COUNTRY_HEADER_NAMES = ["x-vercel-ip-country", "cf-ipcountry", "x-country-code"] as const;

function countryFromAcceptLanguage(value: string | null) {
  if (!value) return null;

  const locale = value.split(",")[0]?.trim();
  if (!locale) return null;

  try {
    const countryCode = new Intl.Locale(locale).region;
    return countryCode && /^[A-Z]{2}$/.test(countryCode) ? countryCode : null;
  } catch {
    return null;
  }
}

export function GET(request: Request) {
  const countryCode = COUNTRY_HEADER_NAMES
    .map((header) => request.headers.get(header)?.toUpperCase())
    .find((value): value is string => Boolean(value && /^[A-Z]{2}$/.test(value)))
    ?? countryFromAcceptLanguage(request.headers.get("accept-language"));

  if (!countryCode) {
    return NextResponse.json({ error: "Country detection is unavailable." }, { status: 404 });
  }

  return NextResponse.json({ countryCode });
}
