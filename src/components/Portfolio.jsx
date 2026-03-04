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
          Explore some of my featured projects below
        </p>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl border border-white/10 p-6 flex gap-6 hover:scale-[1.02] transition-all"
            >
              {/* IMAGE LEFT */}
              <div className="w-1/3 h-48 bg-black/10 rounded-lg flex justify-center items-center overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-contain"
                  alt={item.title}
                />
              </div>

              {/* CONTENT RIGHT */}
              <div className="w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    {item.description}
                  </p>

                  {/* TECHNOLOGIES */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.skills?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-white/20 text-white rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <div className="mt-4">
                  <a
                    href={item.link}
                    target="_blank"
                    className="px-4 py-3 cursor-pointer bg-linear-to-r from-teal-400 to-teal-600 rounded-md text-sm hover:opacity-70 transition-opacity"
                  > 
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
