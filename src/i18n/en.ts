import type { Dict } from "./es";

export const en: Dict = {
  brand: "Castellanos",
  brandFull: "Castellanos Transport",
  nav: {
    why: "About",
    services: "Services",
    fleet: "Fleet",
    story: "Story",
    coverage: "Coverage",
    contact: "Quote",
  },
  cta: {
    quote: "Request a quote",
    whatsapp: "WhatsApp",
    whatsappLong: "Contact via WhatsApp",
    reserve: "Book your transport",
    viewDetails: "View details",
    quoteThis: "Quote this vehicle",
    send: "Send via WhatsApp",
  },
  hero: {
    eyebrow: "Honduras • Central America • Since 2001",
    title: "Transporte",
    titleAccent: "Castellanos",
    subtitle:
      "25 years connecting people and destinations with safety, comfort and punctuality.",
    scroll: "Discover",
    stats: [
      { n: "25", l: "Years of experience" },
      { n: "+5K", l: "Trips delivered" },
      { n: "100%", l: "Commitment" },
    ],
  },
  why: {
    eyebrow: "Who we are",
    title: "Your strategic mobility partner in Central America.",
    intro:
      "We are a Honduran company with 25 years of experience leading the private tourist transport sector. Our modern fleet — from luxury SUVs to high-capacity Pullmans — is designed to deliver an experience where comfort, technology and road safety are our absolute priority.",
    items: [
      { title: "Track record", desc: "25 years of trust back us up." },
      { title: "Regional reach", desc: "We connect Honduras with all of Central America." },
      { title: "Total safety", desc: "Damage insurance and certified expert drivers." },
      { title: "Onboard comfort", desc: "WiFi, chargers and AC in every vehicle." },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Designed for every kind of journey.",
    items: [
      { title: "Airport transfers", desc: "On-time pickup and drop-off, flight tracking and 24/7 support." },
      { title: "Tourist excursions", desc: "Guided routes and transfers to the most iconic destinations." },
      { title: "Corporate transport", desc: "Executive mobility for companies, conventions and events." },
      { title: "Events & groups", desc: "Weddings, congresses and group transfers, flawlessly coordinated." },
    ],
  },
  fleet: {
    eyebrow: "Our fleet",
    title: "Five units. One single promise: excellence.",
    subtitle:
      "From VIP executive transfers to international excursions — we have the right unit for every experience.",
    capacityLabel: "Capacity",
    featuresLabel: "Features",
    idealLabel: "Ideal for",
    pax: "passengers",
  },
  story: {
    eyebrow: "Mission & Vision",
    title: "A tradition built mile by mile.",
    paragraph:
      "We started in 2001 committed to safely connecting people and destinations. Today, in 2026, we have evolved to become the strategic mobility partner of all Central America.",
    missionTitle: "Mission",
    mission:
      "To deliver world-class private and tourist transport solutions, guaranteeing safe, comfortable and punctual trips through a state-of-the-art fleet and a highly trained team.",
    visionTitle: "Vision",
    vision:
      "To become by 2030 the leading private transport company in Central America, recognized for operational excellence, technological innovation and our commitment to passenger safety.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Trust earned, trip after trip.",
    items: [
      { quote: "Flawless service from start to finish. Always on time and the drivers were extraordinarily attentive.", author: "María Pérez", role: "Group tour — 22 pax" },
      { quote: "We hired them for our corporate event. Absolute professionalism, immaculate vehicles.", author: "Carlos Rodríguez", role: "Director, Grupo Andino" },
      { quote: "The best decision for our honeymoon. Every detail was cared for with love.", author: "Laura & Diego", role: "Private transfers" },
      { quote: "We've been using Castellanos for airport transfers for years. Never a delay.", author: "Andrea Salinas", role: "Frequent client" },
      { quote: "Flawless operation for our 200-person congress. We recommend them without a doubt.", author: "Jorge Mendoza", role: "Event coordinator" },
    ],
  },
  coverage: {
    eyebrow: "Coverage",
    title: "From Honduras to all Central America.",
    description:
      "We operate urban, interdepartmental transfers and international routes to the most requested destinations in the region.",
    zones: [
      "Tegucigalpa & San Pedro Sula",
      "International airports",
      "Hotels & resorts",
      "Roatán, Copán and La Ceiba",
      "Guatemala, El Salvador and Nicaragua",
      "Corporate events",
    ],
  },
  faq: {
    eyebrow: "Frequently asked",
    title: "What you need to know.",
    items: [
      { q: "How do I request a quote?", a: "Message us on WhatsApp or fill out the quote form. We respond in under 30 minutes during business hours." },
      { q: "Which payment methods do you accept?", a: "Cash, bank transfers and card payments. Corporate accounts available for businesses." },
      { q: "How far in advance should I book?", a: "We recommend at least 48 hours, though we handle urgent requests subject to availability." },
      { q: "Can I cancel or modify a reservation?", a: "Yes. Cancellations 24+ hours in advance are free of charge. Full policy provided at booking." },
      { q: "Are the vehicles insured?", a: "All vehicles carry full insurance and certified maintenance. Safety is our priority." },
      { q: "Do you operate international routes?", a: "Yes, we serve Guatemala, El Salvador, Nicaragua and other Central American countries." },
    ],
  },
  contact: {
    eyebrow: "Book now",
    title: "Your next trip, perfectly coordinated.",
    subtitle: "Tell us the details and we'll build a custom quote in minutes.",
    name: "Full name",
    phone: "Phone",
    date: "Service date",
    service: "Service type",
    vehicle: "Preferred vehicle",
    message: "Additional details",
    selectOption: "Select an option",
    anyVehicle: "Any / recommend",
  },
  footer: {
    tagline: "Premium tourist transport in Honduras and Central America since 2001.",
    rights: "All rights reserved.",
    contact: "Contact",
    follow: "Follow us",
    nav: "Navigation",
  },
  whatsapp: {
    floating: "Message us on WhatsApp",
    defaultMsg: "Hi, I'd like information about your transport services.",
    quoteMsg: (data) =>
      `Hi Castellanos, I'd like a quote:%0A%0A• Name: ${data.name}%0A• Phone: ${data.phone}%0A• Date: ${data.date}%0A• Service: ${data.service}%0A• Vehicle: ${data.vehicle}%0A• Details: ${data.message}`,
    fleetMsg: (name) => `Hi Castellanos, I'd like to quote the ${name}.`,
  },
};
