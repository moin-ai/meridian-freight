/**
 * ============================================================================
 *  SINGLE SOURCE OF TRUTH — edit this file to re-skin the whole site.
 *  All company details, people, and clients here are original and fictional —
 *  a copyright-free portfolio build. To reuse for another client: replace the
 *  values below + the brand tokens in src/app/globals.css.
 * ============================================================================
 */

export type IconName = string; // Google Material Symbols name

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  icon: IconName;
  group: "Logistics" | "Group";
  summary: string;
  description: string;
  highlights: string[];
  image?: string;
}

export interface Person {
  name: string;
  role: string;
  image?: string;
}

export interface Office {
  city: string;
  label: string;
  address: string;
  phone: string;
  mapQuery: string;
}

export interface Job {
  title: string;
  vacancies: number;
  level: string;
  department: string;
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  icon: IconName;
}

export interface Country {
  name: string;
  code: string; // ISO-3166 alpha-2 for flagcdn
  lat: number;
  lng: number;
}

const MEDIA = {
  base: "",
  heroShip: "/images/hero-ship.webp",
  warehouse: "/images/warehouse.webp",
  food: "/images/food.webp",
  roro: "/images/roro.webp",
  fleet: "/images/fleet.webp",
  founder: "/images/founder.webp",
  team1: "/images/team1.webp",
  team2: "/images/team2.webp",
  team3: "/images/team3.webp",
  careers: "/images/careers.webp",
} as const;

