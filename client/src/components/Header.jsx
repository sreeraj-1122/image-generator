import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  const containerVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.3, // Stagger animation of children
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="bg-gray-50 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Animated Header */}
      <motion.header
        className="py-16"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
          {/* Tagline */}
          <motion.div
            className="flex items-center justify-center space-x-3"
            variants={itemVariant}
          >
            <p className="text-sm font-medium text-blue-500 uppercase tracking-wider">
              Best text-to-image generator
            </p>
            <img src={assets.star_icon} alt="Star Icon" className="h-5 w-5" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
            variants={itemVariant}
          >
            Turn text to <span className="text-blue-500">image</span>, in
            seconds
          </motion.h1>

          {/* Subheading */}
          <motion.p className="text-lg text-gray-600" variants={itemVariant}>
            Experience the magic of AI with Imagify. Transform your ideas into
            stunning visuals effortlessly.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.div variants={itemVariant}>
            <button
              onClick={onClickHandler}
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded-md shadow-md hover:bg-blue-600 transition"
            >
              Generate Images
              <img
                src={assets.star_group}
                alt="Star Group"
                className="ml-3 h-5 w-5"
              />
            </button>
          </motion.div>

          {/* Sample Images Section */}
          <motion.div
            className="mt-8 flex justify-center space-x-3 overflow-x-auto"
            variants={containerVariant}
          >
            {Array(6)
              .fill("")
              .map((item, index) => (
                <motion.img
                  src={
                    index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2
                  }
                  key={index}
                  alt={`Sample ${index + 1}`}
                  className="h-20 w-20 rounded-lg shadow-md object-cover flex-shrink-0" // Add flex-shrink-0 for horizontal scrolling
                  variants={imageVariant}
                />
              ))}
          </motion.div>

          {/* Footer Text */}
          <motion.p
            className="text-sm text-gray-500 mt-6"
            variants={itemVariant}
          >
            Generated images from <span className="font-semibold">Imagify</span>
          </motion.p>
        </div>
      </motion.header>
    </motion.div>
  );
};

export default Header;
