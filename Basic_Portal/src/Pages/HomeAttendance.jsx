import React from "react";
import { Bell } from "lucide-react";

const HomeAttendance = () => {
  const handleBack = () => {
    window.history.back();
  };

  const student = {
    name: "Dhanusri K R R",
    photo: "https://i.redd.it/v82wta66q5971.jpg",
  };

  const attendance = {
    totalClasses: 100,
    attended: 87,
    percentage: 87,
    status: "Good",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] px-4 py-8 relative font-sans text-white overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-40 w-[300px] h-[300px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Header: Back, Notification, Profile */}
      <header className="flex justify-between items-center mb-10 relative z-10 flex-wrap gap-4">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 rounded-full text-white font-semibold shadow hover:scale-105 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L6.707 7l4.647 4.646a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0z"
            />
          </svg>
          Back
        </button>

        {/* Notification & Profile */}
        <div className="flex items-center gap-6 ml-auto">
          {/* Notification Icon */}
          <button
            className="relative p-3 rounded-full bg-[#1f2937]/80 border border-gray-700 hover:scale-105 transition shadow backdrop-blur-md"
            title="Notifications"
          >
            <Bell size={20} className="text-white" />
            <span className="absolute top-2 right-2 block h-2 w-2 bg-red-500 rounded-full ring-2 ring-black animate-pulse" />
          </button>

          {/* Profile with Name */}
          <div className="flex items-center gap-3">
            <img
              src={student.photo}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow"
            />
            <span className="font-medium text-white tracking-wide">{student.name}</span>
          </div>
        </div>
      </header>

      {/* Title */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-4xl font-extrabold tracking-wide font-serif drop-shadow-md">Attendance Dashboard</h1>
        <p className="text-gray-400 mt-2 text-sm">Overview of your attendance performance</p>
      </div>

      {/* Attendance Cards */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 z-10 relative">
        <div className="bg-[#1c1f26]/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-md hover:shadow-cyan-400/30 transition">
          <p className="text-gray-400 mb-1">Total Classes</p>
          <h2 className="text-3xl font-bold text-white">{attendance.totalClasses}</h2>
        </div>

        <div className="bg-[#1c1f26]/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-md hover:shadow-cyan-400/30 transition">
          <p className="text-gray-400 mb-1">Classes Attended</p>
          <h2 className="text-3xl font-bold text-green-400">{attendance.attended}</h2>
        </div>

        <div className="bg-[#1c1f26]/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-md hover:shadow-cyan-400/30 transition">
          <p className="text-gray-400 mb-1">Attendance %</p>
          <h2 className="text-3xl font-bold text-blue-400">{attendance.percentage}%</h2>
        </div>

        <div className="bg-[#1c1f26]/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-md hover:shadow-cyan-400/30 transition">
          <p className="text-gray-400 mb-1">Status</p>
          <h2
            className={`text-2xl font-bold ${
              attendance.percentage >= 75 ? "text-green-400" : "text-yellow-400"
            }`}
          >
            {attendance.percentage >= 75 ? "✅ Good" : "⚠️ Low"}
          </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-10 text-sm text-gray-500 relative z-10">
        Last updated: July 2025 · Maintain 75%+ attendance for eligibility
      </footer>
    </div>
  );
};

export default HomeAttendance;
