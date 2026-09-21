export type ProductMenuItem = {
  label: string;
  href: string;
  description?: string;
  children?: ProductMenuItem[];
};

export const productMenu: ProductMenuItem[] = [
  {
    label: "HSS Threading Taps",
    href: "/products/hss-threading-taps",
    description: "Internal threading tools for workshop and production requirements.",
    children: [
      { label: "HSS Hand Taps", href: "/products/hss-threading-taps/hss-hand-taps" },
      { label: "HSS Hand Tap Sets", href: "/products/hss-threading-taps/hss-hand-tap-sets" },
      { label: "HSS Machine Taps", href: "/products/hss-threading-taps/hss-machine-taps" },
      { label: "HSS Nut Taps", href: "/products/hss-threading-taps/hss-nut-taps" },
      { label: "HSS Short Nut Taps", href: "/products/hss-threading-taps/hss-short-nut-taps" },
      { label: "HSS Spiral Point Taps (SPPT)", href: "/products/hss-threading-taps/hss-spiral-point-taps" },
      { label: "HSS ACME Thread Taps", href: "/products/hss-threading-taps/hss-acme-thread-taps" },
      { label: "HSS Thread Forming Roll Taps", href: "/products/hss-threading-taps/hss-thread-forming-taps" },
      { label: "HSS Heli-Coil STI Taps", href: "/products/hss-threading-taps/hss-helicoil-sti-taps" },
    ],
  },
  {
    label: "HSS Threading Dies & Rolls",
    href: "/products/threading-dies-rolls",
    description: "External threading and thread-forming tools for suitable applications.",
    children: [
      { label: "HSS Round Thread Cutting Dies", href: "/products/threading-dies-rolls/hss-round-thread-cutting-dies" },
      { label: "Circular Thread Rolling Dies", href: "/products/threading-dies-rolls/circular-thread-rolling-dies" },
    ],
  },
  {
    label: "HSS Milling & Gear Cutters",
    href: "/products/milling-gear-cutters",
    description: "Milling and gear-cutting tools for machining requirements.",
    children: [
      { label: "HSS End Mill Cutters", href: "/products/milling-gear-cutters/hss-end-mill-cutters" },
      { label: "HSS Gear Hob Cutters", href: "/products/milling-gear-cutters/hss-gear-hob-cutters" },
      { label: "HSS Cutters", href: "/get-a-quote?product=HSS%20Cutter" },
    ],
  },
  {
    label: "HSS Reamers",
    href: "/products/hss-reamers",
    description: "Hole-finishing tools for suitable machining requirements.",
    children: [
      { label: "HSS Reamers", href: "/products/hss-reamers" },
    ],
  },
  {
    label: "HSS Tool Bits",
    href: "/products/hss-tool-bits",
    description: "Round and square HSS tool bits for turning and shaping.",
    children: [
      { label: "HSS Round Tool Bits", href: "/products/hss-tool-bits/hss-round-tool-bits" },
      { label: "HSS Square Tool Bits", href: "/products/hss-tool-bits/hss-square-tool-bits" },
    ],
  },
];