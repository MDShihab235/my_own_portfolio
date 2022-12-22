import React from "react";
import Email from "../../components/Email/Email";
import Navbar from "../../components/Navbar/Navbar";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import blog from "../../assets/blog/blog.jpg";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="blogs">
        <div>
          <SocialMedia />
        </div>
        <div className="cards">
          <div className="blogCard">
            <div className="blog">
              <img src={blog} alt="blog" />
              <h2>Critical Rendering Path</h2>
              <p>
                Lorem ipsum dolor sit amet. Ut iure dolorem et nulla ratione in
                consequatur illo 33 amet impedit. Vel laudantium dolor qui
                consequatur omnis et officiis possimus in fuga excepturi et
                eveniet quasi vel modi autem. Qui aspernatur corrupti ut
                delectus quod ex sint amet.
              </p>
              <button className="blogBtn">Learn More</button>
            </div>
          </div>
          <div className="blogCard">
            <div className="blog">
              <img src={blog} alt="blog" />
              <h2>Critical Rendering Path</h2>
              <p>
                Lorem ipsum dolor sit amet. Ut iure dolorem et nulla ratione in
                consequatur illo 33 amet impedit. Vel laudantium dolor qui
                consequatur omnis et officiis possimus in fuga excepturi et
                eveniet quasi vel modi autem. Qui aspernatur corrupti ut
                delectus quod ex sint amet.
              </p>
              <button className="blogBtn">Learn More</button>
            </div>
          </div>
          <div className="blogCard">
            <div className="blog">
              <img src={blog} alt="blog" />
              <h2>Critical Rendering Path</h2>
              <p>
                Lorem ipsum dolor sit amet. Ut iure dolorem et nulla ratione in
                consequatur illo 33 amet impedit. Vel laudantium dolor qui
                consequatur omnis et officiis possimus in fuga excepturi et
                eveniet quasi vel modi autem. Qui aspernatur corrupti ut
                delectus quod ex sint amet.
              </p>
              <button className="blogBtn">Learn More</button>
            </div>
          </div>
          <div className="blogCard">
            <div className="blog">
              <img src={blog} alt="blog" />
              <h2>Critical Rendering Path</h2>
              <p>
                Lorem ipsum dolor sit amet. Ut iure dolorem et nulla ratione in
                consequatur illo 33 amet impedit. Vel laudantium dolor qui
                consequatur omnis et officiis possimus in fuga excepturi et
                eveniet quasi vel modi autem. Qui aspernatur corrupti ut
                delectus quod ex sint amet.
              </p>
              <button className="blogBtn">Learn More</button>
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

export default Blog;
