/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar } from "../components";
import {ethers} from 'ethers';
import OrgAbi from '../../abi/organization.json'
//IMPORT LINKK
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
const RPC=import.meta.env.VITE_RPC;
const ORGADDR=import.meta.env.VITE_ORG;
const DashboardOrg = () => {
const [user,setUser]=React.useState("");
  const fun=async ()=>{
    if(window.ethereum)
    {
      console.log(!111111);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider=new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner()
      const contract=new ethers.Contract(ORGADDR,OrgAbi,signer);
      const user=await contract.getName(ethers.utils.getAddress(accounts[0]));
      // const user=await contract.userType(ethers.utils.getAddress(accounts[0]));
      setUser(user);
      console.log(user);    
      return user;
    }
  }
  fun();
  const issuedDocuments = ["Document 1", "Document 2", "Document 3"];
  return (
    <div className="relative gradient-bg-welcome w-full h-screen flex flex-col items-center ">
      <div className='absolute top-0 w-full'>
        <Navbar/>
      </div>
      <h2 className="text-5xl mb-4 font-bold absolute top-60 left-40 text-white">
     
     Welcome, {user}
     </h2>
      <div className="text-left text-2xl absolute bottom-40  flex justify-between text-black">
      <div className="text-left text-3xl text-white font-semibold mb-4 absolute w-full bottom-[130%] left-[10%]">
        <p>
          Number of People in the Organization: 1245
        </p>
      </div>
      <h3 className="text-4xl mb-2 font-bold absolute bottom-[110%] left-[30%] text-white">Issued Documents:</h3>
      {issuedDocuments.map((document, index) => (
            <div key={index} className="card">{document}</div>
          ))}
      </div>
      <div className="absolute bottom-16 flex justify-center w-full">
      <Link to="/Add_user" >
        <button className="bg-blue-500 text-white py-3 px-6 mr-8 mb-0 rounded-full cursor-pointer hover:bg-blue-700">
         Issue Document
        </button>

        </Link>
        <Link to="/Add_new_id" >
        <button className="bg-blue-500 text-white py-3 px-6 mb-0 rounded-full cursor-pointer hover:bg-blue-700">
          Add New ID
        </button>

        </Link>
      </div>
    </div>
  );
};

export default DashboardOrg;