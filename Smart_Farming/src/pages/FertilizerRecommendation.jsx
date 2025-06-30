import React, { useState } from "react";
import axios from "axios";
import { FaSeedling } from "react-icons/fa";
import { MdScience, MdTerrain } from "react-icons/md";
import "../index.css";

const FertilizerRecommendation = () => {
  const [formData, setFormData] = useState({
    crop: "",
    soilFertility: "",
  });

  const [fertilizerSuggestion, setFertilizerSuggestion] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getFertilizerRecommendation = async () => {
    try {
      const response = await axios.post("/api/fertilizer-recommendation", formData);
      setFertilizerSuggestion(response.data.recommendedFertilizer);
    } catch (error) {
      console.error("Error fetching fertilizer recommendation", error);
    }
  };

  return (
    <div className="fertilizer-container">
      {/* Title */}
      <h1 className="fertilizer-title">
        <MdScience className="icon-title" /> Fertilizer Recommendation
      </h1>

      {/* Input Fields */}
      <div className="input-container">
        <div className="input-group">
          <FaSeedling className="input-icon" />
          <input
            type="text"
            name="crop"
            placeholder="Enter Crop Name"
            value={formData.crop}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <MdTerrain className="input-icon" />
          <input
            type="text"
            name="soilFertility"
            placeholder="Enter Soil Fertility Level (Low, Medium, High)"
            value={formData.soilFertility}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Button */}
      <button className="recommend-button" onClick={getFertilizerRecommendation}>
        Get Recommendation
      </button>

      {/* Fertilizer Suggestion */}
      {fertilizerSuggestion && (
        <div className="result-box">
          <h2>Recommended Fertilizer: 🌱 {fertilizerSuggestion}</h2>
        </div>
      )}
    </div>
  );
};

export default FertilizerRecommendation;
