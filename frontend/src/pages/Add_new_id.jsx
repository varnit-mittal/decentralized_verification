import React from 'react';
import { useState } from 'react';
//import navabar
import { Navbar, Welcome, Footer, Services, Transactions } from "../components"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
import logo from '../../images/logo.png';   

const Add_new_id = () => {
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
    <h2 className="text-3xl mb-6 font-bold">User Signup</h2>

        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            ID  Name
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type="text"
            id="name"
            placeholder="Enter your ID name"
          />
        </div>
        <div className="mb-6">
         
        </div>
        {/* link it  */}
        <Link to="/Dashboard_user" >
                <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer"
          onClick={connectWallet}
        >

          Submit
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Add_new_id;
