import { useEffect } from "react";
import { Link } from "wouter";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ServiceCard from "@/components/service-card";
import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

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

  const services = [
    {
      title: "Executive Coaching",
      subtitle: "For C-suites and senior managers",
      description: "Unlock new mindsets and methods to inspire teams, equip them to lead change, and actually hold them accountable. Develop the leadership skills that transform organizations from the top down.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "/executive-coaching",
      testId: "executive-coaching"
    },
    {
      title: "Management Consulting",
      subtitle: "For nonprofit leadership teams",
      description: "Devise and lead change in response to intractable organizational challenges, aligning strategy and function for mission delivery. Transform your leadership team's effectiveness.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "/management-consulting",
      testId: "management-consulting"
    },
    {
      title: "Board Consulting",
      subtitle: "For nonprofit boards of directors",
      description: "Sharpen focus on those activities and areas that deliver the absolute highest value to management of the organization. Maximize board effectiveness and governance impact.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      href: "/board-consulting",
      testId: "board-consulting"
    }
  ];

  const testimonials = [
    {
      quote: "Shane's coaching transformed our leadership team's effectiveness. His approach is both strategic and deeply human, resulting in sustainable change that has elevated our entire organization.",
      name: "Sarah Johnson",
      title: "CEO, Innovation Nonprofit",
      testId: "testimonial-1"
    },
    {
      quote: "The board consulting work with Shane revolutionized our governance practices. We now operate with clarity, focus, and genuine impact that serves our mission far better.",
      name: "Michael Chen",
      title: "Board Chair, Education Foundation",
      testId: "testimonial-2"
    },
    {
      quote: "Shane helped us navigate a critical transition period with wisdom and practical tools. His insights on change management were exactly what our organization needed to thrive.",
      name: "Rachel Martinez",
      title: "Executive Director, Community Health",
      testId: "testimonial-3"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
              Strategic Leadership for 
              <span className="text-accent"> Executive Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Empowering C-suite executives and nonprofit leaders to unlock new mindsets, inspire teams, and drive transformational change that delivers lasting results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="#services" data-testid="button-explore-services">
                <Button className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact" data-testid="button-schedule-consultation">
                <Button variant="outline" className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6" data-testid="text-services-title">
              Here's how I help.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-subtitle">
              Specialized leadership development solutions designed for executives, management teams, and boards who are ready to elevate their impact and drive meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service) => (
              <ServiceCard key={service.testId} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-about-title">
                Principled, Person-Centered Leadership
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed" data-testid="text-about-description-1">
                With over two decades of experience in executive leadership and organizational development, I specialize in helping senior leaders and boards navigate complex challenges while maintaining their commitment to values-driven leadership.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed" data-testid="text-about-description-2">
                My approach combines proven methodologies with personalized strategies that honor both the human element and the business imperative, ensuring sustainable transformation that lasts.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-certified-coach">
                  Certified Executive Coach
                </span>
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-strategic-planning">
                  Strategic Planning
                </span>
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-change-management">
                  Change Management
                </span>
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium" data-testid="badge-board-governance">
                  Board Governance
                </span>
              </div>
              <Link href="/about" data-testid="link-learn-more-about">
                <Button variant="link" className="text-primary-600 hover:text-primary-700 font-semibold text-base p-0">
                  Learn more about my approach
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=900" 
                alt="Professional executive coach portrait" 
                className="w-full rounded-2xl shadow-2xl"
                data-testid="img-about-portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-testimonials-title">
              What Leaders Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
              Trusted by executives and boards who demand results while maintaining their commitment to principled leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.testId} {...testimonial} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" data-testid="link-read-more-testimonials">
              <Button variant="link" className="text-primary-600 hover:text-primary-700 font-semibold text-lg">
                Read more testimonials
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
