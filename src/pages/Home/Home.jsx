import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import SingleCard from "../../components/SingleCard/SingleCard";
import ExtraSections from "../ExtraSections/ExtraSections";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "../../components/Loading/Loading";
import OtherRequirements from "../OtherRequirements/OtherRequirements";
import { Link } from "react-router";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const eightData = [...data].slice(0, 8);
        setCards(eightData);
        setLoading(false);
      });
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
    });
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <Banner />
      <div
        className="text-center mt-10"
        data-aos="fade-down"
        data-aos-duration="800"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Explore Our Popular Courses
        </h2>
        <p className="text-gray-600 mt-3 w-10/12 md:w-6/12 mx-auto">
          Discover a range of exciting workshops and classes designed to help
          you learn new skills, connect with others, and grow your creativity.
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

      <div className="flex justify-center items-center">
        <Link
          to="all-course"
          className=" btn bg-[#137A63] hover:bg-[#0f5e4c] text-white border-none rounded-lg shadow-md hover:shadow-lg transition-all duration-300 "
        >
          View All
        </Link>
      </div>

      <ExtraSections></ExtraSections>
      <OtherRequirements></OtherRequirements>
    </div>
  );
};

export default Home;
