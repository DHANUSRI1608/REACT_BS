import React, { useState } from "react";
import axios from "axios";
import { FaTint, FaThermometerHalf, FaLeaf } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";
import "../index.css";

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    moisture: "",
    ph: "",
    nutrients: "",
  });

  const [cropSuggestion, setCropSuggestion] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCropRecommendation = async () => {
    try {
      const response = await axios.post("/api/crop-recommendation", formData);
      setCropSuggestion(response.data.recommendedCrop);
    } catch (error) {
      console.error("Error fetching crop recommendation", error);
    }
  };

  return (
    <div className="crop-container">
      {/* Title */}
      <h1 className="crop-title">
        🌱 Crop Recommendation
      </h1>

      {/* Input Fields */}
      <div className="input-container">
        <div className="input-group">
          <FaTint className="input-icon" />
          <input
            type="number"
            name="moisture"
            placeholder="Enter Soil Moisture (%)"
            value={formData.moisture}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <FaThermometerHalf className="input-icon" />
          <input
            type="number"
            name="ph"
            placeholder="Enter Soil pH Level"
            value={formData.ph}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <FaLeaf className="input-icon" />
          <input
            type="text"
            name="nutrients"
            placeholder="Enter Nutrient Levels (NPK)"
            value={formData.nutrients}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Button */}
      <button className="recommend-button" onClick={getCropRecommendation}>
        Get Recommendation
      </button>

      {/* Crop Suggestion */}
      {cropSuggestion && (
        <div className="result-box">
          <h2>Recommended Crop: 🌾 {cropSuggestion}</h2>
        </div>
      )}
    </div>
  );
};

export default CropRecommendation;
