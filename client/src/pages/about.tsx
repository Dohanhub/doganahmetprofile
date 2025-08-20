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
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: "Business Transformation Expert",
      description: "Transformed underperforming Western Region to #1 nationwide position with SAR 125M in contracts and 5× profit increase within one year."
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-600" />,
      title: "Multi-Country Leadership",
      description: "Successfully led operations across Saudi Arabia, Kuwait, Turkey, and Egypt with comprehensive P&L accountability and strategic oversight."
    }
  ];

  const education = [
    {
      degree: "Doctor of Business Administration (DBA)",
      institution: "University of Northampton, UK",
      period: "2022-2026",
      status: "Currently enrolled in final stage",
      focus: "Research focus on cybersecurity integration in business strategy",
      expected: "Expected completion 2026"
    },
    {
      degree: "Master of Business Administration (MBA)",
      institution: "University of Leicester, UK",
      period: "2019-2021",
      accreditation: "AMBA Accredited",
      project: "MBA Graduation Project (18,000 words): 'The Impact of Internet of Things on Consumer Preferences and Behavior'",
      focus: "Business Administration and Management, Marketing"
    },
    {
      degree: "Diploma in Strategic Management and Leadership Practice",
      institution: "Chartered Management Institute",
      period: "2019-2021",
      level: "CMI Level 7",
      focus: "Business Administration and Management"
    },
    {
      degree: "Stanford Advanced Computer Security",
      institution: "Stanford University School of Engineering",
      period: "2019-2020",
      specialization: "Computer Science Specialization",
      focus: "Comprehensive cybersecurity curriculum"
    },
    {
      degree: "Bachelor of Engineering",
      institution: "Faculty of Electronic Engineering, Menoufia University",
      period: "1999-2004",
      accreditation: "WES Canada accredited",
      focus: "Electronic and Electrical Communication, Electronics and Communications Engineering"
    }
  ];

  const globalStanding = [
    {
      metric: "0.001%",
      description: "Global ICT Professional Ranking among ~62 million ICT professionals worldwide",
      analysis: "Exceptionally rare credential combination"
    },
    {
      metric: "354,000",
      description: "Total ICT Workers in Saudi Arabia (2023)",
      analysis: "Likely the only professional in KSA holding complete PgMP + CISA/CISM/CRISC + RCDD + ATD/AOS combination"
    },
    {
      metric: "<100",
      description: "Estimated similar profiles globally",
      analysis: "Within 62 million global ICT professionals, fewer than 100 hold comparable qualifications"
    }
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
      icon: <Users className="w-6 h-6 text-indigo-600" />
    },
    {
      title: "Business Development",
      description: "Sales Leadership, Key Account Management, Go-to-Market Strategy, Vendor & Stakeholder Management excellence.",
      icon: <Target className="w-6 h-6 text-orange-600" />
    }
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
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Executive Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Elite ICT Executive & Digital Transformation Leader</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Global Top 0.001% Professional Portfolio</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>20+ Years Progressive Leadership Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Vision 2030 Strategic Alignment Expert</span>
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

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-education-title">
              Advanced Academic Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive academic foundation spanning business administration, cybersecurity, strategic management, 
              and engineering from prestigious international institutions.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{edu.degree}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-600">{edu.period}</p>
                  </div>
                  <div>
                    {edu.accreditation && (
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                        {edu.accreditation}
                      </div>
                    )}
                    {edu.status && (
                      <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                        {edu.status}
                      </div>
                    )}
                    {edu.level && (
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                        {edu.level}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-700 mb-2">{edu.focus}</p>
                    {edu.project && (
                      <p className="text-sm text-gray-600 italic">{edu.project}</p>
                    )}
                    {edu.expected && (
                      <p className="text-sm text-orange-600 font-medium">{edu.expected}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Standing Analysis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-global-standing-title">
              Global Standing & Benchmarking Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional benchmarking study positioning Ahmet Doğan among the most exceptional ICT professionals globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {globalStanding.map((stat, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <div className="text-4xl font-bold text-primary-700 mb-4">{stat.metric}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{stat.description}</h3>
                <p className="text-sm text-gray-600">{stat.analysis}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">Exceptionally Rare Combination</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              The probability of any one person holding Ahmet's complete credential portfolio is astronomically low. 
              Most ICT practitioners pursue one or two certification tracks at most, but it's exceedingly uncommon 
              for one person to attain advanced certifications across project management, security, service management, 
              and infrastructure design.
            </p>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
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
              
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
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