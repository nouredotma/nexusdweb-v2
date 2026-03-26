"use client";

import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full px-2 md:px-8 pb-2 md:pb-8">
      <div className="max-w-full mx-auto bg-primary text-white rounded-xl px-6 md:px-16 pt-16 pb-0 overflow-hidden">
        {/* Row 1: Five-column link grid */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-8 md:flex md:flex-nowrap md:justify-between md:gap-x-12">
          {/* Column 1 – Agency */}
          <div>
            <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-5">
              Agency
            </h4>
            <ul className="space-y-3 text-sm p-0 list-none">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Pricing</span>
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 – Resources */}
          <div>
            <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-5">
              Resources
            </h4>
            <ul className="space-y-3 text-sm p-0 list-none">
              <li>
                <a
                  href="#faq"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>FAQ</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Help Center</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 – Legal */}
          <div>
            <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-5">
              Legal
            </h4>
            <ul className="space-y-3 text-sm p-0 list-none">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Privacy Policy</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Terms &amp; Conditions</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Cookie Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 – Connect */}
          <div>
            <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-5">
              Connect
            </h4>
            <ul className="space-y-3 text-sm p-0 list-none">
              <li>
                <a
                  href="https://facebook.com/nexusdweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nexusdweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/nexusdweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5 – Contact Us */}
          <div>
            <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm p-0 list-none">
              <li>
                <span className="text-white/70 font-medium flex items-center gap-0 whitespace-nowrap">
                  <ChevronRight size={14} className="-ml-1 shrink-0" />
                  <span>+212 6 00 00 00 00</span>
                </span>
              </li>
              <li>
                <a
                  href="mailto:contact@nexusdweb.com"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0 whitespace-nowrap"
                >
                  <ChevronRight size={14} className="-ml-1 shrink-0" />
                  <span>contact@nexusdweb.com</span>
                </a>
              </li>
              <li>
                <span className="text-white/70 font-medium flex items-center gap-0 whitespace-nowrap">
                  <ChevronRight size={14} className="-ml-1 shrink-0" />
                  <span>Casablanca, Morocco</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 2: Large bold agency name */}
        <div className="relative flex justify-center py-2 md:py-4">
          <h2 className="text-6xl md:text-[17vw] font-bold text-white tracking-tight text-center leading-none whitespace-nowrap pointer-events-none">
            nexusdweb
          </h2>
        </div>

        {/* Row 3: Copyright with top border */}
        <div className="border-t border-white/20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} NexusDWeb. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
