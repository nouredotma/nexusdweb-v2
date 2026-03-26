"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Zap, Shield, Rocket } from "lucide-react"

export default function CTASection() {
  return (
    <section className="w-full py-10 px-3 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Black background container */}
        <div className="bg-black rounded-lg md:rounded-xl px-5 py-10 md:px-20 md:py-12 ">
          {/* Centered content */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-4xl font-bold text-white mb-2">
              Ready to transform your digital presence?
            </h2>
            <p className="text-white/80 mb-2 md:mb-10 text-sm md:text-base">
              Join innovative brands that trust NEXUSDWEB to build, scale, and optimize their online platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 md:gap-4 justify-center">
              <Link href="https://nexusdweb.vercel.app">
                <Button
                  className="bg-white hover:bg-white/90 text-black rounded-full px-3 py-2.5 md:px-6 md:py-4 cursor-pointer w-full font-semibold text-xs md:text-base h-auto border border-white"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  className="bg-transparent hover:bg-white/10 border border-white text-white rounded-full px-3 py-2.5 md:px-6 md:py-4 cursor-pointer w-full font-semibold text-xs md:text-base h-auto"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Three columns with icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="text-left">
              <div className="mb-4 inline-block p-3 bg-white/10 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-md font-bold text-white mb-1 md:mb-2">Engaging Experiences</h3>
              <p className="text-white/70 text-xs md:text-sm">
                We build beautifully designed, high-performance websites that captivate your audience and elevate your brand identity.
              </p>
            </div>

            {/* Column 2 */}
            <div className="text-left">
              <div className="mb-4 inline-block p-3 bg-white/10 rounded-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-md font-bold text-white mb-1 md:mb-2">Secure & Reliable</h3>
              <p className="text-white/70 text-xs md:text-sm">
                Our code is built on industry-leading security practices, keeping your website robust, fast, and safe from threats.
              </p>
            </div>

            {/* Column 3 */}
            <div className="text-left">
              <div className="mb-4 inline-block p-3 bg-white/10 rounded-lg">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-md font-bold text-white mb-1 md:mb-2">Built to Scale</h3>
              <p className="text-white/70 text-xs md:text-sm">
                Leverage modern web architectures ensuring your digital platforms grow seamlessly alongside your expanding business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
