import { useState, useEffect } from 'react';
import { BrainCircuit } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // For header background
      setIsScrolled(window.scrollY > 20);
      
      // For active section highlight
      const currentPos = window.scrollY + 100;
      
      for (const section of sections.map(s => s.id).reverse()) {
        const element = document.getElementById(section);
        if (element && currentPos >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#hero" 
            className="flex items-center gap-2 text-lg font-semibold text-blue-600"
          >
            <BrainCircuit className="text-blue-600" size={24} />
            <span className="hidden sm:inline">Joseph Elias Al Khoury</span>
            <span className="sm:hidden">J.E. Al Khoury</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-blue-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-3 space-y-1">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;