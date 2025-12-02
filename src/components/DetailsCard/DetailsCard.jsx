import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { FaStar, FaUserAlt, FaEnvelope } from "react-icons/fa";

const DetailsCard = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const foundCard = data.find((item) => item.skillId === parseInt(id));
    setCard(foundCard);
  }, [data, id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Booking request submitted successfully!");
    e.target.reset();
  };

  if (!card) {
    return <p className="text-center mt-10 text-red-500">Card not found</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-14">
      <Toaster position="top-right" />
      <div className="w-11/12 max-w-6xl mx-auto space-y-10">

        {/* Card Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <img
              src={card.image}
              alt={card.skillName}
              className="w-full h-96 md:h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-3 left-3 bg-[#137A63]/80 text-white text-sm px-3 py-1 rounded-full font-medium">
              {card.category}
            </div>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{card.skillName}</h2>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <FaUserAlt className="text-[#137A63]" />
                <span className="font-semibold text-gray-800">{card.providerName}</span>
                <FaEnvelope className="ml-4 text-gray-400" />
                <span className="text-gray-400 text-sm">{card.providerEmail}</span>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">{card.description}</p>

              <div className="grid grid-cols-2 gap-3 text-sm md:text-base text-gray-700 mb-4">
                <p><span className="font-medium">Experience:</span> {card.experience || "Not specified"}</p>
                <p><span className="font-medium">Duration:</span> {card.duration || "Flexible"}</p>
                <p><span className="font-medium">Location:</span> {card.location || "Online / In-person"}</p>
                <p><span className="font-medium">Language:</span> {card.language || "English / Bangla"}</p>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-4">
              <div className="flex items-center gap-2 text-yellow-500 font-semibold">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar key={i} className={i < card.rating ? "text-yellow-500" : "text-gray-300"} />
                ))}
                <span className="text-gray-800 ml-2">{card.rating}</span>
              </div>

              <div className="mt-2 sm:mt-0 text-gray-800 font-bold text-lg">${card.price}</div>

              <div className="mt-2 sm:mt-0 text-gray-600 font-medium">Slots: {card.slotsAvailable}</div>
            </div>
          </div>
        </div>

        {/* Booking / Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#137A63] mb-6">Book This Skill / Contact Provider</h3>
          <form className="space-y-5" onSubmit={handleFormSubmit}>
            <div>
              <label className="text-gray-700 font-medium block mb-1">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium block mb-1">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
              />
            </div>

            <div>
              <label className="text-gray-700 font-medium block mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#137A63] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#137A63] hover:bg-[#0f5e4c] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default DetailsCard;
