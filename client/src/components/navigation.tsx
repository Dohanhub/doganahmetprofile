import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Calendar, Linkedin } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Career" },
    { href: "/certifications", label: "Credentials" },
    { href: "/organizations", label: "Organizations" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" data-testid="link-home">
              <span className="text-2xl font-bold text-primary-900 dark:text-white">Ahmet Doğan</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  <span
                    className={`px-4 py-2 text-base font-medium transition-colors rounded-md ${
                      isActive(item.href)
                        ? "text-primary-600 bg-primary-50 dark:text-primary-400 dark:bg-gray-800"
                        : "text-gray-700 hover:text-primary-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right side icons - LinkedIn, Calendar, and Theme Toggle */}
          <div className="flex items-center space-x-2">
            {/* Calendar Icon - Opens Email */}
            <a 
              href="mailto:info@doganahmet.com?subject=Contact%20Ahmet%20Doğan"
              className="group relative"
              data-testid="button-calendar-email-nav"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg shadow-md hover:shadow-blue-400/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/20">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              {/* Floating Label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Schedule Meeting
              </div>
            </a>

            {/* LinkedIn Icon - Opens LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/ahmet-dogan-ict-executive"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              data-testid="button-linkedin-profile-nav"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-md hover:shadow-blue-600/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/20">
                <Linkedin className="w-4 h-4 text-white" />
              </div>
              {/* Floating Label */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-1 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                LinkedIn Profile
              </div>
            </a>
            
            <ThemeToggle />
            
            {/* Theme Debug Display */}
            <div className="ml-2 text-xs text-white/70 font-mono">
              {document.documentElement.classList.contains('dark') ? 'DARK' : 'LIGHT'}
            </div>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100 dark:border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  <span
                    className={`block px-3 py-2 text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">Theme</span>
                <ThemeToggle />
              </div>
              
              {/* Contact button removed from mobile menu - now handled by calendar icon on home page */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
