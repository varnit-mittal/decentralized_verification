import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from "../components"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import logo from '../../images/logo.png';
const SignupPage = () => {
  const handleSignupOrganization = () => {
    // Handle signup for organization
    console.log('Signup as Organization');
  };

  const handleSignupUser = () => {
    // Handle signup for user
    console.log('Signup as User');
  };

  return (
    <>
   
    <div className="gradient-bg-welcome relative h-screen flex flex-col justify-center items-center">
    
        <div className="md:flex-[0.5] flex-initial justify-center items-center absolute top-0 left-80">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
 
    <Link to="/Organizationsignup" >
      <button
        className="bg-blue-500 text-white py-5 px-12 rounded-full cursor-pointer"
        onClick={handleSignupOrganization}
      >
        Signup as Organization
      </button>
        </Link>


<Link to="/Usersignup" >
      <button
        className="mt-10 bg-blue-500 text-white py-5 px-12 rounded-full cursor-pointer"
        onClick={handleSignupUser}
      >
        Signup as User
      </button>
        </Link>
    </div>
    </>
  );
};

export default SignupPage;
