import type { Dict } from "./es";

export const en: Dict = {
  brand: "Castellanos",
  brandFull: "Castellanos Tourist Transport",
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
    eyebrow: "Executive & tourist transport",
    title: "Safe, comfortable, on-time travel.",
    titleAccent: "No exceptions.",
    subtitle:
      "Over a decade moving passengers with the elegance, discipline and care they deserve.",
    scroll: "Discover",
  },
  why: {
    eyebrow: "Why choose us",
    title: "Standards you feel from the first minute.",
    items: [
      { title: "Professional drivers", desc: "Certified, presentable chauffeurs with deep tourist-route experience." },
      { title: "Modern fleet", desc: "Recent, air-conditioned vehicles maintained to the highest standards." },
      { title: "Guaranteed punctuality", desc: "Clockwork operations. We arrive early so you never wait." },
      { title: "Personal attention", desc: "Every service tailored to the passenger, the group and the destination." },
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
    title: "Vehicles chosen with intent.",
    subtitle:
      "Each unit is built for an experience — from private executive transfers to long-distance group tours.",
    capacityLabel: "Capacity",
    featuresLabel: "Features",
    pax: "passengers",
  },
  story: {
    eyebrow: "Our story",
    title: "A tradition built mile by mile.",
    paragraph:
      "What began as a family transport service has grown into a brand known for discipline, warmth and detail. Every trip tells a story — we make sure it is a memorable one.",
    missionTitle: "Mission",
    mission: "Deliver safe, on-time and comfortable transport experiences that exceed every passenger's expectations.",
    visionTitle: "Vision",
    vision: "To be the reference tourist transport company for operational excellence and human care.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "Trust earned, trip after trip.",
    items: [
      { quote: "Flawless service from start to finish. Always on time and the drivers were extraordinarily attentive.", author: "María Pérez", role: "Group tour — 22 pax" },
      { quote: "We hired them for our corporate event. Absolute professionalism, immaculate vehicles.", author: "Carlos Rodríguez", role: "Director, Grupo Andino" },
      { quote: "The best decision for our honeymoon. Every detail was cared for with love.", author: "Laura & Diego", role: "Private transfers" },
      { quote: "We've been using Castellanos for airport transfers for years. Never a delay.", author: "Andrea Salinas", role: "Frequent client" },
    ],
  },
  coverage: {
    eyebrow: "Coverage",
    title: "We operate the main tourist routes.",
    description: "We handle urban, interprovincial transfers and excursions to the most requested destinations.",
    zones: [
      "International airport",
      "City center",
      "Hotels & resorts",
      "Excursion routes",
      "Events & conventions",
      "Interprovincial transfers",
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
      { q: "Do you operate outside the city?", a: "Yes, we cover interprovincial transfers and long-distance excursions." },
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
    tagline: "Premium tourist transport for over a decade.",
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