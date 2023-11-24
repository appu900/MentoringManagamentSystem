import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  
  const [student, setStudent] = useState([]);
  const [mentor, setMentor] = useState([]);


  async function fetchStudentData(){
    const response = await axios.get("http://localhost:5000/student/all");
    console.log(response);
    setStudent(response.data)
  }

  async function fetchMentorData(){
    const response = await axios.get("http://localhost:5000/mentor/all");
    console.log(response);
    setMentor(response.data)
  }

  const [teacherId, setTeacherId] = useState('');
  const [studentIds, setStudentIds] = useState('');

  // Handler for teacher ID input change
  const handleTeacherIdChange = (e) => {
    setTeacherId(e.target.value);
  };

  // Handler for student IDs input change
  const handleStudentIdsChange = (e) => {
    setStudentIds(e.target.value);
  };

  // Handler for form submission
  const handleSubmit = async(e) => {
    e.preventDefault();

    // Convert the comma-separated string to an array
    const studentsArray = studentIds.split(',').map((id) => id.trim());
    
    const response = await axios.post(`http://localhost:5000/mentor/${teacherId}`, studentsArray);
    alert("data inserted successfully");

    // Do something with the values (for example, log them)
    console.log('Teacher ID:', teacherId);
    console.log('Student IDs:', studentsArray);
  };

  
  
  return (
    <div className="App">
      <div className="w-full h-[500px] bg-gray-100 flex py-10">
        <div className="w-[50%] px-[50px] overflow-y-scroll">
          <div className="flex">
            <button onClick={fetchStudentData} className="px-4 active:scale-95 rounded-md py-2 bg-black text-white">
              fetch studentdata
            </button>
          </div>

          <div className="mt-7 shadow-md rounded-md">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                  <th scope="col" class="px-6 py-3">
                      Student Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Student Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      emaik
                    </th>
                  
                  </tr>
                </thead>
                <tbody>
                  {
                    student.map((student)=>(
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {student.id}
                        </th>  
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {student.name}
                    </th>
                    <td class="px-6 py-4">{student.email}</td>
                  </tr>
                    ))
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* mentor data */}

        <div className="w-[50%] px-[50px]">
          <div className="flex">
            <button onClick={fetchMentorData} className="px-4 active:scale-95 rounded-md py-2 bg-black text-white">
              fetch mentor
            </button>

          </div>

          <div className="mt-7 shadow-md rounded-md">
            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                  <th scope="col" class="px-6 py-3">
                      mentor Id
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Mentor Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      email
                    </th>
                  
                  </tr>
                </thead>
                <tbody>
                  {
                    mentor.map((student)=>(
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {student.id}
                        </th>  
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {student.name}
                    </th>
                    <td class="px-6 py-4">{student.email}</td>
                  </tr>
                    ))
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

{/* add data section */}
      <div className="px-[200px] mt-16">

      <form className="flex gap-10" onSubmit={handleSubmit}>
      <label>
        Teacher ID:
        <input className="border border-black" type="text" value={teacherId} onChange={handleTeacherIdChange} />
      </label>
      <br />
      <label>
        Student IDs (comma-separated):
        <input className="border border-black" type="text" value={studentIds} onChange={handleStudentIdsChange} />
      </label>
      <br />
      <button className="bg-black px-4 py-2 text-white rounded-md active:scale-x-95" type="submit">Submit</button>
    </form>

      </div>
    </div>
  );
}

export default App;
