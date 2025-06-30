import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";  // Check this path
import CropRecommendation from "./pages/CropRecommendation";
import FertilizerRecommendation from "./pages/FertilizerRecommendation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crop-recommendation" element={<CropRecommendation />} />
        <Route path="/fertilizer-recommendation" element={<FertilizerRecommendation />} />
      </Routes>
    </Router>
  );
};

export default App;
