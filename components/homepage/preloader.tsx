"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

function Logo() {
  return (
    <div className="relative flex items-center justify-center pointer-events-none">
      {/* Base White Logo */}
      <div className="relative w-20 md:w-24 aspect-square">
        <Image 
          src="/whitelogo.png" 
          alt="NexusDWeb Logo" 
          fill
          className="object-contain"
          priority
        />
        
        {/* Primary Color Fill Overlay */}
        <motion.div
          className="absolute inset-0 bg-primary"
          style={{
            maskImage: "url('/whitelogo.png')",
            WebkitMaskImage: "url('/whitelogo.png')",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center",
          }}
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ 
            duration: 4, 
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}



export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      // Remove scroll block immediately when animation finishes
      document.documentElement.classList.remove("loading")
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <div className="fixed inset-0 z-999999 flex flex-row h-svh w-full overflow-hidden pointer-events-none">
          {/* Left Panel */}
          <motion.div
            key="left-panel"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative h-full flex-1 bg-linear-to-t from-primary to-white overflow-hidden pointer-events-auto"
          >
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2">
              <Logo />
            </div>
          </motion.div>

          {/* Right Panel */}
          <motion.div
            key="right-panel"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="relative h-full flex-1 bg-linear-to-t from-primary to-white overflow-hidden pointer-events-auto"
          >
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2">
              <Logo />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
