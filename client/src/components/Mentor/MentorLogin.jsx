import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addId } from "../../Redux/AuthSlice";

const MentorLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function onlogin() {
    const response = await axios.post(
      "http://localhost:5000/mentor/login",
      data
    );
    console.log(response.data.id);
    dispatch(addId(response.data.id));
    navigate("/mentordashboard") 
    alert("login successfull");
  }

  return (
    <div className="flex justify-evenly items-center h-screen">
      <div className="flex flex-col gap-6 w-[330px]">
        <h1 className="font-semibold text-left">Mentor login</h1>
        <TextField
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          id="outlined-basic"
          label="email"
          variant="outlined"
        />
        <TextField
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          id="outlined-basic"
          label="password"
          variant="outlined"
        />
        <Button onClick={onlogin} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
};

export default MentorLogin;
