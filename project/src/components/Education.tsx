import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
  achievements?: string[];
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      degree: "Master's in AI Management in Healthcare",
      institution: "École Centrale de Lille & ILIS",
      location: "Lille, France",
      period: "September 2023 - Present",
      description: "Collaborative program between École Centrale de Lille and the Faculty of Engineering and Healthcare Management (ILIS) focusing on Data Science, Deep Learning, and Decision Support",
      achievements: ["Mention Très bien"]
    },
    {
      degree: "Bachelor's in Biomedical Engineering",
      institution: "Lebanese International University (LIU)",
      location: "Lebanon",
      period: "2020 - 2023",
      achievements: ["Cumulative Average: 3.56/4"]
    },
    {
      degree: "Lebanese Baccalaureate (Life Sciences)",
      institution: "",
      location: "Lebanon",
      period: "2019",
      achievements: ["General Average: 15.8/20", "Mention Bien"]
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline bar */}
            <div className="hidden sm:block absolute top-0 left-0 w-24 h-full">
              <div className="absolute left-12 h-full w-1 bg-blue-200 transform"></div>
            </div>
            
            <div className="space-y-16">
              {educationItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:block absolute left-0 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-200 bg-white shadow-md group-hover:border-blue-400 transition-colors duration-300"></div>
                  
                  <div className="sm:pl-12">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <div className="hidden sm:flex p-3 bg-blue-100 rounded-lg">
                        <GraduationCap size={24} className="text-blue-600" />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{item.degree}</h3>
                        
                        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                          {item.institution && (
                            <div className="flex items-center gap-1">
                              <Award size={16} />
                              <span>{item.institution}</span>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>
                          
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {item.description && (
                      <p className="ml-0 sm:ml-16 text-gray-700 mb-3">
                        {item.description}
                      </p>
                    )}
                    
                    {item.achievements && item.achievements.length > 0 && (
                      <ul className="ml-0 sm:ml-16 text-gray-700 list-disc pl-5 space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;