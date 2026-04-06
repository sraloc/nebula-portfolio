import PortfolioGallery from '@/components/PortfolioGallery';

/**
 * Home Page - Vortex Portfolio
 * 
 * Design Philosophy: Cinemática Oscura
 * - Dark, immersive aesthetic inspired by film production
 * - Magenta and amber accents for visual hierarchy
 * - Seamless scrolling experience through portfolio sections
 * - No distracting elements - focus on the work
 */

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(10, 10, 10, 0.95)', borderColor: '#1C1C1E' }}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Vortex Logo */}
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/logovortexconfondo_4e3f4956.webp" 
              alt="Vortex Logo" 
              className="h-10 w-auto"
            />
            <h1 className="text-xl tracking-widest" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: '#FFFFFF', fontWeight: 600 }}>VORTEX</h1>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#portfolio" className="transition-colors" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
              Portafolio
            </a>
            <a href="https://sraloc.github.io/nebulaweb/" className="transition-colors" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
              Volver al sitio
            </a>
          </nav>
        </div>
      </header>

      {/* Portfolio Gallery */}
      <section id="portfolio">
        <PortfolioGallery />
      </section>

      {/* Footer */}
      <footer className="border-t py-12" style={{ backgroundColor: '#0A0A0A', borderColor: '#1C1C1E' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663468761794/e8xfFyW6dXJEFGQgKJqfmX/logovortexconfondo_4e3f4956.webp" 
                  alt="Vortex Logo" 
                  className="h-8 w-auto"
                />
                <h3 className="text-lg tracking-widest" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: '#FFFFFF', fontWeight: 600 }}>VORTEX</h3>
              </div>
              <p className="text-sm" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
                Productora audiovisual chilena especializada en videoclips musicales y contenido cinematográfico.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-wider mb-4" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: '#FFFFFF', fontWeight: 600 }}>ENLACES</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://sraloc.github.io/nebulaweb/" className="transition-colors text-sm" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    Sitio Principal
                  </a>
                </li>
                <li>
                  <a href="https://sraloc.github.io/nebulaweb/#portafolio" className="transition-colors text-sm" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    Portafolio Completo
                  </a>
                </li>
                <li>
                  <a href="https://sraloc.github.io/nebulaweb/#contacto" className="transition-colors text-sm" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-wider mb-4" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", color: '#FFFFFF', fontWeight: 600 }}>CONTACTO</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
                <li>
                  <a href="mailto:contacto@nebulavision.cl" className="transition-colors" style={{ color: '#A1A1AA' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    contacto@nebulavision.cl
                  </a>
                </li>
                <li>Santiago, Chile</li>
                <li className="text-xs mt-4" style={{ color: 'rgba(161, 161, 170, 0.7)' }}>
                  © 2026 Vortex Studio. Todos los derechos reservados.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t pt-8" style={{ borderColor: '#1C1C1E' }}>
            <p className="text-center text-xs" style={{ color: '#A1A1AA', fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
              Construimos identidad visual para marcas y artistas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
