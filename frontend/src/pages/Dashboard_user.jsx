import React from 'react';
import { Navbar, Welcome, Footer, Services } from "../components"

import './Dashboard_user.css';

const Dashboard_user = ({ }) => {
  const documents = [];

  return (
    <div className=" relative gradient-bg-welcome w-full h-screen flex flex-col items-center ">
        <div className='absolute top-0 w-full'>
    <Navbar/>
        </div>
      <h2 className="text-5xl mb-4 font-bold absolute top-60 left-40 text-white">
        Hi, Aryaman! 👋
      </h2>
      <div className="mb-8">
        {/* Waving hand emoji */}
      
      </div>
      
      <div className="text-left text-2xl absolute bottom-40 flex justify-between   text-black ">

      <h3 className="text-4xl mb-2  font-bold absolute top-[-30%] left-[30%]   text-white">Added Documents:</h3>
      {documents.map((document, index) => (
            <div key={index} className="card">{document}</div>
          ))}
</div>

    </div>
  );
};

export default Dashboard_user;
