import { ArrowDown, BrainCircuit } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-teal-50"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-10">
          {/* Abstract pattern that hints at data/healthcare */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4285F4" strokeWidth="0.5" />
              </pattern>
              <pattern id="circles" width="120" height="120" patternUnits="userSpaceOnUse">
                <circle cx="60" cy="60" r="20" fill="none" stroke="#34A853" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#circles)" />
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <div className="bg-blue-600 text-white p-3 rounded-full inline-flex items-center justify-center mb-8">
            <BrainCircuit size={32} />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Joseph Elias Al Khoury
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8">
            Management & Intelligence Artificielle en Santé
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Combining biomedical engineering expertise with AI to transform healthcare through data-driven solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#about" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Learn More
              <ArrowDown size={16} />
            </a>
            
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="animate-bounce bg-white p-2 rounded-full shadow-lg"
        >
          <ArrowDown size={24} className="text-blue-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;