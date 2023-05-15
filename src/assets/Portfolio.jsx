import React from "react";
import "./portfolio.css";
import img1 from "../../assets/blockchain_img.jpg";
import img3 from "../../assets/Bot.png";
import evote from "../../assets/evote.png";
import login from "../../assets/LoginBackend.png";
import img6 from "../../assets/GuessWhat.png";
import TodoBlockchain from "../../assets/TodoBlockchain.png";

const data = [
  {
    id: 1,
    image: img1,
    title: "DeFund: Decentralized Crowdfunding",
    github: "https://github.com/TK-ed/Web3.0-dApp",
    demo: "https://defund.netlify.app/",
  },
  {
    id: 2,
    image: img6,
    title: "Guess What - A Fun and Simple Guessing Game",
    github: "https://github.com/TK-ed/Guess-What",
    demo: "https://guesswhamt.netlify.app",
  },
  {
    id: 3,
    image: evote,
    title: "DeVote: Decentralized Voting Platform",
    github: "https://github.com/TK-ed/dE-Vote",
    demo: "https://github.com/TK-ed/dE-Vote",
  },
  {
    id: 4,
    image: TodoBlockchain,
    title: "TodoBLOCKCHAIN",
    github: "https://github.com/TK-ed/TodoList_BLOCKCHAIN",
    demo: "https://remix.ethereum.org",
  },
  {
    id: 5,
    image: img3,
    title: "jeSUS",
    github: "https://github.com/TK-ed/jeSUS",
    demo: "https://discord.com/channels/@Tharun#7991",
  },
  {
    id: 6,
    image: login,
    title: "Login Backend using Nodejs",
    github:
      "https://github.com/TK-ed/Social-Media-Backend/tree/master/Server/controllers/auth",
    demo: "https://github.com/TK-ed/Social-Media-Backend/tree/master/Server/controllers/auth",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Full-stack Login page</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  GitHub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
