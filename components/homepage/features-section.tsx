"use client"

import { useState } from "react"

const features = [
  {
    id: 1,
    category: "Foundation",
    mobileCategory: "Hub",
    title: "One hub for every agreement that matters.",
    description: "Forget inbox hunts and folder chaos. Centralize every agreement in one secure, searchable place.",
    bgColor: "bg-[#a3e3fb]",
    borderColor: "border-[#7fd2f7]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/59aa54ee8debeaf39514cd2620684dc08f9f2196-1096x720.png?w=1096&auto=format%2Ccompress",
  },
  {
    id: 2,
    category: "Efficiency",
    mobileCategory: "Fast",
    title: "Less admin. More action",
    description:
      "Draft faster, review with AI, sign without bottlenecks. Kill the red tape and free up your team's time.",
    bgColor: "bg-[#ffd8ad]",
    borderColor: "border-[#ffc48c]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/337c35b10cc97333bd0611c031d69593f725d343-1096x720.png?w=1096&auto=format%2Ccompress",
  },
  {
    id: 3,
    category: "Control & Compliance",
    mobileCategory: "Safe",
    title: "Stop risks before they stop you.",
    description: "Automated tracking, alerts and audit-ready logs. Zero missed renewals. Zero ugly surprises.",
    bgColor: "bg-[#fff3a5]",
    borderColor: "border-[#fee56a]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/7acca19bc630587b7316556738ba95689d1d0802-1096x720.png?w=1096&auto=format%2Ccompress",
  },
  {
    id: 4,
    category: "Business enablement",
    mobileCategory: "Insights",
    title: "Turn agreements into insights.",
    description: "Spot spend, forecast obligations, negotiate smarter, all powered by AI-extracted data.",
    bgColor: "bg-[#dec8fd]",
    borderColor: "border-[#ccabfd]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/05fc311fc36487383ebee7ee405574a283e408f4-1644x1080.png?w=1096&auto=format%2Ccompress",
  },
  {
    id: 5,
    category: "Strategic confidence",
    mobileCategory: "Growth",
    title: "Know your business is safe to move.",
    description:
      "Total visibility, no hidden liabilities, faster decisions at the top. Agreements stop being blockers and start being an engine for growth.",
    bgColor: "bg-[#bef6c7]",
    borderColor: "border-[#a3eba0]",
    textColor: "text-gray-900",
    image: "https://sanity-images.imgix.net/production/790addddeddb4b254864c57b547c780765f28232-1096x720.png?w=1096&auto=format%2Ccompress",
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
