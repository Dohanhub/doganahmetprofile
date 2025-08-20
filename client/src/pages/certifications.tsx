import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Shield, Users, TrendingUp, Building2, Zap, CheckCircle, Star, Trophy, Target } from "lucide-react";

export default function Certifications() {
  const certificationStats = [
    {
      number: "25+",
      label: "Active Certifications",
      description: "Across multiple domains",
      testId: "stat-certifications"
    },
    {
      number: "7",
      label: "Certification Categories",
      description: "Complete expertise coverage",
      testId: "stat-categories"
    },
    {
      number: "15+",
      label: "Certifying Organizations",
      description: "Global recognition",
      testId: "stat-organizations"
    },
    {
      number: "0.001%",
      label: "Global Rarity Ranking",
      description: "Ultra-rare combination",
      testId: "stat-rarity"
    }
  ];

  const projectManagementCerts = [
    {
      name: "Program Management Professional (PgMP)®",
      issuer: "Project Management Institute",
      rarity: "Top 0.009% Globally (~5,350 holders)",
      period: "Issued Jan 2023 • Expires Jan 2026",
      skills: ["Program Management", "Team Management", "C-Level Presentations", "Management Consulting", "Critical Thinking"],
      testId: "cert-pgmp"
    },
    {
      name: "Project Management Professional (PMP)®",
      issuer: "Project Management Institute",
      period: "Issued Sep 2020 • Expired Sep 2023",
      credentialId: "2800506",
      skills: ["Project Management", "Team Management", "Presentations", "Critical Thinking"],
      testId: "cert-pmp"
    },
    {
      name: "PMI Agile Certified Practitioner (PMI-ACP)",
      issuer: "Project Management Institute",
      period: "Issued Sep 2020 • Expired Sep 2023",
      credentialId: "2803746",
      skills: ["Project Management", "Team Management", "Presentations", "Management Consulting"],
      testId: "cert-pmi-acp"
    },
    {
      name: "PRINCE2® Practitioner CPD",
      issuer: "AXELOS Global Best Practice",
      period: "Issued Oct 2020 • Expired Oct 2023",
      credentialId: "GR657076252AE",
      skills: ["Project Management", "Team Management", "Project Planning"],
      testId: "cert-prince2"
    }
  ];

  const securityCerts = [
    {
      name: "Certified Information Security Manager® (CISM)",
      issuer: "ISACA",
      rarity: "Top 0.07% Globally (~46,000 holders)",
      period: "Issued Oct 2020 • Expired Jan 2024",
      credentialId: "2054760",
      skills: ["Security Management", "Risk Assessment", "Information Security", "Compliance"],
      testId: "cert-cism"
    },
    {
      name: "Certified Information Systems Auditor® (CISA)",
      issuer: "ISACA",
      rarity: "Top 0.24% Globally (~151,000 holders)",
      period: "Issued Oct 2020 • Expired Jan 2024",
      credentialId: "2054760",
      skills: ["IT Audit", "Systems Control", "Compliance", "Risk Management"],
      testId: "cert-cisa"
    },
    {
      name: "Certified in Risk and Information Systems Control™ (CRISC)",
      issuer: "ISACA",
      rarity: "Top 0.05% Globally (~30,000 holders)",
      period: "Issued Oct 2020 • Expired Jan 2024",
      credentialId: "2029307",
      skills: ["IT Risk Management", "Control Design", "Risk Assessment"],
      testId: "cert-crisc"
    }
  ];

  const infrastructureCerts = [
    {
      name: "Registered Communications Distribution Designer (RCDD)",
      issuer: "BICSI",
      rarity: "Ultra Rare: Top 0.024% Globally (~15,000 holders)",
      period: "Issued Nov 2021 • Expired Dec 2024",
      skills: ["Data Center Design", "Telecommunications", "Network Infrastructure", "Low Voltage"],
      testId: "cert-rcdd"
    },
    {
      name: "ATD Accredited Tier Designer",
      issuer: "Uptime Institute",
      rarity: "Ultra Rare: <0.002% Globally (Hundreds worldwide)",
      period: "Issued Nov 2019 • Expired Nov 2021",
      credentialId: "3121",
      skills: ["Data Center Tier Design", "Infrastructure Planning", "Critical Facilities"],
      testId: "cert-atd"
    },
    {
      name: "Accredited Operation Specialist (AOS)",
      issuer: "Uptime Institute",
      rarity: "Ultra Rare: <0.002% Globally",
      period: "Issued Apr 2020",
      skills: ["Data Center Operations", "Infrastructure Management", "Critical Systems"],
      testId: "cert-aos"
    },
    {
      name: "HCIP-Data Center Facility",
      issuer: "Huawei Consumer Egypt",
      period: "Issued Dec 2018 • Expired Dec 2021",
      credentialId: "HCIP - Data Center Facility",
      skills: ["Data Center Infrastructure", "Facility Management"],
      testId: "cert-hcip"
    }
  ];

  const managementCerts = [
    {
      name: "Chartered Manager",
      issuer: "Chartered Management Institute",
      period: "Issued Apr 2022",
      skills: ["Strategic Leadership", "Management Consulting", "Executive Leadership"],
      testId: "cert-chartered-manager"
    },
    {
      name: "Telecommunications Consultant",
      issuer: "Saudi Council of Engineers",
      period: "Issued Jul 2020 • Expired Jul 2023",
      skills: ["Telecommunications Consulting", "Engineering Leadership"],
      testId: "cert-telecom-consultant"
    }
  ];

  const rarityAnalysis = [
    {
      category: "Ultra-Rare (<0.01%)",
      certifications: [
        { name: "PgMP", count: "~5,350 globally (0.009%)" },
        { name: "ATD/AOS", count: "Hundreds globally (<0.002%)" },
        { name: "RCDD", count: "~15,000 globally (0.024%)" }
      ]
    },
    {
      category: "Rare (<0.3%)",
      certifications: [
        { name: "CRISC", count: "~30,000 globally (0.05%)" },
        { name: "CISM", count: "~46,000 globally (0.07%)" },
        { name: "CISA", count: "~151,000 globally (0.24%)" }
      ]
    },
    {
      category: "Specialized (1-3%)",
      certifications: [
        { name: "PMP", count: "~1.45M globally (2.3%)" },
        { name: "PRINCE2", count: "~1M globally (1.6%)" },
        { name: "ITIL", count: "~2M globally (3.2%)" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-certifications">
              <Award className="w-4 h-4" />
              Complete Global Certification Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
              Elite Professional Certifications
              <span className="block text-accent mt-2">Global Top 0.001% Credential Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Comprehensive credential portfolio spanning technical excellence, strategic leadership, and academic achievement. 
              Unprecedented multi-domain expertise positioning among the most qualified ICT professionals globally.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4" data-testid="text-stats-title">
              Portfolio Statistics
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certificationStats.map((stat) => (
              <div key={stat.testId} className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl" data-testid={stat.testId}>
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

      {/* Program & Project Management Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-project-management-title">
              🏆 Program & Project Management Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elite certifications in program and project management from globally recognized institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectManagementCerts.map((cert) => (
              <div key={cert.testId} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200" data-testid={cert.testId}>
                <div className="flex items-start gap-4 mb-4">
                  <Trophy className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                {cert.rarity && (
                  <p className="text-sm font-bold text-red-600 mb-2">{cert.rarity}</p>
                )}
                <p className="text-sm text-gray-600 mb-3">{cert.period}</p>
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mb-3">Credential ID: {cert.credentialId}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Security Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-security-title">
              🔐 Information Security & Risk Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced cybersecurity and risk management certifications from ISACA, the global authority in IT governance.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {securityCerts.map((cert) => (
              <div key={cert.testId} className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border border-gray-200" data-testid={cert.testId}>
                <div className="flex items-start gap-4 mb-4">
                  <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-red-600 font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-red-600 mb-2">{cert.rarity}</p>
                <p className="text-sm text-gray-600 mb-3">{cert.period}</p>
                <p className="text-xs text-gray-500 mb-3">Credential ID: {cert.credentialId}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="bg-white/80 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Design Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-infrastructure-title">
              🏗️ Data Center Infrastructure & Design Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ultra-rare certifications in data center design and telecommunications infrastructure from industry leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {infrastructureCerts.map((cert) => (
              <div key={cert.testId} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200" data-testid={cert.testId}>
                <div className="flex items-start gap-4 mb-4">
                  <Building2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{cert.name}</h3>
                    <p className="text-green-600 font-semibold">{cert.issuer}</p>
                  </div>
                </div>
                {cert.rarity && (
                  <p className="text-sm font-bold text-red-600 mb-2">{cert.rarity}</p>
                )}
                <p className="text-sm text-gray-600 mb-3">{cert.period}</p>
                {cert.credentialId && (
                  <p className="text-xs text-gray-500 mb-3">Credential ID: {cert.credentialId}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rarity Analysis Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-rarity-title">
              📊 Certification Rarity Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Statistical analysis of global certification rarity. The probability of holding this complete combination 
              is astronomically low, placing Ahmet among fewer than 620 individuals worldwide with comparable qualifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {rarityAnalysis.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-gray-900">{cert.name}</p>
                      <p className="text-sm text-gray-600">{cert.count}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl text-center">
            <Star className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Global Standing Analysis</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              Conservative estimates place this certification combination within the top 0.001% of global ICT professionals, 
              representing fewer than 620 individuals worldwide with comparable qualifications among 62 million ICT professionals globally.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Partner with Global Top 0.001% Expertise
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Leverage unprecedented certification portfolio and global expertise for your organization's 
            most critical digital transformation initiatives.
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