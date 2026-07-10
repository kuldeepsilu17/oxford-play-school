// src/components/AdmissionForm.tsx
"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    mobile: "",
    classSelection: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.studentName.trim() || !formData.parentName.trim() || !formData.mobile.trim() || !formData.classSelection) {
      setErrorMessage("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    const cleanMobile = formData.mobile.replace(/\D/g, "");
    if (cleanMobile.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
    } catch (err) {
      setErrorMessage("Something went wrong. Please try again or call us directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center shadow-md">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold text-slate-800 mb-2">Inquiry Submitted Successfully!</h3>
        <p className="text-gray-700 mb-4">
          Thank you! We have received your admission inquiry for <strong className="text-purple-600">{formData.studentName}</strong> (Class: {formData.classSelection}).
        </p>
        <p className="text-gray-600 text-sm">
          Our admissions team will reach out to you shortly at <span className="font-semibold text-slate-800">{formData.mobile}</span>.
        </p>
        <button
          onClick={() => {
            setFormData({ studentName: "", parentName: "", mobile: "", classSelection: "" });
            setStatus("idle");
          }}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm font-semibold"
        >
          Submit Another Form
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 max-w-lg mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-slate-800 text-center">Online Admission Enquiry</h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Student Name *</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            placeholder="Child's full name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition"
            required
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Parent / Guardian Name *</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
            placeholder="Parent's full name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition"
            required
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Mobile Number *</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition"
            required
            disabled={status === "submitting"}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Class Seeking Admission *</label>
          <select
            name="classSelection"
            value={formData.classSelection}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600 transition"
            required
            disabled={status === "submitting"}
          >
            <option value="">Select class</option>
            <option value="Nursery">Nursery (Ages 1.5 - 3 yrs)</option>
            <option value="KG">KG (Ages 3 - 4 yrs)</option>
            <option value="Pre-Primary">Pre-Primary (Ages 4 - 5 yrs)</option>
            <option value="Senior KG">Senior KG (Ages 5+ yrs)</option>
          </select>
        </div>

        {status === "error" && (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm border border-red-100">
            <AlertCircle size={18} className="flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:opacity-95 transition disabled:opacity-50"
        >
          {status === "submitting" ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting inquiry...
            </>
          ) : (
            <>
              <Send size={18} />
              Submit Admission Enquiry
            </>
          )}
        </button>
      </form>
    </div>
  );
}
