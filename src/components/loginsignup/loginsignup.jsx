import React from 'react'
import './LoginSignup.css'
import email_icon from '../assets/email.png';
import user_icon from '../assets/person.png';
import password_icon from '../assets/password.png'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginSignup=()=>{
    const [action,setAction]=useState("Sign Up");
    const navigate=useNavigate();
    const handleSubmit=()=> {
        navigate('/todolist');
      };
    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
             {action==="Sign Up"?  <div><div className={action==="Login"?"submit gray":"submit"} onClick={handleSubmit}>Sign Up</div>
             <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div></div> :<div className="forgot-password">Lost Password? <span>Click Here!</span> <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={handleSubmit}>Sign Up</div>
                
                </div></div>}
           
           </div>
    )
}
export default LoginSignup