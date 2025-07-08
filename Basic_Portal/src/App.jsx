import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login_page from "./Pages/Login_page";
import Home from "./Pages/Home";
import HomeAttendance from "./Pages/HomeAttendance";
import HomeProfile from "./Pages/HomeProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/attendance" element={<HomeAttendance />} />
        <Route path="/profile" element={<HomeProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
