import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Login_page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Gradient Circles */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 opacity-30 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 opacity-20 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-md bg-[#1c1f26] border border-[#2f3a4d] rounded-2xl p-8 md:p-10 shadow-xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-white text-3xl font-extrabold tracking-wide">Welcome Back</h1>
          <p className="text-blue-300 text-sm mt-1">Sign in to continue</p>
        </div>

        {/* Login Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 bg-[#12161d] text-white placeholder-gray-400 rounded-md border border-[#2e3440] focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 bg-[#12161d] text-white placeholder-gray-400 rounded-md border border-[#2e3440] focus:outline-none focus:ring-2 focus:ring-cyan-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold py-3 rounded-md hover:from-blue-500 hover:to-indigo-500 transition duration-300 shadow-lg"
          >
            → LOGIN
          </button>
        </form>

        <p className="text-gray-400 text-center text-sm">
          Don’t have an account?{" "}
          <span className="text-cyan-400 hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
