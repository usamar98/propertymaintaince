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
    body: "Every demo workflow mirrors the information agents need: access notes, approval status, urgency, contractor stage, and completion detail.",
  },
  {
    title: "Manchester-based coverage",
    body: "Clear local service areas help convert searches from landlords, HMO operators, and property managers across Greater Manchester.",
  },
  {
    title: "Professional evidence capture",
    body: "Photo upload prompts and structured repair categories make the request feel more serious than a basic contact form.",
  },
];

export const landlordHighlights = [
  "Single-property callouts and multi-property portfolios",
  "HMO common-area repairs, room refreshes, and compliance-led maintenance",
  "Tenant-safe access notes and preferred appointment windows",
  "Approval-ready summaries for higher-cost works",
  "End-of-tenancy repair bundles before relisting",
];

export const demoJobs = [
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
    image: "/images/boiler-repair.jpg",
    imageAlt:
      "Close-up of a technician adjusting heating equipment during a property maintenance visit",
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
    image: "/images/light-repair.jpg",
    imageAlt: "Handyman standing on a ladder while repairing a light in a room",
    before:
      "Scuffed walls, loose handle, cracked sealant, and several minor handyman items.",
    after:
      "Decorating touch-ups, lock check, sealant replacement, and agent-ready completion report.",
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
      "Repair tracker dashboard upsell",
    ],
  },
];

export const faqs = [
  {
    question: "Is this connected to a real repair system?",
    answer:
      "No. This is a front-end demo with local mock data, designed to show how a property maintenance company could capture repair requests and preview a tracker dashboard.",
  },
  {
    question: "Can the content be changed for another city or company?",
    answer:
      "Yes. Business details, service areas, packages, testimonials, and tracker jobs are stored as local content and can be swapped for a real client.",
  },
  {
    question: "Does the repair form send emails?",
    answer:
      "Not in this demo. It shows a success state and ticket preview only. Email, CRM, Google review embeds, or dashboard integrations can be added as a paid upgrade.",
  },
  {
    question: "Who is this website aimed at?",
    answer:
      "Landlords, HMO owners, letting agents, rental property managers, homeowners, and contractors who want more repair enquiries from local searches.",
  },
];
