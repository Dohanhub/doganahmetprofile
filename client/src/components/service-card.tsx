import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  href: string;
  testId: string;
}

export default function ServiceCard({ title, subtitle, description, image, href, testId }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group fade-in">
      {image && (
        <div className="mb-6">
          <img 
            src={image} 
            alt={`${title} service`} 
            className="w-full h-48 object-cover rounded-xl shadow-md" 
          />
        </div>
      )}
      <h3 className="text-2xl font-bold text-primary-900 mb-4" data-testid={`text-${testId}-title`}>
        {title}
      </h3>
      <div className="text-sm font-semibold text-accent mb-4 italic" data-testid={`text-${testId}-subtitle`}>
        {subtitle}
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed" data-testid={`text-${testId}-description`}>
        {description}
      </p>
      <Link href={href} data-testid={`link-${testId}`}>
        <Button className="bg-primary-600 hover:bg-primary-700 text-white group-hover:scale-105 transition-transform">
          LEARN MORE
          <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
}
