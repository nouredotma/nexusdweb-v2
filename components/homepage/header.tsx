"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

type NavItem = NavLink | NavDropdown

interface NavLink {
  name: string
  href: string
  type?: never
}

interface NavDropdown {
  name: string
  type: "dropdown"
  description?: string
  items: Array<{ name: string; href: string }>
}

function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 870 870" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0 C26.94909849 -0.65331148 51.07607722 5.70341472 72.6796875 22.15625 C73.6696875 22.81625 74.6596875 23.47625 75.6796875 24.15625 C75.6796875 24.81625 75.6796875 25.47625 75.6796875 26.15625 C76.25203125 26.38828125 76.824375 26.6203125 77.4140625 26.859375 C91.30871598 34.8128663 99.58376784 57.89413539 103.8671875 72.09375 C113.90430234 109.20679156 107.06182805 147.54125448 94.6796875 183.15625 C94.3604834 184.08453613 94.0412793 185.01282227 93.71240234 185.96923828 C87.58547173 203.59436527 79.8210722 220.39531989 71.6796875 237.15625 C71.36864075 237.797901 71.05759399 238.439552 70.73712158 239.10064697 C62.78863883 255.48137951 54.42408309 271.53818508 45.31103516 287.30810547 C43.01881772 291.31005228 40.78854526 295.34547854 38.55322266 299.37939453 C32.68942375 309.94929734 26.61430651 320.3661846 20.3581543 330.70825195 C14.56654108 340.29558326 8.97099923 349.98956124 3.39453125 359.703125 C0.90530573 364.0371206 -1.60251357 368.35943873 -4.12890625 372.671875 C-4.74459473 373.72310547 -5.3602832 374.77433594 -5.99462891 375.85742188 C-7.19591372 377.90465023 -8.3999424 379.95027141 -9.60693359 381.99414062 C-11.9846703 386.04141011 -14.33538861 390.06125573 -16.36328125 394.296875 C-19.6898004 401.2185633 -22.45313756 404.44472844 -29.16015625 408.171875 C-57.65431722 426.06437658 -75.18015972 460.67686053 -83.3203125 492.15625 C-83.63742187 493.36667969 -83.95453125 494.57710937 -84.28125 495.82421875 C-88.61153374 514.11002088 -89.31452002 533.18979035 -87.5703125 551.84375 C-87.4779834 552.97611084 -87.4779834 552.97611084 -87.38378906 554.13134766 C-86.86331425 558.91172526 -85.87776818 561.86112468 -82.3203125 565.15625 C-78.70481399 566.22960112 -75.289775 565.57883622 -71.8828125 564.09375 C-69.57000106 561.22586381 -69.50803928 558.7856345 -69.3203125 555.15625 C-69.47653076 554.39948975 -69.63274902 553.64272949 -69.79370117 552.86303711 C-76.16039497 520.13817197 -66.39663115 481.25523305 -48.29418945 453.78417969 C-35.03422975 434.37936061 -17.63129623 418.65711034 6.09375 413.81640625 C33.80886181 409.23014164 60.9914081 416.14099396 83.6796875 432.15625 C90.39265943 436.97207769 90.39265943 436.97207769 92.6796875 439.15625 C92.6796875 439.81625 92.6796875 440.47625 92.6796875 441.15625 C93.3396875 441.15625 93.9996875 441.15625 94.6796875 441.15625 C94.6796875 441.81625 94.6796875 442.47625 94.6796875 443.15625 C95.6696875 443.48625 96.6596875 443.81625 97.6796875 444.15625 C124.67239517 472.55821551 137.22044172 512.19493863 142.6796875 550.15625 C142.85701416 551.32333496 143.03434082 552.49041992 143.21704102 553.69287109 C144.89718717 565.57212804 145.01872631 577.41018234 144.99536133 589.39208984 C144.99221188 592.75521634 145.01571315 596.11745082 145.04101562 599.48046875 C145.0834019 613.92956082 144.00110173 627.8961074 141.6796875 642.15625 C141.48624756 643.35282227 141.29280762 644.54939453 141.09350586 645.78222656 C140.61159257 648.52552988 140.07698607 651.24570114 139.4921875 653.96875 C139.28352051 654.94408691 139.07485352 655.91942383 138.85986328 656.92431641 C129.07369584 700.86777062 109.64488723 740.46290107 78.6796875 773.15625 C78.18339844 773.68653809 77.68710937 774.21682617 77.17578125 774.76318359 C49.84440217 803.81588034 13.85301321 819.82213718 -25.3203125 825.15625 C-26.29097656 825.28902344 -27.26164063 825.42179688 -28.26171875 825.55859375 C-70.85238763 830.30534005 -117.73621719 821.0023425 -152.3203125 795.15625 C-153.1453125 794.55554688 -153.9703125 793.95484375 -154.8203125 793.3359375 C-174.31574914 778.52197084 -187.84141473 759.50709013 -199.3203125 738.15625 C-199.68753418 737.47401367 -200.05475586 736.79177734 -200.43310547 736.08886719 C-223.02313524 693.24314609 -228.29234442 641.84254724 -229.3203125 594.15625 C-229.34899414 592.8976416 -229.37767578 591.6390332 -229.40722656 590.34228516 C-231.44753256 485.11156648 -216.13415591 376.06239547 -186.3203125 252.15625 C-185.95893937 250.76107937 -185.59761129 249.36589706 -185.23632812 247.97070312 C-165.75968592 173.05418572 -138.78582039 89.20075497 -52.6953125 15.09375 C-36.74828169 6.0026353 -18.2972747 0.86104822 0 0 Z"
        fill="currentColor"
        transform="translate(477.3203125,29.84375)"
      />
    </svg>
  )
}


