import React, { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading/Loading";
import SingleCard from "../../components/SingleCard/SingleCard";

const ViewAllSection = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      });
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
    });
  }, []);
  if (loading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <div
        className="text-center mt-10"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Browse All Available Courses
        </h2>
        <p className="text-gray-600 mt-3 w-10/12 md:w-6/12 mx-auto">
          Explore our full catalog of skill-based workshops and training
          sessions. Whether you’re a beginner or looking to advance your
          expertise, there’s something here for everyone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-11/12 mx-auto py-10">
        {cards.map((card, index) => (
          <div
            key={card.skillId}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex justify-center"
          >
            <SingleCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllSection;
