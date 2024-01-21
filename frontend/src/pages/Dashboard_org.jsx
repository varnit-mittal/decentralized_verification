import React from 'react';
import { Navbar } from "../components";

//IMPORT LINKK
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const DashboardOrg = () => {
  return (
    <div className="relative gradient-bg-welcome w-full h-screen flex flex-col items-center ">
      <div className='absolute top-0 w-full'>
        <Navbar/>
      </div>
      <h2 className="text-5xl mb-4 font-bold absolute top-60 left-40 text-white">
        Welcome, IIITB! 🙏
      </h2>
      <div className="text-left text-3xl text-white font-semibold mb-4 absolute top-[320px]">
        <p>
          Number of People in the Organization: 1245
        </p>
      </div>
      <h3 className="text-4xl mb-2 font-bold absolute top-[420px] left-[800px] text-white">Issued Documents:</h3>
      <div className="text-left text-2xl absolute top-[480px] flex justify-between text-black">
        <div className="card">Document 1</div>
        <div className="card">Document 2</div>
        <div className="card">Document 3</div>
      </div>
      <div className="absolute bottom-16 flex justify-center w-full">
      <Link to="/Add_user" >
        <button className="bg-blue-500 text-white py-3 px-6 mr-8  rounded-full cursor-pointer hover:bg-blue-700">
         Issue Document
        </button>

        </Link>
        <Link to="/Add_new_id" >
        <button className="bg-blue-500 text-white py-3 px-6 rounded-full cursor-pointer hover:bg-blue-700">
          Add New ID
        </button>

        </Link>
      </div>
    </div>
  );
};

export default DashboardOrg;
