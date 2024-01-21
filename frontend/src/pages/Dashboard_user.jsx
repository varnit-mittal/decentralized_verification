import React from 'react';
import { Navbar, Welcome, Footer, Services, Transactions } from "../components"

import './Dashboard_user.css';

const Dashboard_user = ({  }) => {
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
      <h3 className="text-4xl mb-2  font-bold absolute top-[350px] left-[800px]     text-white">Added Documents:</h3>
      <div className="text-left text-2xl absolute bottom-[200px] flex justify-between text-black ">
  <div className="card ">Document 1</div>
  <div className="card">Document 2</div>
  <div className="card">Document 3</div>
</div>

    </div>
  );
};

export default Dashboard_user;
