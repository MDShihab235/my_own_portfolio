import React from "react";
import "./Projects.css";
import Navbar from "../../components/Navbar/Navbar";
import scrap from "../../assets/project/scrap.png";
import sales from "../../assets/project/sales.png";
import expense from "../../assets/project/expense.png";
import github from "../../assets/github.svg";
import link from "../../assets/link.svg";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import Email from "../../components/Email/Email";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects">
        <div>
          <SocialMedia />
        </div>
        <div className="cards">
          <div className="projectCard">
            <div className="project">
              <a
                href="https://scrap-into-creative-backend.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={scrap} alt="project" />
              </a>
              <h2>Creative Scrap Shop</h2>
            </div>
            <div className="iconSec">
              <a
                href="https://github.com/MDShihab235/scrap-into-creative"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://scrap-into-creative-backend.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={link} alt="link" />
              </a>
            </div>
          </div>
          <div className="projectCard">
            <div className="project">
              <a
                href="https://ecommerce-sales-admin-dashboard-frontend.onrender.com/dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <img src={sales} alt="project" />
              </a>
              <h2>Ecommerce Sales Dashboard</h2>
            </div>
            <div className="iconSec">
              <a
                href="https://github.com/MDShihab235/eCommerce-sales-dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://ecommerce-sales-admin-dashboard-frontend.onrender.com/dashboard"
                target="_blank"
                rel="noreferrer"
              >
                <img src={link} alt="link" />
              </a>
            </div>
          </div>
          <div className="projectCard">
            <div className="project">
              <a
                href="https://expense-tracker-app-3ygs.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={expense} alt="project" />
              </a>
              <h2>Expense Tracker app</h2>
            </div>
            <div className="iconSec">
              <a
                href="https://github.com/MDShihab235/expense-tracker"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://expense-tracker-app-3ygs.onrender.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={link} alt="link" />
              </a>
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

export default Projects;
