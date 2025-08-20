import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gradient">
              Shane Kinkennon
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-sm font-medium text-[var(--fg)] hover:text-[var(--executive-gold)] transition-all duration-300">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-[var(--fg)] hover:text-[var(--executive-gold)] transition-all duration-300">
                About
              </Link>
              <Link href="/testimonials" className="text-sm font-medium text-[var(--fg)] hover:text-[var(--executive-gold)] transition-all duration-300">
                Testimonials
              </Link>
              <Link href="/contact" className="text-sm font-medium text-[var(--fg)] hover:text-[var(--executive-gold)] transition-all duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center animate-fade-in">
            <div className="kpi-ribbon mb-8 mx-auto w-fit">
              <span>Executive Leadership Excellence</span>
            </div>
            <h1 className="holographic-text mb-6">
              Transform Your Leadership Impact
            </h1>
            <p className="text-xl text-[var(--fg)]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Empowering executives and organizations with strategic insights, proven methodologies, 
              and transformational leadership development for sustainable growth and mission delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn primary">
                Schedule Consultation
              </Link>
              <Link href="/about" className="btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Exact Shane Kinkennon Structure */}
      <section className="section bg-[var(--card)]">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-3xl md:text-4xl font-bold text-[var(--fg)] mb-4 animate-slide-up">
              Here's how I help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {/* Executive Coaching */}
            <div className="tech-card rounded-xl p-8 text-center animate-scale-up">
              <div className="mb-6">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/150f55ba-e473-4d23-9df5-5777a6055922/Coaching.png" 
                  alt="Executive Coaching" 
                  className="w-24 h-24 mx-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--executive-gold)] to-[var(--executive-platinum)] rounded-full flex items-center justify-center text-4xl font-bold text-[var(--navy)] hidden">
                  EC
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-2">Executive Coaching</h3>
              <p className="text-sm italic text-[var(--muted)] mb-4">
                <strong><em>For C-suites and senior managers</em></strong>
              </p>
              <p className="text-[var(--fg)]/80 mb-6 leading-relaxed">
                Unlock new mindsets and methods to inspire teams, equip them to lead change, 
                and actually hold them accountable for results.
              </p>
              <Link href="/executive-coaching" className="btn primary text-sm">
                LEARN MORE
              </Link>
            </div>

            {/* Management Consulting */}
            <div className="tech-card rounded-xl p-8 text-center animate-scale-up" style={{ animationDelay: "0.2s" }}>
              <div className="mb-6">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/cb383a02-a93a-4c61-883b-33c908d91522/5+hand+icon.png" 
                  alt="Management Consulting" 
                  className="w-24 h-24 mx-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--executive-gold)] to-[var(--executive-platinum)] rounded-full flex items-center justify-center text-4xl font-bold text-[var(--navy)] hidden">
                  MC
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-2">Management Consulting</h3>
              <p className="text-sm italic text-[var(--muted)] mb-4">
                <strong><em>For nonprofit leadership teams</em></strong>
              </p>
              <p className="text-[var(--fg)]/80 mb-6 leading-relaxed">
                Devise and lead change in response to intractable organizational challenges, 
                aligning strategy and function for mission delivery.
              </p>
              <Link href="/management-consulting" className="btn primary text-sm">
                LEARN MORE
              </Link>
            </div>

            {/* Board Consulting */}
            <div className="tech-card rounded-xl p-8 text-center animate-scale-up" style={{ animationDelay: "0.4s" }}>
              <div className="mb-6">
                <img 
                  src="https://images.squarespace-cdn.com/content/v1/68139c837de0a364b1e1e6e7/1bb06ca0-bb1b-4f81-98f3-f8a0a88a3ce3/Asset+3.png" 
                  alt="Board Consulting" 
                  className="w-24 h-24 mx-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[var(--executive-gold)] to-[var(--executive-platinum)] rounded-full flex items-center justify-center text-4xl font-bold text-[var(--navy)] hidden">
                  BC
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[var(--fg)] mb-2">Board Consulting</h3>
              <p className="text-sm italic text-[var(--muted)] mb-4">
                <strong><em>For nonprofit boards of directors</em></strong>
              </p>
              <p className="text-[var(--fg)]/80 mb-6 leading-relaxed">
                Sharpen focus on those activities and areas that deliver the absolute highest 
                value to management of the organization you govern and serve.
              </p>
              <Link href="/board-consulting" className="btn primary text-sm">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container text-center">
          <div className="glass-morphism rounded-xl p-12 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
              Ready to Transform Your Leadership?
            </h2>
            <p className="text-lg text-[var(--fg)]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how proven methodologies can help you achieve 
              your organizational goals and leadership aspirations.
            </p>
            <Link href="/contact" className="btn primary text-lg px-8 py-4">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}