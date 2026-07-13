import type {
  BlogPost,
  PortfolioCategory,
  PortfolioItem,
  PricingPackage,
  Service,
  Testimonial,
} from "@/types";

export const siteConfig = {
  name: "Royal Studio",
  tagline: "We Capture Your Memories.",
  description:
    "Luxury wedding photography and cinematic filmmaking across Pakistan. 3000+ weddings documented with timeless artistry since 2018.",
  url: "https://royalstudio.pk",
  founders: ["Muhammad Ramzan", "Talha Ramay"],
  established: 2018,
  email: "royalstudio089@gmail.com",
  phones: ["03084877073", "03032213806"],
  whatsapp: "03084877073",
  address: {
    line1: "Royal Studio, Al Jannat Town Entrance",
    line2: "Canal Road, Opposite Habib Mall",
    city: "Burewala",
    postal: "61010",
    country: "Pakistan",
    full: "Royal Studio, Al Jannat Town Entrance, Canal Road, Opposite Habib Mall, Burewala 61010, Pakistan",
  },
  social: {
    instagram: "https://www.instagram.com/royalstudio089/",
    facebook: "https://www.facebook.com/royalstudio089/",
    youtube: "https://www.youtube.com/@royalstudio089",
    maps: "https://maps.app.goo.gl/5rDZjYPNEKke33Fn7",
  },
  citiesServed: [
    "Burewala",
    "Vehari",
    "Multan",
    "Sahiwal",
    "Faisalabad",
    "Lahore",
    "Bahawalnagar",
    "Bahawalpur",
    "Islamabad",
    "Weddings across Pakistan",
  ],
  stats: {
    weddings: "3000+",
    experience: "8+",
    team: "10–15",
    delivery: "20-Day",
    satisfaction: "100%",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Wedding Films", href: "/wedding-films" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const homeServices = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    description: "Full-day coverage capturing every sacred moment with editorial elegance.",
    icon: "camera",
  },
  {
    id: "wedding-films",
    title: "Wedding Films",
    description: "Cinematic films that preserve the emotion, music, and magic of your day.",
    icon: "film",
  },
  {
    id: "bridal-portraits",
    title: "Bridal Portraits",
    description: "Stunning bridal editorials crafted with luxury lighting and artistry.",
    icon: "sparkles",
  },
  {
    id: "fashion",
    title: "Fashion Photography",
    description: "High-end campaigns for designers, brands, and creative collaborations.",
    icon: "shirt",
  },
  {
    id: "corporate",
    title: "Corporate Photography",
    description: "Professional event and brand coverage with polished deliverables.",
    icon: "building",
  },
  {
    id: "drone",
    title: "Drone Coverage",
    description: "Aerial perspectives that elevate your wedding film and photography.",
    icon: "plane",
  },
  {
    id: "albums",
    title: "Luxury Albums",
    description: "Museum-quality albums designed to become family heirlooms.",
    icon: "book",
  },
  {
    id: "reels",
    title: "Social Media Reels",
    description: "Trend-forward reels optimized for Instagram and TikTok sharing.",
    icon: "video",
  },
];

export const aboutHighlights = [
  "3000+ weddings documented",
  "Professional 10–15 member team",
  "Luxury heirloom albums",
  "Cinematic wedding films",
  "Drone aerial coverage",
  "Fast 20-day delivery",
];

export const weddingProcess = [
  { step: 1, title: "Inquiry", description: "Share your wedding date, venue, and vision with our team." },
  { step: 2, title: "Consultation", description: "We discuss your style, timeline, and coverage needs." },
  { step: 3, title: "Booking", description: "Secure your date with a signed agreement and deposit." },
  { step: 4, title: "Planning", description: "Detailed pre-wedding planning and shot list coordination." },
  { step: 5, title: "Wedding Day", description: "Our team captures every moment with cinematic precision." },
  { step: 6, title: "Editing", description: "Expert color grading, retouching, and film editing." },
  { step: 7, title: "Album Design", description: "Custom luxury album layouts crafted for your story." },
  { step: 8, title: "Delivery", description: "Digital gallery, films, and albums delivered with care." },
];

export const statistics = [
  { value: "3000+", label: "Weddings Captured" },
  { value: "8+ Years", label: "Experience" },
  { value: "20-Day", label: "Delivery Timeline" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "Sony & Canon", label: "Latest Equipment" },
  { value: "Drone", label: "Aerial Coverage" },
];

