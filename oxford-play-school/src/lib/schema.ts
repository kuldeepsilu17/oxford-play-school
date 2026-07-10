// Schema.org JSON-LD structured data for SEO
import { SEO_CONFIG } from "./seo-config";

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Oxford Play School",
  description: "Quality early childhood education in Tibbi, Hanumangarh Rajasthan",
  url: "https://oxfordplayschool.com",
  logo: "https://oxfordplayschool.com/logo.png",
  image: "https://oxfordplayschool.com/school.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khara Kheda",
    addressLocality: "Tibbi",
    addressRegion: "Hanumangarh",
    postalCode: "335523",
    addressCountry: "IN"
  },
  telephone: SEO_CONFIG.school.phone,
  email: "info@oxfordplayschool.com",
  foundingDate: "2015",
  areaServed: ["Tibbi", "Hanumangarh", "Rajasthan"],
  priceRange: "₹15000 - ₹25000",
  sameAs: [
    "https://www.facebook.com/oxfordplayschool",
    "https://www.instagram.com/oxfordplayschool",
    "https://www.whatsapp.com"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Oxford Play School",
  url: "https://oxfordplayschool.com",
  logo: "https://oxfordplayschool.com/logo.png",
  sameAs: [
    "https://www.facebook.com/oxfordplayschool",
    "https://www.instagram.com/oxfordplayschool"
  ],
  contact: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: SEO_CONFIG.school.phone,
    email: "info@oxfordplayschool.com"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Oxford Play School",
  image: "https://oxfordplayschool.com/school.jpg",
  "@id": "https://oxfordplayschool.com",
  url: "https://oxfordplayschool.com",
  telephone: SEO_CONFIG.school.phone,
  email: "info@oxfordplayschool.com",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "29.4242",
    longitude: "74.3045"
  },
  priceRange: "₹15000-₹25000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Khara Kheda",
    addressLocality: "Tibbi",
    addressRegion: "Hanumangarh",
    postalCode: "335523",
    addressCountry: "IN"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "11:30"
    }
  ]
};

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(faq => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://oxfordplayschool.com${item.url}`
  }))
});

export const blogPostSchema = (post: {
  title: string,
  description: string,
  image: string,
  date: string,
  author: string,
  content: string
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  image: post.image,
  datePublished: post.date,
  author: {
    "@type": "Person",
    name: post.author,
    url: "https://oxfordplayschool.com"
  },
  publisher: {
    "@type": "Organization",
    name: "Oxford Play School",
    logo: {
      "@type": "ImageObject",
      url: "https://oxfordplayschool.com/logo.png"
    }
  },
  articleBody: post.content
});
