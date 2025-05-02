import { BrainCircuit, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <BrainCircuit size={32} className="text-blue-400 mr-2" />
            <span className="text-xl font-bold">Joseph Elias Al Khoury</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Joseph-elias" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/joseph-elias-al-khoury-0a54a8239/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:josepheliaskh@gmail.com" 
              className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {currentYear} Joseph Elias Al Khoury. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;