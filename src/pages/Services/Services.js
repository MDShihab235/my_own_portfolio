import React from "react";
import "./Services.css";
import Email from "../../components/Email/Email";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import service from "../../assets/service/service.jpg";

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
              <img src={service} alt="service" />
              <h2>Web Development</h2>
              <p>
                Lorem ipsum dolor sit amet. Ut iure dolorem et nulla ratione in
                consequatur illo 33 amet impedit. Vel laudantium dolor qui
                consequatur omnis et officiis possimus in fuga excepturi et
                eveniet quasi vel modi autem. Qui aspernatur corrupti ut
                delectus quod ex sint amet.
              </p>
              <button className="serviceBtn">Contact</button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="service">
              <img src={service} alt="service" />
              <h2>Web Design</h2>
              <p>
                Lorem ipsum dolor sit amet. Ut iure dolorem et nulla ratione in
                consequatur illo 33 amet impedit. Vel laudantium dolor qui
                consequatur omnis et officiis possimus in fuga excepturi et
                eveniet quasi vel modi autem. Qui aspernatur corrupti ut
                delectus quod ex sint amet.
              </p>
              <button className="serviceBtn">Contact</button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="service">
              <img src={service} alt="service" />
              <h2>Ecommerce Website</h2>
              <p>
                Lorem ipsum dolor sit amet. Ut iure dolorem et nulla ratione in
                consequatur illo 33 amet impedit. Vel laudantium dolor qui
                consequatur omnis et officiis possimus in fuga excepturi et
                eveniet quasi vel modi autem. Qui aspernatur corrupti ut
                delectus quod ex sint amet.
              </p>
              <button className="serviceBtn">Contact</button>
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
