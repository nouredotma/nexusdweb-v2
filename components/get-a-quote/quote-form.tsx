"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedArrow } from "@/components/ui/animated-arrow"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleWhatsAppClick = () => {
    const { firstName, lastName, email, company, message } = formData
    
    // Construct the structured message
    const text = `*New Project Inquiry from Get a Quote Form*%0A%0A` +
      `*Name:* ${firstName} ${lastName}%0A` +
      `*Company:* ${company || "Not specified"}%0A` +
      `*Email:* ${email}%0A%0A` +
      `*Project Details:*%0A${message || "No details provided."}`
    
    const whatsappUrl = `https://wa.me/212660715095?text=${text}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="bg-white border-2 border-neutral-200 rounded-sm md:rounded-xl px-2 py-4 md:py-6 md:px-6">
      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="firstName" className="font-semibold px-1 text-xs md:text-sm">First Name</Label>
            <Input 
              id="firstName" 
              placeholder="John" 
              value={formData.firstName}
              onChange={handleChange}
              className="bg-slate-50 border-slate-200 h-11 md:h-12 rounded-full focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary px-6 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="lastName" className="font-semibold px-1 text-xs md:text-sm">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Doe" 
              value={formData.lastName}
              onChange={handleChange}
              className="bg-slate-50 border-slate-200 h-11 md:h-12 rounded-full focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary px-6 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="font-semibold px-1 text-xs md:text-sm">Work Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="john@company.com" 
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-50 border-slate-200 h-11 md:h-12 rounded-full focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary px-6 text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="company" className="font-semibold px-1 text-xs md:text-sm">Company Name</Label>
          <Input 
            id="company" 
            placeholder="Acme Corp" 
            value={formData.company}
            onChange={handleChange}
            className="bg-slate-50 border-slate-200 h-11 md:h-12 rounded-full focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary px-6 text-sm"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="font-semibold px-1 text-xs md:text-sm">Project Details</Label>
          <Textarea 
            id="message" 
            placeholder="Tell us about your goals, timeline, and budget..." 
            value={formData.message}
            onChange={handleChange}
            className="bg-slate-50 border-slate-200 min-h-[140px] rounded-[24px] resize-none focus-visible:ring-primary/20 focus-visible:ring-4 focus-visible:border-primary px-6 py-4 text-sm"
          />
        </div>

        <div className="flex flex-row gap-2 mt-2 w-full">
          <Button 
            type="submit" 
            size="lg" 
            className="flex-7 bg-black hover:bg-black/90 text-white font-bold rounded-full h-12 md:h-14 px-3 md:px-8 text-[10px] md:text-base flex items-center justify-between transition-all duration-300 group whitespace-nowrap cursor-pointer text-left"
          >
            Send Message
            <AnimatedArrow wrapperClassName="bg-white shrink-0 ml-1 md:ml-2" arrowClassName="text-black" />
          </Button>
          
          <button 
            type="button"
            onClick={handleWhatsAppClick}
            className="flex-3 min-w-fit flex items-center justify-between h-12 md:h-14 px-4 md:px-10 rounded-full border-2 border-slate-100 hover:border-slate-200 bg-white text-black font-bold transition-all duration-300 whitespace-nowrap cursor-pointer text-left"
          >
            <div className="flex items-center gap-1.5 md:gap-3">
              <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-6 md:h-6 fill-[#25D366] shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-[10px] md:text-base">WhatsApp</span>
            </div>
          </button>
        </div>
        
        <p className="text-xs text-center text-muted-foreground mt-2 px-4">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  )
}
