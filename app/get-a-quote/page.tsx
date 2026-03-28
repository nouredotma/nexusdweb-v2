import Header from "@/components/homepage/header"
import Footer from "@/components/homepage/footer"
import QuoteForm from "@/components/get-a-quote/quote-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Get a Quote | Nexus",
  description: "Contact us to start your project. We'd love to hear from you.",
}

export default function GetAQuotePage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      
      {/* Main Content Area */}
      <section className="flex-grow pt-28 md:pt-36 pb-20 w-full bg-white relative">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            
            {/* Left side: Information / Copy */}
            <div className="flex flex-col justify-center max-w-xl">
              <div className="inline-flex mb-4 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 w-fit">
                <span className="text-xs md:text-sm font-semibold text-black">Let's Talk</span>
              </div>
              
              <h1 className="text-xl md:text-5xl font-bold mb-6 text-black tracking-tight leading-[1.1]">
                Ready to transform your digital presence?
              </h1>
              
              <p className="text-xs md:text-base font-medium text-muted-foreground mb-8">
                Fill out the form and our team will get back to you within 24 hours to discuss your project and how we can help.
              </p>

              <div className="flex items-center gap-6 mt-4">
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Email us</span>
                  <a href="mailto:omar@nexusdweb.com" className="text-base md:text-lg font-bold text-black hover:underline decoration-2 underline-offset-4">
                    omar@nexusdweb.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right side: Form Component */}
            <QuoteForm />

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
