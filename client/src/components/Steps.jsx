import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "framer-motion";

const Steps = () => {
  return (
    <motion.div
      className="bg-gray-50 py-16 px-6 md:px-10 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          How it Works
        </h1>
        <p className="text-lg text-gray-600">
          Transform Words Into{" "}
          <span className="text-blue-500">Stunning Images</span>
        </p>
      </motion.div>

      {/* Steps Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
           hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6 transition hover:shadow-lg"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img
              src={item.icon}
              alt={item.title}
              className="h-16 w-16 mb-4"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-sm text-gray-600 text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Steps;
