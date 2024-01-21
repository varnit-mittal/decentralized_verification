import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
import logo from '../../images/logo.png';   

const Verification = () => {
    const [walletAddress,setWalletAddress]=useState("");

    const verify = async () => {
        
    }
  return (
    <div className="relative gradient-bg-welcome h-screen flex flex-col justify-center text-white items-center ">
      <div className="md:flex-[0.5] flex-initial justify-center items-center absolute top-0 left-80">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <div
        className=" p-8 rounded-md shadow-md gradient-bg-welcome absolute top-[200px] "
        style={{ height: '300px' ,width: '600px'  }}
      >
    <h2 className="text-3xl mb-6 font-bold">Verification</h2>

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
          <label className="block text-white text-sm font-bold mb-2" htmlFor="docID">
            Document ID
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type="text"
            id="docID"
            placeholder="Enter your document ID"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="docType">
            Document Type
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type="text"
            id="docType"
            placeholder="Enter your document Type"
          />
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="org">
            Organization
          </label>
          <input
            className="border rounded-md w-full py-2 px-3"
            type="text"
            id="org"
            placeholder="Enter name of Organization"
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
        {/* link it  */}
        <Link to="/Loadingpage" >
                <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer"
          onClick={verify}
        >

          Verify
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Verification;
