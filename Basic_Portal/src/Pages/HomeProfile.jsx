import React from "react";
import { Bell } from "lucide-react";

const Profile = () => {
  const student = {
    name: "Dhanusri K R R",
    roll: "23EC134",
    semester: "V",
    department: "Electronics and Communication Engineering",
    email: "dhanusri.ec23@bitsathy.ac.in",
    photo: "https://i.redd.it/v82wta66q5971.jpg",
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] px-4 py-8 relative text-white font-sans overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-400 opacity-30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-40 w-[300px] h-[300px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Buttons */}
      <header className="flex justify-between items-center mb-10 relative z-10">
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

        {/* Notification */}
        <button
          className="relative p-3 rounded-full bg-[#1f2937]/80 border border-gray-700 hover:scale-105 transition shadow backdrop-blur-md"
          title="Notifications"
        >
          <Bell size={20} className="text-white" />
          <span className="absolute top-2 right-2 block h-2 w-2 bg-red-500 rounded-full ring-2 ring-black animate-pulse" />
        </button>
      </header>

      {/* Profile Card */}
      <main className="max-w-3xl mx-auto bg-[#1c1f26]/80 backdrop-blur-md border border-gray-700 shadow-lg rounded-3xl p-10 text-center relative z-10">
        <img
          src={student.photo}
          alt="Student"
          className="w-32 h-32 rounded-full border-4 border-cyan-400 mx-auto shadow-lg object-cover mb-6"
        />
        <h1 className="text-3xl font-bold tracking-wide">{student.name}</h1>
        <p className="text-cyan-300 text-sm mt-1 mb-8">Electronics and Communication Engineering</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-300">
          <div>
            <p className="mb-2">
              <span className="text-white font-semibold">Roll Number:</span> {student.roll}
            </p>
            <p className="mb-2">
              <span className="text-white font-semibold">Semester:</span> {student.semester}
            </p>
          </div>
          <div>
            <p className="mb-2">
              <span className="text-white font-semibold">Department:</span> {student.department}
            </p>
            <p className="mb-2">
              <span className="text-white font-semibold">Email:</span> {student.email}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center mt-10 text-sm text-gray-500 z-10 relative">
        © 2025 Dhanusri KRR — All Rights Reserved
      </footer>
    </div>
  );
};

export default Profile;
