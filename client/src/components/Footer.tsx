import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[var(--light-blue)] rounded-lg flex items-center justify-center mr-3">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7-7-7 7v11a2 2 0 002 2h3v-7h4v7h3a2 2 0 002-2V9z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Coastline Spray Foam</h3>
                <p className="text-sm text-gray-400">Solutions</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional spray foam insulation services in Central Florida. Improving energy efficiency and comfort for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Residential Insulation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Commercial Insulation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Attic Insulation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Crawl Space Sealing
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors duration-200">
                  Energy Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas Served */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Areas Served</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Cocoa, FL</li>
              <li>Titusville, FL</li>
              <li>Melbourne, FL</li>
              <li>Rockledge, FL</li>
              <li>Merritt Island, FL</li>
              <li>Palm Bay, FL</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <a href="tel:3216527465" className="hover:text-white transition-colors duration-200">
                    (321) 652-7465
                  </a>
                  <p className="text-sm">Mon-Fri: 7AM-6PM | Sat: 8AM-4PM</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <div>
                  <a href="mailto:info@coastlinesprayfoam.com" className="hover:text-white transition-colors duration-200">
                    info@coastlinesprayfoam.com
                  </a>
                  <p className="text-sm">We respond within 24 hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p>Central Florida</p>
                  <p>Serving Cocoa & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2023 Coastline Spray Foam Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
