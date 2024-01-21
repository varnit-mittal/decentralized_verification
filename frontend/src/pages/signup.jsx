import React from 'react';
import { Navbar, Welcome, Footer, Services} from "../components"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

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
        <div className='absolute top-0 w-full'>
    <Navbar/>
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
