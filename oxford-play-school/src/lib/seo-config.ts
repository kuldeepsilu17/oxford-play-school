// SEO utilities and helpers

export const SEO_CONFIG = {
  baseUrl: "https://oxfordplayschool.com",
  school: {
    name: "Oxford Play School",
    location: "Khara Kheda, Tibbi, Hanumangarh, Rajasthan",
    phone: "+91-98765-43210",
    email: "info@oxfordplayschool.com",
    whatsapp: "919876543210"
  },
  openGraph: {
    type: "website",
    locale: "en_IN"
  }
};

export const KEYWORDS = {
  primary: [
    "Best Play School in Tibbi",
    "Best School in Hanumangarh",
    "Oxford Play School",
    "School in Khara Kheda",
    "Kids School in Rajasthan",
    "Nursery School in Tibbi",
    "Preschool in Hanumangarh",
    "Child Education Rajasthan"
  ],
  secondary: [
    "Friendly school environment",
    "B.Ed graduate teachers",
    "School bus facility",
    "Smart classroom school",
    "Best preschool near Tibbi",
    "Safe school for kids",
    "Activity-based learning school",
    "Affordable school in Hanumangarh"
  ],
  longTail: [
    "Best play school for kids in Hanumangarh Rajasthan",
    "Affordable preschool with bus facility in Tibbi",
    "Child-friendly school in Khara Kheda",
    "Top nursery school near Tibbi Rajasthan",
    "Preschool with activities and trips in Hanumangarh"
  ]
};

export const generateMetadata = (config: {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}) => {
  const ogImage = config.ogImage || "https://oxfordplayschool.com/og-image.jpg";
  
  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords || KEYWORDS.primary.join(", "),
    canonical: config.canonical,
    openGraph: {
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      url: config.canonical,
      siteName: SEO_CONFIG.school.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.ogTitle || config.title
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: config.ogTitle || config.title,
      description: config.ogDescription || config.description,
      images: [ogImage]
    }
  };
};

export const GA_ID = "G-XXXXXXXXXX"; // Replace with actual GA ID

export const HEADER_NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Admissions", href: "/admissions" },
  { name: "Facilities", href: "/facilities" },
  { name: "Activities", href: "/school-activities" },
  { name: "Transport", href: "/transport-facility" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact-us" }
];