export const faqItems = [
  {
    question: "How do I book Royal Studio for my wedding?",
    answer:
      "Contact us via the inquiry form, WhatsApp, or phone. We'll schedule a consultation to discuss your date, venue, and package options. A signed agreement and deposit secures your booking.",
  },
  {
    question: "What are your pricing packages?",
    answer:
      "We offer Essential (from PKR 50,000), Premium, and Royal Signature (up to PKR 300,000) packages. Custom quotes are available for destination weddings and multi-day events.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Standard delivery is within 20 days for photos and films. Rush delivery and same-day edits are available for select packages — ask during consultation.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Yes. We serve Burewala, Lahore, Multan, Islamabad, and weddings across Pakistan. Travel and accommodation costs are quoted separately for out-of-city events.",
  },
  {
    question: "Is drone coverage included?",
    answer:
      "Drone coverage is available as an add-on or included in Premium and Royal Signature packages, subject to venue permissions and weather conditions.",
  },
  {
    question: "What album options do you offer?",
    answer:
      "We design luxury heirloom albums with premium papers, lay-flat binding, and custom layouts. Album design is included in select packages.",
  },
  {
    question: "Do you offer same-day edits?",
    answer:
      "Same-day highlight edits and social media reels can be arranged for an additional fee. Availability depends on your wedding date and package.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Deposits are non-refundable but may be transferred to a new date within 12 months, subject to availability. Full terms are outlined in your booking agreement.",
  },
];

export const portfolioCategories: { id: PortfolioCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "nikah", label: "Nikah" },
  { id: "mehndi", label: "Mehndi" },
  { id: "barat", label: "Barat" },
  { id: "walima", label: "Walima" },
  { id: "bridal", label: "Bridal" },
  { id: "couple", label: "Couple Portraits" },
  { id: "fashion", label: "Fashion" },
  { id: "corporate", label: "Corporate" },
];

