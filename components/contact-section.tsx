"use client"

import React from "react"

import { useState } from "react"
import { Mail, Phone, Instagram, Send, Check } from "lucide-react"
import type { Artwork } from "./gallery-section"

interface ContactSectionProps {
  selectedArtwork: Artwork | null
  onClearSelection: () => void
}

const artworkOptions = [
  { id: "1", title: "SIMPSONS" },
  { id: "2", title: "ESTRELLA 1" },
  { id: "3", title: "ESTRELLA 2" },
  { id: "4", title: "MARINA" },
  { id: "5", title: "LEO" },
  { id: "6", title: "PAJAROS" },
]

export function ContactSection({ selectedArtwork, onClearSelection }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    obra: selectedArtwork?.title || "",
    mensaje: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Update form when selectedArtwork changes
  if (selectedArtwork && formData.obra !== selectedArtwork.title) {
    setFormData(prev => ({ ...prev, obra: selectedArtwork.title }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - in production, this would send to WhatsApp or email
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `¡Hola Coni! \n\nMe interesa tu obra:\n\n` +
      `Nombre: ${formData.nombre}\n` +
      `Email: ${formData.email}\n` +
      `Obra: ${formData.obra || "Consulta general"}\n` +
      `Mensaje: ${formData.mensaje}`
    )

    // Open WhatsApp with pre-filled message (replace with actual number)
    const whatsappUrl = `https://wa.me/5492214202618?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ nombre: "", email: "", obra: "", mensaje: "" })
      onClearSelection()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contacto" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
            Contacto
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4 text-balance">
            Reservá tu obra favorita
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Completá el formulario y te respondo a la brevedad con el link de pago para confirmar tu reserva.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="order-2 lg:order-1">
            <h3 className="font-serif text-2xl text-foreground mb-6">
              También podés escribirme directamente
            </h3>

            <div className="space-y-6 mb-8">
              {/* <a
                href="mailto:[EMAIL_ADDRESS]"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={20} />
                </span>
                <span>[EMAIL_ADDRESS]</span>
              </a> */}

              <a
                href="https://wa.me/5491123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={20} />
                </span>
                <span>+54 9 221 4202618</span>
              </a>

              <a
                href="https://instagram.com/coni.perez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-12 h-12 flex items-center justify-center border border-border group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Instagram size={20} />
                </span>
                <span>@coni.perez</span>
              </a>
            </div>

            <div className="p-6 bg-muted/50 border border-border">
              <h4 className="font-serif text-lg text-foreground mb-2">¿Cómo funciona?</h4>
              <ol className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-medium text-foreground">1.</span>
                  Completá el formulario o escribime por WhatsApp
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-foreground">2.</span>
                  Te respondo con los detalles y el link de pago
                </li>
                <li className="flex gap-2">
                  <span className="font-medium text-foreground">3.</span>
                  Una vez confirmado el pago, coordinamos la entrega
                </li>
              </ol>
            </div>
          </div>

          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="obra" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Cuadro de interés
                </label>
                <select
                  id="obra"
                  name="obra"
                  value={formData.obra}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Selecciona un cuadro (opcional)</option>
                  {artworkOptions.map((artwork) => (
                    <option key={artwork.id} value={artwork.title}>
                      {artwork.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm tracking-widest uppercase text-muted-foreground mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Contame sobre tu interés en el cuadro, consultas sobre envío, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <Check size={18} />
                    ¡Mensaje enviado!
                  </>
                ) : isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send size={18} />
                    Enviar consulta
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
