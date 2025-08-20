import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, Calendar, MapPin, TrendingUp, Users, Award, Target, CheckCircle } from "lucide-react";

export default function Experience() {
  const careerStats = [
    {
      number: "20+",
      label: "Years Experience",
      description: "ICT & Digital Transformation",
      testId: "stat-experience"
    },
    {
      number: "5",
      label: "Countries",
      description: "Saudi Arabia, Kuwait, Turkey, Egypt",
      testId: "stat-countries"
    },
    {
      number: "130+",
      label: "Team Members Led",
      description: "Across multiple projects",
      testId: "stat-team-members"
    },
    {
      number: "$125M+",
      label: "Contracts Secured",
      description: "Lifetime achievement",
      testId: "stat-contracts"
    }
  ];

  const careerJourney = [
    {
      period: "Dec 2024 - Present",
      role: "Sales Director",
      company: "Abdullah Fouad Group - InfoTech Division",
      location: "Saudi Arabia",
      type: "Full-time • 9 months+",
      description: "Leading nationwide ICT sales and operations across all regions of Saudi Arabia, with comprehensive P&L accountability and strategic oversight of government, telecom, and enterprise sector engagements.",
      responsibilities: [
        "Strategic Planning: Develop and execute strategic sales plans aligned with regional corporate objectives and Vision 2030 initiatives",
        "Performance Leadership: Lead sales forecasting efforts and establish performance goals tailored to regional market needs",
        "Market Intelligence: Analyze market trends to identify customer requirements, optimal pricing strategies, and discount structures",
        "Team Development: Manage regional sales programs by directing staffing, training, and performance evaluation processes",
        "Distribution Strategy: Coordinate sales distribution through channel development, territory allocation, and goal setting",
        "Digital Transformation Leadership: Oversee key client engagements ensuring solutions meet national digital transformation objectives"
      ],
      skills: ["P&L Management", "Sales Strategy", "Team Leadership", "Vision 2030", "Market Analysis", "Government Relations"],
      testId: "career-sales-director"
    },
    {
      period: "Jan 2024 - Dec 2024",
      role: "Regional Manager, Western Region",
      company: "Abdullah Fouad Group - InfoTech Division",
      location: "Jeddah, Makkah, Saudi Arabia • Hybrid",
      type: "Full-time • 1 year",
      description: "Turnaround leader for an underperforming region. Transformed Western Region from bottom-tier to #1 nationwide position through strategic leadership and market expansion.",
      achievements: [
        "SAR 125M New Contracts (2024)",
        "SAR 110M Collections Achieved", 
        "#1 National Ranking",
        "5× Profit Increase"
      ],
      responsibilities: [
        "Team Transformation: Rebuilt the sales team from ground up, instilling client-focused culture and performance-driven mindset",
        "Market Expansion: Expanded market footprint across Riyadh, Mecca, Medina, Eastern Province, Tabuk, and Jazan",
        "Government Compliance: Leveraged newly developed government-compliant proposal templates (Etimad platform, Ministry of Finance standards)",
        "Strategic Partnerships: Forged key relationships with government entities and enterprise clients",
        "Process Optimization: Implemented systematic approach to sales forecasting and pipeline management"
      ],
      skills: ["Turnaround Management", "Government Relations", "Team Building", "Market Expansion", "Strategic Planning"],
      testId: "career-regional-manager"
    },
    {
      period: "Sep 2022 - Dec 2023",
      role: "Senior Product Manager",
      company: "Ingram Micro",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time • 1 yr 4 months",
      description: "Strategic management of Oracle solutions portfolio across Saudi Arabia, maintaining market leadership position and driving significant partner network expansion.",
      achievements: [
        "Maintained Oracle #1 Distributor Position",
        "25% Sales Pipeline Growth",
        "Channel Partner Network Expansion",
        "Market Leadership in Oracle Solutions"
      ],
      responsibilities: [
        "Market Leadership: Collaborated with Presales, marketing, sales, and Operation teams to implement Oracle product strategy",
        "Portfolio Management: Oversaw and implemented Oracle product growth strategy across all market segments",
        "Partner Development: Developed and conceptualized product marketing programs, facilitating demand generation initiatives",
        "Relationship Management: Actively engaged with partners and vendors, building and maintaining strong collaborative relationships",
        "Channel Expansion: Spearheaded Oracle product channel development and conducted comprehensive training programs"
      ],
      skills: ["Account Management", "Channel Partners", "Business Strategy", "Product Management", "Oracle Solutions"],
      testId: "career-product-manager"
    },
    {
      period: "Jan 2021 - Sep 2022",
      role: "ICT Business Unit Manager / PMO Head",
      company: "Gulf Group Co",
      location: "Riyadh, Saudi Arabia",
      type: "Full-time • 1 yr 9 months",
      description: "Senior executive role reporting directly to Gulf Group Holding CEO. Led comprehensive ICT business development spanning IP networks, cybersecurity, and critical infrastructure with full strategic oversight.",
      responsibilities: [
        "C-Suite Reporting: Direct reports to Gulf Group Holding CEO on ICT strategy and performance",
        "Business Development: Led ICT business development for IP network, cybersecurity, and Critical Infrastructure",
        "Financial Management: Oversaw annual business revenue and financial strategies with full P&L accountability",
        "Strategic Planning: Developed and implemented technology strategies, partnerships, and external relationships",
        "Operational Excellence: Guided project managers to ensure efficient workflow and delivery",
        "Team Leadership: Drove Gulf Group ICT's direction managing 130 employees with focus on development",
        "Project Oversight: Comprehensive oversight of project timelines, budgets, KPIs, and contractor relationships"
      ],
      skills: ["Executive Leadership", "PMO Management", "Strategic Planning", "P&L Management", "Team Management"],
      testId: "career-business-unit-manager"
    },
    {
      period: "Apr 2016 - Dec 2020",
      role: "ICT Business Unit Business Development Leader / PMO Head",
      company: "Gulf Group Co",
      location: "Kuwait/Saudi Arabia",
      type: "4 yrs 9 months • Founding Leadership",
      description: "Entrepreneurial leadership role building a complete ICT business unit from conception to $18M annual revenue. Established market presence across Kuwait and KSA through strategic vision and execution.",
      achievements: [
        "$18M Annual Revenue",
        "130+ Team Members",
        "50+ Projects Delivered",
        "30% Annual Growth"
      ],
      responsibilities: [
        "Business Strategy: Defined complete vision, services portfolio, and market entry strategy for Kuwait and KSA markets",
        "Revenue Growth: Built business from startup phase to ~$18M annual revenue with consistent ~30% annual growth",
        "Project Portfolio: Delivered 50+ projects spanning data centers, cybersecurity, and telecommunications",
        "Team Development: Hired and led diverse team of 130+ professionals across multiple countries",
        "Operational Systems: Established PMO and implemented KPI-driven management improving delivery times by 20%",
        "Enterprise Systems: Implemented SAP ERP and other enterprise systems to streamline operations",
        "Strategic Partnerships: Secured high-profile contracts through partnerships with Huawei, Oracle, Schneider Electric",
        "Government Relations: Delivered telecom infrastructure for government defense and Tier III data centers"
      ],
      skills: ["Business Development", "Market Entry", "Strategic Partnerships", "Revenue Growth", "Team Building"],
      testId: "career-business-development-leader"
    },
    {
      period: "Aug 2014 - Jan 2016",
      role: "Senior Consultant Telecom & Electrical Engineer",
      company: "ACE Arab Consulting Engineers \"Moharram.Bakhoum\"",
      location: "Egypt",
      type: "Contract • 1 yr 6 months",
      description: "Strategic consulting role providing technical expertise for major telecommunications and electrical engineering projects across Egypt and Middle East region.",
      responsibilities: [
        "Partnership Development: Establishing strong relationships with technical partners and engaging in collaborative brainstorming",
        "Project Planning: Assisting in developing design delivery schedules and collaborating with clients, project managers",
        "Technical Leadership: Offering valuable input and subject matter expertise to support project development",
        "Quality Assurance: Reviewing scope drawings and providing guidance to engineering teams",
        "Project Monitoring: Overseeing technical submittals and monitoring site progress effectively"
      ],
      skills: ["Infrastructure", "Project Management", "Technical Consulting", "Engineering Leadership"],
      testId: "career-senior-consultant"
    },
    {
      period: "Jun 2008 - Aug 2014",
      role: "Project Manager",
      company: "Contact Point Networks S.A.E",
      location: "Egypt",
      type: "6 yrs 3 months • Foundation Building",
      description: "Comprehensive project management role managing multi-vendor contractor projects and Full Turn Key (FTK) initiatives with leading telecommunications companies.",
      partners: ["Huawei", "Nokia (NSN)", "Ericsson", "NEC", "ZTE", "Etisalat Misr"],
      responsibilities: [
        "End-to-End Management: Efficiently oversee complete multi-vendor contractor projects lifecycle",
        "Strategic Collaboration: Close collaboration with procurement teams for effective marketing and procurement strategies",
        "Project Initiation: Meticulous planning process ensuring alignment with organizational goals",
        "Contract Lifecycle: Monitor contracts throughout their lifecycle maintaining customer satisfaction and End User KPIs",
        "FTK Leadership: Spearheaded Full Turn Key projects with industry leaders",
        "Quality Standards: Ensured seamless execution meeting quality standards and timelines",
        "Team Coordination: Fostered effective communication and collaboration among diverse teams",
        "Risk Management: Implemented strategic measures to mitigate risks and enhance project efficiency"
      ],
      skills: ["Multi-Vendor Management", "FTK Project Delivery", "Contract Management", "Telecommunications"],
      testId: "career-project-manager"
    }
  ];

  const careerEvolution = [
    {
      period: "2004-2008",
      phase: "Technical Foundation",
      description: "Built strong foundation in telecommunications engineering and project execution"
    },
    {
      period: "2008-2014", 
      phase: "Project Management Mastery",
      description: "Mastered multi-vendor project management with industry leaders"
    },
    {
      period: "2014-2016",
      phase: "Strategic Consulting",
      description: "Transitioned to high-level technical consulting and strategic advisory"
    },
    {
      period: "2016-2022",
      phase: "Business Building",
      description: "Built $18M ICT division from ground up across multiple countries"
    },
    {
      period: "2022-Present",
      phase: "Executive Leadership",
      description: "C-suite executive driving organizational transformation and growth"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-career-journey">
              <Building2 className="w-4 h-4" />
              Executive Career Journey
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
              20+ Years of ICT Excellence
              <span className="block text-accent mt-2">From Technical Specialist to C-Suite Executive</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Comprehensive career progression spanning technical expertise, project management mastery, 
              business building, and executive leadership across multiple countries and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Career Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerStats.map((stat) => (
              <div key={stat.testId} className="text-center bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl" data-testid={stat.testId}>
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Evolution Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-evolution-title">
              Career Evolution Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic progression from technical foundation to executive leadership, 
              building expertise across telecommunications, project management, business development, and C-suite leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {careerEvolution.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-full">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{phase.period}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.phase}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Career Journey */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-career-journey-title">
              Detailed Career Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete professional experience showcasing progressive responsibility, 
              strategic leadership, and transformational impact across leading organizations.
            </p>
          </div>

          <div className="space-y-12">
            {careerJourney.map((job, index) => (
              <div key={job.testId} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm border border-gray-200" data-testid={job.testId}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold mb-2">
                      <Calendar className="w-4 h-4" />
                      {job.period}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.role}</h3>
                    <div className="flex items-center gap-2 text-lg text-blue-600 font-semibold mb-2">
                      <Building2 className="w-4 h-4" />
                      {job.company}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="text-sm text-gray-500">{job.type}</div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                {job.achievements && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      Key Achievements
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {job.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center gap-3 bg-green-50 p-3 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm font-semibold text-gray-900">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {job.responsibilities && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-600" />
                      Key Responsibilities
                    </h4>
                    <div className="space-y-3">
                      {job.responsibilities.map((resp, respIndex) => (
                        <div key={respIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-gray-700 leading-relaxed">{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {job.partners && (
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Strategic Vendor Partnerships</h4>
                    <div className="flex flex-wrap gap-3">
                      {job.partners.map((partner, partnerIndex) => (
                        <span key={partnerIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {partner}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Core Skills & Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Partner with Proven Executive Leadership
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Leverage 20+ years of progressive ICT leadership experience for your organization's 
            digital transformation and strategic growth initiatives.
          </p>
          <Link href="/contact" data-testid="button-cta-contact">
            <Button className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Schedule Executive Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}