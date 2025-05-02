import { Calendar, Briefcase, MapPin } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: 'fulltime' | 'internship' | 'project';
}

const Experience = () => {
  const experienceItems: ExperienceItem[] = [
    {
      title: "Data Scientist in Medical Imaging",
      company: "LITO (Institut Curie)",
      location: "France",
      period: "September 2023 - Present",
      description: [
        "Development of a radiomics signature (MRI and PET images) and clinical features to predict survival in lung cancer"
      ],
      type: "fulltime"
    },
    {
      title: "AI Internship",
      company: "LITO (Institut Curie)",
      location: "France",
      period: "March 25 - August 16, 2023",
      description: [
        "Development of a robust pipeline for extracting radiomic features from brain MRI data"
      ],
      type: "internship"
    },
    {
      title: "Biomedical Engineering Internship",
      company: "Intermedic Jean farah&co",
      location: "Beyrouth, Lebanon",
      period: "June 27 - July 16, 2022",
      description: [
        "Introduction and assistance in the repair of various equipment used in the healthcare environment"
      ],
      type: "internship"
    },
    {
      title: "Academic Project",
      company: "",
      location: "",
      period: "September - March 2023",
      description: [
        "Study and analysis of the logistics chain of adult emergency services (SUA)"
      ],
      type: "project"
    },
   
  ];

  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'fulltime':
        return 'bg-blue-100 text-blue-800';
      case 'internship':
        return 'bg-teal-100 text-teal-800';
      case 'project':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getBadgeText = (type: string) => {
    switch (type) {
      case 'fulltime':
        return 'Work';
      case 'internship':
        return 'Internship';
      case 'project':
        return 'Project';
      default:
        return 'Other';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Professional Experience
          </span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            {/* Timeline bar */}
            <div className="hidden sm:block absolute top-0 left-0 w-24 h-full">
              <div className="absolute left-12 h-full w-1 bg-blue-200 transform"></div>
            </div>
            
            <div className="space-y-16">
              {experienceItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group" 
                  data-aos="fade-up" 
                  data-aos-delay={index * 100}
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:block absolute left-0 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-blue-200 bg-white shadow-md group-hover:border-blue-400 transition-colors duration-300"></div>
                  
                  <div className="sm:pl-12">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="sm:flex hidden">
                        <div className="p-3 bg-blue-100 rounded-lg">
                          <Briefcase size={24} className="text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getBadgeClass(item.type)}`}>
                            {getBadgeText(item.type)}
                          </span>
                        </div>
                        
                        {item.company && (
                          <p className="text-lg text-gray-600 mt-1">{item.company}</p>
                        )}
                        
                        <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>
                          
                          {item.location && (
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{item.location}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="mt-3 text-gray-700">
                          <ul className="list-disc pl-5 space-y-1">
                            {item.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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

export default Experience;