import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Experience/>
    </>
  );
};

export default App; // ✅ fixed export
