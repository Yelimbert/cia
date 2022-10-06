import React from "react";
import '../styles/styles.css';
import logoIntec from '../intec_logoT.png';
import logoIntecGrande from '../intecImg.jpg';
import { useState } from 'react';
import Axios from 'axios';

const LoginScreen = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const login = () => {
    Axios.post("http://localhost:5000/", {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="main_container">
      <div className="main_image_container">
        <img className="imagenGrande" src={logoIntecGrande} alt="" />
      </div>
      <div className="login_container">
        <div className="image-container">
          <img src={logoIntec} className="intec_logo" alt="" />
        </div>
        <input type="email" className="input_email" placeholder="  ID" 
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input type="password" className="input_email" placeholder="  Password" 
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="button" className="login_button" onClick={login}>Log In</button>
        <button type="button"  className="signup_button">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginScreen