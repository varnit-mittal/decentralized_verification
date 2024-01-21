import React from 'react';
//import navabar
import { Navbar, Welcome, Footer, Services, Transactions } from "../components"

const UserSignup = () => {
  const handleSignup = () => {
    // Handle user signup logic
    console.log('User signed up!');
  };

  return (
    <div className="relative gradient-bg-welcome h-screen flex flex-col justify-center text-white items-center">
        <div className='absolute top-0 w-full'>
    <Navbar/>
        </div>
      <div
        className=" p-8 rounded-md shadow-md gradient-bg-welcome "
        style={{ height: '300px' ,width: '600px'  }}
      >
    <h2 className="text-3xl mb-6 font-bold">User Signup</h2>

        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type="text"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <input
            className="border  rounded-md w-full py-2 px-3 text-black"
            type="date"
            id="dob"
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default UserSignup;
