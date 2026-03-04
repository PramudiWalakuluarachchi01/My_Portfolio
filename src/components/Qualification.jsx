import React from "react";
import { qualification } from "../data/data.jsx";

function Qualification() {
  return (
    <section
      id="Qualification"
      className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          Qualification
        </h2>
        <p className="text-gray-500 text-center text-lg mb-14">
          My educational achievements and certifications
        </p>

        <div className="flex justify-center">
          {/* Timeline Container */}
          <div className="relative border-l border-gray-600 ml-4">
            {qualification.map((item, index) => (
              <div key={index} className="mb-12 ml-6">
                {/* Small circle */}
                <span className="absolute -left-[9px] mt-1 w-4 h-4 bg-gray-300 rounded-full border border-gray-500"></span>

                {/* Year */}
                <p className="text-sm text-gray-400 mb-1">{item.duration}</p>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-200">
                  {item.degree}
                </h3>

                {/* Institute */}
                <p className="text-gray-400 text-sm">{item.university}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualification;
