import React from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Form submitted successfully!");
    e.target.reset(); 
  };
  return (
    <div className="w-11/12 mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#137A63]">Contact Us</h1>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto">
          We are here to help you! Feel free to reach out for support, feedback,
          or any inquiries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-100">
          <h2 className="text-xl font-semibold text-[#137A63] mb-6">
            Contact Information
          </h2>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#137A63] text-xl" />
              <p className="text-slate-700 font-medium">+880 1234 567 890</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#137A63] text-xl" />
              <p className="text-slate-700 font-medium">
                support@skillswap.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#137A63] text-xl" />
              <p className="text-slate-700 font-medium">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-100">
          <h2 className="text-xl font-semibold text-[#137A63] mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5" onSubmit={handleFormSubmit} >
            <div>
              <label className="text-slate-700 font-medium block mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
              />
            </div>

            <div>
              <label className="text-slate-700 font-medium block mb-1">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
              />
            </div>

            <div>
              <label className="text-slate-700 font-medium block mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#137A63] text-white py-2 rounded-lg font-semibold shadow-md hover:bg-[#0f5e4c] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
