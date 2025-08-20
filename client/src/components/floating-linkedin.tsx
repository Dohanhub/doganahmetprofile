import { Linkedin } from "lucide-react";

export default function FloatingLinkedIn() {
  return (
    <div className="fixed right-6 bottom-6 z-50 animate-bounce">
      <a
        href="https://www.linkedin.com/in/doganahmet/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-blue-500/30"
        data-testid="floating-linkedin-button"
        title="Connect on LinkedIn"
      >
        <Linkedin className="w-7 h-7 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></div>
        
        {/* Tooltip */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Connect on LinkedIn
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
        </div>
      </a>
    </div>
  );
}