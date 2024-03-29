import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.png";
import { HashLink } from 'react-router-hash-link';

const NavBarItem = ({ title, classprops,link }) => (
  <Link to={link}>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}>{title}</li>
  </Link>
);

const Navbar = ({ value }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
        
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <Link to="/" >
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      
      

      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      <Link to='/'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}>Home</li>
  </Link>
  <HashLink smooth to='//#wwd'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}>What we do?</li>
  </HashLink>
  <Link to='/Verification'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}> Verify</li>
  </Link>
  <HashLink smooth to='//#wwd'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}> Contact us</li>
  </HashLink>
        {/* Conditionally render Signup button based on the 'value' prop */}
        {value && (
          <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
            <Link to="/Signup" className="text-white">
              Signup
            </Link>
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {/* {["Home", "What we do?", "Verify", "Contact us"].map(
              (item, index) => <NavBarItem key={item + index} title={item}  />,
            )} */}
              <Link to='/'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}Home></li>
  </Link>
  <HashLink smooth to='//#wwd'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}>What we do?</li>
  </HashLink>
  <Link to='/Verification'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}> Verify</li>
  </Link>
  <HashLink smooth to='//#wwd'>
  <li className={`mx-4 cursor-pointer my-2 text-lg `}> Contact us</li>
  </HashLink>

            {/* Conditionally render Signup button in the mobile menu based on the 'value' prop */}
            {value && (
              <li className="my-2 text-lg">
                <Link to="/signup" className="text-white" onClick={() => setToggleMenu(false)}>
                  Signup
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
