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
      { label: "Hand Taps", href: "/products/hss-hand-taps" },
      { label: "HSS Threading Hand Tap", href: "/products/hss-hand-taps/hss-hand-tap" },
      { label: "Machine Taps", href: "/get-a-quote?product=HSS%20Machine%20Tap" },
      { label: "Nut Taps", href: "/get-a-quote?product=HSS%20Nut%20Tap" },
      { label: "Spiral Point Taps", href: "/get-a-quote?product=HSS%20SPPT%20Tap" },
      { label: "Acme and Heli-Coil Taps", href: "/get-a-quote?product=Special%20HSS%20Tap" },
    ],
  },
  {
    label: "Threading Dies and Rolls",
    href: "/products/threading-dies-and-rolls",
    description: "External threading and thread-forming tools for suitable applications.",
    children: [
      { label: "Round Thread Cutting Dies", href: "/get-a-quote?product=Round%20Thread%20Cutting%20Die" },
      { label: "Circular Thread Rolls", href: "/get-a-quote?product=Circular%20Thread%20Roll" },
    ],
  },
  {
    label: "Drills and Hole Finishing",
    href: "/products/drills-and-hole-finishing",
    description: "Hole-making and finishing tools for machining requirements.",
    children: [
      { label: "HSS Drills", href: "/get-a-quote?product=HSS%20Drill" },
      { label: "HSS Reamers", href: "/get-a-quote?product=HSS%20Reamer" },
    ],
  },
  {
    label: "Milling and Cutting Tools",
    href: "/products/milling-and-cutting-tools",
    description: "Cutters and tool bits for shaping, milling and machining work.",
    children: [
      { label: "HSS Cutters", href: "/get-a-quote?product=HSS%20Cutter" },
      { label: "End Mill Cutters", href: "/get-a-quote?product=HSS%20End%20Mill%20Cutter" },
      { label: "Gear Hob Cutters", href: "/get-a-quote?product=HSS%20Gear%20Hob%20Cutter" },
      { label: "HSS Tool Bits", href: "/get-a-quote?product=HSS%20Tool%20Bit" },
    ],
  },
];