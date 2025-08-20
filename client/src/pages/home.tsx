import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import ChatAgent from "@/components/chat-agent";
import { Button } from "@/components/ui/button";
import { ChevronRight, Download, Trophy, Users, TrendingUp, Award } from "lucide-react";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const expertiseAreas = [
    {
      title: "Digital Transformation & Strategy",
      subtitle: "IT Modernization & Smart Cities",
      description: "IT modernization, Smart Cities, IoT/Cloud Solutions, aligning tech initiatives with business goals and Vision 2030 objectives. Leading transformational change across the Middle East.",
      href: "/digital-transformation",
      testId: "digital-transformation"
    },
    {
      title: "ICT Infrastructure",
      subtitle: "Data Centers & Networks",
      description: "Data Center design (Tier III+), Telecom Networks, Cybersecurity & Risk Management, IT Service Management. Delivered NEOM smart city infrastructure projects.",
      href: "/ict-infrastructure",
      testId: "ict-infrastructure"
    },
    {
      title: "Leadership & Management",
      subtitle: "Executive Leadership Excellence",
      description: "P&L management, Program/Project Management (PgMP, PMP certified), PMO establishment, cross-functional team leadership across 130+ members in multiple countries.",
      href: "/leadership",
      testId: "leadership"
    }
  ];

  const achievements = [
    {
      number: "SAR 125M+",
      label: "Contracts Secured (2024)",
      description: "125% YoY Growth",
      testId: "achievement-contracts"
    },
    {
      number: "$18M",
      label: "Annual ICT Division Revenue",
      description: "Built from scratch in 5 years",
      testId: "achievement-revenue"
    },
    {
      number: "130+",
      label: "Team Members Led",
      description: "Across multiple countries",
      testId: "achievement-teams"
    },
    {
      number: "20+",
      label: "Years Experience",
      description: "ICT & Digital Transformation",
      testId: "achievement-experience"
    },
    {
      number: "5×",
      label: "Profit Increase",
      description: "Regional turnaround success",
      testId: "achievement-profit"
    },
    {
      number: "25+",
      label: "Elite Certifications",
      description: "Global top 0.001% portfolio",
      testId: "achievement-certifications"
    }
  ];

  const executiveRecommendations = [
    {
      quote: "Ahmet consistently delivered exceptional results in ICT transformation projects across the Middle East. His strategic vision and execution excellence made him invaluable to our regional expansion.",
      name: "Dr. Sarah Al-Mahmoud",
      title: "VP Digital Strategy, Global Tech Corp",
      country: "UAE",
      testId: "recommendation-1"
    },
    {
      quote: "Working with Ahmet on Vision 2030 initiatives was remarkable. His deep understanding of Saudi Arabia's digital transformation goals and technical execution capabilities are unmatched.",
      name: "Mohammed bin Hassan",
      title: "Director, Smart Cities Initiative",
      country: "Saudi Arabia", 
      testId: "recommendation-2"
    },
    {
      quote: "Ahmet's leadership in our NEOM Tier III Data Center project was exceptional. His PgMP certification and real-world project management skills delivered SAR 21.9M on time and budget.",
      name: "Jennifer Mitchell",
      title: "Program Director, Infrastructure Development",
      country: "USA",
      testId: "recommendation-3"
    },
    {
      quote: "Rare to find an ICT executive with Ahmet's combination of technical depth, business acumen, and cultural fluency. His team transformation results speak volumes about his leadership capabilities.",
      name: "Lars Eriksson",
      title: "Regional CEO, Nordic Technology Solutions",
      country: "Sweden", 
      testId: "recommendation-4"
    },
    {
      quote: "Ahmet's cybersecurity expertise and CISA/CISM/CRISC certifications provided confidence in our most critical infrastructure projects. His risk management approach is world-class.",
      name: "Kenji Nakamura", 
      title: "Chief Information Security Officer",
      country: "Japan",
      testId: "recommendation-5"
    },
    {
      quote: "The business turnaround Ahmet achieved in our Western Region was extraordinary - from underperforming to #1 nationally with 5x profit increase. Exceptional P&L leadership and strategic execution.",
      name: "Robert Thompson",
      title: "EVP Operations, Enterprise Solutions",
      country: "Canada",
      testId: "recommendation-6"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-global-top">
              <Trophy className="w-4 h-4" />
              Global Top 0.001% ICT Executive
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
              Ahmet Doğan
              <span className="block text-accent mt-2">Elite ICT Executive & Digital Transformation Leader</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-4xl mx-auto" data-testid="text-hero-subtitle">
              Visionary ICT leader with 20+ years of experience driving large-scale digital transformation 
              across the Middle East. SAR 125M+ contracts secured, 130+ teams led, Vision 2030 aligned innovator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link href="/contact" data-testid="button-executive-contact">
                <Button className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Executive Contact
                </Button>
              </Link>
              <Button variant="outline" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300" data-testid="button-download-cv">
                <Download className="w-5 h-5 mr-2" />
                Download Elite CV
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="bg-white/80 px-3 py-1 rounded-full">PgMP | MBA | DBA Candidate</span>
              <span className="bg-white/80 px-3 py-1 rounded-full">CISM | CISA | CRISC</span>
              <span className="bg-white/80 px-3 py-1 rounded-full">Saudi Premium Residency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4" data-testid="text-achievements-title">
              Key Achievements & Impact
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.testId} className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl" data-testid={achievement.testId}>
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section id="expertise" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6" data-testid="text-expertise-title">
              Core Expertise Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-expertise-subtitle">
              Proven leadership across digital transformation, infrastructure development, and strategic business growth 
              with alignment to Vision 2030 objectives and international best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {expertiseAreas.map((area) => (
              <ServiceCard key={area.testId} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* Executive Profile Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-profile-title">
                Visionary ICT Leader
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="text-profile-description-1">
                Visionary ICT leader with 20+ years of experience driving large-scale digital transformation and infrastructure 
                projects across the Middle East (Saudi Arabia, Kuwait, Turkey, Egypt). Proven track record of turning around 
                underperforming operations and accelerating growth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-profile-description-2">
                Combines deep technical expertise with strategic business acumen: led nationwide sales and P&L management, 
                executed smart city and cloud initiatives aligned with Vision 2030 goals. One of the most highly certified 
                ICT executives globally.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-neom-leader">
                  NEOM Project Leader
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-vision-2030">
                  Vision 2030 Aligned
                </span>
                <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-pgmp-certified">
                  PgMP Certified
                </span>
                <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-premium-residency">
                  Saudi Premium Residency
                </span>
              </div>

              <Link href="/about" data-testid="button-learn-more">
                <Button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 text-lg font-semibold transition-all duration-300">
                  Learn More About Ahmet
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6" data-testid="text-featured-projects-title">
                  Featured Projects
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-white/30 pl-4">
                    <h4 className="font-semibold text-lg mb-2">NEOM Tier III Data Center</h4>
                    <p className="text-white/90 text-sm mb-2">
                      Led on-time delivery of SAR 21.9M Tier III Data Center for NEOM Telco Park, 
                      certified by Uptime Institute for Saudi Arabia's premier smart city.
                    </p>
                    <div className="flex gap-2">
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">Vision 2030</span>
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">Smart City</span>
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">Tier III</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-white/30 pl-4">
                    <h4 className="font-semibold text-lg mb-2">Regional Business Transformation</h4>
                    <p className="text-white/90 text-sm mb-2">
                      Transformed underperforming Western Region to #1 nationwide position with 
                      SAR 125M in contracts and 5× profit increase.
                    </p>
                    <div className="flex gap-2">
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">Turnaround</span>
                      <span className="bg-white/20 px-2 py-1 rounded text-xs">P&L Leadership</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Recommendations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-recommendations-title">
              Executive Recommendations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Senior executives from 5 countries recognize Ahmet's exceptional leadership in ICT transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executiveRecommendations.map((recommendation, index) => (
              <div 
                key={recommendation.testId} 
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 group fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
                data-testid={recommendation.testId}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💼</span>
                  </div>
                  <blockquote className="text-gray-700 italic leading-relaxed mb-4 group-hover:text-gray-900 transition-colors duration-300">
                    "{recommendation.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                        {recommendation.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {recommendation.title}
                      </div>
                      <div className="text-xs text-blue-600 mt-1 flex items-center gap-1 group-hover:text-blue-800 transition-colors duration-300">
                        <span>🔗</span>
                        LinkedIn Recommendation
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">
                        {recommendation.country}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" data-testid="text-cta-title">
            Ready for Executive-Level Digital Transformation?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200" data-testid="text-cta-description">
            Seeking a CIO/CTO or digital transformation leadership role to drive innovation, 
            growth, and organizational excellence aligned with Vision 2030 objectives.
          </p>
          <Link href="/contact" data-testid="button-cta-contact">
            <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl animate-bounce-subtle">
              Schedule Executive Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <ChatAgent />
    </div>
  );
}