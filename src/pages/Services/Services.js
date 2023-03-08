import React from "react";
import "./Services.css";
import Email from "../../components/Email/Email";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import webdesign from "../../assets/service/service.jpg";
import development from "../../assets/service/development.jpg";
import ecommerce from "../../assets/service/ecommerce.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="services">
        <div>
          <SocialMedia />
        </div>
        <div className="cards">
          <div className="serviceCard">
            <div className="service">
              <img src={development} alt="service" />
              <h2>Web Development</h2>
              <p>
                Web development is the work of converting a design or
                specification into a website. Web development is the process of
                creating a website from scratch.
              </p>
              <Link to="/contact">
                <button className="serviceBtn">Contact</button>
              </Link>
            </div>
          </div>
          <div className="serviceCard">
            <div className="service">
              <img src={webdesign} alt="service" />
              <h2>Web Design</h2>
              <p>
                Web design is the process of designing a website for the web. It
                is a process of combining the elements of a website to create a
                functional and attractive website.
              </p>
              <Link to="/contact">
                <button className="serviceBtn">Contact</button>
              </Link>
            </div>
          </div>
          <div className="serviceCard">
            <div className="service">
              <img src={ecommerce} alt="service" />
              <h2>Ecommerce Website</h2>
              <p>
                We are working on full-stack MERN e-commerce web application
                development for your any type of business.
              </p>
              <Link to="/contact">
                <button className="serviceBtn">Contact</button>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Services;