export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const shouldShowScrolledHeader = false

  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(shouldShowScrolledHeader)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100 || shouldShowScrolledHeader) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  })

  useEffect(() => {
    if (shouldShowScrolledHeader) {
      setVisible(true)
    }
  }, [shouldShowScrolledHeader])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setHoveredDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const destination = document.querySelector(href)
      if (destination) {
        destination.scrollIntoView({ behavior: "smooth" })
      }
      setMobileMenuOpen(false)
    }
  }

  const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      type: "dropdown",
      description: "Advanced tools and frameworks built to accelerate your workflow.",
      items: [
        { name: "Features", href: "#" },
        { name: "Solutions", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Integrations", href: "#" },
      ],
    },
    { name: "Pricing", href: "#pricing" },
    {
      name: "Resources",
      type: "dropdown",
      description: "Guides, APIs, and insights to help you build faster.",
      items: [
        { name: "Documentation", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Guides", href: "#" },
      ],
    },
    {
      name: "Company",
      type: "dropdown",
      description: "Empowering developers through design and performance.",
      items: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
  ]

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-9999 w-full">
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "80%" : "90%",
          y: visible ? 20 : 10,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
          borderRadius: visible ? "0.375rem" : "9999px",
        }}
        className={`relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-3 lg:flex ${
          visible ? "bg-white" : "bg-transparent"
        }`}
      >
        <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
          <Logo className={`h-8 w-8 transition-colors ${visible ? "text-primary" : "text-black"}`} />
        </Link>

        <div
          onMouseLeave={() => {
            setHovered(null)
            setHoveredDropdown(null)
          }}
          className="hidden lg:flex flex-1 items-center justify-center space-x-1"
        >
          {navItems.map((item, idx) => (
            <div
              key={`nav-item-${idx}`}
              className="relative"
              onMouseEnter={() => {
                setHovered(idx)
                setHoveredDropdown(item.type === "dropdown" ? item.name : null)
              }}
            >
              {item.type === "dropdown" ? (
                <div
                  className="relative group px-1"
                >
                  <button
                    className={`relative px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer flex items-center gap-1.5 text-sm font-medium ${
                      hovered === idx
                        ? "text-white"
                        : visible
                          ? "text-black"
                          : "text-black"
                    }`}
                  >
                    {hovered === idx && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 h-full w-full rounded-full bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-20 flex items-center gap-1">
                      {item.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${hoveredDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  <AnimatePresence>
                    {hoveredDropdown === item.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                        {/* Invisible bridge to prevent pointer-events from dropping */}
                        <div className="absolute top-0 left-0 right-0 h-4 -translate-y-full" />
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="w-[420px] bg-white rounded-lg shadow-[0_15px_50px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden z-50 flex flex-row"
                        >
                          {/* Info Column (Left) */}
                          <div className="w-[185px] bg-white p-4 flex flex-col justify-between border-r border-gray-100">
                            <div>
                              <h4 className="text-sm font-bold text-black mb-1.5">{item.name}</h4>
                              <p className="text-[11px] text-gray-500">
                                {item.description}
                              </p>
                            </div>
                            <div className="mt-6">
                              <Button className="w-full text-[10px] h-8 bg-primary text-white cursor-pointer rounded-full font-bold shadow-[0_8px_16px_-4px_rgba(255,69,0,0.4)] active:translate-y-0.5">
                                Book a Call Today
                              </Button>
                            </div>
                          </div>

                          {/* Links Column (Right) */}
                          <div className="flex-1 p-2 bg-white flex flex-col justify-start pt-3">
                            <div className="grid grid-cols-1 gap-0.5">
                              {item.items?.map((subitem, subidx) => (
                                <Link
                                  key={subidx}
                                  href={subitem.href}
                                  onClick={(e) => handleScroll(e, subitem.href)}
                                  className="group/item flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-50 transition-all"
                                >
                                  <span className="text-gray-800 group-hover/item:text-primary text-[13px] font-medium">
                                    {subitem.name}
                                  </span>
                                  <svg 
                                    className="w-4 h-4 text-gray-400 group-hover/item:text-primary transform -translate-x-1 opacity-0 group-hover/item:translate-x-0 group-hover/item:opacity-100 transition-all duration-200"
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  className={`relative px-4 py-2 rounded-full transition-colors duration-300 cursor-pointer text-sm font-medium flex items-center ${
                    hovered === idx ? "text-white" : visible ? "text-black" : "text-black"
                  } ${pathname && pathname === item.href ? "text-primary" : ""}`}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                >
                  {hovered === idx && (
                    <motion.div
                      layoutId="nav-hover-pill"
                      className="absolute inset-0 h-full w-full rounded-full bg-primary"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-20">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-end relative z-30 gap-4">
          <Link href="https://nexusdweb.vercel.app">
            <Button
              variant="outline"
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                visible
                  ? "text-white bg-black hover:bg-white hover:text-black border border-black hover:border-black"
                  : "text-black bg-white hover:bg-white/80 hover:text-black border border-gray"
              }`}
            >
              Sign In
            </Button>
          </Link>
          <Link href="https://nexusdweb.vercel.app">
            <Button
              className={`transition-all duration-300 relative z-30 rounded-full cursor-pointer ${
                visible
                  ? "bg-primary text-white hover:bg-primary/90 border border-primary hover:border-primary"
                  : "bg-black text-white hover:bg-black/90 border border-black hover:border-black"
              }`}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "94%" : "95%",
          paddingRight: visible ? "12px" : "16px",
          paddingLeft: visible ? "12px" : "16px",
          y: visible ? 20 : 0,
          backgroundColor: visible ? "#FFFFFF" : "transparent",
        }}
        style={{
          borderRadius: visible ? "0.375rem" : "2rem",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className={`relative z-50 mx-auto flex w-full flex-col items-center justify-between px-0 py-2 lg:hidden ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/" className={`flex items-center relative transition-all duration-300 ${mobileMenuOpen ? "z-[70]" : "z-20"}`}>
            <Logo className={`h-8 w-8 transition-colors ${mobileMenuOpen ? "text-white" : visible ? "text-primary" : "text-black"}`} />
          </Link>

          <button
            className={`p-2 rounded-full cursor-pointer transition-all duration-300 relative ${mobileMenuOpen ? "text-white z-[70]" : "text-black z-20"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              <motion.div
                ref={menuRef}
                className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="w-full"
                    >
                      {item.type === "dropdown" ? (
                        <div className="w-full">
                          <button
                            onClick={() => setHoveredDropdown(hoveredDropdown === item.name ? null : item.name)}
                            className="w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium text-base text-gray-800 hover:bg-gray-50 transition-all"
                          >
                            <span>{item.name}</span>
                            <ChevronDown
                              size={16}
                              className={`transition-transform ${hoveredDropdown === item.name ? "rotate-180" : ""}`}
                            />
                          </button>
                          <AnimatePresence>
                            {hoveredDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                {item.items?.map((subitem, subidx) => (
                                  <Link
                                    key={subidx}
                                    href={subitem.href}
                                    className="block py-2 px-8 text-gray-700 hover:text-primary text-sm"
                                    onClick={(e) => handleScroll(e, subitem.href)}
                                  >
                                    {subitem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all cursor-pointer ${
                            pathname && pathname === item.href
                              ? "bg-gray-100 text-primary"
                              : "text-gray-800 hover:bg-gray-50"
                          }`}
                          onClick={(e) => handleScroll(e, item.href)}
                        >
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="w-full pt-6 border-t border-gray-100 flex justify-center gap-3">
                  <Link href="https://nexusdweb.vercel.app">
                    <Button className="h-11 w-[140px] bg-black text-white border border-black cursor-pointer rounded-full font-semibold text-xs transition-colors hover:bg-black/90">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="https://nexusdweb.vercel.app">
                    <Button className="h-11 w-[140px] bg-primary hover:bg-primary/90 text-white cursor-pointer rounded-full font-semibold text-xs shadow-sm">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
