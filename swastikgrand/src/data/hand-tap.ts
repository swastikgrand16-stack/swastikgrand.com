export const handTapGallery = [
  { src: "/images/products/hss-hand-tap-gallery-01.jpg", alt: "SWAGIN HSS threading hand tap, main product view", label: "Main product view", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Threading-Hand-Tap.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-02-taper.jpg", alt: "SWAGIN HSS hand tap with a six-thread taper lead", label: "Taper tap - 6-thread lead", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Thread-Hand-Tap-Taper-Tap-Rougher-6-Thread-Taper.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-03-bottoming.jpg", alt: "SWAGIN HSS hand tap with a two-thread bottoming lead", label: "Bottoming tap - 2-thread lead", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Threading-Hand-Tap-Bottom-Tap-or-Bottoming-Tap-2-Thread-Taper.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-04-plug.jpg", alt: "SWAGIN HSS hand tap with a four-thread plug lead", label: "Plug tap - 4-thread lead", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Threading-Hand-Tap-Plug-Tap-Intermediate-4-Thread-Taper.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-05.jpg", alt: "SWAGIN HSS threading hand tap, alternate product view 1", label: "HSS threading hand tap - alternate product view 1", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Threading-Hand-Tap-1.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-06.jpg", alt: "SWAGIN HSS threading hand tap, alternate product view 2", label: "HSS threading hand tap - alternate product view 2", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/High-Speed-Steel-Threading-Hand-Tap.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-07.jpg", alt: "SWAGIN HSS threading tap, alternate product view 3", label: "HSS threading hand tap - alternate product view 3", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Threading-Tap.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-08-fine-pitch.jpg", alt: "SWAGIN HSS fine-pitch thread hand tap", label: "Fine-pitch hand tap", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Fine-Pitch-Thread-Hand-Tap.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-09-bsf.jpg", alt: "SWAGIN HSS BSF thread hand tap", label: "BSF thread hand tap", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/BSF-Foam-HSS-Hand-Threading-Tap.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-10-coarse-pitch.jpg", alt: "SWAGIN HSS coarse-pitch thread hand tap", label: "Coarse-pitch hand tap", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Hand-Threading-Tap-Coarse-Pitch.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-11-bsw.jpg", alt: "SWAGIN HSS BSW thread hand tap", label: "BSW thread hand tap", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Threading-Hand-Tap-BSW-Foam.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-12-unc.jpg", alt: "SWAGIN HSS UNC thread hand tap", label: "UNC thread hand tap", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/UNC-Foam-HSS-Threading-Tap-Hand.jpg" },
  { src: "/images/products/hss-hand-tap-gallery-13-unf.jpg", alt: "SWAGIN HSS UNF thread hand tap", label: "UNF thread hand tap", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/UNF-Foam-HSS-Hand-Threading-Tap.jpg" },
];

export const handTapSpecs: [string, string][] = [
  ["Product", "HSS Threading Hand Tap"],
  ["Brand", "SWAGIN"],
  ["Manufacturer", "Swastik Grand Industries"],
  ["Country of origin", "India"],
  ["Material grades", "M2 (HSS), M35 (HSS-E), M42 (HSS-ECO)"],
  ["Hardness", "62–64 HRC"],
  ["Manufacturing range", "3 mm to 100 mm, 1/8\" to 4\""],
  ["Dimensions", "Confirm with manufacturer"],
  ["Finish", "Ground thread"],
  ["Thread forms", "60° and 55°"],
  ["Tolerance", "6H, 6G, 7H, Z-3, Z-4 or required gauge"],
  ["Flutes", "Straight flutes; 4-flute or 6-flute options"],
  ["Lead / chamfer", "2-thread, 4-thread or 6-thread lead"],
  ["Coatings", "TiN coating"],
  ["Applicable standards", "IS 6175 Part 2: 1992, IS 6175 Part 4: 1991 and BS 949 Part 2: 1979"],
];

export const handTapThreadFamilies = [
  ["Metric", "Coarse pitch · Fine pitch"],
  ["British", "BSW · BSF · BA · BSCY · BSB"],
  ["Unified", "UNC · UNF"],
  ["Pipe and fitting", "BSP · BSPT · NPT · NPS · NPSF · NGT · NPTF · NPSI · NPSM"],
];

type HandTapIndustry = [string, string, string, string?, string?, string?, string?];

export const handTapIndustries: HandTapIndustry[] = [
  ["Nuts and fasteners", "Internal threads in nuts and internally threaded components. Review a dedicated nut or machine tap for volume production.", "/images/fasteners-assortment.jpg", "Herusutimbul", "https://commons.wikimedia.org/wiki/File:Aneka_Macam_Mur_dan_Baut.jpg", "https://creativecommons.org/licenses/by-sa/4.0/", "CC BY-SA 4.0"],
  ["Tool rooms, dies and moulds", "Jigs, fixtures, die plates and tooling accessories where hardness, access and blind-hole clearance are suitable.", "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=85"],
  ["Bicycle and cycle parts", "Selected brackets and assemblies. Confirm special pitches, handedness and the exact component drawing.", "/images/bicycle-parts.jpg", "Russ from Grosse Pointe Park", "https://commons.wikimedia.org/wiki/File:Bicycle_parts.jpg", "https://creativecommons.org/licenses/by/2.0/", "CC BY 2.0"],
  ["Automotive and auto parts", "Brackets, housings, fixtures and repair components. Distinguish manual work from repeated machine production.", "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=85"],
  ["General engineering", "Machine components, assemblies and workshop fixtures matched to the material and thread depth.", "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=900&q=85"],
  ["Pumps, valves and fittings", "Mounting holes and threaded ports where parallel, taper and sealing requirements are confirmed.", "/images/centrifugal-pump.jpg", "Saud", "https://commons.wikimedia.org/wiki/File:Centrifugal_Pump.jpg", "https://creativecommons.org/licenses/by-sa/4.0/", "CC BY-SA 4.0"],
  ["Agricultural machinery", "Brackets, replacement components and machinery fixtures selected for the access and repair condition.", "/images/tractor-ploughing.jpg", "Bidemi Bernice", "https://commons.wikimedia.org/wiki/File:A_tractor_ploughing_a_farm_site.jpg", "https://creativecommons.org/publicdomain/zero/1.0/", "CC0 1.0"],
  ["Maintenance and repair", "Replacement-part preparation and damaged-thread assessment. An insert may be needed where material is missing.", "/images/mechanic-repairing-suspension.jpg", "Shixart1985", "https://commons.wikimedia.org/wiki/File:Car_mechanic_worker_repairing_suspension_with_drill_in_garage.jpg", "https://creativecommons.org/licenses/by/2.0/", "CC BY 2.0"],
  ["Aircraft, aerospace and space", "Drawing-led fixtures and qualified manufacturing-process enquiries. No blanket aerospace approval is claimed.", "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85"],
  ["Electrical and electronics industries using HSS taps", "Enclosures, panels, motor assemblies and electrical hardware where thread size, material and insulation constraints are reviewed.", "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=85"],
];

export const handTapFaqs = [
  ["What is an HSS hand tap used for?", "Creating internal threads in prepared holes during suitable manual threading operations."],
  ["What details are needed for a quote?", "Thread size and pitch, quantity, material, tolerance, hole type, depth and any special dimensions or coating."],
  ["Which material grade should I choose?", "Share the application details first. Grade selection needs review rather than a universal recommendation."],
  ["Can it be used for volume nut production?", "Not automatically. A dedicated nut tap or machine tap may be more appropriate for repeated production."],
  ["Can you review custom lengths and special sizes?", "Yes. Submit a drawing or clear specification for feasibility and quotation."],
  ["What are the price, MOQ and lead time?", "These are confirmed in a current quotation for the selected configuration."],
  ["Can export buyers enquire?", "Yes. Include destination, documents, quantities and delivery requirements."],
  ["Are these automatically aerospace-approved?", "No blanket approval is claimed. Specific qualification, traceability and inspection requirements must be reviewed."],
];

export const handTapSetGallery = [
  { src: "/images/products/hss-hand-tap-set.jpg", alt: "SWAGIN HSS hand tap set with three pieces", label: "Three-piece HSS hand tap set", width: 1600, height: 1600, sourceUrl: "https://swastikgrand.com/wp-content/uploads/2024/04/HSS-Tap-Set.jpg" },
];

export const handTapSetSpecs = [
  ["Product", "HSS Hand Tap Set - 3 Pieces"],
  ["Set contents", "Taper tap, plug / intermediate tap and bottoming tap"],
  ["Brand", "SWAGIN"],
  ["Manufacturer", "Swastik Grand Industries"],
  ["Material grades", "M2 (HSS), M35 (HSS-E), M42 (HSS-ECO)"],
  ["Hardness", "62-64 HRC"],
  ["Listed size range", "6 mm to 100 mm"],
  ["Finish", "Ground thread"],
  ["Standards listed", "IS 6175 Part 2: 1992, IS 6175 Part 4: 1991 and BS 949 Part 2: 1979"],
  ["Thread forms", "60 degrees and 55 degrees"],
  ["Tolerance options", "6H, 6G, 7H, Z-3, Z-4 or required gauge"],
  ["Flutes", "Straight flutes; 4-flute or 6-flute options"],
  ["Lead / chamfer", "2-thread, 4-thread or 6-thread lead"],
  ["Country of origin", "India"],
];

export const handTapSetFaqs = [
  ["What is included in the HSS hand tap set?", "Each set includes a taper tap, plug or intermediate tap and bottoming tap."],
  ["What details are needed for a quote?", "Share thread size and pitch, quantity, material, tolerance, hole type, depth and any special requirement."],
  ["Which material grades are listed?", "The source product page lists M2, M35 and M42 options. Confirm the selected grade for the application."],
  ["Can the set be used for volume nut production?", "Not automatically. A dedicated nut tap or machine tap may be more suitable for repeated production."],
  ["Do you accept bulk and export enquiries?", "Yes. Include size-wise quantities, destination, documents and delivery requirements."],
  ["What are the price, MOQ and lead time?", "These are confirmed in a current quotation for the selected configuration."],
  ["Can you review custom sizes or lengths?", "Yes. Submit a drawing or clear specification for feasibility and quotation."],
];