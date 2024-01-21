import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from "../components"


const OrganizationSignup = () => {
  const handleSignup = () => {
    // Handle organization signup logic
    console.log('Organization signed up!');
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
        <h2 className="text-2xl mb-4 font-bold">Organisation Signup</h2>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="organizationName">
            Name of Organisation
          </label>
          <input
  className="border rounded-md w-full py-2 px-3 text-black"
  type="text"
  id="organizationName"
  placeholder="Enter the name of your organisation"
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

export default OrganizationSignup;
