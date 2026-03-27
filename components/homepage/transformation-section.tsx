"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery & Brief",
    description:
      "We start by understanding your vision, goals, and audience. Through in-depth research and strategic planning, we define the project scope, identify key requirements, and create a roadmap that sets the foundation for success.",
    color: "#dce8f8",
    textColor: "#1d407e",
    lightBg: "#e8f1fc",
    image: "/steps/1.svg",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Our designers craft pixel-perfect mockups and interactive prototypes that bring your brand to life. We focus on intuitive user experiences, modern aesthetics, and responsive layouts that captivate and convert.",
    color: "#9abfef",
    textColor: "#1d407e",
    lightBg: "#f0f6fe",
    image: "/steps/2.svg",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your project using cutting-edge technologies and clean, scalable code. From front-end interactions to back-end logic, every line is optimized for performance, security, and seamless functionality.",
    color: "#5995e6",
    textColor: "#ffffff",
    lightBg: "#e8f1fc",
    image: "/steps/3.svg",
  },
  {
    number: "04",
    title: "Launch & Go Live",
    description:
      "After rigorous testing and quality assurance, we deploy your project to production. We handle hosting setup, domain configuration, and post-launch support to ensure a smooth and successful go-live.",
    color: "#226fd3",
    textColor: "#ffffff",
    lightBg: "#f0f6fe",
    image: "/steps/4.svg",
  },
]

function StepCard({
  step,
  index,
  totalSteps,
}: {
  step: (typeof steps)[0]
  index: number
  totalSteps: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  })

  // Each card scales down slightly as it scrolls away
  // The last card doesn't scale down
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    index === totalSteps - 1 ? [1, 1] : [1, 0.92]
  )

  return (
    <div
      ref={cardRef}
      className="h-[80svh] w-full flex items-center justify-center sticky top-[18svh] px-2 md:px-6 lg:px-8"
      style={{ zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="relative w-full max-w-7xl"
      >
        <div
          className="rounded-sm md:rounded-xl overflow-hidden bg-black"
        >
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: Number (Desktop) */}
            <div
              className="hidden md:flex flex-col items-start justify-end p-6 md:h-[420px] md:w-[420px] shrink-0 bg-black relative overflow-hidden"
            >
              <Image
                src={step.image}
                alt=""
                fill
                className="object-contain p-10 opacity-40"
                aria-hidden="true"
              />
              <span
                className="text-9xl tracking-tighter leading-none text-neutral-500 relative z-1 rotate-[-15deg] -mb-4 -ml-2 select-none"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                {step.number}
              </span>
            </div>

            {/* Right: Content */}
            <div 
              className="flex-1 flex flex-col justify-center px-3 py-3 md:px-10 md:py-10 relative overflow-hidden"
              style={{ backgroundColor: step.color }}
            >
              {/* Mobile Black Square */}
              <div className="md:hidden w-20 h-20 bg-black rounded-sm flex items-start justify-end p-2 mb-5 shrink-0 relative overflow-hidden">
                <Image
                  src={step.image}
                  alt=""
                  fill
                  className="object-contain p-3 opacity-40"
                  aria-hidden="true"
                />
                <span 
                  className="text-3xl tracking-tighter leading-none text-neutral-500 relative z-1 rotate-[-15deg]"
                  style={{ fontFamily: "var(--font-caveat)" }}
                >
                  {step.number}
                </span>
              </div>

              <h3 
                className="text-4xl md:text-6xl font-bold mb-2 md:mb-5"
                style={{ fontFamily: "var(--font-caveat)", color: step.textColor }}
              >
                {step.title}
              </h3>

              <p 
                className="text-lg md:text-2xl leading-relaxed max-w-xl"
                style={{ 
                  fontFamily: "var(--font-caveat)", 
                  color: step.textColor,
                  opacity: step.textColor === "#ffffff" ? 0.7 : 0.85 
                }}
              >
                {step.description}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function TransformationSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="process" className="w-full bg-background">
      {/* Cards container — header + cards share the same sticky scope */}
      <div ref={containerRef} className="relative pb-4">
        {/* Header — sticky behind cards, scrolls away with the container */}
        <div className="sticky top-[12svh] h-[86svh] z-0 pointer-events-none">
          <div className="max-w-7xl mx-auto text-center space-y-1 py-5 px-2 md:px-6 lg:px-8 pointer-events-auto">
            <h2 className="text-xl font-bold md:text-4xl text-balance">
              <span className="relative inline-block">
                <span className="relative z-10">How we bring your vision to life.</span>
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
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              From first idea to final launch — four clear steps to transform your concept into a polished, high-performing digital product.
            </p>
          </div>
        </div>

        {/* Stacking Cards */}
        <div className="-mt-[86svh] pt-12 md:pt-14">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              totalSteps={steps.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
