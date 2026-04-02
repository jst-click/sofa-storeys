export type ServiceSlug =
  | 'recliner-repair'
  | 'foam-replacement'
  | 'upholstery'
  | 'sofa-renovation'
  | 'custom-sofa-design'

export type ServiceRecord = {
  slug: ServiceSlug
  title: string
  shortDescription: string
  metaTitle: string
  heroImage: string
  heroImageAlt: string
  gallery: { src: string; alt: string }[]
  intro: string
  body: string[]
  highlights: string[]
  process: { step: string; detail: string }[]
}

export const SERVICES: ServiceRecord[] = [
  {
    slug: 'recliner-repair',
    title: 'Recliner Repair',
    shortDescription:
      'Mechanisms, frames, and quiet motion — restored to like-new comfort.',
    metaTitle: 'Recliner Repair | Sofa Storys',
    heroImage:
      'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Sofa_LS/WRCLSGRN1LRDF_LS_1.jpg?tr=w-3840',
    heroImageAlt: 'Green leather recliner-style sofa in a living room',
    gallery: [
      {
        src: 'https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/Sofa_LS/WRCLSGRN1LRDF_LS_1.jpg?tr=w-3840',
        alt: 'Green leather recliner-style sofa — detail view',
      },
      {
        src: 'https://images.unsplash.com/photo-1623353283172-2518d7e6f5ab?auto=format&fit=crop&w=1200&q=82',
        alt: 'Plush grey recliner armchair beside a wall',
      },
    ],
    intro:
      'A tired recliner does not mean the end of the story. We diagnose mechanisms, motors, and frames with the same care we bring to new builds — so your favourite seat moves smoothly again.',
    body: [
      'Whether the footrest drifts, the back resists, or the motion sounds off, our team strips the problem to its source. We source OEM-grade parts where possible and machine custom fixes when your piece deserves a bespoke solution.',
      'Every repair is tested for balance, noise, and longevity before it leaves our bench. The goal is simple: recline like day one, without compromise.',
    ],
    highlights: [
      'Motor & linkage inspection',
      'Frame stress checks & reinforcement',
      'Noise-free motion calibration',
      'Protective finish touch-ups on metal trims',
    ],
    process: [
      { step: 'Assessment', detail: 'On-site photos or showroom visit to map symptoms and mechanism type.' },
      { step: 'Quote', detail: 'Transparent parts + labour estimate — no hidden fees.' },
      { step: 'Rebuild', detail: 'Precision rebuild, lubrication, and safety testing.' },
      { step: 'Sign-off', detail: 'You try every position — we fine-tune until it feels right.' },
    ],
  },
  {
    slug: 'foam-replacement',
    title: 'Foam Replacement',
    shortDescription: 'Renew cushions with premium foams that hold shape and support.',
    metaTitle: 'Foam Replacement | Sofa Storys',
    heroImage:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=2000&q=85',
    heroImageAlt: 'Soft sofa cushions and layered comfort in a sunlit room',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=82',
        alt: 'Layered foam and fibre cushion construction',
      },
      {
        src: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1200&q=82',
        alt: 'Minimal living room with deep seat sofa',
      },
    ],
    intro:
      'Sunken seats and flat cushions steal the joy from movie nights. We replace cores with high-resilience foams and wraps matched to how you sit — firm where you need support, soft where you want to sink in.',
    body: [
      'Density, ILD, and layering are chosen per cushion — not one-size-fits-all. We rebuild channelled seats, bench cushions, and scatter pillows with clean edges that keep their silhouette for years.',
      'Covers are opened with care, steamed back to shape, and closed with invisible lines so your sofa looks as refreshed as it feels.',
    ],
    highlights: [
      'HR foam & latex options',
      'Feather-fibre wraps available',
      'Zip access for future refreshes',
      'Matching seat pitch across modular pieces',
    ],
    process: [
      { step: 'Profile', detail: 'We measure wear patterns and discuss firmness preferences.' },
      { step: 'Core build', detail: 'CNC-cut or hand-laminated layers for exact height & crown.' },
      { step: 'Dress', detail: 'Re-stuff, balance corners, and align welting.' },
      { step: 'Comfort test', detail: 'Sit test with you — tweak layers if needed.' },
    ],
  },
  {
    slug: 'upholstery',
    title: 'Upholstery (Fabric & Leather)',
    shortDescription: 'Expert fabric and leather work with meticulous pattern matching.',
    metaTitle: 'Upholstery — Fabric & Leather | Sofa Storys',
    heroImage:
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=85',
    heroImageAlt: 'Designer sofa with rich fabric texture in a bright interior',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82',
        alt: 'Curated living room with layered textiles',
      },
      {
        src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=82',
        alt: 'Leather sofa detail and stitching',
      },
    ],
    intro:
      'Fabric and leather tell your room’s colour story. Our upholsterers pattern-match plaids, align nap direction on velvets, and work full-grain hides with seams that respect the material’s natural grain.',
    body: [
      'From performance weaves for busy homes to aniline leather that ages beautifully, we help you choose performance, tactility, and care in one coherent palette.',
      'Double-stitched stress points, blind seams where the design allows, and reinforced corners mean beauty that survives daily life — not just the photoshoot.',
    ],
    highlights: [
      'Stain-guard & pet-friendly options',
      'Piping, pleats, and tufting refinished to spec',
      'Leather conditioning & colour revival',
      'COM welcome for designers',
    ],
    process: [
      { step: 'Swatches', detail: 'Borrow samples; we drape them in your lighting.' },
      { step: 'Strip & prep', detail: 'Frames cleaned; foam assessed before new skin.' },
      { step: 'Cut & sew', detail: 'Patterned in-house for millimetre-accurate repeats.' },
      { step: 'Fit & finish', detail: 'Hand-stretched, trimmed, and detailed.' },
    ],
  },
  {
    slug: 'sofa-renovation',
    title: 'Sofa Renovation',
    shortDescription: 'Full refresh — structure, comfort layers, and finishes you will love.',
    metaTitle: 'Sofa Renovation | Sofa Storys',
    heroImage:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=85',
    heroImageAlt: 'Refreshed living room with statement sofa',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=82',
        alt: 'Sofa silhouette in a modern interior',
      },
      {
        src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=82',
        alt: 'Neutral sofa styling with warm tones',
      },
    ],
    intro:
      'Some sofas deserve a second chapter. Renovation is our full-stack service — structure, suspension, comfort, and upholstery renewed as a single vision so nothing fights anything else.',
    body: [
      'We rebuild webbing and springs, replace compromised plywood, and only then dress the piece in new materials. The result feels cohesive: supportive, silent, and styled for the room you live in today.',
      'Timeline and phases are planned so you are never surprised — especially when a piece carries family history.',
    ],
    highlights: [
      'Frame & joint inspection',
      'Spring or webbing systems upgraded',
      'Coordinated foam + fabric renewal',
      'Optional leg & hardware refresh',
    ],
    process: [
      { step: 'Condition report', detail: 'Photo log of frame, foam, and cover state.' },
      { step: 'Plan', detail: 'Phased quote: structure first, comfort, then aesthetics.' },
      { step: 'Workshop', detail: 'Restoration in controlled stages with QC gates.' },
      { step: 'Delivery', detail: 'Placed in your room; we adjust feet & alignment.' },
    ],
  },
  {
    slug: 'custom-sofa-design',
    title: 'Custom Sofa Design',
    shortDescription: 'Bespoke sizing, materials, and details tailored to your lifestyle.',
    metaTitle: 'Custom Sofa Design | Sofa Storys',
    heroImage:
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=2000&q=85',
    heroImageAlt: 'Bespoke sofa in an architectural living space',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=82',
        alt: 'Lifestyle scene with tailored seating',
      },
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=82',
        alt: 'Modular sofa configuration in neutral palette',
      },
    ],
    intro:
      'Your floor plan, light, and habits are unique — your sofa should be too. We sketch proportions, module logic, and comfort zones alongside you, then prototype scale in our studio before anything is final.',
    body: [
      'Choose arm height, seat depth, back pitch, and cushion recipe to match how you lounge. Integrated storage, USB, or sectional connectors are drafted into the same drawing set — no afterthoughts.',
      'Production is tracked with the same rigour as our house collections, with white-glove placement and a comfort check on delivery.',
    ],
    highlights: [
      '2D/3D layout assistance',
      'Modular & fixed designs',
      'Performance fabrics for real homes',
      'White-glove delivery & placement',
    ],
    process: [
      { step: 'Discovery', detail: 'Measurements, mood imagery, and comfort map.' },
      { step: 'Design', detail: 'Sketches + material board; revise until it clicks.' },
      { step: 'Build', detail: 'Crafted to signed-off drawings — no drift.' },
      { step: 'Live with it', detail: 'Post-delivery tweak window for cushion settle.' },
    ],
  },
]

export function getServiceBySlug(slug: string): ServiceRecord | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
