// FAQ data with schema markup

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "Which is the best play school in Tibbi?",
    answer: "Oxford Play School offers quality education with caring B.Ed qualified teachers and modern learning methods. Located in Khara Kheda, Tibbi, our school provides a friendly environment focused on holistic child development with activity-based learning.",
    category: "General"
  },
  {
    question: "Does Oxford Play School provide bus facility?",
    answer: "Yes, Oxford Play School provides safe and comfortable transport services for students across Tibbi, Hanumangarh, and surrounding areas. Our buses are equipped with safety features and trained attendants.",
    category: "Facilities"
  },
  {
    question: "Are teachers at Oxford Play School qualified?",
    answer: "Yes, all teachers are experienced B.Ed qualified professionals. They bring expertise in early childhood education and focus on individual child development through activity-based learning methods.",
    category: "Teachers"
  },
  {
    question: "What is the admission age at Oxford Play School?",
    answer: "We welcome children from age 1.5 to 5 years. Classes include Nursery, KG, and Pre-Primary. We follow a flexible admission policy and can discuss your child's readiness.",
    category: "Admissions"
  },
  {
    question: "What activities are included in the curriculum?",
    answer: "Our curriculum includes sensory play, creative arts and crafts, outdoor exploration, science experiments, music and movement, story-based learning, and role-playing games. All activities are designed to support holistic development.",
    category: "Academics"
  },
  {
    question: "Does the school provide mid-day meals?",
    answer: "Yes, nutritious meals are provided daily prepared with hygiene standards. We accommodate dietary preferences and allergies. Menu is designed with nutritionists for balanced nutrition.",
    category: "Facilities"
  },
  {
    question: "What are the school fees at Oxford Play School?",
    answer: "Our fees are affordable and competitive. Pricing varies by class and includes tuition, activities, and other educational materials. Contact us for detailed fee structure and payment options.",
    category: "Admissions"
  },
  {
    question: "How is the school safety and security?",
    answer: "We maintain strict safety protocols including CCTV surveillance, trained staff, secure boundaries, and regular safety drills. Parents can monitor their children through our secure mobile app.",
    category: "Safety"
  },
  {
    question: "Does the school have outdoor play area?",
    answer: "Yes, we have a spacious, well-maintained playground with age-appropriate equipment. Regular outdoor play is part of our curriculum for physical development.",
    category: "Facilities"
  },
  {
    question: "How often are progress reports shared with parents?",
    answer: "We maintain regular communication with parents through monthly progress reports, parent-teacher meetings, and a mobile app for daily updates. We believe in transparent, consistent communication.",
    category: "Parent Communication"
  },
  {
    question: "When does admission for 2026 session start?",
    answer: "Admissions for 2026 session are open. We recommend visiting our school and scheduling a campus tour. You can register for admission online or contact us for more information.",
    category: "Admissions"
  },
  {
    question: "What is the class size at Oxford Play School?",
    answer: "We maintain small class sizes (typically 15-20 students per class) to ensure individual attention to each child. This allows teachers to focus on each child's needs and development.",
    category: "Academics"
  },
  {
    question: "Is there any scholarship or fee concession available?",
    answer: "We believe in inclusive education. Fee concessions and scholarship opportunities may be available for eligible students. Contact our admission team to discuss your circumstances.",
    category: "Admissions"
  },
  {
    question: "How can I schedule a school tour?",
    answer: "You can call us at +91-98765-43210, WhatsApp us, or fill the contact form on our website. We offer campus tours to help parents understand our facilities and teaching methodology.",
    category: "General"
  }
];

export const faqCategories = [
  "General",
  "Admissions",
  "Academics",
  "Facilities",
  "Teachers",
  "Safety",
  "Parent Communication"
];
