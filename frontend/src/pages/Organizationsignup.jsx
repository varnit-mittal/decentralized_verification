import React from 'react';
import { Navbar, Welcome, Footer, Services } from "../components"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useState } from 'react';

import logo from '../../images/logo.png';

const OrganizationSignup = () => {
  const handleSignup = () => {
    // Handle organization signup logic
    console.log('Organization signed up!');
  };
  const [walletAddress,setWalletAddress]=useState("");

  const connectWallet = async () => {
      if(window.ethereum)
      {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      }
  }

  return (
    <div className="relative gradient-bg-welcome h-screen flex flex-col justify-center text-white items-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center absolute top-0 left-80">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
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
        <Link to="/Dashboard_org" >
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Sign Up
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OrganizationSignup;
