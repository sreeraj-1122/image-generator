import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, setUser, setShowLogin, logout, credit, token } =
    useContext(AppContext);

  // Toggle Dropdown
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm px-2 sm:px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="h-7 sm:h-10 w-auto" />
          <span className="hidden sm:block text-lg font-semibold text-gray-800 ">
            AI ImageGen
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {token ? (
            <div className="flex items-center sm:gap-4 gap-3 relative">
              {/* Credits Section */}
              <button
                onClick={() => navigate("/buy")}
                className="flex items-center gap-2 bg-blue-100 px-4 py-1 sm:py-2 rounded-md hover:bg-blue-200 transition"
              >
                <img
                  src={assets.credit_star}
                  alt="Credits"
                  className="h-5 w-5"
                />
                <span className="text-sm font-medium text-blue-600">
                  Credits left: {credit}
                </span>
              </button>

              {/* User Greeting */}
              <p className="hidden sm:block text-sm font-medium text-gray-600">
                Hi, {user?.name}
              </p>

              {/* User Avatar with Dropdown */}
              <div className="relative">
                <div
                  className="h-10 w-10 rounded-full overflow-hidden border border-gray-300 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <img
                    src={assets.profile_icon}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md py-2 w-32 z-50"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <li
                      onClick={() => {
                        logout();
                      }}
                      className="list-none px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-red-600 cursor-pointer"
                    >
                      Logout
                    </li>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-6">
              {/* Pricing */}
              <p
                onClick={() => navigate("/buy")}
                className="text-sm font-medium text-gray-600 cursor-pointer hover:text-gray-800"
              >
                Pricing
              </p>

              {/* Login Button */}
              <button
                onClick={() => {
                  setShowLogin(true);
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
