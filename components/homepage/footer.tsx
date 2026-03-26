"use client";

// No icon imports needed since we use custom SVGs for social links

export default function Footer() {
  return (
    <footer className="w-full text-foreground pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Social */}
          <div className="flex flex-col justify-between">
            <div className="flex justify-center">
              <a href="https://instagram.com/nexusdweb">
                <img src="/blacklogo.png" alt="NexusDWeb Logo" className="h-20" />
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://x.com/nexusdweb"
                aria-label="X (formerly Twitter)"
                className="text-foreground hover:opacity-70 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
                </svg>
              </a>

              <a
                href="https://instagram.com/nexusdweb"
                aria-label="Instagram"
                className="text-foreground hover:opacity-70 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.56.216.96.474 1.38.894.42.42.678.82.894 1.38.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.56-.474.96-.894 1.38-.42.42-.82.678-1.38.894-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.56-.216-.96-.474-1.38-.894-.42-.42-.678-.82-.894-1.38-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.56.474-.96.894-1.38.42-.42.82-.678 1.38-.894.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.013 7.053.072 5.775.132 4.903.337 4.14.633c-.789.306-1.459.717-2.126 1.384S.939 3.351.633 4.14c-.296.763-.501 1.635-.56 2.913C.013 8.334 0 8.741 0 12c0 3.259.013 3.666.072 4.947.06 1.277.265 2.149.56 2.913.306.788.717 1.459 1.384 2.126s1.384 1.078 2.126 1.384c.763.296 1.635.501 2.913.56C8.334 23.987 8.741 24 12 24s3.666-.013 4.947-.072c1.277-.06 2.149-.265 2.913-.56.788-.306 1.459-.717 2.126-1.384s1.384-1.384 2.126-2.126c.296-.763.501-1.635.56-2.913.06-1.281.072-1.688.072-4.947s-.013-3.666-.072-4.947c-.06-1.277-.265-2.149-.56-2.913-.306-.788-.717-1.459-1.384-2.126S18.649.939 17.86.633c-.763-.296-1.635-.501-2.913-.56C15.666.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/nexusdweb"
                aria-label="LinkedIn"
                className="text-foreground hover:opacity-70 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>


              <a
                href="https://youtube.com/@nexusdweb"
                aria-label="YouTube"
                className="text-foreground hover:opacity-70 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* PLATFORM & LEGAL (unchanged structure, icons removed) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground">PLATFORM</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground">LEGAL</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground">LEGAL</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground">LEGAL</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Duplicate PLATFORM block (kept as you requested) */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground">PLATFORM</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">
                <span className="font-bold text-foreground">PLATFORM</span>
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-foreground font-medium hover:text-primary transition"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo */}
          <div>
            <a href="https://instagram.com/nexusdweb">
              <img
                src="/coloredlogo.png"
                alt="NexusDWeb Logo"
                className="inline-block logo-drop"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-foreground/10" />

        {/* Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-6 py-8">
          {/* Row 1 on Mobile: Nav - Center on Desktop */}
          <nav className="order-1 md:order-2 flex justify-center md:pr-30">
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
              <a
                href="#"
                className="text-foreground font-medium hover:text-primary transition text-[13px]"
              >
                Legal Notice
              </a>
              <a
                href="#"
                className="text-foreground font-medium hover:text-primary transition text-[13px]"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-foreground font-medium hover:text-primary transition text-[13px]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-foreground font-medium hover:text-primary transition text-[13px]"
              >
                Cookie Policy
              </a>
              <a
                href="#"
                className="text-foreground font-medium hover:text-primary transition text-[13px]"
              >
                Cookie Settings
              </a>
            </div>
          </nav>

          {/* Row 2 on Mobile: Status & Copyright together - Left on Desktop */}
          <div className="order-2 md:order-1 flex items-center justify-center md:justify-start gap-4">
            <div className="bg-white rounded-full px-2.5 py-2 md:px-3 md:py-2 flex items-center text-[11px] md:text-sm border border-gray-200 md:border-2">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full mr-1.5 md:mr-2 inline-block animate-pulse" />
              <span className="text-foreground/60 font-medium">
                All Systems operational
              </span>
            </div>
            {/* Copyright integrated for mobile layout */}
            <p className="text-foreground text-[13px] md:hidden">© 2025 NexusDWeb</p>
          </div>

          {/* Copyright - Right on Desktop - Hidden on mobile because it's in the row above */}
          <div className="hidden md:flex order-3 justify-end">
            <p className="text-foreground text-sm">© 2025 NexusDWeb</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
