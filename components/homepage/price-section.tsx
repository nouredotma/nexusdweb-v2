"use client"
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card"

import { motion } from "framer-motion"

import { Zap, Rocket, Building2 } from "lucide-react"

const TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: 500,
    description: "Perfect for individuals and small projects",
    features: [
      "Responsive Web Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form Integration",
      "Mobile Optimization",
      "1 Month Support",
      "Social Media Integration",
      "Basic Analytics Setup",
    ],
    limitations: ["Advanced SEO Optimization", "E-commerce Integration", "Custom Web Application"],
    cta: "Get started",
    link: "https://nexusdweb.vercel.app",
    primaryBorder: true,
    icon: Zap,
  },
  {
    name: "Professional",
    price: 800,
    description: "For growing teams and businesses",
    features: [
      "Everything in Starter",
      "Up to 15 Pages",
      "Advanced SEO Optimization",
      "E-commerce Integration",
      "Custom Animations",
      "3 Months Support",
      "Advanced Analytics",
      "Performance Optimization",
    ],
    limitations: ["Custom Web Application", "Custom CMS", "Priority Development"],
    cta: "Get started",
    link: "https://nexusdweb.vercel.app",
    popular: true,
    icon: Rocket,
  },
  {
    name: "Enterprise",
    price: 1200,
    description: "For large-scale operations",
    features: [
      "Everything in Pro",
      "Unlimited Pages",
      "Custom Web Application",
      "Advanced Integrations",
      "Premium Support",
      "6 Months Support",
      "Custom CMS",
      "Priority Development",
    ],
    limitations: [],
    cta: "Get started",
    link: "https://nexusdweb.vercel.app",
    icon: Building2,
  },
]

export default function PriceSection() {
  return (
    <section id="pricing" className="w-full py-10 px-3 sm:px-6 lg:px-8 bg-background overflow-hidden scroll-mt-20">
      <div className="max-w-7xl  mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="space-y-2 text-center">
            <div className="space-y-1">
              <h1 className="text-xl font-bold md:text-4xl text-balance">
                Simple, Transparent{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Pricing</span>
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
                </span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base">Choose the perfect plan for your needs</p>
            </div>
          </div>

          <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <PricingCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
