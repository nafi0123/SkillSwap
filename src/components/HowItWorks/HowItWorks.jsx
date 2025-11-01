import React from 'react';

const HowItWorks = ({step}) => {
    return (
        <div
              key={step.step}
              className="bg-[#f5f5f5] rounded-lg p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#137A63] text-white rounded-full mx-auto flex items-center justify-center text-lg font-bold mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
    );
};

export default HowItWorks;