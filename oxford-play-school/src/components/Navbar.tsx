"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { HEADER_NAV_ITEMS, SEO_CONFIG } from "@/lib/seo-config";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white text-center py-2 px-4 text-xs md:text-sm font-semibold tracking-wide flex justify-center items-center gap-2 shadow-inner">
        <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded text-[10px] uppercase font-bold animate-pulse">Admissions Open</span>
        <span>Admissions Open for 2026 Session! Join Oxford Play School.</span>
        <Link href="/admissions" className="underline hover:text-blue-100 transition ml-2 font-bold">Apply Now</Link>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 md:gap-2 font-bold text-sm md:text-lg lg:text-xl text-purple-600 flex-shrink-0 whitespace-nowrap"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xs md:text-sm">
                O
              </div>
              <span className="hidden sm:inline">Oxford Play School</span>
              <span className="sm:hidden">Oxford</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {HEADER_NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 lg:px-3 py-2 text-xs lg:text-sm transition duration-200 font-medium ${
                    isActive(item.href)
                      ? "text-purple-600"
                      : "text-gray-700 hover:text-purple-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 flex-shrink-0">
              <a
                href={`tel:${SEO_CONFIG.school.phone}`}
                className="flex items-center text-gray-700 hover:text-purple-600 transition"
                aria-label="Call Oxford Play School"
                title="Call us"
              >
                <Phone size={18} />
              </a>
              <a
                href={`https://wa.me/${SEO_CONFIG.school.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 lg:px-4 py-1.5 lg:py-2 bg-green-500 text-white text-xs lg:text-sm rounded-lg hover:bg-green-600 transition whitespace-nowrap"
                aria-label="WhatsApp Oxford Play School"
              >
                <MessageCircle size={16} />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
              <Link
                href="/admissions"
                className="px-2 lg:px-4 py-1.5 lg:py-2 bg-purple-600 text-white text-xs lg:text-sm rounded-lg hover:bg-purple-700 transition font-semibold whitespace-nowrap"
              >
                Apply
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {HEADER_NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 rounded transition ${
                    isActive(item.href)
                      ? "bg-purple-50 text-purple-600 font-medium"
                      : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2 px-4">
                <a
                  href={`tel:${SEO_CONFIG.school.phone}`}
                  className="block w-full text-center px-4 py-2 border border-purple-600 text-purple-600 rounded hover:bg-purple-50 transition"
                >
                  Call Us
                </a>
                <a
                  href={`https://wa.me/${SEO_CONFIG.school.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  WhatsApp
                </a>
                <Link
                  href="/admissions"
                  className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition font-semibold"
                >
                  Admission
                </Link>
              </div>
            </div>
          )}
        </div>

      </nav>
    </div>
  );
}
