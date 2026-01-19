"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-center">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#inicio" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link href="#obras" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Cuadros
          </Link>
          <Link href="#contacto" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="#inicio"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#obras"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Cuadros
            </Link>
            <Link
              href="#contacto"
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
