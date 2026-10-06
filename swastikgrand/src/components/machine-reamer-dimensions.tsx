type MachineReamerDimension = readonly [string, string, string, string, string];

const dimensions: MachineReamerDimension[] = [
  ["3.00", "-", "31.00", "111", "1"],
  ["-", "1/8", "33.00", "113", "1"],
  ["4.00", "5/32", "38.00", "118", "1"],
  ["5.00", "3/16", "44.00", "124", "1"],
  ["6.00", "-", "47.00", "127", "1"],
  ["-", "1/4", "50.00", "130", "1"],
  ["7.00", "9/32", "54.00", "134", "1"],
  ["8.00", "5/16", "58.00", "138", "1"],
  ["9.00", "11/32", "62.00", "142", "1"],
  ["10.00", "3/8, 13/32", "66", "146", "1"],
  ["11.00", "7/16", "71", "151", "1"],
  ["12.00", "15/32", "76", "156", "1"],
  ["13.00", "1/2", "76", "156", "1"],
  ["14.00", "-", "81", "161", "1"],
  ["15.00", "9/16", "81", "181", "2"],
  ["16.00", "5/8", "87", "187", "2"],
  ["17.00", "-", "87", "187", "2"],
  ["18.00", "11/16", "93", "193", "2"],
  ["19.00", "-", "93", "193", "2"],
  ["20.00", "3/4", "100", "200", "2"],
  ["21.00", "13/16", "100", "200", "2"],
  ["22.00", "7/8", "107", "207", "2"],
  ["23.00", "-", "107", "207", "2"],
  ["24.00", "15/16", "115", "242", "3"],
  ["25.00", "1", "115", "242", "3"],
  ["26.00", "-", "115", "242", "3"],
  ["27.00", "1-1/16", "124", "251", "3"],
  ["28.00", "1-1/8", "124", "251", "3"],
  ["30.00", "-", "124", "251", "3"],
  ["-", "1-3/16, 1-1/4", "133", "260", "3"],
  ["32.00", "1-5/16", "133", "293", "4"],
  ["34.00", "-", "142", "302", "4"],
  ["35.00", "1-3/8", "142", "302", "4"],
  ["36.00", "1-7/16", "142", "302", "4"],
  ["38.00", "1-1/2", "152", "312", "4"],
  ["40.00", "-", "152", "312", "4"],
  ["42.00", "1-5/8", "152", "312", "4"],
  ["44.00", "-", "163", "323", "4"],
  ["45.00", "1-3/4", "163", "323", "4"],
  ["46.00", "-", "163", "323", "4"],
  ["48.00", "1-7/8", "174", "334", "4"],
  ["50.00", "2", "174", "334", "4"],
  ["52.00", "-", "174", "371", "5"],
  ["55.00", "-", "184", "381", "5"],
  ["56.00", "-", "184", "381", "5"],
  ["58.00", "2-1/4", "184", "381", "5"],
  ["60.00", "-", "184", "381", "5"],
  ["62.00", "-", "194", "391", "5"],
  ["63.00", "2-1/2", "194", "391", "5"],
  ["67.00", "-", "194", "391", "5"],
  ["71.00", "-", "203", "400", "5"],
  ["-", "3", "212", "409", "5"],
];

export function MachineReamerDimensions() {
  return <section id="machine-reamer-dimensions" className="section specifications"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">Machine reamer dimensions</p><h2>Long-flute dimensions<br /><em>by diameter.</em></h2></div><p>Catalog dimensions are shown in millimetres and inch equivalents where listed. Confirm the exact size, Morse taper and configuration against the drawing.</p></div>
    <div className="thread-forms-table-wrap"><table className="thread-forms-table"><caption>HSS long-flute machine reamer dimensions</caption><thead><tr><th scope="col">Diameter (mm)</th><th scope="col">Diameter (in)</th><th scope="col">Cutting-edge length (mm)</th><th scope="col">Overall length (mm)</th><th scope="col">Morse taper No.</th></tr></thead><tbody>{dimensions.map(([diameterMm, diameterIn, cuttingEdgeLength, overallLength, morseTaper]) => <tr key={`${diameterMm}-${diameterIn}`}><th scope="row">{diameterMm}</th><td>{diameterIn}</td><td>{cuttingEdgeLength}</td><td>{overallLength}</td><td>{morseTaper}</td></tr>)}</tbody></table></div>
    <div className="thread-standards-note"><h3>Catalog notes</h3><ul><li>The chart describes a virtually parallel cutting edge with a bevel lead integral with the Morse taper shank.</li><li>It specifies LH helical flutes for RH cutting unless otherwise specified.</li><li>The catalog states that reamers with m6 tolerance are expected to produce H8 holes.</li><li>Listed standards: IS 5445:1978, ISO 236/1:1976 and BS 328 Part 4:1983.</li></ul></div>
    <p className="thread-standards-copy">This chart is transcribed from the Addison-branded page supplied with this request. It is a dimensional reference, not confirmation that every size or configuration is stocked by Swastik Grand. Confirm tolerance, flute hand and availability in your quotation.</p>
  </div></section>;
}