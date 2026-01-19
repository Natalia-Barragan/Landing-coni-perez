"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GallerySection, type Artwork } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const handleReserve = (artwork: Artwork) => {
    setSelectedArtwork(artwork)
    // Scroll to contact section
    const contactSection = document.getElementById("contacto")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleClearSelection = () => {
    setSelectedArtwork(null)
  }

  // Smooth scroll for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="#"]')
      if (link) {
        e.preventDefault()
        const id = link.getAttribute("href")?.slice(1)
        if (id) {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <GallerySection onReserve={handleReserve} />
      <ContactSection 
        selectedArtwork={selectedArtwork} 
        onClearSelection={handleClearSelection}
      />
      <Footer />
    </main>
  )
}
