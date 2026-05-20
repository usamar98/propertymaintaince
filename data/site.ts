export const business = {
  name: "NorthStar Property Maintenance",
  location: "Manchester, UK",
  phone: "+44 7400 123456",
  phoneHref: "tel:+447400123456",
  email: "hello@northstarmaintenance.co.uk",
  emailHref: "mailto:hello@northstarmaintenance.co.uk",
  whatsapp: "https://wa.me/447400123456",
  mapEmbed:
    "https://www.google.com/maps?q=Manchester%2C%20UK&output=embed",
  serviceAreas: [
    "Manchester",
    "Salford",
    "Bolton",
    "Stockport",
    "Oldham",
    "Bury",
    "Rochdale",
  ],
  clients: [
    "Landlords",
    "HMO owners",
    "Letting agents",
    "Rental property managers",
    "Homeowners",
  ],
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Landlords", href: "#landlords" },
  { label: "Tracker", href: "#tracker" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  "Emergency Property Repairs",
  "Plumbing Repairs",
  "Electrical Repairs",
  "Heating & Boiler Issues",
  "Damp & Mould Treatment",
  "Roofing & Gutter Repairs",
  "Painting & Decorating",
  "Lock & Door Repairs",
  "HMO Maintenance",
  "End-of-Tenancy Repairs",
  "Landlord Maintenance Packages",
  "General Handyman Services",
];

export const repairCategories = services;

export const reasons = [
  {
    title: "Fast triage for occupied rentals",
    body: "Emergency and high-priority repairs are separated from routine jobs, so tenants are contacted quickly and landlords know what is happening.",
  },
  {
    title: "Updates built for letting agents",
    body: "Every repair workflow mirrors the information agents need: access notes, approval status, urgency, contractor stage, and completion detail.",
  },
  {
    title: "Manchester-based coverage",
    body: "Clear local service areas help convert searches from landlords, HMO operators, and property managers across Greater Manchester.",
  },
  {
    title: "Professional evidence capture",
    body: "Photo prompts and structured repair categories make the request feel more serious than a basic contact form.",
  },
];

export const landlordHighlights = [
  "Single-property callouts and multi-property portfolios",
  "HMO common-area repairs, room refreshes, and compliance-led maintenance",
  "Tenant-safe access notes and preferred appointment windows",
  "Approval-ready summaries for higher-cost works",
  "End-of-tenancy repair bundles before relisting",
];

export const trackerJobs = [
  {
    title: "Bathroom leak",
    urgency: "High",
    status: "Waiting Contractor",
  },
  {
    title: "Damp patch in bedroom",
    urgency: "Medium",
    status: "Inspection Booked",
  },
  {
    title: "Broken front door lock",
    urgency: "Emergency",
    status: "In Progress",
  },
  {
    title: "Boiler not heating",
    urgency: "High",
    status: "Landlord Approval Needed",
  },
  {
    title: "Gutter leak",
    urgency: "Low",
    status: "Completed",
  },
];

export const projects = [
  {
    area: "Salford",
    title: "Bathroom leak contained before floor damage spread",
    image: "/images/bathroom-leak.jpg",
    imageAlt: "Water running into a bathroom sink during a plumbing repair visit",
    before:
      "Active leak through bath seal, tenant reporting wet flooring and ceiling marks below.",
    after:
      "Resealed bath, replaced damaged panel, checked pipework, and sent landlord photo evidence.",
  },
  {
    area: "Oldham HMO",
    title: "Bedroom damp patch treated and monitored",
    image: "/images/wall-repair.jpg",
    imageAlt: "Maintenance worker sanding and repairing an interior wall",
    before:
      "Tenant raised visible mould behind furniture with poor ventilation notes.",
    after:
      "Treated affected surface, logged ventilation advice, and booked follow-up inspection.",
  },
  {
    area: "Stockport",
    title: "End-of-tenancy refresh completed before viewings",
    image: "/images/painting-refresh.jpg",
    imageAlt: "Paint brush applying a fresh coat to an interior wall",
    before:
      "Scuffed walls, loose handle, cracked sealant, and several minor handyman items.",
    after:
      "Decorating touch-ups, lock check, sealant replacement, and agent-ready completion report.",
  },
];

export const repairWork = [
  {
    title: "Before/after bathroom leak",
    area: "Salford flat",
    status: "Completed same day",
    image: "/images/bathroom-leak.jpg",
    alt: "Running water in a bathroom sink during plumbing work",
    summary:
      "Bath seal failure and slow waste leak isolated before it damaged the ceiling below.",
  },
  {
    title: "Damp and mould wall",
    area: "Oldham HMO room",
    status: "Treatment booked",
    image: "/images/wall-repair.jpg",
    alt: "Worker repairing an interior wall with sanding equipment",
    summary:
      "Affected wall treated, ventilation notes recorded, and follow-up inspection scheduled.",
  },
  {
    title: "Broken lock",
    area: "Manchester townhouse",
    status: "Secure access restored",
    image: "/images/broken-lock.jpg",
    alt: "Close-up of a worn door lock and keyhole",
    summary:
      "Front door lock issue handled as an emergency with tenant-safe access notes.",
  },
  {
    title: "Boiler and heating repair",
    area: "Bury rental",
    status: "Landlord approval sent",
    image: "/images/boiler-repair.jpg",
    alt: "Technician working on boiler and heating controls",
    summary:
      "No-heat report triaged, heating controls inspected, and approval notes prepared.",
  },
  {
    title: "Gutter repair",
    area: "Rochdale terrace",
    status: "Weatherproofed",
    image: "/images/gutter-roof.jpg",
    alt: "Roofer working on a residential roof repair",
    summary:
      "Overflowing gutter and roof edge checked after heavy rain, with photos sent to owner.",
  },
  {
    title: "Painting and end-of-tenancy refresh",
    area: "Stockport house",
    status: "Ready for viewings",
    image: "/images/painting-refresh.jpg",
    alt: "Paint brush applying fresh paint to an interior wall",
    summary:
      "Scuffs, sealant, minor repairs, and decoration touch-ups completed before relisting.",
  },
];

export const mediaFeatures = [
  {
    title: "Photo evidence built into the enquiry",
    body: "Real maintenance imagery makes the site feel credible before the visitor reads a word.",
    image: "/images/wall-repair.jpg",
    alt: "Maintenance worker repairing and sanding a property wall",
  },
  {
    title: "Boiler and heating calls framed as urgent work",
    body: "Heating visuals help sell high-value emergency response, not only basic handyman jobs.",
    image: "/images/boiler-repair.jpg",
    alt: "Technician working on boiler and heating controls",
  },
  {
    title: "Landlord trust cues for portfolio owners",
    body: "Property key imagery makes the offer relevant to landlords, agents, and managed rentals.",
    image: "/images/landlord-keys.jpg",
    alt: "Hand holding house keys inside a rental property",
  },
];

export const testimonials = [
  {
    quote:
      "The repair request flow is exactly what our tenants need. It collects enough detail before the phone starts ringing.",
    name: "Mariam Fletcher",
    role: "Lettings manager, Manchester",
  },
  {
    quote:
      "The tracker preview makes the offer feel bigger than a brochure site. It shows how maintenance could be managed.",
    name: "Oliver Shah",
    role: "HMO landlord, Salford",
  },
  {
    quote:
      "Clear service areas, emergency calls, and landlord packages. This would save us repeating the same explanations.",
    name: "Helen Armitage",
    role: "Rental portfolio owner",
  },
];

export const googleReviews = [
  {
    name: "Rebecca Melling",
    role: "Landlord in Didsbury",
    rating: 5,
    date: "2 weeks ago",
    quote:
      "NorthStar handled a leaking bathroom in one of my rentals and kept the tenant updated without me chasing. Clear photos, fair quote, tidy finish.",
  },
  {
    name: "Adil Hussain",
    role: "HMO owner in Salford",
    rating: 5,
    date: "1 month ago",
    quote:
      "Fast response on a broken lock and a follow-up report for our records. Exactly the kind of contractor an HMO needs on call.",
  },
  {
    name: "Gemma Oakes",
    role: "Lettings coordinator",
    rating: 5,
    date: "3 months ago",
    quote:
      "The team understands access notes, tenant availability, and landlord approvals. That alone saves our office a lot of back and forth.",
  },
  {
    name: "Naveen Carter",
    role: "Homeowner in Stockport",
    rating: 5,
    date: "4 months ago",
    quote:
      "Booked damp treatment and decorating touch-ups before selling. The work was neat, photographed, and completed when promised.",
  },
];

export const packages = [
  {
    name: "One-Off Repair",
    price: "From \u00A395",
    summary:
      "For single callouts, tenant-reported repairs, and urgent property issues.",
    features: [
      "Structured request intake",
      "Phone and WhatsApp response",
      "Photo evidence prompt",
    ],
  },
  {
    name: "Landlord Care",
    price: "From \u00A3149/mo",
    summary:
      "For landlords who want routine maintenance handled without constant chasing.",
    features: [
      "Priority scheduling",
      "Monthly repair summary",
      "End-of-tenancy support",
    ],
  },
  {
    name: "Agent Portfolio",
    price: "Custom",
    summary:
      "For letting agents and HMO managers who need job visibility across addresses.",
    features: [
      "Multi-property workflow",
      "Approval stages",
      "Repair tracker dashboard upgrade",
    ],
  },
];

export const faqs = [
  {
    question: "How quickly can urgent repairs be handled?",
    answer:
      "Emergency jobs are triaged first, with phone or WhatsApp contact for leaks, broken locks, unsafe electrics, and heating issues affecting occupied properties.",
  },
  {
    question: "Can you support landlords with multiple properties?",
    answer:
      "Yes. The site is structured around portfolio work, with address details, access notes, urgency levels, approval stages, and photo evidence captured from the first request.",
  },
  {
    question: "Can tenants submit repair details directly?",
    answer:
      "Yes. The form collects contact details, category, urgency, access times, property address, postcode, photos, and repair notes so the team can respond with context.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "NorthStar covers Manchester, Salford, Bolton, Stockport, Oldham, Bury, Rochdale, and nearby Greater Manchester rental properties.",
  },
];
