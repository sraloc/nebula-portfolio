import PortfolioGallery from '@/components/PortfolioGallery';

/**
 * Home Page - Nebula Portfolio
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
          <div className="flex items-center gap-2">
            {/* Nebula Logo */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #D946EF, #F59E0B)' }}>
              <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}></div>
            </div>
            <h1 className="text-xl tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FFFFFF' }}>NEBULA</h1>
          </div>
          
          <nav className="hidden md:flex gap-8">
            <a href="#portfolio" className="transition-colors" style={{ color: '#A1A1AA' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
              Portafolio
            </a>
            <a href="https://sraloc.github.io/nebulaweb/" className="transition-colors" style={{ color: '#A1A1AA' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
              Volver al sitio
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <div className="h-1 w-16 rounded-full" style={{ background: 'linear-gradient(to right, #D946EF, #F59E0B)' }}></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tighter leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FFFFFF' }}>
              Construimos identidad visual
              <span className="block bg-clip-text" style={{ background: 'linear-gradient(to right, #D946EF, #F59E0B, #D946EF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                para marcas y artistas
              </span>
            </h2>
            
            <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed" style={{ color: '#A1A1AA' }}>
              Cada proyecto es una oportunidad de crear algo único y memorable. Desde stills cinematográficos hasta sesiones fotográficas y momentos behind-the-scenes, aquí está el corazón de nuestro trabajo.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#portfolio"
                className="px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ backgroundColor: '#D946EF', color: '#FFFFFF', boxShadow: '0 0 20px rgba(217, 70, 239, 0.3)' }}
              >
                Explorar Portafolio
              </a>
              <a
                href="https://sraloc.github.io/nebulaweb/#contacto"
                className="px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-300 text-center"
                style={{ borderColor: '#D946EF', color: '#D946EF' }}
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -z-10" style={{ backgroundColor: 'rgba(217, 70, 239, 0.05)' }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl -z-10" style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)' }}></div>
      </section>

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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, #D946EF, #F59E0B)' }}>
                  <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}></div>
                </div>
                <h3 className="text-lg tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FFFFFF' }}>NEBULA</h3>
              </div>
              <p className="text-sm" style={{ color: '#A1A1AA' }}>
                Productora audiovisual chilena especializada en videoclips musicales y contenido cinematográfico.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm tracking-wider mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FFFFFF' }}>ENLACES</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://sraloc.github.io/nebulaweb/" className="transition-colors text-sm" style={{ color: '#A1A1AA' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    Sitio Principal
                  </a>
                </li>
                <li>
                  <a href="https://sraloc.github.io/nebulaweb/#portafolio" className="transition-colors text-sm" style={{ color: '#A1A1AA' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    Portafolio Completo
                  </a>
                </li>
                <li>
                  <a href="https://sraloc.github.io/nebulaweb/#contacto" className="transition-colors text-sm" style={{ color: '#A1A1AA' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm tracking-wider mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#FFFFFF' }}>CONTACTO</h4>
              <ul className="space-y-2 text-sm" style={{ color: '#A1A1AA' }}>
                <li>
                  <a href="mailto:contacto@nebulavision.cl" className="transition-colors" style={{ color: '#A1A1AA' }} onMouseEnter={(e) => e.currentTarget.style.color = '#D946EF'} onMouseLeave={(e) => e.currentTarget.style.color = '#A1A1AA'}>
                    contacto@nebulavision.cl
                  </a>
                </li>
                <li>Santiago, Chile</li>
                <li className="text-xs mt-4" style={{ color: 'rgba(161, 161, 170, 0.7)' }}>
                  © 2026 Nebula Vision Studio. Todos los derechos reservados.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="border-t pt-8" style={{ borderColor: '#1C1C1E' }}>
            <p className="text-center text-xs" style={{ color: '#A1A1AA' }}>
              Construimos identidad visual para marcas y artistas
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
