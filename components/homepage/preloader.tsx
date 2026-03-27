"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

function Logo() {
  return (
    <motion.div
      animate={{ opacity: [1, 0.4, 1] }}
      transition={{ 
        duration: 1.5, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="flex items-center justify-center p-8"
    >
      <Image 
        src="/whitelogo.png" 
        alt="NexusDWeb Logo" 
        width={100} 
        height={100} 
        className="w-20 md:w-24 h-auto object-contain"
        priority
      />
    </motion.div>
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
            className="relative h-full flex-1 bg-primary overflow-hidden pointer-events-auto"
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
            className="relative h-full flex-1 bg-primary overflow-hidden pointer-events-auto"
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
