import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="p-4  flex bg-indigo-700 text-white justify-around shadow-2xl">
      <div>
        <Link className="font-semibold text-xl" to="/">
          MentorManagment
        </Link>
      </div>

      <div className="flex gap-5 text-sm font-semibold text-gray-700 text-white">
        <Link to="/studentsignup">Student Register</Link>
        <Link to="/mentorsignup">Mentor Register</Link>
        <Link to="/mentorlogin">Mentor login</Link>
        <Link to="/studentlogin">student login</Link>
      </div>
    </div>
  );
};

export default Navbar;
