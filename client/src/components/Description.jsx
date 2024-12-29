import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <motion.div
      className="text-center py-16 bg-gradient-to-b from-gray-50 to-white px-4 md:px-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading Section */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Create Stunning AI Images
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl text-gray-700 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Unlock the power of AI and turn your imagination into reality
      </motion.p>

      {/* Image and Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Image Display */}
        <motion.img
          src={assets.sample_img_1}
          alt="AI-Generated Sample"
          className="w-96 h-auto rounded-2xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.5 }}
        />

        {/* Description Content */}
        <motion.div
          className="text-left md:w-1/2 space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-800"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Transform Ideas into Art
          </motion.h2>
          <motion.p
            className="text-gray-600 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Whether you're an artist, designer, or dreamer, our AI image
            generator empowers you to bring your ideas to life effortlessly.
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Just input a text prompt, and let our advanced algorithms create
            breathtaking visuals that match your imagination.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
