import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Building2, Globe, Shield, Target, TrendingUp, Users, Zap } from "lucide-react";

export default function About() {
  const credentials = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Global Top 0.001% ICT Executive",
      description: "One of the rarest global certification portfolios in the industry - may be the only professional in Saudi Arabia and Turkey with this exact set of qualifications."
    },
    {
      icon: <Building2 className="w-8 h-8 text-green-600" />,
      title: "Vision 2030 Project Leader",
      description: "Led delivery of NEOM Tier III Data Center (SAR 21.9M) - flagship Vision 2030 project providing critical infrastructure for Saudi Arabia's premier smart city."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      title: "Business Transformation Expert",
      description: "Transformed underperforming Western Region to #1 nationwide position with SAR 125M in contracts and 5× profit increase within one year."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Multi-Country Leadership",
      description: "Successfully led operations across Saudi Arabia, Kuwait, Turkey, and Egypt with comprehensive P&L accountability and strategic oversight."
    }
  ];

  const certifications = [
    "Program Management Professional (PgMP)",
    "Master of Business Administration (MBA)",
    "Doctor of Business Administration (DBA Candidate)",
    "Certified Information Security Manager (CISM)",
    "Certified Information Systems Auditor (CISA)",
    "Certified in Risk and Information Systems Control (CRISC)",
    "Project Management Professional (PMP)"
  ];

  const expertise = [
    {
      title: "Digital Transformation & Strategy",
      description: "IT modernization, Smart Cities, IoT/Cloud Solutions, aligning tech initiatives with business goals and Vision 2030 objectives.",
      icon: <Zap className="w-6 h-6 text-blue-600" />
    },
    {
      title: "ICT Infrastructure",
      description: "Data Center design (Tier III+), Telecom Networks, Cybersecurity & Risk Management, IT Service Management expertise.",
      icon: <Shield className="w-6 h-6 text-green-600" />
    },
    {
      title: "Leadership & Management",
      description: "P&L management, Program/Project Management, PMO establishment, cross-functional team leadership across 130+ members.",
      icon: <Users className="w-6 h-6 text-purple-600" />
    },
    {
      title: "Business Development",
      description: "Sales Leadership, Key Account Management, Go-to-Market Strategy, Vendor & Stakeholder Management excellence.",
      icon: <Target className="w-6 h-6 text-orange-600" />
    }
  ];

  const languages = [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Turkish", level: "Basic" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-global-executive">
                <Award className="w-4 h-4" />
                Global Top 0.001% ICT Executive
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
                About Ahmet Doğan
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
                Visionary ICT leader with 20+ years of experience driving large-scale digital transformation 
                and infrastructure projects across the Middle East. Proven track record of turning around 
                underperforming operations and accelerating growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/contact" data-testid="button-executive-contact">
                  <Button className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold">
                    Executive Contact
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-semibold" data-testid="button-download-cv">
                  Download Elite CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Executive Profile</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>📍 Riyadh, Saudi Arabia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>📞 +966-500-666-084</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>✉️ ahmet.dogan@doganhub.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>🆔 Saudi Premium Residency</span>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/30">
                    <h4 className="font-semibold mb-2">Languages & Accessibility</h4>
                    {languages.map((lang, index) => (
                      <div key={index} className="flex justify-between text-sm mb-1">
                        <span>{lang.language}</span>
                        <span className="text-white/80">{lang.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-achievements-title">
              Key Credentials & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rare combination of global certifications, Vision 2030 project leadership, and proven business transformation results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {credentials.map((credential, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 bg-white shadow-lg rounded-xl p-4">
                  {credential.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{credential.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{credential.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-certifications-title">
              Elite Certification Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One of the most comprehensive certification portfolios globally, placing Ahmet in the top 0.001% of ICT professionals worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary-600" />
                  <span className="font-semibold text-gray-900">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-expertise-title">
              Core Expertise Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep technical expertise combined with strategic business acumen across multiple domains and geographies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white shadow-lg rounded-lg p-3">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{area.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-summary-title">
              Executive Summary
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Visionary ICT leader</strong> with 20+ years of experience driving large-scale digital transformation 
                and infrastructure projects across the Middle East (Saudi Arabia, Kuwait, Turkey, Egypt). Proven track record 
                of turning around underperforming operations and accelerating growth - delivered up to 5× profit increase and 
                $125M+ in new contracts within a year.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Combines deep technical expertise with strategic business acumen: led nationwide sales and P&L management, 
                executed smart city and cloud initiatives aligned with Vision 2030 goals. One of the most highly certified 
                ICT executives globally (MBA, PgMP, PMP, CISM, and others), offering a rare blend of credentials and 
                on-the-ground leadership.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                <strong>Holds Saudi Premium Residency,</strong> enabling hassle-free hiring and engagement across KSA. 
                Now seeking a CIO/CTO or digital transformation leadership role to drive innovation, growth, and 
                organizational excellence.
              </p>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Availability</h3>
                <p className="mb-4">
                  Immediately available for senior leadership opportunities. Open to C-suite roles such as CIO, CTO, 
                  or Executive Director of Digital Transformation. Willing to relocate and travel as required to drive 
                  critical initiatives.
                </p>
                <Link href="/contact" data-testid="button-discuss-opportunities">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold">
                    Discuss Opportunities
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}