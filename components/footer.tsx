import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-3xl font-semibold tracking-wide">
              CONI PEREZ
            </Link>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Arte Original
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/coni.perez"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            {/* <a
              href="mailto:coni.perez.arte@gmail.com"
              className="w-10 h-10 border border-primary-foreground/30 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a> */}
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Coni Perez. Hecho por{" "}
            <a
              href="https://barragan-natalia-portfolio-vert-eight-97.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-1 rounded hover:bg-primary-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Natalia Barragan
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
