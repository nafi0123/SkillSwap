import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router";

const SingleCard = ({ card }) => {
  const [hovered, setHovered] = useState(false);

  const springStyle = useSpring({
    transform: hovered ? "scale(1.03)" : "scale(1)",
    boxShadow: hovered
      ? "0px 10px 25px rgba(0,0,0,0.2)"
      : "0px 4px 6px rgba(0,0,0,0.1)",
    config: { tension: 300, friction: 20 },
  });

  return (
    <animated.div
      style={springStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[90%] sm:w-[95%] md:w-full bg-white rounded-xl overflow-hidden cursor-pointer shadow-md transition-transform duration-300"
    >
      {/* Image */}
      <img
        src={card.image}
        alt={card.skillName}
        className="w-full aspect-[4/3] object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800 truncate">
          {card.skillName}
        </h2>

        <p className="text-gray-500 text-sm mt-1">By {card.providerName}</p>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center">
            <span className="text-yellow-500 font-bold mr-1">★</span>
            <span className="text-gray-700">{card.rating}</span>
          </div>
          <div className="text-gray-800 font-semibold">${card.price}</div>
        </div>

        <Link to={`/detailscard/${card.skillId}`}>
          <button className="mt-4 w-full bg-[#137A63] hover:bg-[#0f5e4c] text-white rounded-lg py-2 px-4 transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </animated.div>
  );
};

export default SingleCard;
