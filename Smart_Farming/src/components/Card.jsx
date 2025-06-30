import React from "react";
import "../index.css";

const Card = ({ title, children }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        {children}
      </div>
    );
  };
  export default Card;  // ✅ Ensure default export
  