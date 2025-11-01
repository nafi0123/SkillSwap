import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import toast, { Toaster } from "react-hot-toast";

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
    toast.success("🎉 Form submitted successfully!");
    e.target.reset(); 
  };

  if (!card) {
    return <p className="text-center mt-10 text-red-500">Card not found</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen py-14 rounded-3xl">
      <Toaster position="top-right" />

      <div className="w-11/12 max-w-5xl mx-auto space-y-8">
        {/* Card Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 relative">
              <img
                src={card.image}
                alt={card.skillName}
                className="w-full h-80 md:h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {card.category}
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">
                  {card.skillName}
                </h2>
                <p className="text-gray-600 text-sm mb-3">
                  By{" "}
                  <span className="font-semibold text-gray-800">
                    {card.providerName}
                  </span>{" "}
                  <span className="text-gray-400">({card.providerEmail})</span>
                </p>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                  {card.description}
                </p>
                <div className="grid grid-cols-2 gap-y-3 text-sm md:text-base">
                  <p>
                    <span className="font-medium text-gray-700">
                      Experience:{" "}
                    </span>
                    {card.experience || "Not specified"}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Duration: </span>
                    {card.duration || "Flexible"}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Location: </span>
                    {card.location || "Online / In-person"}
                  </p>
                  <p>
                    <span className="font-medium text-gray-700">Language: </span>
                    {card.language || "English / Bangla"}
                  </p>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <div className="flex items-center gap-1 text-yellow-500 font-semibold">
                  ★ <span className="text-gray-800">{card.rating}</span>
                </div>
                <div className="text-gray-800 font-semibold">${card.price}</div>
                <div className="text-gray-600 font-medium">
                  Slots: {card.slotsAvailable}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section - aligned with card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Contact Instructor
          </h3>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-700 mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn bg-[#137A63] hover:bg-[#0f5e4c] text-white w-full shadow-md transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
