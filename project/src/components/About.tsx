import { User, MapPin, Calendar, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="flex flex-col md:flex-row gap-12" data-aos="fade-up" data-aos-delay="100">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <User size={100} className="text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-4">
                  Master's student in <span className="font-semibold">AI Management in Healthcare</span> (apprenticeship program) with a bachelor's in biomedical engineering. Passionate about the intersection of artificial intelligence and healthcare, I bring a solid academic foundation and a drive to innovate in medical technology.
                </p>
                <p className="text-lg text-gray-700">
                  My expertise spans data science, machine learning, and medical imaging, with a focus on developing practical AI solutions that can improve healthcare outcomes and operational efficiency.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <MapPin size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Location</h3>
                    <p className="text-gray-800">91120 Palaiseau, France</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Calendar size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Date of Birth</h3>
                    <p className="text-gray-800">August 6, 2001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Globe size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Nationality</h3>
                    <p className="text-gray-800">Lebanese</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V6H20V18ZM8.5 13.5C9.9 13.5 11 12.4 11 11C11 9.6 9.9 8.5 8.5 8.5C7.1 8.5 6 9.6 6 11C6 12.4 7.1 13.5 8.5 13.5ZM17 17H6V15.9C6 14.7 8.1 14 8.5 14C9.7 14 11.9 14.7 11.9 15.9V17H17V13.5L15.2 11.7L16.7 10.2L17 10.5V17Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500">Gender</h3>
                    <p className="text-gray-800">Male</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;