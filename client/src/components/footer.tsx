import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Shane Kinkennon</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Strategic leadership consultant specializing in principled, person-centered leadership for executives, management teams, and boards.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/shanekinkennon/" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-linkedin"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a 
                href="https://shanekinkennon.medium.com/" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-medium"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/executive-coaching" data-testid="link-footer-executive-coaching">
                  <span className="text-gray-400 hover:text-white transition-colors">Executive Coaching</span>
                </Link>
              </li>
              <li>
                <Link href="/management-consulting" data-testid="link-footer-management-consulting">
                  <span className="text-gray-400 hover:text-white transition-colors">Management Consulting</span>
                </Link>
              </li>
              <li>
                <Link href="/board-consulting" data-testid="link-footer-board-consulting">
                  <span className="text-gray-400 hover:text-white transition-colors">Board Consulting</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-gray-400 hover:text-white transition-colors">About</span>
                </Link>
              </li>
              <li>
                <Link href="/testimonials" data-testid="link-footer-testimonials">
                  <span className="text-gray-400 hover:text-white transition-colors">Testimonials</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-gray-400 hover:text-white transition-colors">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Shane Kinkennon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
