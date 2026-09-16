# Product Requirements Document — HSS Hand Tap Landing Page

**Company:** Swastik Grand Industries  
**Product brand:** SWAGIN  
**Document version:** 1.0  
**Date:** 16 September 2026  
**Status:** Complete design and implementation brief; technical claims and commercial terms require company approval before public launch.  
**Deliverable:** One responsive, enquiry-focused HSS Hand Tap landing page, reusable as a layout for other products with their own verified data.

## 1. Product vision

Build a professional industrial product page that helps a purchase manager or engineer understand the HSS hand tap, evaluate suitability, review specifications and photographs, and contact the manufacturer for a standard, bulk, export or custom-made requirement.

**Business USP:** Long-life, high-quality cutting tools at affordable prices, supported by practical industrial problem solving.

The page must explain the job the tool can perform and make the next buying step clear. It must not rely on repeated keywords or generic manufacturer claims.

### 1.1 Business objectives

- Generate qualified new-business enquiries for HSS hand taps.
- Attract relevant workshop, OEM, distributor and overseas sourcing enquiries.
- Capture sufficient technical context to prepare a useful quotation.
- Route production requirements to a more suitable tool family where a hand tap is not appropriate.
- Support the wider website objective of 3–5 qualified new-business calls per day. This is a target, not a forecast or guarantee.
- Treat one call per day across each of 15 products as a separate 15-call-per-day target.

### 1.2 Success measures

Count qualified enquiries and connected calls separately from button clicks. Measure product-page visits, quote starts, completed submissions where a backend exists, email/WhatsApp handoffs, new callers, enquiry quality and eventual quotations/orders. Establish a baseline before setting conversion-rate targets.

No design, keyword plan or PRD can guarantee first position in Google or a fixed daily call volume.

## 2. Scope and boundaries

### Required for this product page

- Company navigation, breadcrumb and product-specific metadata.
- Product title, subtitle, description and purchase summary.
- All 13 original product photographs, thumbnail selection and enlarged viewing.
- Full technical specification table and thread-family information.
- Taper, plug and bottoming lead options.
- Industrial uses, sector-specific applications and suitability notes.
- Features, quality information and Why Us.
- Factory introduction video and a truthful product-demonstration request route.
- Standard, bulk, export and custom enquiry paths.
- Buyer FAQs, related products and other category links.
- Responsive behaviour, accessibility, measurement hooks and launch checks.

### Outside this release

Checkout, online payments, live stock, guaranteed prices, automatic engineering recommendations, customer accounts, a distributor portal, translation and development of all other product pages. These require separate requirements.

Do not alter the existing homepage while implementing this page except for an approved link to the product. Do not publish or replace the production website as an incidental development action.

## 3. Evidence, source and claim policy

### Source page

