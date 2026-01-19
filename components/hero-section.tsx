import Image from "next/image"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
              Artista Plástica
            </p>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-medium text-foreground leading-tight mb-6 text-balance">
              Coni Perez
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed mb-1">
              Tatuajes, pinturas, maquillaje y peinados.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La Plata, Buenos Aires
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#obras"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
              >
                Ver Cuadros
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3 border border-foreground text-foreground text-sm tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>

          {/* Artist Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] relative">
                <Image
                  src="/images/logo.jpg"
                  alt="Coni Perez - Artista"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 bg-accent/20 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 border border-primary/30 -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-16">
          <Link href="#obras" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs tracking-widest uppercase">Descubre más</span>
            <ArrowDown size={20} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
