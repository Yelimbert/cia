import React from "react";
import '../styles/styles.css';
import logoIntec from '../intec_logoT.png';
import logoIntecGrande from '../intecImg.jpg';

const LoginScreen = () => {
  return (
    <div className="main_container">
      <div className="main_image_container">
        <img className="imagenGrande" src={logoIntecGrande} alt="" />
      </div>
      <div className="login_container">
        <div className="image-container">
          <img src={logoIntec} className="intec_logo" alt="" />
        </div>
        <input type="email" className="input_email" placeholder="  ID" />
        <input type="password" className="input_email" placeholder="  Password" />
        <button type="button" className="login_button">Log In</button>
        <button type="button"  className="signup_button">Sign Up</button>
      </div>
    </div>
  );
}

export default LoginScreen