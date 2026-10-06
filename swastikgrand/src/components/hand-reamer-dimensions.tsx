type HandReamerDimension = readonly [string, string, string, string];

const dimensions: HandReamerDimension[] = [
  ["3.0", "-", "31", "62"],
  ["-", "1/8", "33", "66"],
  ["3.5", "-", "35", "71"],
  ["4.0", "5/32", "38", "76"],
  ["4.5", "-", "41", "81"],
  ["5.0", "3/16", "44", "87"],
  ["5.5", "7/32", "47", "93"],
  ["6.0", "-", "47", "93"],
  ["-", "1/4", "50", "100"],
  ["7.0", "9/32", "54", "107"],
  ["8.0", "5/16", "58", "115"],
  ["9.0", "11/32", "62", "124"],
  ["10.0", "3/8, 13/32", "66", "133"],
  ["11.0", "7/16", "71", "142"],
  ["12.0", "15/32", "76", "152"],
  ["13.0", "1/2", "76", "152"],
  ["14.0", "9/16", "81", "163"],
  ["15.0", "-", "81", "163"],
  ["16.0", "5/8", "87", "175"],
  ["17.0", "-", "87", "175"],
  ["18.0", "11/16", "93", "188"],
  ["19.0", "-", "93", "188"],
  ["20.0", "3/4", "100", "201"],
  ["21.0", "13/16", "100", "201"],
  ["22.0", "7/8", "107", "215"],
  ["23.0", "-", "107", "215"],
  ["24.0", "15/16", "115", "231"],
  ["25.0", "1", "115", "231"],
  ["26.0", "-", "115", "231"],
  ["27.0", "1-1/16", "124", "247"],
  ["28.0", "1-1/8", "124", "247"],
  ["30.0", "-", "124", "247"],
  ["-", "1-3/16, 1-1/4, 1-5/16", "133", "265"],
  ["34.0", "-", "142", "284"],
  ["35.0", "1-3/8", "142", "284"],
  ["36.0", "1-7/16", "142", "284"],
  ["38.0", "1-1/2", "152", "305"],
  ["40.0", "-", "152", "305"],
  ["42.0", "1-5/8", "152", "305"],
  ["44.0", "-", "163", "326"],
  ["45.0", "1-3/4", "163", "326"],
  ["46.0", "-", "163", "326"],
  ["48.0", "1-7/8", "174", "347"],
  ["50.0", "2", "174", "347"],
  ["52.0", "2-1/16", "174", "347"],
  ["55.0", "2-1/8", "184", "367"],
  ["56.0", "2-3/16", "184", "367"],
  ["58.0", "2-1/4", "184", "367"],
  ["60.0", "2-5/16", "184", "367"],
  ["62.0", "2-3/8, 2-7/16", "194", "387"],
  ["63.0", "2-1/2", "194", "387"],
  ["67.0", "-", "194", "387"],
  ["71.0", "-", "203", "406"],
];

export function HandReamerDimensions() {
  return <section id="hand-reamer-dimensions" className="section specifications"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">Hand reamer dimensions</p><h2>Parallel-shank dimensions<br /><em>by diameter.</em></h2></div><p>Diameters are shown in millimetres and inch equivalents where listed. Cutting-edge and overall lengths are in millimetres.</p></div>
    <div className="thread-forms-table-wrap"><table className="thread-forms-table"><caption>HSS parallel hand reamer dimensions</caption><thead><tr><th scope="col">Diameter (mm)</th><th scope="col">Diameter (in)</th><th scope="col">Cutting-edge length (mm)</th><th scope="col">Overall length (mm)</th></tr></thead><tbody>{dimensions.map(([diameterMm, diameterIn, cuttingEdgeLength, overallLength]) => <tr key={`${diameterMm}-${diameterIn}`}><th scope="row">{diameterMm}</th><td>{diameterIn}</td><td>{cuttingEdgeLength}</td><td>{overallLength}</td></tr>)}</tbody></table></div>
    <div className="thread-standards-note"><h3>Catalog notes</h3><ul><li>The chart describes a virtually parallel cutting edge with an integral taper and bevel lead, parallel shank, and driving square.</li><li>It specifies LH helical flutes for RH cutting unless otherwise specified.</li><li>For IS, ISO and BS standards, the catalog lists m6 diameter tolerance and says it is expected to produce H8 holes. For DIN, it says to calculate reamer size to suit H7 holes.</li><li>Listed standards: IS 5444:1978, ISO 236/1:1976, DIN 206:1979 and BS 328 Part 4:1983.</li></ul></div>
    <p className="thread-standards-copy">This chart is transcribed from the Addison-branded pages supplied with this request. It is a dimensional reference, not confirmation that every size or configuration is stocked by Swastik Grand. Confirm the applicable standard, tolerance and availability in your quotation.</p>
  </div></section>;
}