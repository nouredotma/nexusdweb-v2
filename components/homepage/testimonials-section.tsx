"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import ClassNames from "embla-carousel-class-names"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  useCarousel,
} from "@/components/ui/carousel"

interface Testimonial {
  id: number
  videoUrl: string
  quote: string
  profession: string
  thumbnail: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://images.unsplash.com/photo-1532170579297-281918c8ae72?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote:
      "nexusdweb makes life much easier for us and our clients when it comes to contract management and digital signatures!",
    profession: "Brandon Zell - Chief Accounting Officer",
  },
  {
    id: 2,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://plus.unsplash.com/premium_photo-1690294614341-cf346ba0a637?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "The automation features have saved us countless hours. It's transformed how we handle contracts.",
    profession: "Sarah Harris - Secretary",
  },
  {
    id: 3,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://plus.unsplash.com/premium_photo-1733971878518-fee3ce2b7aa6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Implementation was seamless and the support team was incredibly helpful throughout the process.",
    profession: "Michael Chen - Operations Director",
  },
  {
    id: 4,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://plus.unsplash.com/premium_photo-1763734617092-dbaeb4414ff9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Our contract turnaround time has decreased by 60% since we started using this platform.",
    profession: "Emily Rodriguez - Legal Counsel",
  },
  {
    id: 5,
    videoUrl: "https://youtu.be/C8JC023Z4SE?si=_Fd_gMtk9io0r9p7",
    thumbnail: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "The best investment we've made for our legal operations. Highly recommend to any growing business.",
    profession: "David Thompson - CEO",
  },
]

function getYouTubeEmbedUrl(url: string) {
  try {
    const u = new URL(url)
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.slice(1)
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    }
    if (u.hostname.includes("youtube.com")) {
      const id = u.searchParams.get("v")
      if (id) return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`
    }
  } catch (e) {
    // fallback
  }
  return url
}

// Separate component to access carousel context
function TestimonialSlide({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  const { selectedIndex } = useCarousel()
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  
  const isCenter = index === selectedIndex

  const ctaStyle =
    "shrink-0 font-semibold rounded-sm py-1 px-2 transition-all border-0 bg-primary hover:bg-primary text-white text-[10px] sm:text-xs cursor-pointer"

  return (
    <div className="w-full max-w-[550px] lg:max-w-none rounded-md overflow-hidden bg-transparent shadow-none border-0">
      <div className="relative aspect-video bg-muted rounded-md overflow-hidden">
        {playingVideo === testimonial.id ? (
          <>
            <iframe
              title={`video-${testimonial.id}`}
              className="w-full h-full rounded-md"
              src={getYouTubeEmbedUrl(testimonial.videoUrl)}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setPlayingVideo(null)}
              aria-label="Close video"
              className="absolute top-2 right-2 rounded-full px-2.5 py-1 bg-black/60 text-white text-sm cursor-pointer"
            >
              ×
            </button>
          </>
        ) : (
          <>
            <img
              src={testimonial.thumbnail || "/placeholder.svg"}
              alt={testimonial.profession}
              className="w-full h-full object-cover rounded-md"
            />

            {/* Play button ONLY on the center card */}
            {isCenter && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setPlayingVideo(testimonial.id)}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-lg rounded-full p-1.5 sm:p-2 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-none">
                    <Play className="w-3.5 h-3.5 md:w-4 md:h-4 text-black fill-black ml-0.5" />
                  </div>
                  <span className="text-white text-xs md:text-sm font-bold pr-1 sm:pr-0">
                    <span className="hidden md:inline">Watch customer video</span>
                    <span className="md:hidden">Watch</span>
                  </span>
                </button>
              </div>
            )}

          </>
        )}
      </div>

      <div className="px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex items-start justify-between gap-1">
          <div className="flex-1">
            <p className="text-xs sm:text-sm text-foreground mb-2 italic">"{testimonial.quote}"</p>
            <div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">{testimonial.profession}</p>
            </div>
          </div>

          {isCenter && (
            <Button variant="ghost" className={ctaStyle}>
              Read story →
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="w-full py-10 bg-background overflow-hidden">
      <div className="w-full">
        <h2 className="text-xl font-bold md:text-3xl lg:text-4xl text-center mb-4 sm:mb-6 text-balance flex items-center justify-center">
          Don't just take our word for it
          <span className="relative inline-flex items-center">
            <svg
              className="w-5 h-5 md:w-7 md:h-7 text-primary select-none pointer-events-none rotate-32 translate-y-0.5"
              viewBox="0 0 100 100"
              fill="none"
            >
              <motion.path
                d="M50 85 C 35 65, 25 45, 25 30 C 25 15, 40 15, 50 30 C 60 15, 75 15, 75 30 C 75 45, 65 65, 50 85"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-40"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M51 86 C 33 63, 23 43, 23 28 C 23 13, 41 14, 51 28 C 61 14, 77 13, 77 28 C 77 43, 67 63, 51 86"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </svg>
          </span>
        </h2>

        <Carousel 
          options={{ loop: true, align: "center" }} 
          plugins={[
            ClassNames() as any,
            Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }) as any
          ]}
        >
          <SliderContainer>
            {testimonials.map((testimonial, index) => (
              <Slider
                key={testimonial.id}
                className="
                  basis-[96%] sm:basis-1/2 lg:basis-[42%]
                  transition-opacity duration-700 ease-out
                  [&.is-in-view]:opacity-60
                  [&.is-snapped]:opacity-100
                  flex justify-center px-1 sm:px-2
                "
              >
                <TestimonialSlide testimonial={testimonial} index={index} />
              </Slider>
            ))}
          </SliderContainer>
        </Carousel>
      </div>
    </section>
  )
}
