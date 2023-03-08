import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import portfolio from "../../assets/portfolio.png";
import Email from "../../components/Email/Email";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <div>
          <SocialMedia />
        </div>
        <div className="homeContent">
          <div>
            <h1>Hi I'm Mohammad Shihab Uddin</h1>
            <p>
              I'm a web developer with front-end expertise. I am building <br />
              so many projects using the MERN stack.
              <br />I am learning and building myself as a Full-stack developer.
            </p>
            <div className="homeBtns">
              <button className="btn kbtn">Know More</button>
              <Link to="/contact">
                <button className="btn cbtn">Contact Me</button>
              </Link>
            </div>
          </div>
          <div className="profileImg">
            <img src={portfolio} alt="portfolio" />
          </div>
        </div>
        <div>
          <Email />
        </div>
      </div>
    </div>
  );
};

export default Home;
