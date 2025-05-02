import { useState } from 'react';
import { ArrowRight, Code, Monitor, Cpu } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  result?: string;
  image?: string;
  category: 'hardware' | 'software' | 'research';
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const projects: Project[] = [
    {
      title: "IR Temperature Sensor",
      description: "Designed and built an IR temperature sensor using Arduino electronic card",
      technologies: ["Arduino", "C++", "Electronics", "Sensors"],
      result: "92/100",
      category: "hardware"
    },
    {
      title: "Robotic Surgical Arm",
      description: "Creation of a robotic surgical arm using Arduino",
      technologies: ["Arduino", "C++", "Robotics", "Mechanics"],
      result: "90/100",
      category: "hardware"
    },
    {
      title: "Radiomic Feature Extraction Pipeline",
      description: "Developed a robust pipeline for extracting radiomic features from brain MRI data",
      technologies: ["Python", "Medical Imaging", "Feature Extraction", "Data Processing"],
      category: "research"
    },
    {
      title: "Healthcare Logistics Analysis",
      description: "Study and analysis of the logistics chain of adult emergency services (SUA)",
      technologies: ["Data Analysis", "Process Optimization", "Healthcare Systems"],
      category: "research"
    },
    {
      title: "Radiomics Signature for Lung Cancer",
      description: "Development of a radiomics signature from MRI and PET images to predict survival in lung cancer",
      technologies: ["Machine Learning", "Medical Imaging", "Predictive Modeling", "Python"],
      category: "research"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hardware':
        return <Cpu className="w-5 h-5" />;
      case 'software':
        return <Code className="w-5 h-5" />;
      case 'research':
        return <Monitor className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center" data-aos="fade-up">
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="100">
          A selection of academic and professional projects that showcase my skills in healthcare, engineering, and AI.
        </p>
        
        <div className="flex justify-center mb-10" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeCategory === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveCategory('hardware')}
              className={`px-4 py-2 text-sm font-medium ${
                activeCategory === 'hardware' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Hardware
            </button>
            <button 
              onClick={() => setActiveCategory('software')}
              className={`px-4 py-2 text-sm font-medium ${
                activeCategory === 'software' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Software
            </button>
            <button 
              onClick={() => setActiveCategory('research')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeCategory === 'research' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Research
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-40 bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-white">
                    {getCategoryIcon(project.category)}
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 capitalize">
                    {project.category}
                  </span>
                  
                  {project.result && (
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-green-100 text-green-800">
                      {project.result}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a href="#" className="text-blue-600 font-semibold inline-flex items-center hover:text-blue-700">
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;