"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface Artwork {
  id: string
  title: string
  price: number
  images: string[]
  description: string
  dimensions: string
  technique: string
}

const artworks: Artwork[] = [
  {
    id: "1",
    title: "SIMPSONS",
    price: 350000,
    images: [
      "/images/simpsons-1.jpg",
      "/images/simpsons-2.jpg",
      "/images/simpsons-3.jpg",
      "/images/simpsons-4.jpg",
      "/images/simpsons-5.jpg"
    ],
    description: "Pintura hecha a mano. Año 2025.",
    dimensions: "50 x 70 cm",
    technique: "Acrílico sobre tela"
  },
  {
    id: "8",
    title: "ESTRELLA 1",
    price: 250000,
    images: [
      "/images/estrella-1.jpg",
      "/images/estrella-2.jpg"
    ],
    description: "Pintura hecha a mano. Año 2025.",
    dimensions: "50 x 150 cm",
    technique: "Acrílico sobre tela"
  },
  {
    id: "9",
    title: "ESTRELLA 2",
    price: 150000,
    images: [
      "/images/estrella2-1.jpg",
      "/images/estrella2-2.jpg",
      "/images/estrella2-3.jpg"
    ],
    description: "Pintura hecha a mano. Año 2025.",
    dimensions: "60 x 40 cm",
    technique: "Acrílico sobre tela"
  },
  {
    id: "10",
    title: "MARINA",
    price: 350000,
    images: [
      "/images/marina-1.jpg",
      "/images/marina-2.jpg",
      "/images/marina-3.jpg"
    ],
    description: "Pintura hecha a mano. Año 2020.",
    dimensions: "40 x 70 cm",
    technique: "Acrílico sobre tela"
  },
  {
    id: "11",
    title: "LEO",
    price: 350000,
    images: [
      "/images/leo-1.jpg",
      "/images/leo-2.jpg",
      "/images/leo-3.jpg"
    ],
    description: "Pintura hecha a mano. Año 2021.",
    dimensions: "60 x 100 cm",
    technique: "Acrílico sobre tela"
  },
  {
    id: "12",
    title: "PAJAROS",
    price: 250000,
    images: [
      "/images/pajaros-1.jpg",
      "/images/pajaros-2.jpg",
      "/images/pajaros-3.jpg"
    ],
    description: "Pinturas hechas a mano. Composicion ludica. Año 2016.",
    dimensions: "40 x 70 / 40 x 40",
    technique: "Acrilico y oleo sobre tela"
  }
]

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0
  }).format(price)
}

interface ArtworkCardProps {
  artwork: Artwork
  onSelect: (artwork: Artwork) => void
}

function ArtworkCard({ artwork, onSelect }: ArtworkCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % artwork.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + artwork.images.length) % artwork.images.length)
  }

  return (
    <div
      className="group cursor-pointer"
      onClick={() => onSelect(artwork)}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted mb-4">
        <Image
          src={artwork.images[currentImageIndex] || "/placeholder.svg"}
          alt={artwork.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Image Navigation */}
        {artwork.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 z-10 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background rounded-full"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 z-10 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background rounded-full"
              aria-label="Siguiente imagen"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {artwork.images.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-colors",
                    index === currentImageIndex ? "bg-background" : "bg-background/50"
                  )}
                />
              ))}
            </div>
          </>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
          <span className="text-background text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/80 px-4 py-2">
            Ver detalles
          </span>
        </div>
      </div>

      <h3 className="font-serif text-xl text-foreground mb-1">{artwork.title}</h3>
      <p className="text-muted-foreground">{formatPrice(artwork.price)}</p>
    </div>
  )
}

interface ArtworkModalProps {
  artwork: Artwork
  onClose: () => void
  onReserve: (artwork: Artwork) => void
}

function ArtworkModal({ artwork, onClose, onReserve }: ArtworkModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artwork.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + artwork.images.length) % artwork.images.length)
  }

  return (
    <div className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-background max-w-7xl w-full max-h-[90vh] overflow-y-auto">
        <div className="grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[500px]">
            <Image
              src={artwork.images[currentImageIndex] || "/placeholder.svg"}
              alt={artwork.title}
              fill
              className="object-contain"
            />

            {artwork.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {artwork.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors",
                        index === currentImageIndex ? "bg-background" : "bg-background/50"
                      )}
                      aria-label={`Ver imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Info Section */}
          <div className="p-6 md:p-8 flex flex-col">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:relative md:top-0 md:right-0 md:self-end w-10 h-10 flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            <div className="flex-1">
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">{artwork.title}</h2>
              <p className="text-2xl text-primary font-medium mb-6">{formatPrice(artwork.price)}</p>

              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">{artwork.description}</p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Dimensiones</p>
                    <p className="text-foreground">{artwork.dimensions}</p>
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Técnica</p>
                    <p className="text-foreground">{artwork.technique}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onReserve(artwork)}
              className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Reservar esta obra
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface GallerySectionProps {
  onReserve: (artwork: Artwork) => void
}

export function GallerySection({ onReserve }: GallerySectionProps) {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const handleReserve = (artwork: Artwork) => {
    setSelectedArtwork(null)
    onReserve(artwork)
  }

  return (
    <section id="obras" className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Colección
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Cuadros Disponibles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada pieza es única y está lista para encontrar un nuevo hogar.
            Haz clic en cualquier obra para ver más detalles y reservarla.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onSelect={setSelectedArtwork}
            />
          ))}
        </div>
      </div>

      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
          onReserve={handleReserve}
        />
      )}
    </section>
  )
}

export type { Artwork }
