import React, { useEffect, useState } from "react";

const OtherRequirements = () => {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    const events = [
      {
        id: 1,
        title: "Photography for Beginners",
        category: "Photography",
        date: "November 5, 2025",
        description:
          "Learn the basics of photography — camera settings, composition, and lighting — from a professional instructor.",
      },
      {
        id: 2,
        title: "Creative Writing Masterclass",
        category: "Writing",
        date: "November 12, 2025",
        description:
          "Join our workshop to enhance your storytelling, character development, and creative thinking skills.",
      },
      {
        id: 3,
        title: "Fitness & Yoga Bootcamp",
        category: "Fitness",
        date: "November 18, 2025",
        description:
          "A refreshing outdoor yoga and fitness session to boost your flexibility, focus, and energy.",
      },
      {
        id: 4,
        title: "Frontend Web Development Crash Course",
        category: "Programming",
        date: "November 25, 2025",
        description:
          "Get hands-on experience with HTML, CSS, and React in this fast-paced beginner-friendly coding bootcamp.",
      },
      {
        id: 5,
        title: "Digital Marketing Essentials",
        category: "Marketing",
        date: "December 2, 2025",
        description:
          "Learn SEO, social media marketing, and email campaigns to promote your brand effectively in the digital world.",
      },
      {
        id: 6,
        title: "Music Production Workshop",
        category: "Music",
        date: "December 10, 2025",
        description:
          "Dive into the world of music production — learn beat-making, mixing, and basic recording techniques.",
      },
    ];

    setWorkshops(events);
  }, []);

  return (
    <div className="w-11/12 max-w-6xl mx-auto my-20">
      <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
        🚀 Upcoming Workshops & Events
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Join exciting upcoming sessions and improve your skills with expert-led workshops.
      </p>

      {workshops.length === 0 ? (
        <p className="text-center text-gray-500">Loading workshops...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div
              key={workshop.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 text-sm font-medium rounded-full">
                  {workshop.category}
                </span>
                <span className="text-gray-500 text-sm">{workshop.date}</span>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {workshop.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {workshop.description}
              </p>

            
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OtherRequirements;
