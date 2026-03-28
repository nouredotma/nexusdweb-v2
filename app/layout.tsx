import type React from "react"
import type { Metadata } from "next"
import { Urbanist, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Preloader from "@/components/homepage/preloader"

const urbanist = Urbanist({ subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusdweb.com"),
  title: {
    default: "NexusdWeb",
    template: "%s | NexusdWeb",
  },
  description:
    "Elevate your digital presence with NexusdWeb. We specialize in premium web design, high-performance development, UI/UX strategy, and bespoke SEO solutions for ambitious brands.",
  keywords: [
    "premium web design",
    "custom web development",
    "UI/UX strategy",
    "SEO optimization",
    "brand transformation",
    "Next.js agency",
    "high-performance websites",
    "digital growth agency",
    "NexusdWeb",
  ],
  authors: [{ name: "NexusdWeb" }],
  creator: "NexusdWeb",
  publisher: "NexusdWeb",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusdweb.com",
    siteName: "NexusdWeb | Premium Web Solutions",
    title: "NexusdWeb | Premium Web Design & Development Agency",
    description:
      "NexusdWeb is a premium digital agency specialized in crafting high-performance websites, bespoke designs, and strategic digital experiences.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexusdWeb - Premium Web Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NexusdWeb | Bespoke Web Design & Tech Agency",
    description:
      "We build premium digital experiences. From high-end web design to custom development, NexusdWeb helps brands dominate the digital landscape.",
    images: ["/og-image.png"],
    creator: "@nexusdweb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
}

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="loading relative" data-scroll-behavior="smooth">
      <body className={`${urbanist.className} ${caveat.variable} antialiased relative`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "NEXUSDWEB",
              "url": "https://nexusdweb.com",
              "logo": "https://nexusdweb.com/icon.png",
              "description": "NEXUSDWEB is a premium digital agency specializing in high-end web design, custom development, and SEO optimization for ambitious brands.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://twitter.com/nexusdweb"
              ]
            }),
          }}
        />
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