export const portfolioItems: PortfolioItem[] = [
  { id: 1, title: "Nikah — Amara & Hassan", category: "nikah", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80", aspect: "tall", location: "Lahore", exif: { camera: "Sony A7IV", lens: "85mm f/1.4", aperture: "f/1.8", shutter: "1/400", iso: "400" } },
  { id: 2, title: "Mehndi Night", category: "mehndi", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80", aspect: "wide", location: "Multan" },
  { id: 3, title: "Barat Procession", category: "barat", image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80", aspect: "square", location: "Burewala" },
  { id: 4, title: "Walima Reception", category: "walima", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80", aspect: "wide", location: "Faisalabad" },
  { id: 5, title: "Bridal Portrait", category: "bridal", image: "https://images.unsplash.com/photo-1594552070431-25809a90ccc2?w=800&q=80", aspect: "tall", location: "Lahore" },
  { id: 6, title: "Golden Hour Couple", category: "couple", image: "https://images.unsplash.com/photo-1529634806980-85c493dde6ae?w=800&q=80", aspect: "tall", location: "Bahawalpur" },
  { id: 7, title: "Fashion Editorial", category: "fashion", image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", aspect: "square", location: "Lahore" },
  { id: 8, title: "Corporate Gala", category: "corporate", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", aspect: "wide", location: "Islamabad" },
  { id: 9, title: "Nikah Ceremony", category: "nikah", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80", aspect: "tall", location: "Sahiwal" },
  { id: 10, title: "Mehndi Details", category: "mehndi", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80", aspect: "wide", location: "Vehari" },
  { id: 11, title: "Bridal Getting Ready", category: "bridal", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", aspect: "square", location: "Multan" },
  { id: 12, title: "Couple Session", category: "couple", image: "https://images.unsplash.com/photo-1520854221256-17451cc791c8?w=800&q=80", aspect: "tall", location: "Lahore" },
  { id: 13, title: "Barat Entrance", category: "barat", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80", aspect: "wide", location: "Burewala" },
  { id: 14, title: "Walima Decor", category: "walima", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", aspect: "square", location: "Faisalabad" },
  { id: 15, title: "Designer Campaign", category: "fashion", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80", aspect: "tall", location: "Lahore" },
  { id: 16, title: "Brand Launch", category: "corporate", image: "https://images.unsplash.com/photo-1505373877841-8d25f2984756?w=800&q=80", aspect: "wide", location: "Islamabad" },
  { id: 17, title: "Intimate Nikah", category: "nikah", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80", aspect: "square", location: "Bahawalnagar" },
  { id: 18, title: "Mehndi Dance", category: "mehndi", image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80", aspect: "tall", location: "Multan" },
];

export const featuredFilm = {
  title: "Amara & Hassan — A Cinematic Wedding Film",
  youtubeId: "dQw4w9WgXcQ",
  description: "A timeless love story captured across three days of Nikah, Mehndi, and Walima celebrations in Lahore.",
};

export const weddingFilms = [
  { id: 1, title: "Amara & Hassan", youtubeId: "dQw4w9WgXcQ", location: "Lahore", duration: "12 min" },
  { id: 2, title: "Sana & Omar", youtubeId: "dQw4w9WgXcQ", location: "Multan", duration: "15 min" },
  { id: 3, title: "Fatima & Ali", youtubeId: "dQw4w9WgXcQ", location: "Burewala", duration: "10 min" },
  { id: 4, title: "Zainab & Usman", youtubeId: "dQw4w9WgXcQ", location: "Faisalabad", duration: "14 min" },
];

export const testimonials: Testimonial[] = [
  {
    quote: "Royal Studio captured our wedding with such elegance and emotion. Every photo feels like a work of art. Muhammad and Talha's team was professional, warm, and incredibly talented.",
    author: "Amara & Hassan",
    event: "Nikah, Mehndi & Walima",
    location: "Lahore",
  },
  {
    quote: "Our cinematic wedding film brought tears to our eyes. The drone shots, the music, the storytelling — absolutely world-class. Worth every rupee.",
    author: "Sana & Omar",
    event: "Destination Wedding",
    location: "Multan",
  },
  {
    quote: "From consultation to album delivery, everything was seamless. They documented 3000+ weddings and it shows — pure professionalism and luxury service.",
    author: "Fatima & Ali",
    event: "Royal Signature Package",
    location: "Burewala",
  },
  {
    quote: "The bridal portraits were stunning. Our families still talk about the album quality. Royal Studio is the best wedding photographer in Burewala.",
    author: "Zainab & Usman",
    event: "Bridal & Walima",
    location: "Faisalabad",
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: "essential",
    name: "Essential",
    price: "PKR 50,000",
    priceNote: "Starting from",
    description: "Perfect for intimate weddings seeking beautiful coverage and timeless memories.",
    features: [
      "6 hours photography coverage",
      "1 senior photographer",
      "300+ edited photos",
      "Online gallery delivery",
      "20-day delivery timeline",
      "Basic retouching",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "PKR 150,000",
    priceNote: "Starting from",
    description: "Our most popular package for full wedding celebrations with photo and film.",
    features: [
      "Full-day photo + film coverage",
      "2 photographers + 1 cinematographer",
      "Cinematic highlight film (5–8 min)",
      "600+ edited photos",
      "Drone coverage (venue permitting)",
      "Luxury album design",
      "Social media reels",
      "20-day delivery",
    ],
    highlighted: true,
  },
  {
    id: "royal-signature",
    name: "Royal Signature",
    price: "PKR 300,000",
    priceNote: "Up to",
    description: "The ultimate luxury experience for couples who demand editorial excellence.",
    features: [
      "Multi-day coverage (Nikah, Mehndi, Barat, Walima)",
      "Full creative team (10–15 members)",
      "Feature-length cinematic film",
      "1000+ edited photos",
      "Premium drone + gimbal coverage",
      "Heirloom luxury album",
      "Same-day highlight reel (optional)",
      "Dedicated wedding planner liaison",
      "Priority 15-day delivery",
    ],
  },
];

export const detailedServices: Service[] = [
  {
    id: "wedding-photography",
    title: "Wedding Photography",
    shortDescription: "Editorial wedding photography across all Pakistani traditions.",
    description: "From Nikah to Walima, our photographers document every sacred moment with editorial precision and emotional depth. We specialize in luxury weddings across Pakistan.",
    deliverables: ["Full-day coverage", "600–1000+ edited images", "Online gallery", "Luxury album options", "Print-ready files"],
    process: ["Consultation", "Shot list planning", "Wedding day coverage", "Culling & editing", "Gallery delivery", "Album design"],
    equipment: ["Sony A7IV / A7RV", "Canon R5", "Profoto lighting", "Prime & zoom lens kit"],
    faq: [{ question: "How many photographers?", answer: "1–3 photographers depending on package and event scale." }],
    icon: "camera",
  },
  {
    id: "cinematic-films",
    title: "Cinematic Wedding Films",
    shortDescription: "Hollywood-grade wedding films with cinematic storytelling.",
    description: "Our cinematographers craft feature-length and highlight films that preserve the music, vows, and emotions of your celebration.",
    deliverables: ["Highlight film (5–15 min)", "Feature film (optional)", "Ceremony & speeches", "Drone footage", "Social reels"],
    process: ["Pre-wedding consultation", "Multi-cam coverage", "Audio recording", "Color grading", "Music licensing", "Final delivery"],
    equipment: ["Sony FX3 / FX6", "Gimbal stabilizers", "DJI drone", "Wireless lav mics"],
    faq: [{ question: "Film delivery time?", answer: "Standard 20 days; rush delivery available." }],
    icon: "film",
  },
  {
    id: "bridal-editorials",
    title: "Bridal Editorials",
    shortDescription: "Luxury bridal portraits and getting-ready coverage.",
    description: "Stunning bridal editorials with luxury lighting, posing direction, and magazine-quality retouching.",
    deliverables: ["Bridal session", "Getting-ready coverage", "50–100 edited portraits", "Album spreads"],
    process: ["Style consultation", "Location scouting", "Session day", "Retouching", "Delivery"],
    equipment: ["Studio strobes", "Natural light modifiers", "85mm & 50mm primes"],
    faq: [{ question: "Include makeup coordination?", answer: "We coordinate with your MUA for optimal timing." }],
    icon: "sparkles",
  },
  {
    id: "fashion-campaigns",
    title: "Fashion Campaigns",
    shortDescription: "High-end fashion and brand photography.",
    description: "Editorial campaigns for designers, boutiques, and fashion brands across Pakistan.",
    deliverables: ["Campaign imagery", "Lookbook photos", "Social assets", "Retouching"],
    process: ["Creative brief", "Mood boards", "Shoot day", "Post-production", "Asset delivery"],
    equipment: ["Full studio kit", "Multiple lighting setups", "Medium format options"],
    faq: [{ question: "Commercial licensing?", answer: "Usage rights included per agreement terms." }],
    icon: "shirt",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    shortDescription: "Professional corporate and gala event coverage.",
    description: "Polished photography and video for conferences, galas, product launches, and corporate celebrations.",
    deliverables: ["Event coverage", "Edited photos", "Highlight video", "Same-day options"],
    process: ["Brief & timeline", "On-site coverage", "Quick turnaround editing", "Delivery"],
    equipment: ["Dual camera setup", "Event lighting", "Audio capture"],
    faq: [{ question: "Corporate rates?", answer: "Custom quotes based on duration and deliverables." }],
    icon: "building",
  },
  {
    id: "product-photography",
    title: "Product Photography",
    shortDescription: "Premium product and commercial photography.",
    description: "Clean, luxury product imagery for e-commerce, catalogs, and advertising campaigns.",
    deliverables: ["Product shots", "Lifestyle imagery", "Retouched files", "Multiple angles"],
    process: ["Product intake", "Styling & setup", "Shoot", "Retouching", "Delivery"],
    equipment: ["Macro lenses", "Light tent", "Studio backdrop system"],
    faq: [{ question: "Minimum order?", answer: "Packages start from 10 products; contact for quotes." }],
    icon: "package",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "wedding-planning-checklist-pakistan",
    title: "The Ultimate Wedding Planning Checklist for Pakistani Couples",
    excerpt: "A comprehensive guide to planning your Nikah, Mehndi, Barat, and Walima with confidence.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    date: "June 15, 2026",
    category: "Wedding Planning",
    content: "Planning a Pakistani wedding involves coordinating multiple events across several days...",
  },
  {
    slug: "choose-wedding-photographer",
    title: "How to Choose the Right Wedding Photographer in Pakistan",
    excerpt: "Expert tips on evaluating portfolios, packages, and finding your perfect match.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    date: "June 1, 2026",
    category: "Photography Tips",
    content: "Your wedding photos will last a lifetime. Here's how to choose wisely...",
  },
  {
    slug: "bridal-portrait-guide",
    title: "Bridal Portrait Guide: Posing, Lighting & Timing",
    excerpt: "Everything brides need to know for stunning editorial portraits.",
    image: "https://images.unsplash.com/photo-1594552070431-25809a90ccc2?w=800&q=80",
    date: "May 20, 2026",
    category: "Bridal Guides",
    content: "The perfect bridal portrait session starts with preparation...",
  },
  {
    slug: "behind-the-scenes-royal-studio",
    title: "Behind the Scenes: A Royal Studio Wedding Weekend",
    excerpt: "Go behind the lens with our team during a three-day Lahore celebration.",
    image: "https://images.unsplash.com/photo-1493863641943-9b67192fddc6?w=800&q=80",
    date: "May 5, 2026",
    category: "Behind the Scenes",
    content: "Our team arrived in Lahore on Thursday for a weekend of celebrations...",
  },
];

export const blogCategories = [
  "All",
  "Wedding Planning",
  "Photography Tips",
  "Bridal Guides",
  "Behind the Scenes",
];

export const seoKeywords = [
  "Wedding Photographer Burewala",
  "Wedding Photographer Pakistan",
  "Luxury Wedding Photographer Pakistan",
  "Cinematic Wedding Films Pakistan",
  "Bridal Photography Burewala",
  "Nikah Photographer",
  "Mehndi Photography",
  "Barat Photography",
  "Walima Photography",
];

export const heroVideo =
  "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_25fps.mp4";

export const heroPoster =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85";
