import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSeedling, FaFlask, FaBell } from "react-icons/fa";
import { motion } from "framer-motion";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Notification Button */}
      <motion.button 
        className="notification-button"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaBell className="bell-icon" />
      </motion.button>

      {/* Animated Welcome Text */}
      <motion.h1 
        className="welcome-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        🌿 Welcome to Smart Farming 🚜
      </motion.h1>

      {/* Buttons for Crop & Fertilizer Recommendation */}
      <div className="button-container">
        <motion.button 
          className="home-button crop-button"
          onClick={() => navigate("/crop-recommendation")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            initial={{ rotate: -10 }} 
            animate={{ rotate: 0 }} 
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
          >
            <FaSeedling className="button-icon green-icon" />
          </motion.span>
          Crop Recommendation
        </motion.button>

        <motion.button 
          className="home-button fertilizer-button"
          onClick={() => navigate("/fertilizer-recommendation")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            initial={{ rotate: 10 }} 
            animate={{ rotate: 0 }} 
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
          >
            <FaFlask className="button-icon blue-icon" />
          </motion.span>
          Fertilizer Recommendation
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
