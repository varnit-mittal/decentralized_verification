/* eslint-disable no-unused-vars */
// import { ethers } from 'ethers'
import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { ethers } from 'ethers';
import OrgAbi from '../../abi/organization.json'

const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
const RPC=import.meta.env.VITE_RPC;
const ORGADDR=import.meta.env.VITE_ORG;
const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome=()=>{
  // window.onload = () => {
  //   connectWallet(0);
  // };
  const [walletAddress,setWalletAddress]=useState("");
  const connectWallet = async (x) => {
      if(window.ethereum)
      {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // window.ethereum.enable();
        setWalletAddress(accounts[0]);
        const provider=new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const contract=new ethers.Contract(ORGADDR,OrgAbi,signer);
        const user=await contract.userType(ethers.utils.getAddress(accounts[0])); 
        console.log(user.toNumber());   
        // console.log(ethers.utils.getAddress(accounts[0]))
        // const user=await contract.userType(ethers.utils.getAddress(accounts[0]));
        // console.log(user);

      }
      else if(x)
      {
        if(window.confirm('Please install MetaMask'))
              window.location.assign("https://metamask.io/download/");
      }
      
  }
  return(
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              Document Verification <br /> made easy
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Verification rule - original documents uploaded by authorized organization cannot be manipulated by anyone on the blockchain.
          </p>
          <button type="button" onClick={()=>connectWallet(1)} className="flex flex-row justify-center items-center 
           my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                {walletAddress ? "Wallet Connected": "Connect Wallet"}
              </p>
            </button>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability

            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                {shortenAddress(walletAddress)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome;