import React from "react";
import '../styles/styles.css';
import logoIntec from '../intec_logoT.png';
import logoIntecGrande from '../intecImg.jpg';
import { useState } from 'react';

const LoginScreen = () => {

  const[credentials, setcredentials] = useState({
    username:"",
    password:"",
  })


  const login = async () => {
    const answer = await fetch("/login")
    const answerJson = await answer.json()
    console.log(answerJson);
  }


 
  return (
    <div className="main_container">
      <div className="main_image_container">
        <img className="imagenGrande" src={logoIntecGrande} alt="" />
      </div>
      <div className="login_container">
        <div className="image-container">
          <img src={logoIntec} className="intec_logo" alt="" />
        </div>
        <input type="email" className="input_email" placeholder="ID" 
          onChange={(e) => {
            setcredentials({
              ...credentials,
              username: e.target.value
            });
          }}
        id="username" />
        <input type="password" className="input_email" placeholder="Password" 
          onChange={(e) => {
            setcredentials({
              ...credentials,
              password: e.target.value
            });
          }}
        id="password"/>
        <button type="button" className="login_button" onClick={login}>Log In</button>
        <button type="button" className="signup_button">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginScreen;