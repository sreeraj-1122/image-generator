import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src={assets.logo} alt="Logo" className="h-12 mb-3" />
          <p className="text-sm text-gray-600">
            © 2024 AI ImageGen. All rights reserved.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/sreeraj-1122"
            className="hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <img
              src={assets.facebook_icon}
              alt="Facebook"
              className="h-8 w-8"
            />
          </a>
          <a
            href="https://github.com/sreeraj-1122"
            className="hover:scale-110 transition-transform"
            aria-label="Twitter"
          >
            <img src={assets.twitter_icon} alt="Twitter" className="h-8 w-8" />
          </a>
          <a
            href="https://github.com/sreeraj-1122"
            className="hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <img
              src={assets.instagram_icon}
              alt="Instagram"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>

      {/* Divider and Bottom Text */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center">
        <p className="text-sm text-gray-600">
          Designed with ❤️ by AI ImageGen Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
