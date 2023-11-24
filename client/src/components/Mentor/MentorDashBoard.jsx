import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MentorDashBoard() {
  const navigate = useNavigate();  
  const id = useSelector((state) => state.auth);
  console.log(id);
  const [student, setStudent] = useState([]);

  async function getStudetData() {
    const response = await axios.get(
      `http://localhost:5000/mentor/student/${id}`
    );
    
    console.log(response.data);
    setStudent(response.data);
  }
  
  
 
  return (
    <div  className="py-8 px-[100px]">
       <div className="text-left pl-5 flex justify-between">
         <button onClick={getStudetData} className="px-5 py-2 bg-black text-white rounded-md active:scale-95">fetch students</button>
         <button onClick={e=>navigate('/')} className="px-5 py-2 bg-black text-white rounded-md active:scale-95">logout</button>

        </div> 
      <div class="relative overflow-x-auto mt-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                student name
              </th>
              <th scope="col" class="px-6 py-3">
                email
              </th>
            </tr>
          </thead>
          <tbody>
            {
                student.map((item) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                        {item.name}
                    </th>
                    <td class="px-6 py-4">{item.email}</td>
                    </tr>
                ))
            }
           
          </tbody>
        </table>
      </div>
    </div>
  );
}
