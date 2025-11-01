import React from "react";
import { Link } from "react-router"; 
import { motion } from "framer-motion";

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-6">
      {/* Animated 404 Number */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[120px] md:text-[160px] font-extrabold text-[#137A63] drop-shadow-md"
      >
        404
      </motion.h1>

      {/* Subheading */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mt-2"
      >
        Oops! Page Not Found 😕
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-gray-600 mt-4 max-w-md"
      >
        The page you’re looking for doesn’t exist or has been moved.  
        Let’s get you back to learning something amazing!
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-8"
      >
        <Link
          to="/"
          className="px-8 py-3 bg-gradient-to-r from-[#19A974] to-[#137A63] text-white font-semibold rounded-lg shadow-md hover:from-[#0f5e4c] hover:to-[#0b4a38] hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </Link>
      </motion.div>


    </section>
  );
};

export default ErrorPage;