export const site = {
  company: {
    name: "Meridian Freight",
    legalName: "Meridian Freight Group Berhad",
    registration: "202101099888 (1499888-X)",
    shortName: "Meridian Freight",
    tagline: "Connected Across Borders",
    foundedYear: 2016,
    logo: "/logo.svg",
  },

  meta: {
    title: "Meridian Freight — Total Logistics & Supply Chain Solutions",
    description:
      "A leading logistics and supply chain corporation. Sea & air freight, warehousing, transportation, customs brokerage and more across 10 nations.",
    keywords: [
      "logistics",
      "freight forwarding",
      "sea freight",
      "air freight",
      "supply chain",
      "warehousing",
      "NVOCC",
    ],
  },

  contact: {
    generalEmail: "enquiry@meridianfreight.co",
    hrEmail: "careers@meridianfreight.co",
    mainPhone: "+60 3-7712 4400",
    mobile: "+60 12-330 8890",
    hours: "Mon – Fri, 9:00 AM – 6:00 PM (MYT)",
  },

  social: [
    { label: "Facebook", icon: "public", href: "https://facebook.com" },
    { label: "Instagram", icon: "photo_camera", href: "https://instagram.com" },
    { label: "LinkedIn", icon: "work", href: "https://linkedin.com" },
    { label: "YouTube", icon: "smart_display", href: "https://youtube.com" },
    { label: "X", icon: "tag", href: "https://x.com" },
  ] as { label: string; icon: IconName; href: string }[],

  nav: [
    { label: "Home", href: "/" },
    { label: "Who We Are", href: "/who-we-are" },
    { label: "What We Do", href: "/what-we-do" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ] as NavLink[],

  hero: {
    eyebrow: "A Leading Logistics Corporation",
    title: "Total logistics &\nsupply chain, delivered.",
    subtitle:
      "From raw materials to the end consumer — Meridian Freight moves your cargo across 10 nations with the quality, speed and reliability your business depends on.",
    primaryCta: { label: "Get a Quote", href: "/get-a-quote" },
    secondaryCta: { label: "Track Shipment", href: "/track" },
    image: MEDIA.heroShip,
  },

  stats: [
    { value: 61, suffix: "+", label: "Countries Served", icon: "public" },
    { value: 26, suffix: "", label: "Services", icon: "category" },
    { value: 8, suffix: "", label: "Years of Experience", icon: "workspace_premium" },
    { value: 523, suffix: "", label: "Completed Projects", icon: "task_alt" },
  ] as Stat[],

  about: {
    eyebrow: "Who We Are",
    heading: "An emerging group of 17 companies",
    lead: "Meridian Freight was established in 2016 as a total logistics and supply chain provider, and has since expanded across renewable energy, technology, engineering, heavy machinery, healthcare, F&B and more — with one vision: to become the region's leading logistics group.",
    pillars: [
      { icon: "verified", title: "Integrity", text: "We do business the right way — transparent, accountable and dependable." },
      { icon: "workspace_premium", title: "Quality", text: "Excellence with quality at its best, across every shipment and service." },
      { icon: "rocket_launch", title: "Leadership", text: "Connected across borders — leading the region forward." },
      { icon: "trending_up", title: "Continuous Improvement", text: "Always refining flow, delivery and customer experience." },
    ],
    image: MEDIA.warehouse,
  },

  philosophy: {
    vision:
      "To be the leading logistics group in the region, providing world-class services that enhance all our internal and external stakeholders.",
    mission: [
      "To build long-term relationships with our vendors, business associates and clients.",
      "To surpass our clients' expectations by delivering cost-effective, excellent service — on time, every time.",
    ],
    objectives: [
      "Acquire new customers through innovative offerings",
      "Provide customers the best value for cost",
      "Increase our share of the regional market",
    ],
    corporateGoal:
      "To aim for innovation not only in our development organisation, but also in the way we approach every aspect of our businesses.",
    coreValues:
      "Our values are the underpinning of our way of life, our brand, and our business strategy. They define who we are and guide the way we work with our colleagues, within our communities, and with one another.",
    qualityPolicy: [
      "We at Meridian Freight are pledged to achieving a level of quality that will set the pace in the market in terms of value and service.",
      "We place the highest emphasis on integrity, quality, leadership and efficiency in the services we offer to the industry.",
      "We embark on a journey focused not only on quality but also on being profitable to our customers, employees, suppliers and the whole organisation — seeking continuous improvement across all our processes.",
    ],
  },

  founder: {
    name: "Mr. Ellis Cole",
    role: "Founder & Executive Chairman · Group CEO",
    image: MEDIA.founder,
    bio: "A self-made and distinguished entrepreneur, Mr. Ellis Cole began his career at the age of 20. In 2016 he ventured into the logistics industry, building an enterprise that evolved into Meridian Freight — a group that symbolises excellence and innovation, with a deep commitment to creating opportunities for underserved communities.",
  },

  board: [
    { name: "Mr. Ellis Cole", role: "Founder & Executive Chairman" },
    { name: "Ms. Adriana Voss", role: "Vice Chairman" },
    { name: "Mr. Theo Nandakumar", role: "Non-Independent Executive Director" },
    { name: "Ms. Rhea Sundaram", role: "Non-Independent Executive Director" },
    { name: "Mr. Rajan Menon", role: "Non-Independent Non-Executive Director" },
    { name: "Dato Ir. Hakim Rashid", role: "Independent Non-Executive Director" },
    { name: "Mr. Aziz Farouk", role: "Independent Non-Executive Director" },
    { name: "Ms. Nadia Aziz", role: "Non-Independent Executive Director" },
    { name: "Ms. Hana Poole", role: "Independent Non-Executive Director" },
    { name: "Tuan Hj Bakri Salleh", role: "Group Advisor" },
  ] as Person[],

  leadership: [
    { name: "Mr. Ellis Cole", role: "Group Chief Executive Officer" },
    { name: "Mr. Imran Sabri", role: "Group Executive Managing Director" },
    { name: "Ms. Sharifa Nadzri", role: "Deputy Group Chief Executive Officer" },
    { name: "Ms. Rhea Sundaram", role: "Group Corporate Legal Counsel" },
    { name: "Mr. Theo Nandakumar", role: "Group Chief Technology Officer" },
    { name: "Ms. Adriana Voss", role: "Group Chief Strategy Officer" },
    { name: "Mr. Mazlan Idris", role: "CEO — East Region" },
    { name: "Ms. Michelle Grover", role: "CEO — North Region" },
    { name: "Puan Saptura Bakar", role: "Group Chief Commercial Officer" },
    { name: "Ms. Farah Talib", role: "Group Chief Human Resources Officer" },
    { name: "Ms. Aisha Jamil", role: "Group Chief Operating Officer" },
    { name: "Ms. Serena Wong", role: "Group Chief Financial Officer" },
    { name: "Ms. Aena Rahim", role: "CEO — Singapore" },
    { name: "Mr. Hafiz Daim", role: "CEO — Thailand" },
    { name: "Ms. Felicity Edwin", role: "CEO — Indonesia" },
  ] as Person[],

  countries: [
    { name: "Malaysia", code: "my", lat: 3.139, lng: 101.6869 },
    { name: "Singapore", code: "sg", lat: 1.3521, lng: 103.8198 },
    { name: "Thailand", code: "th", lat: 13.7563, lng: 100.5018 },
    { name: "Indonesia", code: "id", lat: -6.2088, lng: 106.8456 },
    { name: "Vietnam", code: "vn", lat: 21.0278, lng: 105.8342 },
    { name: "Cambodia", code: "kh", lat: 11.5564, lng: 104.9282 },
    { name: "Laos", code: "la", lat: 17.9757, lng: 102.6331 },
    { name: "Myanmar", code: "mm", lat: 16.8409, lng: 96.1735 },
    { name: "Brunei", code: "bn", lat: 4.9031, lng: 114.9398 },
    { name: "East Timor", code: "tl", lat: -8.5569, lng: 125.5603 },
  ] as Country[],

  services: [
    { slug: "sea-freight", title: "Sea Freight", icon: "directions_boat", group: "Logistics", summary: "Door-to-door ocean cargo, local and international.", description: "Moving cargo from the shipper's factory to the consignee's factory — whether local or international. Reliable FCL and LCL ocean freight backed by a global carrier network.", highlights: ["FCL & LCL consolidation", "Port-to-port & door-to-door", "Global carrier partnerships"], image: MEDIA.heroShip },
    { slug: "air-freight", title: "Air Freight", icon: "flight", group: "Logistics", summary: "Competitive rates with time-critical planning.", description: "Competitive air freight rates with effective planning to minimise your logistics cost. A one-stop solutions provider for time-sensitive shipments worldwide.", highlights: ["Express & economy air", "Charter options", "Time-definite delivery"] },
    { slug: "nvocc", title: "NVOCC", icon: "sailing", group: "Logistics", summary: "All ocean carrier services, without operating vessels.", description: "A Non-Vessel-Operating Common Carrier performs all the services of an ocean carrier except operating the vessels — giving you flexibility and competitive space.", highlights: ["Own bills of lading", "Negotiated space", "Multi-carrier flexibility"] },
    { slug: "forwarding-customs", title: "Forwarding & Customs Brokerage", icon: "fact_check", group: "Logistics", summary: "Reliable forwarding with a wide agent network.", description: "Reliable sea freight and freight forwarding with trusted agents across the region, plus full customs brokerage to clear your cargo smoothly.", highlights: ["Customs clearance", "Documentation handling", "Regional agent network"] },
    { slug: "transportation", title: "Transportation", icon: "local_shipping", group: "Logistics", summary: "The transport mode that fits your cargo.", description: "Transport modes that best fit your needs — long-distance chartered transport, combined transport, relay transport, milk run, special products transport and more.", highlights: ["Chartered & combined", "Milk run & relay", "Special products transport"], image: MEDIA.fleet },
    { slug: "warehousing", title: "Warehousing", icon: "warehouse", group: "Logistics", summary: "Facilities ready at origin or destination.", description: "Our global footprint and extensive network mean we have facilities ready to handle your supply chain — whether at origin or destination.", highlights: ["Origin & destination DCs", "Inventory management", "Distribution-ready"], image: MEDIA.warehouse },
    { slug: "express-courier", title: "Express & Courier", icon: "package_2", group: "Logistics", summary: "Fast, secure last-mile delivery.", description: "Known for last-mile delivery with door-to-door pickup — quick delivery at reasonable cost, handling any parcels securely.", highlights: ["Door-to-door pickup", "Last-mile delivery", "Secure parcel handling"] },
    { slug: "roro", title: "RoRo Vehicle Shipping", icon: "directions_car", group: "Logistics", summary: "Move your vehicle safely — container or RoRo.", description: "Cover your vehicle either in container or RoRo. We are experts in dealing with and bringing your vehicle safely to destination.", highlights: ["Container & RoRo", "Vehicle handling experts", "Safe & insured"], image: MEDIA.roro },
    { slug: "halal-logistics", title: "Halal Logistics", icon: "mosque", group: "Logistics", summary: "Shariah-compliant logistics operations.", description: "Managing logistics operations such as fleet management, storage, warehousing and materials handling according to the principles of Shariah law.", highlights: ["Shariah-compliant handling", "Segregated storage", "Certified processes"] },
    { slug: "cargo-insurance", title: "Marine & Cargo Insurance", icon: "shield", group: "Logistics", summary: "Protect cargo against transit risk.", description: "Coverage against risks including windstorms, theft, fire and loading or unloading incidents — giving you peace of mind for every shipment.", highlights: ["All-risk coverage", "Claims support", "Transit protection"] },
    { slug: "engineering", title: "Engineering", icon: "engineering", group: "Group", summary: "Supply, fix and maintain across industries.", description: "Engineering services ranging from supplying and fixing to maintaining — covering vehicles, construction and farm machinery.", highlights: ["Supply & install", "Maintenance", "Vehicles & machinery"] },
    { slug: "heavy-machinery", title: "Heavy Machinery", icon: "construction", group: "Group", summary: "Equipment rental for any project.", description: "Heavy machinery and equipment rental — forklift, roller compactor, excavator, backhoe, back pusher, motor grader, road roller, asphalt paver and lorry.", highlights: ["Excavators & graders", "Compactors & rollers", "Forklifts & lorries"] },
    { slug: "renewable", title: "Renewable Energy", icon: "solar_power", group: "Group", summary: "EV, solar and clean-water solutions.", description: "A sustainability strategy spanning EV charging points, solar panels, EV bikes and water treatment systems.", highlights: ["EV charging & bikes", "Solar panels", "Water treatment"] },
    { slug: "technology", title: "Technology", icon: "memory", group: "Group", summary: "Every company is a technology company.", description: "Technology solutions and digital transformation — because every company is a technology company, no matter what product or service it provides.", highlights: ["Digital transformation", "Software & systems", "IT infrastructure"] },
    { slug: "cyber-security", title: "Cyber Security", icon: "security", group: "Group", summary: "Reduce business risk and financial impact.", description: "Reduce business risks and financial impact with our world-class cyber security solutions, protecting your operations end to end.", highlights: ["Threat protection", "Risk reduction", "Compliance"] },
    { slug: "training-consultancy", title: "Training & Consultancy", icon: "school", group: "Group", summary: "Quality corporate training, worldwide.", description: "A corporate training provider offering quality training and consultancy around the world to build capable, future-ready teams.", highlights: ["Corporate training", "Consultancy", "Global delivery"] },
    { slug: "food-beverage", title: "Food & Beverage", icon: "restaurant", group: "Group", summary: "Catering and food delivery services.", description: "Food catering and food delivery services, serving groups from a minimum of 5 pax and above with quality and care.", highlights: ["Catering", "Food delivery", "Groups of 5+"], image: MEDIA.food },
    { slug: "motors", title: "Motors", icon: "garage", group: "Group", summary: "Fully imported recon cars, inspected.", description: "Fully imported reconditioned cars from Japan and the UK — fully inspected, highest-quality vehicles for discerning buyers.", highlights: ["Japan & UK imports", "Fully inspected", "Quality assured"] },
  ] as Service[],

  jobs: [
    { title: "Sales Executive — Logistics & Supply Chain", vacancies: 28, level: "Junior & Senior", department: "Sales" },
    { title: "Marketing Executive — Logistics & Supply Chain", vacancies: 10, level: "Junior & Senior", department: "Marketing" },
    { title: "Sales Manager — Logistics & Supply Chain", vacancies: 4, level: "Senior", department: "Sales" },
    { title: "Key Accounts Manager — Logistics & Supply Chain", vacancies: 4, level: "Senior", department: "Sales" },
    { title: "Customer Service Executive — Logistics & Supply Chain", vacancies: 6, level: "Junior & Senior", department: "Operations" },
    { title: "Graphic Designer cum IT", vacancies: 2, level: "Junior & Senior", department: "Creative" },
    { title: "Operation Executive — Logistics & Supply Chain", vacancies: 2, level: "Junior & Senior", department: "Operations" },
    { title: "Brand & SEO Executive", vacancies: 2, level: "Junior & Senior", department: "Marketing" },
    { title: "Social Media, Content & Copywriter Specialist", vacancies: 2, level: "Junior & Senior", department: "Marketing" },
    { title: "e-Commerce Sales & Marketing Specialist", vacancies: 10, level: "Junior & Senior", department: "Sales" },
    { title: "Technology Sales Specialist", vacancies: 6, level: "Junior & Senior", department: "Technology" },
    { title: "Internship Program", vacancies: 10, level: "Junior", department: "Internship" },
  ] as Job[],

  offices: [
    { city: "Petaling Jaya", label: "Corporate HQ", address: "Level 12, Menara Horizon, Jalan Utama 1, 46000 Petaling Jaya, Selangor", phone: "+60 3-7712 4400", mapQuery: "Petaling Jaya, Selangor" },
    { city: "Butterworth", label: "Port Office", address: "Unit B4, Northport Commercial Zone, 12100 Butterworth, Penang", phone: "+60 4-333 0594", mapQuery: "Butterworth, Penang" },
    { city: "Johor Bahru", label: "Southern Office", address: "Suite 05-01, Jalan Perdana 3, 81100 Johor Bahru, Johor", phone: "+60 7-288 7787", mapQuery: "Johor Bahru, Johor" },
  ] as Office[],

  careers: {
    image: MEDIA.careers,
    heading: "Grow in our DNA",
    lead: "Our priority and focus is always our people. We want to create a workplace where individuals are respected and differences are valued — and we are always hiring interns from universities and colleges.",
    benefits: [
      { icon: "diversity_3", title: "People First", text: "A culture built on respect, inclusion and growth." },
      { icon: "school", title: "Learn & Develop", text: "Structured training and clear progression paths." },
      { icon: "travel_explore", title: "Regional Exposure", text: "Work across 10 markets." },
      { icon: "volunteer_activism", title: "Purpose-Driven", text: "Create opportunities for the communities we serve." },
    ],
  },

  quote: {
    serviceTypes: ["Sea Freight", "Air Freight", "Transportation", "Warehousing", "Express & Courier", "RoRo Vehicle Shipping", "Customs Brokerage", "Other"],
    cargoTypes: ["General Cargo", "FCL Container", "LCL / Consolidation", "Vehicle", "Perishables / Halal", "Hazardous", "Heavy Machinery"],
  },
} as const;

export type Site = typeof site;
