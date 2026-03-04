import React, { Fragment, useState, useEffect } from "react";
import { navItems } from "../data/data";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Fragment>
      <nav className="fixed bg-transparent top-0 w-full z-50 backdrop-blur-sm border-b border-white/10 transition-all py-5">
        <div className="container mx-auto flex items-center justify-between px-8">
          {/* Logo with white outline */}
          <div className="text-4xl font-extrabold text-outline-white">
            Corder
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-10 text-black text-base font-bold uppercase tracking-wide">
            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  const section = document.getElementById(item.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`hover:text-teal-200 transition-colors cursor-pointer ${
                  activeSection === item.id ? "text-teal-200" : ""
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>

          {/* Hire Me Button */}
          <button className="px-6 py-2 rounded-full ml-4 bg-linear-to-r from-teal-600 to-teal-100 hover:opacity-50 text-black font-bold transition-all">
            Hire Me
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
