import React from "react";
import Email from "../../components/Email/Email";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import "./About.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div>
          <SocialMedia />
        </div>
        <div className="aboutContent">
          <div className="aboutHead">
            <h1>Experience</h1>
            <div className="eline"></div>
          </div>

          <p>
            I am working and building myself as a MERN (MongoDB, Express.js,
            React.js, Node.js) stack web developer with around 3-year experience
            in web development and working on many client-ready projects. I have
            worked with web design and responsiveness, and am familiar with
            server-side languages and development with production-ready
            projects, and trying to be a full-stack web developer or a software
            engineer.
          </p>
          <div className="aboutButtons" style={{ padding: "10px 0px" }}>
            <a
              href="https://drive.google.com/uc?export=download&id=1IIokWlPCtkl1rqxPrKyYsi-u1GTBPRhI"
              download="Mohammad-Shihab-Uddin-Resume"
              className="navBtn"
            >
              Download Resume
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1jNWDdnZkWuPh7AONbOiqZWQvODQVfLZb"
              download="Mohammad-Shihab-Certification"
              className="navBtn"
              style={{ marginLeft: "20px" }}
            >
              Technical Certification
            </a>
          </div>

          <div className="aboutHead">
            <h1>Skills</h1>
            <div className="sline"></div>
          </div>
          <div className="skills">
            <div className="skillSet">
              <div className="skill">
                <p>HTML</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "145px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>CSS</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "140px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>JavaScript</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "145px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>TypeScript</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "95px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Python</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "50px" }}></div>
                </div>
              </div>
            </div>
            <div className="midLine"></div>
            <div className="skillSet">
              <div className="skill">
                <p>React.js</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "146px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>MongoDB</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "130px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Next.js</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "140px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Redux</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "135px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Bootstrap</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "145px" }}></div>
                </div>
              </div>
            </div>
            <div className="midLine"></div>
            <div className="skillSet last">
              <div className="skill">
                <p>Material UI</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "135px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Firebase</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "120px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Tailwind CSS</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "90px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>MySQL</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "30px" }}></div>
                </div>
              </div>
              <div className="skill">
                <p>Java</p>
                <div className="progParent">
                  <div className="progChild" style={{ width: "20px" }}></div>
                </div>
              </div>
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

export default About;
