import React from "react";
import "./SocialMedia.css";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const SocialMedia = () => {
  return (
    <div className="socialMedia">
      <div className="line"></div>
      <a
        href="https://www.facebook.com/mohammad.shihab.uddin.11"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="facebook" />
      </a>
      <a href="https://github.com/MDShihab235" target="_blank" rel="noreferrer">
        <img src={github} alt="github" />
      </a>
      <a
        href="https://www.instagram.com/mohammad_shihab_uddin/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} alt="instagram" />
      </a>
      <a
        href="https://www.linkedin.com/in/mohammad-shihab-uddin-11a051203/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="linkedin" />
      </a>
      <a
        href="https://twitter.com/Md_Shihab101"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} alt="twitter" />
      </a>

      <div className="line"></div>
    </div>
  );
};

export default SocialMedia;
