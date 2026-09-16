import { productMenu, type ProductMenuItem } from "@/data/menu";

function escapeXml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function renderItem(item: ProductMenuItem, depth = 0): string {
  const children = item.children?.length ? `<children>${item.children.map((child) => renderItem(child, depth + 1)).join("")}</children>` : "";
  return `<item><label>${escapeXml(item.label)}</label><url>${escapeXml(item.href)}</url>${item.description ? `<description>${escapeXml(item.description)}</description>` : ""}${children}</item>`;
}

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?><menu><site>Swastik Grand Industries</site><brand>SWAGIN</brand><products>${productMenu.map((item) => renderItem(item)).join("")}</products></menu>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}