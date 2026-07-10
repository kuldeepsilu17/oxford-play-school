# 🏫 Oxford Play School Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-f024be?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://opensource.org/licenses/MIT)

A premium, production-grade, fully responsive, and SEO-optimized website for **Oxford Play School**, located in Khara Kheda, Tibbi Tehsil, Hanumangarh District, Rajasthan, India. Built with a focus on modern UI/UX, fast performance, accessibility, and robust Local SEO ranking.

---

## 📖 Project Description

The **Oxford Play School Website** serves as a digital gateway for parents, guardians, and students to explore the school's facilities, admissions process, and educational values. Built using a mobile-first philosophy, it highlights the school's mission: **"Building Bright Futures with Love & Learning."**

The platform provides a smooth user journey from discovering facilities to submitting admission inquiries, catering to parents seeking premium early education for children aged 1.5 to 5+ years.

---

## ✨ Features

*   📱 **Fully Responsive Design**: Tailored layout supporting seamless display across device resolutions (320px, 375px, 425px, 768px, 1024px, 1440px).
*   🚀 **Performance First**: Localized media assets (WebP format), lazy loading images, and next/font optimizations.
*   🔍 **SEO Optimized**: Fully integrated JSON-LD structured data (FAQ, LocalBusiness, school schemas), custom robots.txt, dynamic sitemaps, and strict heading hierarchy.
*   🧭 **Glassmorphism Navbar**: Sticky navigation header with backdrop blur and smooth sliding animation.
*   📊 **Statistics Counters**: Animated numeric cards highlighting key achievements (students, teachers, satisfaction).
*   🏫 **3x3 Facilities Grid**: Responsive grid layout for Smart Classrooms, Computer Learning, B.Ed Teachers, CCTV Security, and Play Areas.
*   🍱 **Caring Beyond Education**: 2x2 grid explaining lunch hours guidance, personal hygiene, values, and student care.
*   📝 **Interactive Admission Form**: Full validation client-side inquiry form with submission status states.
*   🗺️ **Google Maps Integration**: Responsive, lazy-loaded local mapping for parent coordinates.
*   💬 **Accordion FAQ**: Compact accordion layouts utilizing collapsible Framer Motion containers.

---

## 🛠️ Technology Stack

*   **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React Server Components)
*   **Library**: [React.js 18](https://reactjs.org/)
*   **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
*   **Animations**: [Framer Motion 11](https://www.framer.com/motion/)
*   **Language**: [TypeScript 5](https://www.typescriptlang.org/)
*   **Deployment**: Optimized for [Vercel](https://vercel.com/)

---

## 📸 Screenshots

*Placeholders for screenshots showing responsive screen options.*

| Mobile (375px) | Desktop (1440px) |
| :---: | :---: |
| `[Screenshot Placeholder: Mobile View]` | `[Screenshot Placeholder: Desktop View]` |

---

## 📂 Project Structure

```text
oxford-play-school/
├── package.json              # Main project dependencies and scripts
├── tailwind.config.ts        # Tailwind utility and theme extends
├── tsconfig.json             # TypeScript compiler rules
├── public/                   # Static public assets
│   ├── robots.txt            # Search engine crawl rules
│   └── images/               # WebP optimized localized images
└── src/
    ├── components/           # Reusable UI components
    │   ├── AdmissionForm.tsx # Client enquiry form
    │   ├── AnimatedCard.tsx  # RSC animation wrapper
    │   ├── FAQSection.tsx    # Smooth accordion cards
    │   ├── FeatureCard.tsx   # Facility display elements
    │   ├── Navbar.tsx        # Sticky layout header
    │   └── Testimonials.tsx  # Parent reviews layout
    ├── lib/                  # Static data and helper files
    │   ├── schema.ts         # Structured schema JSON-LD markups
    │   └── seo-config.ts     # Metadata helpers
    └── app/                  # Application routing pages
        ├── layout.tsx        # Root HTML shell
        ├── page.tsx          # Homepage layout
        ├── sitemap.ts        # Dynamic site schema XML
        ├── about-us/         # Mission, vision, core values
        ├── admissions/       # Eligibility, details, form
        ├── facilities/       # 3x3 Grid of core infrastructure
        ├── transport-facility/ # School bus map coverage
        └── contact-us/       # Form, phone, mail info
```

---

## 🚀 Installation Guide

### Prerequisites

Ensure you have Node.js (v18.x or later) and npm installed.

### 1. Clone the Repository

```bash
git clone https://github.com/kuldeepsilu17/oxford-play-school.git
cd oxford-play-school
```

### 2. Install Dependencies

Install packages for both the root and prefix directories:

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for Production

```bash
npm run build
```

This compiles a highly optimized static build utilizing static HTML generation.

### 5. Deployment

Push to GitHub and connect your repository to [Vercel](https://vercel.com/) for automatic CI/CD deployment.

---

## 🔍 SEO Features

*   **Meta Tags**: Tailored meta titles, descriptions, and keywords for each page using Next.js Metadata API.
*   **Open Graph**: Fully configured rich social snippets (OG Title, Description, Image, Locale).
*   **Schema Markup**: JSON-LD Structured data including `EducationalOrganization`, `LocalBusiness`, `FAQPage`, and `BreadcrumbList`.
*   **Sitemap & Robots**: Dynamic `sitemap.xml` routes and respectful crawling policies in `robots.txt`.
*   **Local SEO**: Specific keyphrase optimization matching local regional search queries like *Best school in Tibbi*, *Play School in Hanumangarh*, *Nursery School Rajasthan*, and *Khara Kheda*.

---

## ⚡ Performance Features

*   **WebP Image Format**: Optimized local image resolution lowering payload size.
*   **Lazy Loading**: Native browser lazy loading with Next.js `<Image />` component wrappers.
*   **System Font Fallbacks**: Prevents flash of unstyled text using Next.js `next/font/google` loaders.
*   **Core Web Vitals**: Target score of 90+ on Google PageSpeed Insights through component hydration partitioning.

---

## 🔮 Future Improvements

*   🎫 **Online Admission Management**: Parent-student onboarding portal.
*   🎒 **Student Portal**: Access to homework, report cards, and activities.
*   💳 **Online Fee Payment**: Integrated payment gateway (Razorpay/Paytm).
*   🗓️ **Event Management System**: Calendar for holidays, exams, and annual celebrations.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## ✉️ Contact

*   **Developer**: [Kuldeep Silu](https://github.com/kuldeepsilu17)
*   **Email**: info@oxfordplayschool.com
*   **Address**: Khara Kheda, Tibbi, Hanumangarh, Rajasthan, India
