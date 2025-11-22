import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Qualification from "./components/Qualification";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
      <Qualification/>
      <Portfolio/>
      <Contact/>
    </>
  );
};

export default App; // ✅ fixed export
