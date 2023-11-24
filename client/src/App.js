import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginFrom from "./components/Student/LoginFrom";
import Registrationpage from "./components/Student/Registrationpage";
import MentorRegister from "./components/Mentor/MentorRegister";
import MentorLogin from "./components/Mentor/MentorLogin";
import StudentDashBoard from "./components/Student/StudentDashBoard";
import MentorDashBoard from "./components/Mentor/MentorDashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/studentlogin" element={<LoginFrom />} />
        <Route path="/studentsignup" element={<Registrationpage />} />
        <Route path="/mentorsignup" element={<MentorRegister />} />
        <Route path="/mentorlogin" element={<MentorLogin />} />
        <Route path="/studentdashboard" element={<StudentDashBoard />} />
        <Route path="/mentordashboard" element={<MentorDashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
