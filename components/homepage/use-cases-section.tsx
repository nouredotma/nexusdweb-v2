"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const useCases = [
  {
    role: "SEO Optimization",
    description: "Boost your search rankings and drive organic traffic to your brand.",
    image: "/usecases/seo.svg",
    details: "Our SEO strategies are data-driven. We provide comprehensive keyword research, on-page optimization, and high-quality link building to ensure your website ranks at the top of search engine results, maximizing your visibility and conversion rates."
  },
  {
    role: "Mobile Development",
    description: "Engage users on the go with responsive, high-performance mobile apps.",
    image: "/usecases/mobile.svg",
    details: "We build native and cross-platform mobile applications tailored to your business needs. From beautifully designed interfaces to robust backend integrations, our mobile solutions ensure a seamless and intuitive user experience across all devices."
  },
  {
    role: "Performance",
    description: "Optimize load times and ensure your applications run at lightning speed.",
    image: "/usecases/performance.svg",
    details: "Speed is crucial for user retention. Our performance tuning includes code splitting, image optimization, caching strategies, and server-side rendering to deliver ultra-fast digital experiences that keep your audience engaged."
  },
  {
    role: "Web Development",
    description: "Build robust, scalable, and secure web applications.",
    image: "/usecases/web.svg",
    details: "Our web development process utilizes the latest frontend and backend technologies. We create custom, responsive websites and complex web platforms that are built to scale alongside your growing business."
  },
  {
    role: "UI/UX Design",
    description: "Create stunning interfaces crafted for intuitive user journeys.",
    image: "/usecases/uiux.svg",
    details: "We map out user journeys and craft digital interfaces that are not only visually appealing but also highly functional. Our UI/UX design process focuses on maximizing usability and ensuring every interaction is meaningful and satisfying."
  },
  {
    role: "eCommerce Solutions",
    description: "Drive sales with secure, feature-rich online storefronts.",
    image: "/usecases/ecommerce.svg",
    details: "Transform your retail business with our tailored eCommerce solutions. We integrate secure payment gateways, inventory management, and personalized shopping experiences designed to turn visitors into loyal customers."
  },
]

export default function UseCasesSection() {
  const [selectedService, setSelectedService] = useState<typeof useCases[0] | null>(null)

  return (
    <section className="w-full py-10 px-2 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-xl font-bold md:text-4xl text-balance">
            <span className="relative inline-block">
              <span className="relative z-10">Premium</span>
              <svg
                className="absolute -inset-x-2.5 -inset-y-2.5 w-[calc(100%+20px)] h-[calc(100%+20px)] text-primary select-none pointer-events-none -rotate-12"
                viewBox="0 0 160 60"
                preserveAspectRatio="none"
                fill="none"
              >
                <motion.path
                  d="M 10,30 C 10,10 50,5 90,8 C 130,11 150,15 150,30 C 150,45 120,55 80,52 C 40,49 10,45 10,30"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </svg>
            </span>{" "}
            services we offer
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            NexusDWeb brings innovative design to interfaces, robust engineering to web platforms, and growth strategies to your business.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 md:gap-4 mt-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.role}
              className="relative flex flex-col bg-neutral-50 rounded-sm md:rounded-lg overflow-hidden border-2 border-neutral-200 transition-all duration-300 cursor-pointer hover:border-primary group"
              onClick={() => setSelectedService(useCase)}
            >
              {/* Image Container */}
              <div className="relative h-36 md:h-56 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.role}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-2 md:p-4 flex flex-col flex-1">
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 leading-tight group-hover:text-primary transition-colors">{useCase.role}</h3>
                  <p className="text-neutral-500 text-[11px] md:text-sm">
                    {useCase.description}
                  </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-sm bg-white p-4 md:p-6 shadow-xl"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 rounded-full p-1 hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5 text-neutral-500" />
              </button>
              
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-lg bg-neutral-50">
                <img
                  src={selectedService.image}
                  alt={selectedService.role}
                  className="h-16 w-16 object-contain"
                />
              </div>
              
              <h3 className="mb-2 text-lg md:text-2xl font-bold text-gray-900">{selectedService.role}</h3>
              <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                {selectedService.details}
              </p>
              
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedService(null)}
                  className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary/90 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
