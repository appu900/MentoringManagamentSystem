import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const MentorRegister = () => {


 const navigate = useNavigate();   

 const[data,setData]= useState({
    email:"",
    name:"",
    password:""
 })


 async function onsignup(){
    const response = await axios.post("http://localhost:5000/mentor/register",data)
    alert("registration successfull");
    navigate("/mentorlogin")

 }


  return (
    <div className="flex justify-evenly items-center h-screen">
     
      <div className="flex flex-col gap-6 w-[330px]">
        <h1 className="font-semibold text-left">Create your Account</h1>
        <TextField value={data.email} onChange={e=>setData({...data,email:e.target.value})} id="outlined-basic" label="employee email" variant="outlined" />
        <TextField value={data.name} onChange={e=>setData({...data,name:e.target.value})} id="outlined-basic" label="mentor name" variant="outlined" />
        <TextField value={data.password} onChange={e=>setData({...data,password:e.target.value})}  id="outlined-basic" label="password" variant="outlined" />
        <Button onClick={onsignup} variant="contained">Create Account</Button>
      </div>
    </div>
  );
};

export default MentorRegister;