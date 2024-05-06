import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

// AOS
import aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
