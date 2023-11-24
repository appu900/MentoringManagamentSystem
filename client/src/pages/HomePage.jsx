import React from "react";
import Navbar from "../components/MainwebviewComponent/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-24">
        <img className="w-full h-[500px] object-cover" src="https://media.istockphoto.com/id/1467835098/photo/group-of-young-asian-student-walking-and-talking-at-university-before-class-room-education.jpg?s=2048x2048&w=is&k=20&c=Xq46KzzNcHvy9MqQNKOYT3KN7LNEroZSrmLSQgIgFXY=" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
