import React, { useState } from "react";
import Logo from "../../assets/Logo/high-resolution-PNG.png";
import { BsLightningCharge } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";
import { FiLogIn } from "react-icons/fi";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "./Navbar.css";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleNavMenu = () => {
    return setIsNavShowing((prev) => !prev);
  };

  return (
    <nav>
      <div className="container navbar__container">
        <NavLink to="/AI-audits/" className="logo">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <ul className={`menu__item ${isNavShowing && "show"}`}>
          <li>
            <HashLink
              className="nav__link"
              to="/AI-audits/#how__it__work"
              smooth
            >
              How it works
            </HashLink>
          </li>
          <li>
            <HashLink className="nav__link" to="/AI-audits/#pricing" smooth>
              Pricing
            </HashLink>
          </li>
          <li>
            <HashLink className="nav__link" to="/AI-audits/#FAQ" smooth>
              FAQ
            </HashLink>
          </li>
          <li>
            <NavLink
              to="/AI-audits/ai-content-detector-plugin"
              className="nav__link"
            >
              Wordpress Plugin
            </NavLink>
          </li>
          <li>
            <NavLink to="/AI-audits/contact" className="nav__link">
              Contact us
            </NavLink>
          </li>

          <button className="nav__btn">
            <BsLightningCharge /> Get started free
          </button>
        </ul>

        <div className="right__menu__item">
          <div className="right__icon">
            <HiLanguage />
          </div>
          <div className="right__icon">
            <FiLogIn />
          </div>
          <button className="nav__btn">
            <BsLightningCharge /> Get started free
          </button>

          <div className="menu__icon" onClick={handleNavMenu}>
            {isNavShowing ? <MdClose /> : <CgMenuRightAlt />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
