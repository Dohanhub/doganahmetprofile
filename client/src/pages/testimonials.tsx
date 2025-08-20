import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TestimonialCard from "@/components/testimonial-card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Testimonials() {
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
    },
    {
      quote: "Working with Shane on our strategic planning process was transformational. He helped us align our leadership team and create a roadmap that has dramatically improved our organizational effectiveness.",
      name: "David Thompson",
      title: "President & CEO, Youth Development Alliance",
      testId: "testimonial-4"
    },
    {
      quote: "Shane's board development work helped us shift from reactive governance to strategic leadership. Our board is now more engaged, focused, and impactful than ever before.",
      name: "Jennifer Liu",
      title: "Board Vice Chair, Environmental Foundation",
      testId: "testimonial-5"
    },
    {
      quote: "The executive coaching I received from Shane was invaluable during my first year as CEO. His guidance helped me develop the confidence and skills needed to lead effectively in a complex environment.",
      name: "Marcus Williams",
      title: "CEO, Regional Healthcare Network",
      testId: "testimonial-6"
    },
    {
      quote: "Shane's management consulting approach helped us overcome years of organizational dysfunction. His systematic methodology and deep expertise created the foundation for sustainable change.",
      name: "Lisa Anderson",
      title: "Executive Director, Arts & Culture Center",
      testId: "testimonial-7"
    },
    {
      quote: "The leadership team development work Shane facilitated was a game-changer for our organization. We now operate with unprecedented alignment and effectiveness.",
      name: "Robert Kim",
      title: "COO, International Development Organization",
      testId: "testimonial-8"
    },
    {
      quote: "Shane's coaching helped me become the leader I always knew I could be. His person-centered approach and practical tools have had a lasting impact on my leadership style and effectiveness.",
      name: "Amanda Foster",
      title: "Vice President, Community Foundation",
      testId: "testimonial-9"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight" data-testid="text-hero-title">
              Professional References & Project Impact
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Proven track record delivering SAR 125M+ in contracts, leading 130+ teams, and driving digital transformation across the Middle East with Vision 2030 alignment.
            </p>
            <Link href="/contact" data-testid="button-start-your-journey">
              <Button className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.testId} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-results-title">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12" data-testid="text-results-subtitle">
              Our clients consistently report significant improvements in leadership effectiveness and organizational performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2" data-testid="text-metric-1-number">
                95%
              </div>
              <div className="text-lg text-gray-600" data-testid="text-metric-1-label">
                Report Improved Leadership Effectiveness
              </div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2" data-testid="text-metric-2-number">
                89%
              </div>
              <div className="text-lg text-gray-600" data-testid="text-metric-2-label">
                Achieve Strategic Goals Faster
              </div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2" data-testid="text-metric-3-number">
                92%
              </div>
              <div className="text-lg text-gray-600" data-testid="text-metric-3-label">
                Improve Team Alignment
              </div>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-md">
              <div className="text-4xl font-bold text-primary-600 mb-2" data-testid="text-metric-4-number">
                100%
              </div>
              <div className="text-lg text-gray-600" data-testid="text-metric-4-label">
                Would Recommend Our Services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6" data-testid="text-services-title">
              Testimonials by Service Area
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-subtitle">
              See what clients say about each of our specialized consulting services
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center" data-testid="text-executive-coaching-title">
                Executive Coaching
              </h3>
              <div className="space-y-6">
                <blockquote className="italic text-gray-600 border-l-4 border-accent pl-4" data-testid="text-executive-quote-1">
                  "Shane's coaching helped me become the leader I always knew I could be. His person-centered approach and practical tools have had a lasting impact on my leadership style."
                </blockquote>
                <div className="text-sm text-gray-500" data-testid="text-executive-author-1">
                  — Amanda Foster, VP, Community Foundation
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/executive-coaching" data-testid="link-executive-coaching">
                  <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center" data-testid="text-management-consulting-title">
                Management Consulting
              </h3>
              <div className="space-y-6">
                <blockquote className="italic text-gray-600 border-l-4 border-accent pl-4" data-testid="text-management-quote-1">
                  "Shane's management consulting approach helped us overcome years of organizational dysfunction. His systematic methodology created the foundation for sustainable change."
                </blockquote>
                <div className="text-sm text-gray-500" data-testid="text-management-author-1">
                  — Lisa Anderson, ED, Arts & Culture Center
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/management-consulting" data-testid="link-management-consulting">
                  <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center" data-testid="text-board-consulting-title">
                Board Consulting
              </h3>
              <div className="space-y-6">
                <blockquote className="italic text-gray-600 border-l-4 border-accent pl-4" data-testid="text-board-quote-1">
                  "Shane's board development work helped us shift from reactive governance to strategic leadership. Our board is now more engaged, focused, and impactful than ever."
                </blockquote>
                <div className="text-sm text-gray-500" data-testid="text-board-author-1">
                  — Jennifer Liu, Board Vice Chair, Environmental Foundation
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link href="/board-consulting" data-testid="link-board-consulting">
                  <Button variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-cta-title">
            Ready to Join These Success Stories?
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8" data-testid="text-cta-subtitle">
            Take the first step toward transforming your leadership and organization. Schedule a consultation to discuss your goals and challenges.
          </p>
          <Link href="/contact" data-testid="button-schedule-consultation-cta">
            <Button className="bg-success hover:bg-success/90 text-success-foreground px-8 py-4 text-lg font-semibold">
              Schedule Your Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
