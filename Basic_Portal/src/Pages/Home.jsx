import React from "react";
import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    window.history.back();
  };

  const dashboardCards = [
    {
      title: "Attendance",
      icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
      color: "bg-blue-500",
      link: "/attendance",
    },
    {
      title: "Profile",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      color: "bg-green-500",
      link: "/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] px-4 py-10 flex flex-col items-center justify-center relative overflow-hidden font-sans">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-40 w-[300px] h-[300px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 bg-gradient-to-tr from-[#3b82f6] to-[#06b6d4] text-white font-semibold px-5 py-2 rounded-full shadow-lg hover:shadow-cyan-400/40 transform hover:scale-105 transition duration-300 group"
      >
        <div className="flex items-center gap-2">
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="inline"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span>Go Back</span>
        </div>
      </button>

      {/* Notification */}
      <button
        className="absolute top-6 right-6 p-3 rounded-full bg-[#1f2937]/70 border border-gray-600 text-white hover:text-cyan-400 hover:scale-105 transition shadow backdrop-blur-md"
        title="Notifications"
      >
        <Bell size={20} />
      </button>

      {/* Header */}
      <div className="text-center z-10 mb-14">
        <h1 className="text-5xl font-extrabold text-white font-serif drop-shadow-xl tracking-wide">
          Welcome Back!
        </h1>
        <p className="text-gray-400 mt-3 text-lg tracking-wide">
          Here’s a quick look at your dashboard
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-4xl z-10 justify-items-center">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.link)}
            className="cursor-pointer bg-[#1c1f26] border border-gray-700 rounded-2xl shadow-lg p-8 text-center w-64 hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300"
          >
            <div
              className={`w-20 h-20 mx-auto mb-5 rounded-full flex items-center justify-center ${card.color} shadow-lg`}
            >
              <img src={card.icon} alt={card.title} className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-semibold text-white tracking-wide">
              {card.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
