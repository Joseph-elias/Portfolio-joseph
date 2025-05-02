import { useEffect, useRef } from 'react';
import { Code, Database, Brain, Activity, Languages } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
}

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      name: "Data Science & AI",
      icon: <Brain className="text-blue-600" size={24} />,
      skills: [
        { name: "Machine Learning", level: 90 },
        { name: "Data Fusion", level: 85 },
        { name: "NLP", level: 80 },
        { name: "SysML/UML", level: 85 },
        { name: "Optimization Algorithms", level: 75 },
      ]
    },
    {
      name: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "R", level: 85 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 },
        { name: "HTML/CSS", level: 70 },
      ]
    },
    {
      name: "Healthcare Knowledge",
      icon: <Activity className="text-blue-600" size={24} />,
      skills: [
        { name: "Medical Imaging", level: 90 },
        { name: "Biomedical Sciences", level: 85 },
        { name: "Medical Terminology", level: 80 },
        { name: "Healthcare Systems", level: 75 },
        { name: "Medical Devices", level: 85 },
      ]
    },
    {
      name: "Data Management",
      icon: <Database className="text-blue-600" size={24} />,
      skills: [
        { name: "Database Design", level: 80 },
        { name: "Ontology", level: 85 },
        { name: "Data Cleaning", level: 90 },
        { name: "SPARQL", level: 75 },
        { name: "Git/Version Control", level: 80 },
      ]
    },
    {
      name: "Languages",
      icon: <Languages className="text-blue-600" size={24} />,
      skills: [
        { name: "Arabic (Native)", level: 100 },
        { name: "French (B2)", level: 85 },
        { name: "English (C1)", level: 90 },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar: Element, index) => {
              if (bar instanceof HTMLElement) {
                setTimeout(() => {
                  bar.style.width = bar.dataset.width || '0%';
                  bar.style.opacity = '1';
                }, index * 100);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 text-center" data-aos="fade-up">
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto" ref={containerRef}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 100}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="progress-bar h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full opacity-0 transition-all duration-1000 ease-out"
                          data-width={`${skill.level}%`}
                          style={{ width: "0%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;