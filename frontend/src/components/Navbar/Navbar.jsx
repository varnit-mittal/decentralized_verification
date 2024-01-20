import React from 'react'
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogin = ()=>{
        navigate('/user')
    }
    const handleSignup =()=>{
        navigate('/signup')
    }
  return (
    <div className='nav'>
        <div className="nav_content">
            <div className="left">
                <ul>
                    <Link to={'/'}><li className='logo'>LOGO</li></Link>
                    <Link to={'/verify'}><li>Verify Identity</li></Link>
                </ul>
            </div>
            <div className="right">
                <div className='login btn' onClick={handleLogin}> Login</div>
                <div className='signup btn' onClick={handleSignup}>Signup</div>
            </div>  
        </div>
    </div>
  )
}

export default Navbar