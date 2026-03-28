"use client"

import { useState } from "react"

const features = [
  {
    id: 1,
    category: "SaaS Dashboard",
    mobileCategory: "SaaS",
    title: "L u z",
    description: "A comprehensive analytics and management solution built for modern SaaS platforms. Featuring real-time data visualization, user behavioral tracking, and a seamless administrative interface to drive business growth.",
    bgColor: "bg-[#ff4500]/25",
    borderColor: "border-[#ff4500]",
    textColor: "text-neutral-900",
    image: "/projects/p1.png",
  },
  {
    id: 2,
    category: "Corporate Business",
    mobileCategory: "Corporate",
    title: "Yarborough Law Group",
    description: "A high-performance corporate website designed to establish authority and trust. We focused on optimized conversion funnels, professional identity branding, and a sleek, fast-loading interface for global business.",
    bgColor: "bg-[#936d47]/25",
    borderColor: "border-[#936d47]",
    textColor: "text-neutral-900",
    image: "/projects/p2.png",
  },
  {
    id: 3,
    category: "E-commerce Store",
    mobileCategory: "E-comm",
    title: "TierraBlanca",
    description: "An end-to-end e-commerce experience with a focus on user journey and sales conversion. Featuring lightning-fast checkout, mobile-first product exploration, and a premium aesthetic that elevates the shopping experience.",
    bgColor: "bg-[#415e5a]/25",
    borderColor: "border-[#415e5a]",
    textColor: "text-neutral-900",
    image: "/projects/p3.png",
  },
  {
    id: 4,
    category: "Moroccan Association",
    mobileCategory: "Non-Profit",
    title: "Turâth",
    description: "Empowering local Moroccan associations with a digital platform to coordinate volunteer work and manage community impact. The design blends modern web standards with subtle cultural aesthetics.",
    bgColor: "bg-[#863a22]/25",
    borderColor: "border-[#863a22]",
    textColor: "text-neutral-900",
    image: "/projects/p4.png",
  },
  {
    id: 5,
    category: "Traveling Service",
    mobileCategory: "Travel",
    title: "Marrakesh Travel Services",
    description: "A vibrant and intuitive booking platform that simplifies trip planning for explorers. We integrated immersive high-quality imagery and a modern brand identity to inspire global travelers and adventurers.",
    bgColor: "bg-[#2c3863]/25",
    borderColor: "border-[#2c3863]",
    textColor: "text-neutral-900",
    image: "/projects/p5.png",
  },
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(1)

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0]

  return (
    <section id="features" className="w-full py-10 scroll-mt-20">
      <div className="container mx-auto px-2">
        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-0 md:gap-1 mb-3">
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`flex items-center gap-1 md:gap-2 px-1 md:px-3 py-1 md:py-2 text-sm md:text-base font-bold transition-all duration-300 cursor-pointer ${
                activeFeature === feature.id ? "text-black opacity-100" : "text-black opacity-30 hover:opacity-50"
              }`}
            >
              <span className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all ${
                activeFeature === feature.id ? "border-black" : "border-black/30"
              }`}>
                {feature.id}
              </span>
              <span className="hidden md:inline">{feature.category}</span>
              <span className="md:hidden">{feature.mobileCategory}</span>
            </button>
          ))}
        </div>

        {/* Feature Content */}
        <div
          className={`${currentFeature.bgColor} ${currentFeature.textColor} border-2 ${currentFeature.borderColor} max-w-7xl mx-auto rounded-sm md:rounded-xl overflow-hidden transition-all duration-500`}
        >
          <div className="grid md:grid-cols-2 gap-6 py-4 px-4 md:p-8 min-h-0 md:min-h-[600px]">
            {/* Left Content */}
            <div className="flex flex-col justify-start md:justify-between">
              {/* Category and Title Group */}
              <div className="space-y-6">
                <span className="inline-block px-3 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/10">
                  {currentFeature.category}
                </span>
                <h2 className="text-2xl md:text-4xl font-bold leading-tight max-w-sm">
                  {currentFeature.title}
                </h2>
              </div>
              
              {/* Description */}
              <div className="mt-4 md:mt-12">
                <p className="text-base md:text-lg opacity-80 max-w-md">
                  {currentFeature.description}
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="flex items-center justify-center md:justify-end relative">
              <div className="w-full max-w-2xl bg-white rounded-sm md:rounded-xl border-2 md:border-4 border-black overflow-hidden transform md:translate-x-10 lg:translate-x-16 scale-100 md:scale-110 lg:scale-125 transition-all duration-500">
                <img 
                  src={currentFeature.image} 
                  alt={currentFeature.category}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
