import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="contact-footer w-2/5 h-full flex flex-col text-yellow text-3xl font-semibold items-center justify-center text-white">
          <div className="h-full flex flex-col text-yellow text-3xl font-semibold items-center justify-center pb-6">
            <h1 className="text-5xl font-bold pb-9">Get in touch.</h1>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://twitter.com/VARN_03" target="_blank" >Twitter
              <FaXTwitter fontSize={21} color="#fff" />
              </a>
            </div>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://www.instagram.com/aryaman__pathak?igsh=MXR6bGlkMWxnZDgxOQ==" target="_blank">Instagram
              <BsInstagram fontSize={21} color="#fff" />
              </a>
              
            </div>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://www.facebook.com/infin8.iiitb/" target="_blank">Facebook
              <FaFacebook fontSize={21} color="#fff" /></a>
            </div>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://www.linkedin.com/in/varnit-mittal-44a904254/" target="_blank">LinkedIn
              <FaLinkedin fontSize={21} color="#fff" /></a>
            </div>
          </div>
        </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@doxle.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@Doxle2024</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;