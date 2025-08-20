import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, BookOpen, Users, Target } from "lucide-react";

export default function About() {
  const credentials = [
    {
      icon: <Award className="w-8 h-8 text-primary-600" />,
      title: "Certified Executive Coach",
      description: "International Coach Federation (ICF) certified with advanced training in leadership development."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary-600" />,
      title: "Strategic Planning Expert",
      description: "Extensive experience in organizational strategy development and implementation."
    },
    {
      icon: <Users className="w-8 h-8 text-primary-600" />,
      title: "Change Management Specialist",
      description: "Proven methodologies for leading complex organizational transformations."
    },
    {
      icon: <Target className="w-8 h-8 text-primary-600" />,
      title: "Board Governance Authority",
      description: "Deep expertise in nonprofit governance best practices and board development."
    }
  ];

  const values = [
    {
      title: "Principled Leadership",
      description: "I believe that effective leadership must be grounded in clear values and ethical principles that guide decision-making and inspire others."
    },
    {
      title: "Person-Centered Approach",
      description: "Every individual brings unique strengths and perspectives. My work honors the human element while driving business results."
    },
    {
      title: "Sustainable Change",
      description: "True transformation requires building lasting capabilities and systems, not just quick fixes or temporary solutions."
    },
    {
      title: "Mission-Driven Impact",
      description: "Organizations exist to serve a purpose beyond profit. I help leaders align their actions with their mission for maximum impact."
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
              <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
                About Shane Kinkennon
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
                Strategic leadership consultant dedicated to principled, person-centered leadership that creates lasting organizational transformation.
              </p>
              <Link href="/contact" data-testid="button-work-together">
                <Button className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold">
                  Let's Work Together
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900" 
                alt="Shane Kinkennon - Professional portrait" 
                className="w-full rounded-2xl shadow-2xl"
                data-testid="img-hero-portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-story-title">
              My Leadership Journey
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-story-subtitle">
              Over two decades of experience in executive leadership and organizational development
            </p>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6" data-testid="text-story-paragraph-1">
              My passion for leadership development began early in my career when I witnessed firsthand how great leaders could transform not just organizations, but the lives of everyone they touched. This experience sparked a lifelong commitment to understanding what makes leadership truly effective and sustainable.
            </p>
            
            <p className="text-lg leading-relaxed mb-6" data-testid="text-story-paragraph-2">
              Throughout my career, I've had the privilege of working with executives across various sectors, from Fortune 500 companies to mission-driven nonprofits. What I've learned is that the principles of effective leadership transcend industry boundaries – they're rooted in authentic relationships, clear purpose, and the courage to drive meaningful change.
            </p>
            
            <p className="text-lg leading-relaxed mb-6" data-testid="text-story-paragraph-3">
              My approach combines rigorous strategic thinking with deep respect for the human dimension of leadership. I believe that sustainable organizational transformation happens when leaders develop both the technical skills and the emotional intelligence needed to inspire and guide others through complex challenges.
            </p>
            
            <p className="text-lg leading-relaxed" data-testid="text-story-paragraph-4">
              Today, I focus exclusively on working with senior executives, management teams, and boards who are committed to principled leadership and creating lasting positive impact in their organizations and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-credentials-title">
              Expertise & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-credentials-subtitle">
              Professional qualifications and specialized expertise that inform my consulting practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {credentials.map((credential, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-4">
                  {credential.icon}
                  <h3 className="text-2xl font-bold text-primary-900 ml-4" data-testid={`text-credential-${index}-title`}>
                    {credential.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed" data-testid={`text-credential-${index}-description`}>
                  {credential.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-values-title">
              Core Values & Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-values-subtitle">
              The principles that guide my approach to leadership development and organizational consulting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-primary-900 mb-4" data-testid={`text-value-${index}-title`}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" data-testid={`text-value-${index}-description`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-experience-title">
              Experience & Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12" data-testid="text-experience-subtitle">
              A track record of helping leaders and organizations achieve breakthrough results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2" data-testid="text-stat-1-number">
                20+
              </div>
              <div className="text-lg text-gray-600" data-testid="text-stat-1-label">
                Years of Leadership Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2" data-testid="text-stat-2-number">
                100+
              </div>
              <div className="text-lg text-gray-600" data-testid="text-stat-2-label">
                Executives Coached
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2" data-testid="text-stat-3-number">
                50+
              </div>
              <div className="text-lg text-gray-600" data-testid="text-stat-3-label">
                Organizations Transformed
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-primary-900 mb-4" data-testid="text-specialization-title">
              Sector Specialization
            </h3>
            <p className="text-lg text-gray-600 mb-6" data-testid="text-specialization-description">
              While my methodologies are universal, I specialize in working with leaders in mission-driven organizations who are committed to creating positive social impact.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-nonprofit">
                Nonprofit Organizations
              </span>
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-education">
                Educational Institutions
              </span>
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-healthcare">
                Healthcare Organizations
              </span>
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-foundation">
                Foundations & Philanthropy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Start Your Leadership Journey?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8" data-testid="text-cta-subtitle">
            Whether you're an executive looking to enhance your leadership impact or an organization seeking transformation, I'm here to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" data-testid="button-schedule-consultation-cta">
              <Button className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold">
                Schedule a Consultation
              </Button>
            </Link>
            <Link href="/testimonials" data-testid="button-read-testimonials-cta">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 text-lg font-semibold">
                Read Client Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
