/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Welcome, Footer, Services } from "../components"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useState } from 'react';
import { ethers } from 'ethers';
import OrgAbi from '../../abi/organization.json'
import logo from '../../images/logo.png';
const RPC=import.meta.env.VITE_RPC;
const ORGADDR=import.meta.env.VITE_ORG;


const OrganizationSignup = () => {

  const [tet,setT]=useState("");
  const handle=(e)=>{
    setT(e.target.value);
  }
  const handleSignup = async () => {
    // Handle organization signup logic 
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const contract=new ethers.Contract(ORGADDR,OrgAbi,provider);
    console.log(tet)
    // const user=await contract.userType(ethers.utils.getAddress(walletAddress)); 
   const daiWithSigner = contract.connect(signer);
    let transaction=await daiWithSigner.add_authority(tet,ethers.utils.getAddress(walletAddress));
    await transaction.wait();
    // console.log(transaction);
    // const name=await contract.getName(ethers.utils.getAddress(walletAddress));
    // console.log(name);
    // console.log(ethers.utils.getAddress(walletAddress ))
  };
  const [walletAddress,setWalletAddress]=useState("");

  const connectWallet = async () => {

    if(window.ethereum)
    {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setWalletAddress(accounts[0]);
      handleSignup();
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
  name="organizationName"
  placeholder="Enter the name of your organisation"
  value={tet}
  onChange={handle}
/>

        </div>
        <Link to="/Loadingpage" >
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
