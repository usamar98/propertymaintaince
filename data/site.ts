export const business = {
  name: "NorthStar Property Maintenance",
  location: "Manchester, UK",
  phone: "+44 7400 123456",
  phoneHref: "tel:+447400123456",
  email: "hello@northstarmaintenance.co.uk",
  emailHref: "mailto:hello@northstarmaintenance.co.uk",
  whatsapp: "https://wa.me/447400123456",
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
    before: "Active leak through bath seal, tenant reporting wet flooring and ceiling marks below.",
    after: "Resealed bath, replaced damaged panel, checked pipework, and sent landlord photo evidence.",
  },
  {
    area: "Oldham HMO",
    title: "Bedroom damp patch treated and monitored",
    before: "Tenant raised visible mould behind furniture with poor ventilation notes.",
    after: "Treated affected surface, logged ventilation advice, and booked follow-up inspection.",
  },
  {
    area: "Stockport",
    title: "End-of-tenancy refresh completed before viewings",
    before: "Scuffed walls, loose handle, cracked sealant, and several minor handyman items.",
    after: "Decorating touch-ups, lock check, sealant replacement, and agent-ready completion report.",
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

export const packages = [
  {
    name: "One-Off Repair",
    price: "From £95",
    summary: "For single callouts, tenant-reported repairs, and urgent property issues.",
    features: ["Structured request intake", "Phone and WhatsApp response", "Photo evidence prompt"],
  },
  {
    name: "Landlord Care",
    price: "From £149/mo",
    summary: "For landlords who want routine maintenance handled without constant chasing.",
    features: ["Priority scheduling", "Monthly repair summary", "End-of-tenancy support"],
  },
  {
    name: "Agent Portfolio",
    price: "Custom",
    summary: "For letting agents and HMO managers who need job visibility across addresses.",
    features: ["Multi-property workflow", "Approval stages", "Repair tracker dashboard upsell"],
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
      "Not in this demo. It shows a success state and ticket preview only. Email, CRM, or dashboard integrations can be added as a paid upgrade.",
  },
  {
    question: "Who is this website aimed at?",
    answer:
      "Landlords, HMO owners, letting agents, rental property managers, homeowners, and contractors who want more repair enquiries from local searches.",
  },
];
