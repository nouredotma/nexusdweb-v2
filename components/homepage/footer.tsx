"use client";

import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isAnchor = href.startsWith("#") || href.includes("#")
    if (isAnchor) {
      const hash = href.includes("#") ? `#${href.split("#")[1]}` : href
      
      if (pathname === "/") {
        e.preventDefault()
        const destination = document.querySelector(hash)
        if (destination) {
          destination.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <footer className="w-full px-2 md:px-8 pb-2 md:pb-8">
      <div className="max-w-full mx-auto bg-primary text-white rounded-sm md:rounded-xl px-6 md:px-16 pt-16 pb-0 overflow-hidden">
        {/* Row 1: Five-column link grid */}
        <div className="grid grid-cols-2 gap-y-8 gap-x-8 md:flex md:flex-nowrap md:justify-between md:gap-x-12">
          {/* Column 1 – Agency */}
          <div>
            <h4 className="font-bold text-white uppercase text-sm tracking-wider mb-5">
              Agency
            </h4>
            <ul className="space-y-3 text-sm p-0 list-none">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#features"
                  onClick={(e) => handleScroll(e, "/#features")}
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Our Work</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#use-cases"
                  onClick={(e) => handleScroll(e, "/#use-cases")}
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#testimonials"
                  onClick={(e) => handleScroll(e, "/#testimonials")}
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  onClick={(e) => handleScroll(e, "/#pricing")}
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Pricing</span>
                </Link>
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
                <Link
                  href="/#features"
                  onClick={(e) => handleScroll(e, "/#features")}
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Our Work</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  onClick={(e) => handleScroll(e, "/#faq")}
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0"
                >
                  <ChevronRight size={14} className="-ml-1" />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <div className="text-white/40 pointer-events-none font-medium flex items-center gap-0 cursor-not-allowed">
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Blog</span>
                  <span className="ml-2 text-[10px] uppercase tracking-tighter opacity-50 border border-white/20 px-1 rounded-sm">Soon</span>
                </div>
              </li>
              <li>
                <div className="text-white/40 pointer-events-none font-medium flex items-center gap-0 cursor-not-allowed">
                  <ChevronRight size={14} className="-ml-1" />
                  <span>Help Center</span>
                  <span className="ml-2 text-[10px] uppercase tracking-tighter opacity-50 border border-white/20 px-1 rounded-sm">Soon</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3 – Legal */}
          <div className="opacity-40 pointer-events-none select-none">
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
          <div className="opacity-40 pointer-events-none select-none">
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
                  <span>+212 6 60 71 50 95</span>
                </span>
              </li>
              <li>
                <a
                  href="mailto:omar@nexusdweb.com"
                  className="text-white/70 hover:text-white transition font-medium flex items-center gap-0 whitespace-nowrap"
                >
                  <ChevronRight size={14} className="-ml-1 shrink-0" />
                  <span>omar@nexusdweb.com</span>
                </a>
              </li>
              <li>
                <span className="text-white/70 font-medium flex items-center gap-0 whitespace-nowrap">
                  <ChevronRight size={14} className="-ml-1 shrink-0" />
                  <span>Marrakech, Morocco</span>
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
        <div className="border-t border-white/20 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} NexusDWeb. All rights reserved.
          </p>
          <div className="items-center gap-2 text-sm text-white/70 hidden md:inline-flex">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block animate-pulse" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
