import React, { useContext } from "react";
import { motion } from "framer-motion";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } =
    useContext(AppContext);

  const navigate = useNavigate();

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        // console.log(response);
        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razor",
            response,
            { headers: { token } }
          );
          if (data.success) {
            loadCreditsData()
            navigate("/")
            toast.success("Credits Added")
          }
        } catch (error) {
          toast.error(error.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        toast.error("User not logged in, Please login");

      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100 py-12">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          className="px-6 py-3 bg-purple-600 text-white text-lg font-medium rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Our Plans
        </motion.button>
        <h1 className="text-4xl font-extrabold text-gray-800 mt-8">
          Choose the Plan That's Right for You
        </h1>
        <p className="text-gray-600 mt-4">
          Flexible and affordable options for all your credit needs.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 mx-auto max-w-7xl px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8"
            variants={cardVariants}
          >
            <motion.img
              src={assets.logo_icon}
              alt="Plan Logo"
              className="w-20 h-20 mx-auto mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <p className="text-xl font-semibold text-gray-800 text-center">
              {item.desc}
            </p>
            <p className="text-gray-500 text-center mt-2">Plan ID: {item.id}</p>
            <div className="text-center mt-6">
              <p className="text-2xl font-bold text-purple-600">
                ${item.price}
              </p>
              <p className="text-gray-600">for {item.credits} credits</p>
            </div>
            <motion.button
              onClick={() => paymentRazorpay(item.id)}
              className="w-full mt-6 bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              {user ? "Buy Now" : "Get Started"}
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BuyCredit;
