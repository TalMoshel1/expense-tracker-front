import React from "react";
import { MdOutlineSavings } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { PiHamburger } from "react-icons/pi";
import './Header.css'
import './IconAnimation.css'


const Header = () => {
  return (
    <header>
      <h1 className="header header-left-padding  h1-font-size h1-width ">
       <div className='dollar' style={{color:'green'}}>$</div> Expanse Tracker
      </h1>
      <div className="icon-container justify-icon-container">
        <PiHamburger className="animated-icon hamburger-fill squash-animation" />
        <span className="side-to-side-animation">
          <MdOutlineSavings className="animated-icon savings-fill" />
        </span>
        <AiOutlineStock className="animated-icon color-change-animation" />
      </div>
    </header>
  );
};

export default Header;
