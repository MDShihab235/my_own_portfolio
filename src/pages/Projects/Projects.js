import React from "react";
import "./Projects.css";
import Navbar from "../../components/Navbar/Navbar";
import project from "../../assets/project/project.jpg";
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
              <img src={project} alt="project" />
              <h2>Ecommerce Website</h2>
            </div>
            <div className="iconSec">
              <img src={github} alt="github" />
              <img src={link} alt="link" />
            </div>
          </div>
          <div className="projectCard">
            <div className="project">
              <img src={project} alt="project" />
              <h2>Ecommerce Website</h2>
            </div>
            <div className="iconSec">
              <img src={github} alt="github" />
              <img src={link} alt="link" />
            </div>
          </div>
          <div className="projectCard">
            <div className="project">
              <img src={project} alt="project" />
              <h2>Ecommerce Website</h2>
            </div>
            <div className="iconSec">
              <img src={github} alt="github" />
              <img src={link} alt="link" />
            </div>
          </div>
          <div className="projectCard">
            <div className="project">
              <img src={project} alt="project" />
              <h2>Ecommerce Website</h2>
            </div>
            <div className="iconSec">
              <img src={github} alt="github" />
              <img src={link} alt="link" />
            </div>
          </div>
          <div className="projectCard">
            <div className="project">
              <img src={project} alt="project" />
              <h2>Ecommerce Website</h2>
            </div>
            <div className="iconSec">
              <img src={github} alt="github" />
              <img src={link} alt="link" />
            </div>
          </div>
          <div className="projectCard">
            <div className="project">
              <img src={project} alt="project" />
              <h2>Ecommerce Website</h2>
            </div>
            <div className="iconSec">
              <img src={github} alt="github" />
              <img src={link} alt="link" />
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
