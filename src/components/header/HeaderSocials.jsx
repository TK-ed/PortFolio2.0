import React from "react";
import "./header.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiInstagram, SiLeetcode } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/tharun-kumar-783911250/"
        title="LinkedIn"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/TK-ed" title="GitHub" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.instagram.com/gaming_geek_11/"
        title="Instagram"
        target="_blank"
      >
        <SiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
