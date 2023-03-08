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
                The Critical Rendering Path is the sequence of steps the browser
                goes through to convert the HTML, CSS, and JavaScript into
                pixels on the screen. Optimizing the critical render path
                improves render performance. The critical rendering path
                includes the Document Object Model (DOM), CSS Object Model
                (CSSOM), render tree and layout. The document object model is
                created as the HTML is parsed. The HTML may request JavaScript,
                which may, in turn, alter the DOM. The HTML includes or makes
                requests for styles, which in turn builds the CSS object model.
                The browser engine combines the two to create the Render Tree.
                Layout determines the size and location of everything on the
                page. Once layout is determined, pixels are painted to the
                screen.
              </p>
              <button className="blogBtn">Learn More</button>
            </div>
          </div>
          <div className="blogCard">
            <div className="blog">
              <img src={blog} alt="blog" />
              <h2>Document Object Model</h2>
              <p>
                DOM construction is incremental. The HTML response turns into
                tokens which turns into nodes which turn into the DOM Tree. A
                single DOM node starts with a startTag token and ends with an
                endTag token. Nodes contain all relevant information about the
                HTML element. The information is described using tokens. Nodes
                are connected into a DOM tree based on token hierarchy. If
                another set of startTag and endTag tokens come between a set of
                startTag and endTags, you have a node inside a node, which is
                how we define the hierarchy of the DOM tree. The greater the
                number of nodes, the longer the following events in the critical
                rendering path will take. Measure! A few extra nodes won't make
                a big difference, but keep in mind that adding many extra nodes
                will impact performance.
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
