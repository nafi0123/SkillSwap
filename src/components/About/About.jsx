import React from "react";
import { FaGuitar, FaCode, FaLanguage, FaRunning } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 bg-base-100 rounded-3xl">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-green-700 mb-6">
          About SkillSwap
        </h2>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">
          An interactive platform for individuals to offer, learn, and trade
          skills within their local area. Whether it’s guitar lessons, language
          exchange, coding help, or yoga training — users can browse listings,
          rate experiences, and connect with local skill providers.
        </p>

      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-all duration-300">
            <FaGuitar className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Guitar Lessons</h3>
            <p className="text-gray-600 text-sm">
              Learn or teach guitar skills in your neighborhood.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-all duration-300">
            <FaLanguage className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Language Exchange</h3>
            <p className="text-gray-600 text-sm">
              Practice languages with locals and improve fluency.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-all duration-300">
            <FaCode className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Coding Help</h3>
            <p className="text-gray-600 text-sm">
              Teach or learn programming and software skills locally.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-all duration-300">
            <FaRunning className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Yoga & Fitness</h3>
            <p className="text-gray-600 text-sm">
              Connect with trainers for yoga, fitness, and wellness sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
