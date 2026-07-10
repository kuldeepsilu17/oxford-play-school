// src/app/admissions/page.tsx
import { Metadata } from "next";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { generateMetadata as generateSeoMetadata, SEO_CONFIG } from "@/lib/seo-config";
import Script from "next/script";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";
import AdmissionForm from "@/components/AdmissionForm";

export const metadata: Metadata = generateSeoMetadata({
  title: "Admissions | Oxford Play School - Apply Now for 2026",
  description: "Apply for admission at Oxford Play School. We welcome children aged 1.5-5 years. Online admission form, affordable fees, and flexible admission criteria.",
  canonical: "https://oxfordplayschool.com/admissions"
});

export default function AdmissionsPage() {
  return (
    <>
      <Hero
        title="Admissions 2026"
        subtitle="Join Oxford Play School"
        description="Admissions are open for children aged 1.5-5 years. Experience quality early childhood education."
      />

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6">Admission Process</h2>
            <p className="text-lg text-gray-700 text-center mb-12">
              Our admission process is simple and transparent. Follow these steps to enroll your child.
            </p>

            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: "Contact School",
                  description: "Call us or visit our campus. Schedule a school tour to see our facilities."
                },
                {
                  step: 2,
                  title: "Fill Application Form",
                  description: "Complete the admission form with your child's and parent's details."
                },
                {
                  step: 3,
                  title: "Interaction & Assessment",
                  description: "We may have a short interaction with your child to understand their needs."
                },
                {
                  step: 4,
                  title: "Confirmation",
                  description: "Upon approval, submit fee and documents. Confirm admission."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Eligibility & Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                class: "Nursery",
                age: "Ages 1.5 - 3 years",
                focus: "Basic learning, play-based activities, language development"
              },
              {
                class: "KG (Kindergarten)",
                age: "Ages 3 - 4 years",
                focus: "Cognitive skills, social interaction, pre-academic learning"
              },
              {
                class: "Pre-Primary",
                age: "Ages 4 - 5 years",
                focus: "Academic readiness, advanced activities, school preparation"
              },
              {
                class: "Senior KG",
                age: "Ages 5+ years",
                focus: "Advanced academics, writing basics, primary school prep"
              }
            ].map((item) => (
              <div key={item.class} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2 text-purple-600">{item.class}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-4">{item.age}</p>
                <p className="text-gray-600">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Fee Structure</h2>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-6">
              Oxford Play School offers competitive and transparent fee structure. We believe in providing quality education at affordable rates.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between py-3 border-b border-gray-300">
                <span className="font-semibold">Nursery</span>
                <span className="text-purple-600 font-bold">₹15,000 - 18,000/year</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-300">
                <span className="font-semibold">KG</span>
                <span className="text-purple-600 font-bold">₹18,000 - 20,000/year</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-300">
                <span className="font-semibold">Pre-Primary</span>
                <span className="text-purple-600 font-bold">₹20,000 - 25,000/year</span>
              </div>
              <div className="flex justify-between py-3">
                <span className="font-semibold">Senior KG</span>
                <span className="text-purple-600 font-bold">₹22,000 - 25,000/year</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              * Additional charges for transport, meals, and activities. Discounts available for siblings. Installment options available.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Required Documents</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Birth Certificate",
              "Aadhar Card (Parent & Child)",
              "Recent Passport Size Photos",
              "Address Proof",
              "Medical Health Certificate",
              "Immunization Record"
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow">
                <FileText className="text-purple-600 flex-shrink-0" size={24} />
                <span className="font-semibold text-gray-700">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Online Admission Form Section */}
      <AnimatedSection className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Enroll Your Child Today</h2>
            <p className="text-xl text-gray-600 max-w-xl mx-auto">
              Fill out this quick enquiry form and our admissions coordinator will contact you to finalize the admission details.
            </p>
          </div>
          <AdmissionForm />
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Admit Your Child?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for more information and to schedule a campus visit.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href={`tel:${SEO_CONFIG.school.phone.replace(/[^+\d]/g, "")}`} className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
              Call Us
            </a>
            <a href="/contact-us" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              Contact Form
            </a>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
