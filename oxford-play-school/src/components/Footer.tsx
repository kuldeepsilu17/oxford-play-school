import Link from "next/link";
import { SEO_CONFIG, HEADER_NAV_ITEMS } from "@/lib/seo-config";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center font-bold">
                O
              </div>
              <h3 className="text-xl font-bold">Oxford Play School</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Quality early childhood education in Tibbi, Hanumangarh, Rajasthan with friendly environment and activity-based learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {HEADER_NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Khara Kheda, Tibbi</p>
                  <p className="text-gray-400">Hanumangarh, Rajasthan 335523</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} />
                <a
                  href={`tel:${SEO_CONFIG.school.phone}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {SEO_CONFIG.school.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} />
                <a
                  href={`mailto:${SEO_CONFIG.school.email}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {SEO_CONFIG.school.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4">School Hours</h4>
            <div className="space-y-2 text-gray-400">
              <p><strong>Monday - Friday:</strong> 8:00 AM - 12:30 PM</p>
              <p><strong>Saturday:</strong> 8:00 AM - 11:30 AM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Oxford Play School &mdash; All Rights Reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
