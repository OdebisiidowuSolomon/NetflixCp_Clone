import React from "react";
import Netflixlogo from "./img/netflixlogo.jpg";
import avatar from "./img/avatar.png";
import "./Nav.css";
import { useEffect } from "react";
import { useState } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Netflixlogo} alt="Netflix logo" />
      <img className="nav__avatar" src={avatar} alt="Netflix logo" />
      Nav
    </div>
  );
}

export default Nav;
