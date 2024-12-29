import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          toast.success(data.message);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success(data.message);

        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <motion.form
        onSubmit={onSubmitHandler}
        className="w-full max-w-sm bg-white shadow-lg rounded-lg p-8 relative z-50"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          {state}
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-6">
          Welcome back! Please sign in to continue
        </p>

        {state !== "Login" && (
          <motion.div className="mb-4" variants={inputVariants}>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              value={name}
              placeholder="Full Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>
        )}

        <motion.div
          className="mb-4 flex items-center border rounded-lg px-4 py-2"
          variants={inputVariants}
        >
          <img
            src={assets.email_icon}
            alt="Email Icon"
            className="w-5 h-5 mr-3"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
            required
            className="flex-grow focus:outline-none"
          />
        </motion.div>

        <motion.div
          className="mb-6 flex items-center border rounded-lg px-4 py-2 relative"
          variants={inputVariants}
        >
          <img
            src={assets.lock_icon}
            alt="Lock Icon"
            className="w-5 h-5 mr-3"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            required
            className="flex-grow focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3"
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5 text-gray-500 hover:text-purple-500" />
            ) : (
              <EyeIcon className="w-5 h-5 text-gray-500 hover:text-purple-500" />
            )}
          </button>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </motion.button>

        {state === "Login" ? (
          <p className="text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-purple-600 font-semibold cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-purple-600 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        )}

        {/* Close icon */}
        <motion.img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close Icon"
          className="w-4 h-4 cursor-pointer absolute top-4 right-4 hover:scale-110 transition-transform duration-200"
          whileHover={{ scale: 1.2 }}
        />
      </motion.form>
    </div>
  );
};

export default Login;
