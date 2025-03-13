import React from "react";
import Navbar from "./Components/Navbar";
import Contacts from "./Components/Contacts";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Achievements from "./Components/Achievements";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#121212] w-full min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="achievements">
        <Achievements />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contacts">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
