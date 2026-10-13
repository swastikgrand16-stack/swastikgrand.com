import Link from "next/link";

const threadStandards = [
  ["M – Metric Coarse", "ISO metric coarse thread", "M10 × 1.5 mm"],
  ["Metric Fine / MF", "ISO metric fine thread; normally marked M with pitch", "M10 × 1.0 mm"],
  ["UNC", "Unified National Coarse", "1/2″–13 UNC"],
  ["UNF", "Unified National Fine", "1/2″–20 UNF"],
  ["UNEF", "Unified National Extra Fine", "1/2″–28 UNEF"],
  ["UN", "Unified constant-pitch series, such as 8-UN, 12-UN and 16-UN", "1-1/2″–8 UN"],
  ["UNS", "Unified National Special", "1/2″–24 UNS"],
  ["UNR", "Unified thread with a rounded external root", "Specify size, TPI and series"],
  ["UNJ / UNJC / UNJF / UNJS", "Unified J-profile threads, including coarse, fine and special series", "Specify complete drawing designation"],
  ["BSW", "British Standard Whitworth, coarse", "1/2″–12 BSW"],
  ["BSF", "British Standard Fine", "1/2″–16 BSF"],
  ["BSPP / G", "British Standard Pipe Parallel", "G 1/2"],
  ["BSPT / R", "British Standard Pipe Taper; R denotes external taper", "R 1/2"],
  ["Rc / Rp", "BSP mating internal threads: Rc taper, Rp parallel", "Rc 1/2 or Rp 1/2"],
  ["NPT", "National Pipe Taper", "1/2″–14 NPT"],
  ["NPTF", "Dryseal National Pipe Taper", "1/2″–14 NPTF"],
  ["NPSM / NPSL / NPSC", "American straight pipe-thread series for different applications", "Specify exact series"],
  ["BA", "British Association thread", "0 BA, 2 BA, 4 BA"],
  ["BSB", "British Standard Brass thread", "Diameter × TPI BSB"],
  ["BSC / CEI", "British Standard Cycle / Cycle Engineers’ Institute", "Diameter × TPI BSC"],
  ["ACME", "Inch trapezoidal thread, 29° profile", "Diameter × TPI ACME"],
  ["Stub ACME", "Shallower ACME thread", "Diameter × TPI Stub ACME"],
  ["Tr", "Metric trapezoidal thread, 30° profile", "Tr20 × 4"],
  ["Buttress", "Asymmetric thread for heavy axial loads", "Specify standard and profile"],
  ["Rd", "Round thread", "Specify standard, diameter and pitch"],
] as const;

export function ThreadFormsReference({ relatedHandTapLink = false }: { relatedHandTapLink?: boolean }) {
  return <section id="thread-standards" className="thread-forms-section section"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">Practical thread reference</p><h2>Know the thread.<br /><em>Specify it clearly.</em></h2></div><p>For HSS taps and dies, metric pitch is measured in millimetres; inch threads are usually specified in TPI (threads per inch).</p></div>
    <div className="thread-forms-table-wrap"><table className="thread-forms-table"><caption>Common thread names for HSS taps and dies</caption><thead><tr><th scope="col">Thread name</th><th scope="col">Full name / meaning</th><th scope="col">Example size</th></tr></thead><tbody>{threadStandards.map(([name, meaning, example]) => <tr key={name}><th scope="row">{name}</th><td>{meaning}</td><td>{example}</td></tr>)}</tbody></table></div>

    <div className="thread-standards-note"><h3>How to read an order size</h3><ul><li><strong>M10 × 1.5:</strong> 10 mm nominal diameter, 1.5 mm pitch.</li><li><strong>1/2″–13 UNC:</strong> 1/2 inch nominal diameter, 13 TPI, UNC thread.</li><li>Pitch in mm = <strong>25.4 ÷ TPI</strong>.</li><li><strong>RH / LH:</strong> right-hand / left-hand thread.</li><li>Pipe sizes are nominal: a 1/2″ BSP or NPT thread does not have a 12.7 mm outside diameter.</li></ul></div>

    <p className="thread-standards-copy">Unified thread families are covered by ASME B1.1. This practical industry list includes common metric, Unified, British and pipe series; it is not every specialist thread standard worldwide.</p>
    <div className="thread-sources"><strong>References</strong><a href="https://www.asme.org/wwwasmeorg/media/codes-standards/find-codes/c-t_b1_1_2024.pdf" target="_blank" rel="noreferrer">ASME B1.1 ↗</a><a href="https://www.gewindebohrer.de/en/service/technische-daten/tap-drill-sizes" target="_blank" rel="noreferrer">Tap-drill sizes and thread data ↗</a></div>
    <div className="thread-reference-actions"><strong>For quotations</strong><span>Write diameter + pitch/TPI + thread standard + RH/LH + tolerance class, where applicable.</span>{relatedHandTapLink && <Link className="under-link" href="/products/hss-threading-taps/hss-hand-taps">Individual HSS Hand Taps <span aria-hidden="true">↗</span></Link>}<Link className="under-link" href="#enquiry">Discuss your thread requirement <span aria-hidden="true">↗</span></Link></div>
  </div></section>;
}
