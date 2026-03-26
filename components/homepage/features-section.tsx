"use client"

import { useState } from "react"

const features = [
  {
    id: 1,
    category: "Discovery",
    mobileCategory: "Discover",
    title: "We listen before we build.",
    description: "Every great project starts with understanding. We dive deep into your goals, audience, and vision to define a clear roadmap before a single pixel is placed.",
    bgColor: "bg-[#a3e3fb]",
    borderColor: "border-[#7fd2f7]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/59aa54ee8debeaf39514cd2620684dc08f9f2196-1096x720.png?w=1096&auto=format%2Ccompress",
  },
  {
    id: 2,
    category: "Design",
    mobileCategory: "Design",
    title: "Crafted to captivate your audience.",
    description:
      "From wireframes to high-fidelity mockups, we design interfaces that are visually stunning and intuitively easy to use — perfectly aligned with your brand.",
    bgColor: "bg-[#ffd8ad]",
    borderColor: "border-[#ffc48c]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/337c35b10cc97333bd0611c031d69593f725d343-1096x720.png?w=1096&auto=format%2Ccompress",
  },
  {
    id: 3,
    category: "Development",
    mobileCategory: "Build",
    title: "Clean code. Pixel-perfect results.",
    description: "We bring designs to life with modern, scalable technology. Fast load times, responsive layouts, and seamless functionality — built to perform.",
    bgColor: "bg-[#fff3a5]",
    borderColor: "border-[#fee56a]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/7acca19bc630587b7316556738ba95689d1d0802-1096x720.png?w=1096&auto=format%2Ccompress",
  },
  {
    id: 4,
    category: "Launch & Support",
    mobileCategory: "Launch",
    title: "Go live with confidence.",
    description: "We handle deployment, testing, and optimization so your launch is flawless. And after that, we stay by your side with ongoing support and improvements.",
    bgColor: "bg-[#dec8fd]",
    borderColor: "border-[#ccabfd]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/05fc311fc36487383ebee7ee405574a283e408f4-1644x1080.png?w=1096&auto=format%2Ccompress",
  },
]

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(1)

  const currentFeature = features.find((f) => f.id === activeFeature) || features[0]

  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-3">
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
          className={`${currentFeature.bgColor} ${currentFeature.textColor} border-2 ${currentFeature.borderColor} max-w-7xl mx-auto rounded-xl overflow-hidden transition-all duration-500`}
        >
          <div className="grid md:grid-cols-2 gap-6 py-4 px-4 md:p-8 min-h-0 md:min-h-[600px]">
            {/* Left Content */}
            <div className="flex flex-col justify-start md:justify-between">
              {/* Category and Title Group */}
              <div className="space-y-2">
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
              <div className="w-full max-w-2xl bg-white rounded-xl border-2 md:border-4 border-black overflow-hidden transform md:translate-x-10 lg:translate-x-16 scale-100 md:scale-110 lg:scale-125 transition-all duration-500">
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