[Existing HSS Hand Tap page](https://swastikgrand.com/hss-threading-taps/hand-taps/hss-hand-tap-manufacturers/)

The specification values and gallery below were captured from the source page during the earlier September 2026 review. They are not a fresh stock, price or certification verification. Review them with the company before public release.

### Evidence classification

| Content | Basis | Publication treatment |
|---|---|---|
| Material grades, hardness, size range and thread options | Previously captured product page | Present as listed range; confirm for selected configuration |
| Product photographs | Original source-page gallery | Use actual files, preserve correct captions and proportions |
| Company ISO certification | Company statement | Request current certificate; publish number, scope and dates only after checking it |
| Sector applications | Proposed application-led content | Label as examples; suitability depends on drawing, material and process |
| MOQ, prices, delivery and payment | Not confirmed for this product family | Quote on enquiry; do not invent values |
| Tool-life or cost-saving improvement | No comparative test supplied | No numerical improvement claims |
| Aerospace approval | No specific qualification supplied | No approved-supplier or blanket aerospace approval claim |
| Product working video | Not found on the captured product page | Offer a request; do not relabel a factory video as a cutting test |

**Product-range correction:** Do not advertise spiral flute taps as manufactured by SGI. The user has stated that the company does not make them. Keep any suggested alternative within confirmed manufacturing/supply capability.

## 4. Target buyers and user stories

| Buyer | Need | Required outcome |
|---|---|---|
| Purchase manager | Specifications, quantities and supplier information | Submit a quotation-ready requirement |
| Tool-room engineer | Correct thread, tolerance, lead and reach | Review details and send a drawing |
| Workshop owner | Practical manual threading solution | Call or WhatsApp with size and material |
| Fastener manufacturer | Suitable tool for nut production | Understand when a nut tap/machine tap is more appropriate |
| Distributor | Size-wise bulk or repeat requirements | Request commercial terms for confirmed quantities |
| Export buyer | Technical fit, destination and documents | Send a structured export enquiry |
| Custom-tool buyer | Non-standard geometry or thread | Request feasibility review, not automatic order acceptance |

Key stories:

- As an engineer, I can inspect each photo and understand the listed configuration options.
- As a buyer, I can quickly find specifications and contact the manufacturer without reading the entire page.
- As a sector-specific visitor, I can see relevant component examples and prefill my enquiry industry.
- As an overseas buyer, I can provide country and commercial requirements without assuming domestic terms.
- As a mobile user, I can call, use WhatsApp or request a quote without an obstructive popup.

## 5. URL, navigation and page structure

### URL decision

Prefer retaining the existing production URL where practical. The local Next.js pack currently implements `/products/hss-hand-taps/` as a proposed replacement route.

If the new path is adopted, configure a permanent redirect from the old URL to the approved new route. Maintain one canonical, indexable product page. Do not publish both versions as competing duplicates.

### Breadcrumb

Home → HSS Threading Taps → Hand Taps → HSS Threading Hand Tap

Every parent links to a real page. Mark the last item as the current page. Ensure structured breadcrumb data agrees with visible navigation and the final route strategy.

### Global navigation

Home | Products | Industrial Solutions | Custom Taps | About Us | Resources | Contact

Primary action: **Request a Quote**. Use working existing destinations or implemented local routes; never ship empty links.

### Required section sequence

1. Utility bar and company header.
2. Breadcrumb.
3. Photo gallery and product purchase summary.
4. In-page section navigation.
5. Product overview.
6. Features and benefits.
7. Technical specifications and thread families.
8. Lead/chamfer options.
9. Industries and applications.
10. Factory video and application-video request.
11. Quality and Why Swastik Grand.
12. Bulk, export and custom order options.
13. Enquiry form and direct contact.
14. Buyer FAQs.
15. Related products.
16. Other product categories.
17. Company footer and mobile contact bar.

## 6. Section requirements and proposed page copy

### PP-01 — Product hero

**Eyebrow:** HSS Hand Tap Manufacturer · Ludhiana, India  
**H1:** HSS Threading Hand Taps  
**Subtitle:** Precision threads. Longer tool life. Value that works for your business.

**Introductory description:**

Manufactured by Swastik Grand Industries in Ludhiana, India, SWAGIN HSS hand taps support controlled internal threading in suitable workpiece materials. Explore ground-thread options for tool rooms, workshops and component-threading requirements. Share your thread size, material, drawing and quantity for a standard, bulk, export or custom-made enquiry.

Show three compact facts:

- Material grades: M2 · M35 · M42.
- Listed size range: 6–100 mm.
- Listed hardness: 62–64 HRC.

Show short supporting points: ground-thread finish, custom specification enquiries, bulk-order enquiries and made in India.

**Primary CTA:** Request a Product Quote.  
**Direct CTA:** Call Manufacturer — +91 98880 38583.  
**Secondary actions:** Custom Made, Export Enquiry and WhatsApp.

Do not show a fabricated price, stock badge, review score, sales count or countdown. State that specifications and commercial terms are confirmed in the quotation.

### PP-02 — Product photo gallery

Use all 13 original product gallery files. Previous downloads obtained 1600 × 1600 originals; verify delivered file dimensions rather than assuming all thumbnails are high resolution.

| Gallery ID | Description / proposed accessible caption |
|---|---|
| 01 | HSS threading hand tap — main product view |
| 02 | Taper tap — 6-thread lead |
| 03 | Bottoming tap — 2-thread lead |
| 04 | Plug/intermediate tap — 4-thread lead |
| 05 | HSS threading tap — additional product view |
| 06 | High-speed steel hand tap — additional product view |
| 07 | HSS hand tap — additional product view |
| 08 | Fine-pitch hand tap |
| 09 | BSF thread hand tap |
| 10 | Coarse-pitch hand tap |
| 11 | BSW thread hand tap |
| 12 | UNC thread hand tap |
| 13 | UNF thread hand tap |

Requirements:

- Main image uses `object-fit: contain` and preserves the complete tool.
- Thumbnails are keyboard-operable buttons with a clear selected state.
- Clicking a thumbnail updates the image, caption and photograph counter.
- Enlarged view uses an accessible dialog with close, previous and next controls.
- Escape closes the dialog; focus returns to the triggering control.
- On phones, gallery controls remain usable without sideways page overflow.
- Give images accurate alt text; do not add claims that cannot be seen in the image.
- Serve responsive derivatives for thumbnails/main display; load full originals for enlargement as needed.
- A missing image must display an honest unavailable state; never silently substitute another product.
- Do not crop legitimate embedded brand marks or manufacture additional angles.

### PP-03 — Product overview

**Heading:** A dependable tool for controlled internal threading.

**Body:**

SWAGIN HSS hand taps cut internal threads in prepared holes using a suitable tap handle. Precision-ground threads and straight-flute options provide a practical approach to manual workshop threading, component preparation and selected maintenance jobs. The product family includes different grades, thread forms, tolerances and lead lengths. Correct selection depends on the material, its hardness, the hole type, required thread depth and the component drawing.

A hand tap is not automatically appropriate for every machine or high-volume production cycle. Invite the buyer to share the process so the team can review the correct tool family.

### PP-04 — Features and benefits

| Feature | Buyer-facing explanation |
|---|---|
| HSS grade options | Discuss M2, M35 or M42 according to application and material requirements. |
| Ground-thread finish | Supports controlled thread formation and dimensional requirements. |
| Straight-flute options | Listed 4- or 6-flute configurations; availability depends on selected size. |
| Lead options | Taper, plug and bottoming choices for different entry and depth requirements. |
| Thread-family range | Metric and imperial requirements can be discussed against the correct standard. |
| Coating options | Match the coating requirement to the material and process after technical review. |
| Manual control | Intended for suitable tap-handle operations; correct alignment and preparation matter. |
| Custom enquiries | Review non-standard sizes, lengths or drawing requirements for feasibility. |

Describe potential value without guaranteeing tool life, a burr-free result, zero breakage or a particular cost saving.

### PP-05 — Technical specification table

| Attribute | Previously published product-family information |
|---|---|
| Product | HSS Threading Hand Tap |
| Brand | SWAGIN |
| Manufacturer | Swastik Grand Industries |
| Material grades | M2 (HSS), M35 (HSS-E), M42 (HSS-ECO), using source terminology |
| Hardness | 62–64 HRC |
| Listed size range | 6 mm to 100 mm |
| Finish | Ground thread |
| Thread forms | 60° and 55° |
| Tolerance options | 6H, 6G, 7H, Z-3, Z-4 or required gauge |
| Flutes | Straight flutes; 4-flute or 6-flute options |
| Lead/chamfer | 2-thread, 4-thread or 6-thread lead |
| Coating names as listed | Golden TiN, Futura and Alcoran |
| Dimensional references as listed | IS 6175 Part 2:1992; IS 6175 Part 4:1991; BS 949 Part 2:1979, Class 2 / Zone 3 |
| Country of origin | India |

Visible note: “Product-family information. Confirm size-specific dimensions, grade, coating, tolerance, applicable reference and availability in your quotation.”

These listed references must not be described as independently verified compliance or the latest edition. Have the technical team verify coating spelling/composition and the applicable standard for each configuration. Thread angles and tolerances are not universal across every listed thread family.

Do not copy a related tap-set price or another product’s MOQ into this table. Add an approved size chart later with diameter, pitch/TPI, overall length, thread length, shank diameter, square size and lead type for each actual variant.

### PP-06 — Thread families and lead options

| Group | Listed thread options |
|---|---|
| Metric | Coarse pitch; fine pitch |
| British | BSW, BSF, BA, BSCY, BSB |
| Unified | UNC, UNF |
| Pipe/fitting | BSP, BSPT, NPT, NPS, NPSF, NGT, NPTF, NPSI, NPSM |

Show these as enquiry options, not a live inventory claim. Request the exact component drawing where thread designation is ambiguous.

| Lead type | Listed lead | Proposed explanation |
|---|---|---|
| Taper | 6 threads | Longer entry lead for progressively starting the thread. |
| Plug/intermediate | 4 threads | Intermediate lead for continuing a tapping operation. |
| Bottoming | 2 threads | Shorter lead for finishing nearer the bottom of a prepared blind hole. |

Use the corresponding original photographs. Do not imply a bottoming tap reaches the absolute base of a hole or that a three-piece set is included with every individual-tap enquiry.

## 7. Industry-specific application content

**Section heading:** Your component. Your industry. The right tap.

Introduce these as application examples requiring technical review, not proof of existing customers in every sector.

| Sector | Component/use examples | Selection limitation | Details to request |
|---|---|---|---|
| Nuts and fasteners | Internal threads in nuts and internally threaded components | Hand taps may suit samples or selected small-batch work; review dedicated nut/machine taps for volume production. Taps do not cut external bolt threads. | Material, thread, tolerance, machine and production quantity |
| Tool rooms, dies and moulds | Jigs, fixtures, die plates and tooling accessories | Material hardness, access and blind-hole clearance determine suitability. | Drawing, material hardness, depth and reach |
| Bicycle and cycle parts | Brackets, fixtures and selected component assemblies | Do not assume every cycle component uses a normal metric thread; confirm handedness and special pitches. | Standard/BSCY requirement, RH/LH, drawing and quantity |
| Automotive and auto parts | Brackets, housings, fixtures and repair components | Distinguish manual work from repeated machine production. | Material, hole type, tolerance and batch size |
| General engineering and fabrication | Machine components, assemblies and workshop fixtures | Select geometry and preparation for the actual material and thread depth. | Diameter, pitch, material and component thickness |
| Pumps, valves and fittings | Mounting holes, threaded ports and suitable fitting components | Confirm parallel/taper thread and sealing requirements; no automatic leak-free guarantee. | Port drawing, thread standard and acceptance criteria |
| Agricultural machinery | Brackets, replacement components and machinery fixtures | Review access, material and repair condition. | Component details, thread condition and quantity |
| Aircraft, aerospace and space | Drawing-led fixtures, prototypes and qualified manufacturing-process enquiries | No blanket aerospace approval. Buyer qualification, material, traceability and inspection requirements must be reviewed. | Drawing revision, standard, inspection and approval requirements |
| Maintenance and repair | Replacement-part preparation and damaged-thread assessment | A cutting tap cannot restore missing thread material; an insert system may be required. | Damage photos, original thread, material and repair goal |

Every card includes **Discuss This Application**. The action selects the sector in the enquiry form and scrolls to the form. It must not discard existing buyer-entered details. Provide relevant verified category links when a nut tap, machine tap, die or thread-repair tool is the better route.

## 8. Videos and technical support

### Factory introduction

The previously identified company video is [From steel to threads — factory introduction](https://www.youtube.com/watch?v=BHTs56TPKFg), linked from the company About page.

- Verify availability and embedding before release.
- Use a click-to-load player with an accessible title.
- Do not autoplay on page load.
- Provide a direct YouTube fallback.
- Label it “Factory Introduction”; do not present it as a hand-tap performance test.

### Product working demonstration

The source product page did not provide a verified hand-tapping demonstration in the earlier capture. Until one is supplied, display **Request a Working Video for Your Application**.

A future working video should identify the tap size/grade, workpiece material, hole type, operation, lubrication where relevant, and inspection/result. Technical instructions and safety guidance require engineer review. Do not invent machining parameters or claim performance from an unrelated video.

## 9. Quality and Why Us

**Heading:** Quality in the tool. Confidence in the partner.

Proposed supporting points:

1. Application-led discussion with the manufacturer.
2. Listed material-grade and hardness options.
3. Ground-thread finish and required tolerance review.
4. Standard, bulk, export and drawing-led custom enquiries.
5. Clear quotation confirming specification and commercial terms.

### ISO and inspection evidence

- Request the actual current certificate before displaying its standard, number, scope, issuing body or validity.
- Company management-system certification does not establish approval of every tool or every aerospace application.
- Show a real certificate download only when the approved file exists; otherwise use a request action.
- Describe inspection equipment, records or batch tests only with company confirmation.
- Publish customer logos, testimonials and case studies only with factual support and permission.

**CTA:** Request ISO Certificate & Company Profile.

## 10. Commercial order paths

| Mode | Buyer intent | Information emphasis | CTA |
|---|---|---|---|
| Standard enquiry | Specify one known tool | Size, pitch, material, quantity | Get Product Quote |
| Bulk order | Multiple sizes, volume or repeat buying | Size-wise quantities, grades, frequency and required date | Request Bulk Quotation |
| Export enquiry | Overseas purchasing | Destination, documents, quantity and delivery terms | Discuss Export Order |
| Custom made | Non-standard dimensions or requirements | Drawing, revision, length, tolerance and process | Request Custom Tap Review |

No universal MOQ, price, freight, tax, lead time or payment promise is published without approval. A custom enquiry requests feasibility and quotation; it is not automatic acceptance of an order.

## 11. Enquiry form specification

### Fields

| Field | Requirement | Behaviour |
|---|---|---|
| Product | Fixed context | HSS Threading Hand Tap; included in handoff/backend record |
| Enquiry mode | Required | Standard, bulk, export or custom; CTA can preselect it |
| Industry/application | Optional | Sector CTA prefills; editable |
| Name | Required | Trim whitespace; preserve valid international names |
| Company | Required for bulk/export/custom | Optional for a standard workshop enquiry |
| Email | Required | Validate format, not existence claims |
| Phone/WhatsApp | Required | Support country code and international formatting |
| Thread size and pitch/TPI | Required | Text entry; metric and imperial accepted |
| Quantity | Required | Positive number or attached size-wise requirement list |
| Workpiece material/hardness | Optional at first contact | Needed before a firm technical recommendation |
| Destination country | Required for export | City/port optional until shipping review |
| Hole type and thread depth | Recommended | Blind/through/not sure; depth with units |
| Overall length | Recommended for custom | Include units |
| RH/LH direction | Recommended for custom | Do not infer a special thread direction |
| Tolerance/standard | Optional | Allow “Please recommend” |
| Grade/coating | Optional | Allow recommendation request |
| Required date | Optional | Not a delivery commitment |
| Additional requirements | Optional | Drawing revision, inspection, packaging or other notes |
| Drawing/photo | Optional; recommended for custom | Only offer upload if the upload service is implemented |

### Interaction states

- Initial, focused, invalid, preparing/submitting, success, failure and retry.
- Inline validation identifies the field and gives a specific correction.
- Preserve all entered details when changing enquiry mode; hide irrelevant fields without losing user input.
- Changing sector updates industry context without erasing the form.
- Quantity/size fields cannot silently convert imperial values to metric.
- Mobile keyboard and focus order must be appropriate.

### Prototype handoff mode

The existing design prepares an email or WhatsApp message. Buttons must say **Prepare Email Enquiry** or **Open WhatsApp Enquiry**. Explain that the buyer reviews and sends in the external application.

Never display “Submitted successfully” merely because a draft was opened. Provide a readable/copyable message and direct contact fallback when an external app cannot open. Drawings are attached in the email application unless a real upload feature exists.

### Production backend mode

Implement only after the company selects an inbox/CRM and hosting-compatible delivery service.

- Validate server-side as well as client-side.
- Store or accept the enquiry durably before showing success.
- Track delivery state separately from lead acceptance; expose an operational retry path.
- Use an idempotency key or equivalent to avoid repeated leads on retries.
- Add sensible abuse protection and rate limiting without blocking normal buyers.
- Never put delivery credentials in browser code.
- Do not send test enquiries to real recipients without authorization.
- If accepting drawings, initially support PDF/JPG/PNG with an agreed size limit, validate file type, restrict access and define retention. CAD support is a separate requirement.
- Include a privacy notice explaining enquiry use. Do not automatically enrol buyers in marketing.

## 12. Buyer FAQ content

1. **What is an HSS hand tap used for?** Creating internal threads in prepared holes during suitable manual threading operations.
2. **What details are needed for a quote?** Thread size/pitch, quantity, material, tolerance, hole type, depth and any special dimensions or coating.
3. **Which material grade should I choose?** Share application details; grade selection needs review rather than a universal recommendation.
4. **Can it be used for volume nut production?** Not automatically. A dedicated nut tap or machine tap may be more appropriate.
5. **Can you review cycle or auto-component threads?** Yes, on the exact drawing, standard, pitch, direction and material.
6. **Can you review custom lengths and special sizes?** Submit a drawing for feasibility and quotation.
7. **What are the price, MOQ and lead time?** Confirm them in a current quotation for the selected configuration.
8. **Can export buyers enquire?** Yes; include destination, documents, quantities and delivery requirements.
9. **Are these automatically aerospace-approved?** No blanket approval is claimed; specific qualification must be reviewed.
10. **Can I request a working video or inspection documents?** Specify the application and documentation needed; availability is confirmed by the company.

Use an accessible accordion or readable expanded content. FAQ content is for buyers; do not promise Google FAQ rich results.

## 13. Related products and category links

Prioritise three or four relevant, currently offered products, for example:

- HSS Hand Tap Set — 3 Pieces.
- Ground Thread Tap.
- Confirmed Spiral Point Tap offering.
- BS Conduit Hand Tap, where relevant to the active range.

The previous source-page related list included UNC Hand Tap. Verify whether it remains an active website product before featuring it prominently; earlier removal instructions concerned the catalogue. Do not assume that a category label proves current availability.

Other category links may include confirmed Hand Taps, Machine Taps, Nut Taps, Threading Dies/Rolls, HSS Drills, HSS Tool Bits and Tangential Chasers. Use original images and actual destinations; no blank placeholders. Do not add spiral flute manufacturing claims.

## 14. Contact content

Previously published details, to be reconfirmed before public launch:

- **Company:** Swastik Grand Industries.
- **Phone/WhatsApp:** +91 98880 38583.
- **Email:** info@swastikgrand.com.
- **Address:** #1916, Street No. 36, Janta Nagar, Ludhiana, Punjab, India – 141003.

Use real `tel:`, email and WhatsApp actions. Do not claim 24/7 availability, instant response or a fixed quotation turnaround without company approval.

## 15. Visual system and mockup fidelity

### Art direction

Professional industrial product catalogue with clear purchase actions. Use the established navy/white/yellow direction, strong typographic hierarchy, restrained borders and genuine tool photography.

| Token | Proposed baseline |
|---|---|
| Main navy | `#14263B` |
| White | `#FFFFFF` |
| Light surface | `#F3F5F7` |
| Primary yellow | `#F8C52F` |
| Primary text | `#18283B` |
| Secondary text | `#657387` |
| Border | `#DFE5EC` |
| Main content width | Up to 1400 px; responsive side gutters |
| Main body | 16–18 px with approximately 1.7 line height |
| Desktop product H1 | Approximately 48–64 px |
| Mobile product H1 | Approximately 36–46 px |
| Standard labels | Prefer at least 14 px; smaller text only for secondary metadata |
| Primary controls | Comfortable touch size; aim for at least 44 px height |

These values are baseline design requirements, not proof of an exact mockup match.

### Font and style mismatch requirement

The user reported that fonts/styles did not match the mockup. A reference screenshot identifying the intended typography has not been supplied in the visible exchange. Therefore:

1. Do not claim exact matching or guess the reference font.
2. Obtain the target mockup, matching viewport dimensions and approved font files/name for final visual sign-off.
3. Until then, preserve the current project’s Arial/Helvetica sans-serif baseline consistently; changing to an arbitrary premium font is not an approved fix.
4. Use one controlled font setup across headings, paragraphs, tables, buttons and forms.
5. Verify loaded font, weight availability, fallback behaviour, font synthesis, letter spacing and line height.
6. Check Tailwind reset effects and global stylesheet leakage between homepage and product route.
7. Keep page-specific styles scoped or modular. Avoid generic global rules that change unrelated pages.
8. Compare the same viewport, zoom and loaded state. Review both direct page load and client navigation.

### Layout

Desktop: two-column hero, gallery left and product/quote summary right. Below it, a readable full-width section sequence with a technical table and thread panel. Use two or three columns for sector cards where text remains readable.

Mobile: single-column hero, accessible photo selection, readable specification rows, compact section navigation and persistent call/WhatsApp/quote actions. The fixed contact bar must not cover content, form errors, dialog controls or the footer.

Test widths: 360, 390, 768, 1024, 1440 and 1920 px, plus 200% text zoom. Respect reduced-motion settings. Do not use oversized text that clips product names.

## 16. SEO and content architecture requirements

**Proposed title:** HSS Hand Tap Manufacturer in India | Swastik Grand Industries  
**Proposed description:** SWAGIN HSS hand taps from Ludhiana: M2, M35 and M42 options. Discuss tool-room and component-threading requirements for bulk, export or custom orders.

Primary topic: HSS hand taps and manufacturer enquiries. Supporting intent: technical specifications, custom taps, bulk hand taps, export enquiries and sector-specific threading needs. These are topic candidates, not measured search-volume findings.

Requirements:

- One descriptive H1 and logically nested headings.
- Server-render core product content and crawlable links.
- Use natural product/application language; no hidden keywords or repetitive city lists.
- Add truthful Product, Organization and Breadcrumb data reflecting visible content and the final URL.
- Never invent price, availability, review ratings or offers to fill structured-data fields.
- Include Video metadata only when the video information is verified and eligible for the intended implementation.
- Use descriptive image filenames/alt text and responsive images.
- Keep one canonical product URL with a tested redirect strategy if the old path changes.
- Add only approved public canonical pages to the XML sitemap.
- Keep preview/staging pages noindex and access-controlled as appropriate. Do not accidentally carry staging noindex into public launch.
- Verify robots, response status, canonical, rendered content and indexing through the production release process.
- Build separate sector pages only when they have substantial distinct content and evidence. Do not create every product × city × industry combination.

The private design URL is a review surface, not the public swastikgrand.com SEO deployment. Search Console, analytics and a live-domain migration are separate integrations.

## 17. Technical implementation specification

Use the existing Next.js App Router, TypeScript and Tailwind project. Preserve its package manager and lockfile. This document does not require upgrading dependencies.

Suggested reusable components:

- ProductBreadcrumbs.
- ProductGallery and ProductImageDialog.
- ProductSummary and QuoteActions.
- ProductSectionNavigation.
- SpecificationTable and ThreadFamilyPanel.
- LeadOptionCards.
- IndustryApplicationGrid.
- ProductVideoSection.
- QualityEvidenceSection.
- OrderModeSelector and ProductEnquiryForm.
- BuyerFAQ.
- RelatedProductGrid and CategoryLinks.
- MobileContactBar.

Keep content separate from presentation. Reuse the layout for future products, but never carry hand-tap specifications into another tool type by default.

### Minimum content model

```ts
type EnquiryMode = 'standard' | 'bulk' | 'export' | 'custom';

type ProductPhoto = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  sourceUrl: string;
};

type IndustryApplication = {
  id: string;
  name: string;
  componentExamples: string;
  suitabilityNotes: string;
  enquiryDetails: string[];
  relatedCategory?: { label: string; href: string };
};

type ProductPageData = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string[];
  sourceUrl: string;
  specificationReviewedAt?: string;
  photos: ProductPhoto[];
  specifications: { label: string; value: string }[];
  threadFamilies: { name: string; options: string[] }[];
  industries: IndustryApplication[];
  faqs: { question: string; answer: string }[];
  relatedProducts: { title: string; href: string; image: string }[];
  enquiryModes: EnquiryMode[];
  seo: { title: string; description: string; canonical: string };
};
```

Centralise company contacts and environment-dependent site origin. Keep SEO-critical content available in the initial HTML. Restrict client-side state to gallery, modal, form, accordion and video interactions as needed. Keep external video loading deferred and asset dimensions explicit to reduce layout shift.

## 18. Measurement plan

| Event | Meaning | Must not be interpreted as |
|---|---|---|
| `product_view` | Product page viewed | A sales lead |
| `phone_click` | Call link activated | A connected or qualified call |
| `whatsapp_click` | WhatsApp handoff requested | A sent message |
| `quote_start` | Buyer begins quote flow | Submitted enquiry |
| `industry_enquiry_start` | Industry CTA selected | Proof of that industry being a customer |
| `email_draft_open` | Email handoff requested | Delivered email |
| `enquiry_submit_success` | Backend accepted a real enquiry | Won business |
| `enquiry_submit_error` | Backend failed to accept the enquiry | Buyer rejection |
| `video_play` | Video started | Product suitability confirmation |
| `document_download` | Approved resource downloaded | Qualified lead |

Use a stable product identifier and approved categorical metadata. Do not send names, phone numbers, email addresses, free-text requirements or drawing contents to analytics. Prevent duplicate event firing.

A sales log should record received calls/enquiries, new versus existing buyer, product, known source, qualification, quotation and order outcome. Analytics, CRM and actual call tracking are not connected merely by adding event hooks.

## 19. Acceptance criteria

| ID | Required result |
|---|---|
| AC-01 | Correct product, brand, company and direct enquiry are clear above the fold. |
| AC-02 | All 13 original gallery photos load; captions and controls select the correct image. |
| AC-03 | Enlarged gallery supports keyboard use, close and focus return. |
| AC-04 | Published range/specification information is faithfully reproduced with configuration caveats. |
| AC-05 | Three lead options use the correct photographs and descriptions. |
| AC-06 | Nine sectors have distinct examples, selection limits and enquiry requirements. |
| AC-07 | Sector CTA prefills industry and preserves other form input. |
| AC-08 | Standard, bulk, export and custom routes set the correct enquiry context. |
| AC-09 | Invalid fields are explained; export requests require country; custom information retains units. |
| AC-10 | Prototype handoff is clearly labelled; no false sent/submitted confirmation appears. |
| AC-11 | If a backend is implemented, success follows actual acceptance; errors are retryable and data is retained. |
| AC-12 | Phone, WhatsApp, email, related-product and category links are valid. |
| AC-13 | Factory video is accurately labelled and has a working external fallback. |
| AC-14 | ISO and aerospace language matches available evidence; no fabricated ratings or test results appear. |
| AC-15 | No claim that SGI manufactures spiral flute taps appears. |
| AC-16 | No mobile overflow or obstructed controls; 200% text zoom remains usable. |
| AC-17 | Font and CSS behave consistently on direct load and navigation from the homepage. |
| AC-18 | Exact mockup matching is signed off only against a supplied reference and approved font. |
| AC-19 | TypeScript and production build pass; critical interactive flows are checked. |
| AC-20 | Production canonical, redirect, structured data, sitemap and indexing rules are reviewed. |
| AC-21 | Analytics intent events are distinguished from actual qualified calls. |
| AC-22 | No live-domain change occurs without a launch instruction. |

## 20. Implementation sequence

1. **Audit existing project:** read its instructions, current routes, dependencies, shared styles and product data. Preserve completed work.
2. **Confirm content model:** populate source specifications and photo mapping; mark verification items.
3. **Implement visual foundation:** shared tokens, controlled font setup, responsive hero and breadcrumbs.
4. **Complete gallery and product details:** all photos, specs, thread families and lead options.
5. **Add industry and trust content:** sector-specific examples, limits, video, quality and FAQs.
6. **Connect enquiry handoffs:** mode selection, sector prefill, validation and clear external-app messages.
7. **Add backend only if configured:** real accepted-lead state, secure upload and delivery handling.
8. **Complete technical SEO and measurement:** metadata, canonical, structured data and intent events.
9. **Verify:** build, typecheck, responsive/keyboard review, photo mapping and lead-path behaviour.
10. **Prepare launch:** approved content, actual documents, redirect map, indexability review and explicit publishing instruction.

## 21. Inputs still needed for final public release

| Input | Why it is needed | Interim treatment |
|---|---|---|
| Target mockup and approved font | Resolve reported font/style mismatch | Preserve current baseline; do not claim exact match |
| Approved SGI/SWAGIN logos | Final corporate identity | Use existing approved assets only |
| Current ISO certificate | Accurate scope and validity | Request-document CTA |
| Approved size chart | Size-specific dimensions | Listed family specification plus enquiry |
| Current pricing/MOQ/lead time | Commercial accuracy | Quote on request |
| Product working video | Real application evidence | Factory video plus demonstration request |
| Confirmed active related products | Accurate cross-selling | Verified existing destinations only |
| Backend/CRM decision | Actual lead submission | Email/WhatsApp handoff |
| Upload/retention policy | Handle drawings appropriately | Email attachment instructions |
| Performance case studies | Support tool-life/value claims | Qualitative positioning only |
| Production URL decision | Avoid duplicate pages or lost links | Retain staging and a documented migration plan |

## 22. Ready-to-use implementation prompt

```text
Implement the HSS Hand Tap product page according to this PRD in the existing
Swastik Grand Next.js/TypeScript/Tailwind project. Read project instructions
first. Preserve the homepage and completed product work.

Use all 13 original product photos and verified product-family specifications.
Include breadcrumbs, industry-specific content, quality, factory video,
FAQs, related products, category links and standard/bulk/export/custom enquiries.
Do not advertise spiral flute manufacturing or invent certification, prices,
MOQs, delivery times, customer proof or performance results.

Keep enquiry wording accurate to its actual backend or email/WhatsApp handoff.
Preserve buyer input when switching sector or order type. Scope styles to
prevent homepage/product font conflicts. Do not claim mockup matching unless
an actual reference and approved font have been provided.

Run typecheck and production build. Verify gallery, keyboard behaviour,
responsive layouts, form states and links. Report any remaining evidence or
integration gaps. Keep staging noindex and do not replace the live website
without a launch instruction.
```

## 23. Reference links

- [Original HSS Hand Tap page](https://swastikgrand.com/hss-threading-taps/hand-taps/hss-hand-tap-manufacturers/)
- [Company website](https://swastikgrand.com/)
- [Product catalogue](https://swastikgrand.com/our-products/)
- [Company About page](https://swastikgrand.com/about/)
- [Factory introduction video](https://www.youtube.com/watch?v=BHTs56TPKFg)

This PRD defines requirements and proposed copy. It does not assert that every feature, verification, integration or launch task has already been completed.
