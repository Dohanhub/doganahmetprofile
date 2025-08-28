import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, Globe2, Users, Shield, Trophy } from "lucide-react";

export default function Organizations() {
  const globalOrganizations = [
    {
      name: "Project Management Institute (PMI)",
      level: "Member",
      period: "November 2009 - Present",
      duration: "15+ years",
      description: "Global leader in project management standards and certification",
      certifications: ["PgMP", "PMP", "PMI-ACP"],
      testId: "org-pmi"
    },
    {
      name: "ISACA (Information Systems Audit and Control Association)",
      level: "Active Member",
      period: "Multiple certifications holder",
      description: "Leading global IT governance and cybersecurity organization",
      certifications: ["CISM", "CISA", "CRISC"],
      testId: "org-isaca"
    },
    {
      name: "Association of MBAs (AMBA)",
      level: "Member",
      period: "2019 - Present",
      description: "International accreditation body for MBA programs",
      certifications: ["Leicester MBA Graduate"],
      testId: "org-amba"
    },
    {
      name: "Chartered Management Institute (CMI)",
      level: "Chartered Manager (CMgr MCMI)",
      period: "2019 - Present",
      description: "UK's chartered professional body for management and leadership",
      certifications: ["Chartered Manager"],
      testId: "org-cmi"
    },
    {
      name: "The Egyptian Society Of Quality",
      level: "Member",
      period: "November 2010 - Present",
      duration: "14+ years",
      description: "Leading quality management professional society",
      testId: "org-quality"
    }
  ];

  const regionalOrganizations = [
    {
      name: "Saudi Council of Engineers",
      level: "Licensed Engineer",
      period: "August 2016 - Present",
      description: "Licensed Consultant Engineer (Electronics & Communications)",
      country: "🇸🇦",
      testId: "org-saudi-engineers"
    },
    {
      name: "Kuwait Engineering Syndicate",
      level: "Member",
      period: "Active Membership",
      description: "Professional engineering body of Kuwait",
      country: "🇰🇼",
      testId: "org-kuwait-engineers"
    },
    {
      name: "Arab Engineering Syndicate",
      level: "Engineer",
      period: "January 2016 - Present",
      description: "Pan-Arab professional engineering federation",
      country: "🌍",
      testId: "org-arab-engineers"
    },
    {
      name: "Egyptian Engineering Syndicate",
      level: "Engineer",
      period: "August 2004 - Present",
      duration: "20+ years",
      description: "National engineering syndicate of Egypt",
      country: "🇪🇬",
      testId: "org-egyptian-engineers"
    }
  ];

  const benefits = [
    {
      icon: <Globe2 className="w-8 h-8 text-blue-600" />,
      title: "Knowledge Exchange",
      description: "Access to cutting-edge research, best practices, and emerging trends across multiple professional domains"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Professional Standards",
      description: "Alignment with international standards and best practices in project management, engineering, and business leadership"
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Strategic Networking",
      description: "Executive-level connections across Middle East, North Africa, and global markets"
    },
    {
      icon: <Trophy className="w-8 h-8 text-orange-600" />,
      title: "Industry Intelligence",
      description: "Market insights and intelligence from leading professional bodies across ICT and engineering sectors"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6" data-testid="badge-organizations">
              <Building2 className="w-4 h-4" />
              Professional Organizations & Memberships
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
              Global Professional Network
              <span className="block text-accent mt-2">Elite Memberships & Affiliations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Active memberships across prestigious global and regional professional bodies, providing access to 
              industry intelligence, executive networks, and international best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Global Organizations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-global-organizations-title">
              🌍 Global Professional Bodies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Memberships in leading international organizations spanning project management, cybersecurity, 
              business leadership, and quality management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalOrganizations.map((org) => (
              <div key={org.testId} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-gray-200" data-testid={org.testId}>
                <div className="flex items-start gap-4 mb-4">
                  <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{org.name}</h3>
                    <p className="text-blue-600 font-semibold">{org.level}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{org.period}</p>
                {org.duration && (
                  <p className="text-sm font-semibold text-green-600 mb-3">{org.duration}</p>
                )}
                <p className="text-gray-700 mb-4">{org.description}</p>
                {org.certifications && (
                  <div className="flex flex-wrap gap-2">
                    {org.certifications.map((cert, index) => (
                      <span key={index} className="bg-white/80 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Organizations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-regional-organizations-title">
              🏗️ Regional Engineering Bodies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Licensed professional registrations across Middle East and North Africa engineering syndicates 
              and regulatory bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regionalOrganizations.map((org) => (
              <div key={org.testId} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200" data-testid={org.testId}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{org.country}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{org.name}</h3>
                    <p className="text-blue-600 font-semibold">{org.level}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{org.period}</p>
                {org.duration && (
                  <p className="text-sm font-semibold text-green-600 mb-3">{org.duration}</p>
                )}
                <p className="text-gray-700">{org.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-benefits-title">
              🌐 Global Network Access & Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic advantages and exclusive access through elite professional memberships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Connect with a Global Professional Network Leader
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" data-testid="text-cta-description">
            Leverage extensive professional networks and industry intelligence for your organization's 
            digital transformation and strategic initiatives.
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