import { ThreadFormsReference } from "@/components/thread-forms-reference";

const processRows = [
  ["Thread formation", "Cuts material away to form the thread profile.", "Plastically displaces compatible material to form the thread."],
  ["Chip behavior", "Produces chips that need suitable evacuation, especially in blind holes.", "The source describes chipless forming with no conventional cutting chips."],
  ["Workpiece", "Select tool geometry and grade for the material and cutting process.", "Requires sufficiently ductile material; suitability depends on its grade and hardness."],
  ["Pre-hole", "Use the specified tap-drill size for the thread and material.", "Pre-hole diameter is critical; confirm the forming-tap pre-hole for the exact thread and material."],
  ["Lubrication and hole type", "Use lubrication and chip handling suited to the cutting operation.", "The source describes lubrication grooves and use in blind or through holes, subject to tap design and setup."],
] as const;

export function ThreadFormingTapReference() {
  return <><ThreadFormsReference /><section id="forming-tap-process" className="thread-forms-section section"><div className="shell">
    <div className="section-heading"><div><p className="eyebrow">Thread forming reference</p><h2>Cutting or forming?<br /><em>Check the process.</em></h2></div><p>Thread-forming roll taps need a compatible material and a controlled pre-hole. Confirm the specific thread, workpiece and machine setup before selection.</p></div>
    <div className="thread-forms-table-wrap"><table className="thread-forms-table"><caption>Process considerations for internal threading</caption><thead><tr><th scope="col">Consideration</th><th scope="col">Cutting tap</th><th scope="col">Thread-forming roll tap</th></tr></thead><tbody>{processRows.map(([topic, cutting, forming]) => <tr key={topic}><th scope="row">{topic}</th><td>{cutting}</td><td>{forming}</td></tr>)}</tbody></table></div>
    <p className="thread-standards-copy">This comparison is a selection guide, not a pre-hole chart. Request the forming-tap pre-hole diameter and acceptance method for the exact thread, material and tolerance.</p>
  </div></section></>;
}