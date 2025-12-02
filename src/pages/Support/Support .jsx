import React from "react";
import toast from "react-hot-toast";
import { FaQuestionCircle, FaEnvelope } from "react-icons/fa";

const Support = () => {
    const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Form submitted successfully!");
    e.target.reset(); 
  };
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on the Sign Up button in the navbar and fill in your details."
    },
    {
      question: "How can I reset my password?",
      answer: "Go to the login page and click on 'Forgot Password' to reset it."
    },
    {
      question: "How do I contact support?",
      answer: "You can send us a message through the Contact page or email support@skillswap.com."
    },
    {
      question: "Can I delete my account?",
      answer: "Yes, please contact our support team and they will assist you."
    }
  ];

  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#137A63]">Support Center</h1>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto">
          Need help? Find answers to common questions or reach out to our support team.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* FAQ Section */}
        <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-100">
          <h2 className="text-xl font-semibold text-[#137A63] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-3">
                <div className="flex items-center gap-2 text-[#137A63] font-medium">
                  <FaQuestionCircle />
                  <span>{faq.question}</span>
                </div>
                <p className="text-slate-700 ml-7 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-100">
          <h2 className="text-xl font-semibold text-[#137A63] mb-6">
            Contact Support
          </h2>
          <p className="text-slate-700 mb-5">
            If you cannot find the answer you are looking for, feel free to contact our support team.
          </p>

          <div className="flex items-center gap-4 mb-3">
            <FaEnvelope className="text-[#137A63] text-xl" />
            <p className="text-slate-700 font-medium">support@skillswap.com</p>
          </div>

          <form className="space-y-4" onSubmit={handleFormSubmit} >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
            />
            <textarea
              rows="4"
              placeholder="Describe your issue..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#137A63] text-white py-2 rounded-lg font-semibold shadow-md hover:bg-[#0f5e4c] transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
