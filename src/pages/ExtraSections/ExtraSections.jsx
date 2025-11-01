import React, { useEffect, useState } from "react";
import HowItWorks from "../../components/HowItWorks/HowItWorks";

const ExtraSections = () => {
  const [topProviders, setTopProviders] = useState([]);
  const [howItWorks, setHowItWorks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
 
        const top = [...data].sort((a, b) => b.rating - a.rating).slice(0, 3);
        setTopProviders(top);


        const steps = [
          {
            step: 1,
            title: "Sign Up",
            description:
              "Create your account quickly and securely to get started.",
          },
          {
            step: 2,
            title: "Browse Skills",
            description:
              "Explore a wide range of skills and find what interests you the most.",
          },
          {
            step: 3,
            title: "Enroll & Learn",
            description:
              "Choose a skill, join the class, and start learning at your pace.",
          },
        ];
        setHowItWorks(steps);
      });
  }, []);

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-16 space-y-16">

      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Top Rated Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {topProviders.map((provider,index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={provider.skillId}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={provider.image}
                alt={provider.providerName}
                className="w-28 h-28 rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {provider.providerName}
              </h3>

              <p className="text-green-700 font-medium mt-1">
                {provider.skillName}
              </p>

              <p className="text-gray-500 text-sm">{provider.category}</p>

              <div className="flex items-center justify-center mt-2">
                <span className="text-yellow-500 text-lg mr-1">★</span>
                <span className="text-gray-700 font-semibold">
                  {provider.rating}
                </span>
              </div>

              <p className="mt-3 text-gray-600 text-center text-sm">
                {provider.description.slice(0, 70)}...
              </p>

              <p className="mt-4 font-medium text-green-600">
                ${provider.price} / session
              </p>
            </div>
          ))}
        </div>
      </section>


      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step,index) => (

            <div   data-aos="fade-up"
              data-aos-delay={index * 100}>
              <HowItWorks key={step.step} step={step} />
              </div>

            
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExtraSections;
