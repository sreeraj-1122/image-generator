import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 via-blue-200 to-teal-200 p-5">
      <motion.form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div
          className="relative mb-3"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={image}
            alt="Generated"
            className="w-full h-auto object-cover rounded-lg shadow-xl"
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
              <span className="text-white text-xl font-semibold animate-pulse">
                Loading...
              </span>
            </div>
          )}
        </motion.div>

        {/* Input Section */}
        {!isImageLoaded && (
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              required
              placeholder="Describe what you want to generate"
              className="w-full p-5 pr-16 rounded-3xl border-4 border-blue-500 focus:ring-4 focus:ring-blue-300 focus:border-indigo-500 bg-white text-gray-700 text-lg placeholder-gray-400 transition-all duration-300 shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white py-3 px-6 rounded-3xl font-bold text-lg hover:bg-blue-700 transition-all"
            >
              Generate
            </button>
          </motion.div>
        )}

        {/* Generate Another & Download Section */}
        {isImageLoaded && (
          <motion.div
            className="flex justify-center items-center space-x-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <button
              onClick={() => setIsImageLoaded(false)}
              className="text-gray-700 font-medium text-lg border-2 border-black py-2 px-6 rounded-full hover:bg-black hover:text-white transition-all duration-300"
            >
              Generate Another
            </button>

            <a
              download
              href={image}
              className="bg-blue-600 text-white py-2 px-4 rounded-3xl text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
            >
              Download
            </a>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          className="text-center text-gray-700 mt-6 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-lg md:text-xl font-semibold">
            Unleash your creativity. Let AI bring your words to life!
          </p>
          <p className="text-sm md:text-base font-light text-gray-500 opacity-80">
            Start generating incredible images from your text prompts in
            seconds.
          </p>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Result;
