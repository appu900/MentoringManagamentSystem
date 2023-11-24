import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";


const Registrationpage = () => {

 const[studentData,setStudentData]= useState({
    email:"",
    name:"",
    password:""
 })


 async function onsignup(){
    const response = await axios.post("http://localhost:5000/student//register",studentData)
    alert("registration successfull");

 }


  return (
    <div className="flex justify-evenly items-center h-screen">
     
      <div className="flex flex-col gap-6 w-[330px]">
        <h1 className="font-semibold text-left">Create your Account</h1>
        <TextField value={studentData.email} onChange={e=>setStudentData({...studentData,email:e.target.value})} id="outlined-basic" label="email" variant="outlined" />
        <TextField value={studentData.name} onChange={e=>setStudentData({...studentData,name:e.target.value})} id="outlined-basic" label="studentname" variant="outlined" />
        <TextField value={studentData.password} onChange={e=>setStudentData({...studentData,password:e.target.value})}  id="outlined-basic" label="password" variant="outlined" />
        <Button onClick={onsignup} variant="contained">Create Account</Button>
      </div>
    </div>
  );
};

export default Registrationpage;