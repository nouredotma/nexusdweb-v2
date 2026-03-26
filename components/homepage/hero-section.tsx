"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="hero-background relative w-full flex items-center justify-center pt-24 pb-8 md:pt-20 md:pb-20 overflow-hidden bg-size-[100%_auto] md:bg-cover bg-position-[center_80%] md:bg-center bg-no-repeat">
      <div className="absolute inset-0 w-full h-full bg-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 md:px-6 lg:px-8 text-center">
        <div className="inline-block mb-2 mt-10 md:mt-20 px-3 py-1 rounded-full bg-neutral-100">
          <span className="text-xs md:text-sm font-bold text-neutral-500">Digital experiences reimagined</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-balance text-black px-2 md:px-0">
          Where brands{" "}
          <span className="inline-flex -space-x-3 -translate-x-2">
            <img
              src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="Team avatars"
              className="h-8 md:h-12 rounded-full border-2 md:border-4 border-background translate-y-1 md:translate-y-1.5"
            />
            <img
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880"
              alt="Team avatars"
              className="h-8 md:h-12 rounded-full border-2 md:border-4 border-white translate-y-1 md:translate-y-1.5"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2080"
              alt="Team avatars"
              className="h-8 md:h-12 rounded-full border-2 md:border-4 border-white translate-y-1 md:translate-y-1.5"
            />
          </span>
          turn <br className="hidden md:block" /> visions into{" "}
          <span className="relative inline-block cursor-default group">
            <span className="relative z-10">reality</span>
            <svg
              className="absolute bottom-0 left-0 w-full h-[10px] md:h-[14px] text-primary select-none pointer-events-none"
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
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </svg>
          </span>
          .
        </h1>

        <p className="text-sm md:text-xl font-medium text-black/50 mb-6 text-balance max-w-2xl mx-auto">
          Elevate your online presence with stunning web design, robust development, and intelligent SEO strategies.
        </p>

        <div className="flex flex-row gap-2 md:gap-4 justify-center">
          <Link href="https://nexusdweb.vercel.app">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 border-2 border-gray text-black font-bold rounded-full px-4 py-3 md:px-6 md:py-3 cursor-pointer text-xs md:text-sm h-auto"
            >
              Start Your Project
            </Button>
          </Link>
          
          
          
          <Link href="#services">
            <Button
              size="lg"
              className="bg-black hover:bg-black/90 text-white border-2 border-black font-bold rounded-full px-4 py-3 md:px-6 md:py-3 cursor-pointer text-xs md:text-sm h-auto"
            >
              View Services
            </Button>
          </Link>
        </div>

        <div className="mt-10 w-full">
          <img
            src="/heroimage.png"
            alt="Hero dashboard"
            className="w-full rounded-lg md:rounded-2xl border-4 md:border-[6px] border-white/30 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.15)] backdrop-saturate-200"
          />
        </div>
      </div>
    </section>
  )
}
