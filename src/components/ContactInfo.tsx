
import React from 'react';
import { Mail, Linkedin, Phone, Github } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Let's Connect
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Strategic Marketing Analyst at Netflix with 6+ years of experience in advanced analytics, omnichannel performance, and AI-driven insights. Ready to discuss how data can drive your business growth.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200 max-w-md">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/lovable-uploads/2ebb5421-76f8-47e4-9750-26d95d99e88e.png"
                alt="Khyati Chauhan"
                className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
              />
              <h3 className="text-xl font-bold text-gray-900">Khyati Chauhan</h3>
              <p className="text-gray-600 mb-2">Marketing Analyst</p>
              <p className="text-gray-500 text-sm mb-4">West Haven, CT</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:chauhankhyati55@gmail.com" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Mail className="w-5 h-5 mr-2" />
                  chauhankhyati55@gmail.com
                </a>
                <a href="tel:+12039367666" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  +1 (203) 936-7666
                </a>
                <a href="https://www.linkedin.com/in/khyatim03/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn Profile
                </a>
                <a href="https://github.com/chauhankhyati55-dot/Marketing_Analytics" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
