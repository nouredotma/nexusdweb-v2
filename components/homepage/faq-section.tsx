"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const FAQs = [
  {
    question: "What services does NEXUSDWEB offer?",
    answer:
      "We specialize in custom web design, robust web development, UI/UX design, mobile app development, eCommerce solutions, and comprehensive SEO optimization to help your business grow online.",
  },
  {
    question: "How long does it take to design and develop a custom website?",
    answer:
      "The timeline varies depending on the project's complexity. A standard web design project typically takes 4-8 weeks, while custom web applications or eCommerce solutions may take longer. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you provide ongoing support after the website goes live?",
    answer:
      "Yes, absolutely. We offer ongoing maintenance and support packages to ensure your digital platform remains secure, up-to-date, and performs optimally long after the initial launch.",
  },
  {
    question: "Will my website be mobile-friendly and optimized for search engines?",
    answer:
      "Definitely. All of our websites are built with a mobile-first approach, ensuring full responsiveness across devices. We also implement best-practice SEO structures off the bat, so your site is ready to rank well on Google.",
  },
  {
    question: "Can you help redesign or improve an existing website?",
    answer:
      "Yes, we frequently revamp existing websites. Whether you need a fresh UI/UX overhaul, performance optimization, or new features integrated into your current platform, our team can help elevate your brand identity.",
  },
  {
    question: "Which platforms and technologies do you use for web development?",
    answer:
      "We utilize modern, high-performance tech stacks tailored to your project. This includes Next.js, React, Tailwind CSS, and robust backend solutions. For eCommerce, we work with custom architectures to ensure scalable growth.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleInteraction = (index: number | null, isHover: boolean) => {
    // Only handle hover on desktop (min-width: 768px as a rule of thumb)
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      if (isHover) setOpenIndex(index)
      else setOpenIndex(null)
    }
  }

  const handleClick = (index: number) => {
    // Handle click for mobile and as a fallback
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="w-full py-10 px-3 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 space-y-1">
          <h2 className="text-xl font-bold md:text-4xl text-balance text-black">
            <span className="relative inline-block">
              <span className="relative z-10">Frequently</span>
              <svg
                className="absolute bottom-0 left-0 w-full h-[6px] md:h-[10px] text-primary select-none pointer-events-none"
                viewBox="0 0 200 40"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M5 20c40-5 90-5 130 2c35 5 55 5 65-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="28"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </svg>
            </span>{" "}
            asked questions
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Everything you need to know about our web development process and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 max-w-7xl mx-auto items-stretch">
          {FAQs.map((faq, index) => (
            <div
              key={index}
              onMouseEnter={() => handleInteraction(index, true)}
              onMouseLeave={() => handleInteraction(null, false)}
              onClick={() => handleClick(index)}
              className={`group border-2 transition-colors duration-200 rounded-sm bg-neutral-50 border-neutral-200 overflow-hidden cursor-pointer h-full ${
                openIndex === index ? "border-primary" : "border-neutral-200 hover:border-primary"
              }`}
            >
              <button
                className="w-full text-left px-3 py-3 sm:px-5 sm:py-5 flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className={`font-medium text-sm md:text-base transition-colors duration-200 leading-tight ${
                  openIndex === index ? "text-primary" : "text-foreground group-hover:text-primary"
                }`}>{faq.question}</span>
                <Plus
                  className={`w-4 h-4 transition-all duration-200 shrink-0 ${
                    openIndex === index ? "rotate-180 text-primary" : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-3 pb-3 sm:px-5 sm:pb-5 text-xs md:text-sm text-muted-foreground">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
