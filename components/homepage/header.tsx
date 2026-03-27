"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedArrow } from "@/components/ui/animated-arrow"

interface NavItem {
  name: string
  href: string
}

const HEADER_BOX_SHADOW = "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"

const HEADER_TRANSITION = {
  type: "spring",
  stiffness: 200,
  damping: 50,
} as const

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100)
  })

  // Shared animation config to reduce duplication
  const commonAnimate = {
    boxShadow: visible ? HEADER_BOX_SHADOW : "none",
    backgroundColor: visible ? "#FFFFFF" : "transparent",
  }

  const desktopAnimate = {
    ...commonAnimate,
    width: visible ? "80%" : "90%",
    y: visible ? 20 : 10,
  }

  const mobileAnimate = {
    ...commonAnimate,
    width: visible ? "94%" : "95%",
    paddingRight: visible ? "12px" : "16px",
    paddingLeft: visible ? "12px" : "16px",
    y: visible ? 20 : 0,
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
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
    { name: "Our Work", href: "#features" },
    { name: "Services", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-9999 w-full">
      <motion.div
        animate={desktopAnimate}
        transition={HEADER_TRANSITION}
        style={{
          minWidth: "800px",
        }}
        className={`relative z-60 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-sm px-3.5 py-2.5 lg:flex`}
      >
        <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
          <Image src="/coloredlogo.png" alt="Nexusdweb" width={120} height={32} className="h-8 w-auto object-contain" />
        </Link>

        <div
          onMouseLeave={() => {
            setHovered(null)
          }}
          className="hidden lg:flex flex-1 items-center justify-center space-x-1"
        >
          {navItems.map((item, idx) => (
            <div
              key={`nav-item-${idx}`}
              className="relative"
              onMouseEnter={() => {
                setHovered(idx)
              }}
            >
              <Link
                className={`relative px-4 py-2 rounded-full transition-colors duration-150 cursor-pointer text-sm font-medium flex items-center ${
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
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center justify-end relative z-30 gap-2">
          <Link href="#contact" className="relative z-30">
            <Button
              className={`group transition-all duration-300 rounded-full h-13 pl-4 pr-2 py-2 font-semibold text-sm cursor-pointer flex items-center gap-2 ${
                visible
                  ? "bg-primary text-white hover:bg-primary/90 border border-primary hover:border-primary"
                  : "bg-black text-white hover:bg-black/90 border border-black hover:border-black"
              }`}
            >
              Get a Quote
              <AnimatedArrow 
                wrapperClassName={visible ? "bg-black" : "bg-white"} 
                arrowClassName={visible ? "text-white" : "text-black"} 
              />
            </Button>
          </Link>
          <Button
            className={`transition-all duration-300 relative z-30 rounded-sm h-13 w-13 p-0 flex items-center justify-center cursor-pointer ${
              visible
                ? "bg-primary text-white hover:bg-primary/90 border border-primary hover:border-primary"
                : "bg-black text-white hover:bg-black/90 border border-black hover:border-black"
            }`}
          >
            <Sun size={20} />
          </Button>
        </div>
      </motion.div>

      <motion.div
        animate={mobileAnimate}
        transition={HEADER_TRANSITION}
        className={`relative z-50 mx-auto flex w-full flex-col items-center justify-between rounded-xs px-0 py-2 lg:hidden ${
          visible ? "bg-white/80" : "bg-transparent"
        }`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/" className={`flex items-center relative transition-all duration-300 ${mobileMenuOpen ? "z-70" : "z-20"}`}>
            <Image src="/coloredlogo.png" alt="Nexusdweb" width={120} height={32} className="h-8 w-auto object-contain" />
          </Link>

          <div className="flex items-center gap-2">


            <button
              className={`p-2 rounded-full cursor-pointer transition-all duration-300 relative ${mobileMenuOpen ? "text-white z-70" : "text-black z-20"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu-overlay"
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
          )}

          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu-content"
              ref={menuRef}
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-xs bg-white px-4 py-8 shadow-2xl"
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
                    <Link
                      href={item.href}
                      className={`flex items-center py-3 px-4 rounded-sm font-medium text-base transition-all cursor-pointer ${
                        pathname && pathname === item.href
                          ? "bg-gray-100 text-primary"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                      onClick={(e) => handleScroll(e, item.href)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="w-full pt-6 border-t border-gray-100 flex items-center justify-between gap-3 px-2">
                <Link href="#contact" className="flex-1 w-full">
                  <Button className="group h-12 py-2 w-full bg-primary hover:bg-primary/90 text-white cursor-pointer rounded-full font-semibold text-sm shadow-sm flex items-center justify-between gap-2 transition-all duration-300">
                    Get a Quote
                    <AnimatedArrow wrapperClassName="bg-black shrink-0" arrowClassName="text-white" />
                  </Button>
                </Link>
                <Button
                  className={`p-0 rounded-full h-12 w-12 flex items-center justify-center cursor-pointer transition-all duration-300 bg-gray-100 text-black hover:bg-gray-200 border border-gray-200`}
                >
                  <Sun size={20} />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
