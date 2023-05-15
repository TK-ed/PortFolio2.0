import React from "react";
import "./about.css";
import { BsCodeSlash } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1688/1688400.png"
              alt="About Me"
            />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Academics</h5>
              <small>8.49 Average CGPA</small>
            </article>

            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Codeability</h5>
              <small>10k+ lines of code</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>6+ Projects Completed</small>
            </article>
          </div>

          <p>
            I am Tharun Kumar, a Pre-Final year devoted student with aspirations
            of becoming a prosperous developer. A dedicated backend developer
            that is also skilled in creating the user interface for web
            applications. An avid user of blockchain technology and an excellent
            team player with attention to detail.
            <br></br>
            <br></br>
            <h3>"Developer: An organism that turns coffee into code."</h3>
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
