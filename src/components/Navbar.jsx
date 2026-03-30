import React, { Fragment, useState, useEffect } from "react";
import { navItems } from "../data/data";
import { HiMenu, HiX } from "react-icons/hi"; // Hamburger & Close icons

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
          {/* Logo */}
          <div className="text-3xl font-extrabold text-outline-white">
            Pramudi Walakuluarachchi
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-10 text-white/40 text-base font-bold uppercase tracking-wide">
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

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl focus:outline-none"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
       {menuOpen && (
  <div
    className="md:hidden bg-[#011914]/90 backdrop-blur-sm absolute top-full left-0 w-full py-4
               transition-all duration-300 ease-in-out opacity-100 transform translate-y-0"
  >
    <ul className="flex flex-col space-y-4 text-center text-white/90 font-bold uppercase">
      {navItems.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            const section = document.getElementById(item.id);
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false); // Close menu after click
            }
          }}
          className={`hover:text-teal-200 transition-all duration-300 cursor-pointer ${
            activeSection === item.id ? "text-teal-200" : ""
          }`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  </div>
)}
      </nav>
    </Fragment>
  );
};

export default Navbar;