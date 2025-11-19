import React from "react";
import { portfolioItems } from "../data/data.jsx";

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          Portfolio
        </h2>
        <p className="text-gray-500 text-center text-lg mb-10">
          Explore some of my featured projects below.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item,index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover: -translate transition-transform ">
            <div className="h-48 overflow-hidden"><div className="p-5">
                <h3 className="font-semibold text-lg text-white">{item.title}</h3>
                <p className="text-slate-400 kt-2">{item.category}</p>
              </div>
              <img src={item.img} className="w-full h-full object-cover transition-transform hover:scale-105"
              alt=""
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
