import React from "react";
import logo1 from "../../images/logo1.svg";
import logo2 from "../../images/logo2.svg";

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
          </div>
          <div className="header-nav">
            <a href="#">ABOUT</a>
            <a href="#">SERVICES</a>
            <a href="#">TECHNOLOGIES</a>
            <a href="#">HOW TO</a>
          </div>
          <div className="btn">
            <button className="btn1">CONTACT US</button>
            <button className="btn2">JOIN HYDRA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
