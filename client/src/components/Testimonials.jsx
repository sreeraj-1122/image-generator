import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          What People Say
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Hear from our happy users who love creating with AI
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {Array(item.stars)
                .fill()
                .map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={assets.rating_star}
                    alt="Rating Star"
                    className="h-5 w-5"
                  />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
