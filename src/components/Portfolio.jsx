import React from "react";
import { portfolioItems } from "../data/data.jsx";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-400">
          Portfolio
        </h2>
        <p className="text-gray-500 text-center text-lg mb-10">
          Explore some of my featured projects below
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 w-200 h-220 justify-center gap-x-40 gap-y-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform"
            >
              <div className="p-4">
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                <p className="text-slate-400 mt-1">{item.category}</p>
              </div>
              <div className="h-48 w-full flex justify-center items-center bg-black/10">
                <img
                  src={item.image}
                  className="w-full h-full object-contain"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
