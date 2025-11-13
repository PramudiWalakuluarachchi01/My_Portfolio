import React, { Fragment } from "react";
import { navItems } from "../data/data"; // ✅ added import

const Navbar = () => {
  return (
    <Fragment>
      <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-white/20 px-3 transition-all">
        <div className="container mx-auto flex items-center justify-between px-6">
          <div className="text-2xl text-outline font-bold">Corder</div>
        </div>
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>{item.label}</li>
          ))}
        </ul>
<button className="text-white bg-blue-500 px-4 py-2 rounded">Hire me</button>
      </nav>
    </Fragment>
  );
};

export default Navbar;
