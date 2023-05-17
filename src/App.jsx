import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Stats from "./components/stats/stats"
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import NotificationContainer from "react-notifications/lib/NotificationContainer";
import "react-notifications/lib/notifications.css";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      {/* <Stats /> */}
      <Testimonials />
      <Contact />
      <Footer />
      <NotificationContainer />
    </div>
  );
};

export default App;
