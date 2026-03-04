import React from "react";
import { skillsData } from "../data/data.jsx";
import { motion } from "framer-motion";

function Experience() {
  // Extract the two categories
  const technologies = skillsData.find(x => x.title.toLowerCase().includes("technologies"));
  const tools = skillsData.find(x => x.title.toLowerCase().includes("tools"));

  return (
    <section id="Experience" className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]">
      <div className="container mx-auto">

        {/* Main Title */}
        <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          Experience
        </h2>

        <p className="text-gray-500 text-center text-lg mb-14">
          Technologies and Tools I Work With
        </p>

        {/* ------------------------- TECHNOLOGIES ------------------------- */}
        <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
          Technologies
        </h3>

        <div className="grid sm:grid-cols- md:grid-cols-6 gap-30 mb-18">
          {technologies.skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.06,
                border: "1px solid oklch(77.7%, 0.152 181.912)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="w-46 h-46 bg-white/10 backdrop-blur-md text-gray-300 
                         rounded-xl border border-white/10 flex flex-col 
                         items-center justify-center gap-4 shadow-md"
            >
              <div className="text-7xl">{skill.icon}</div>
              <span className="text-md font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        {/* ------------------------- TOOLS ------------------------- */}
        <h3 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
          Tools
        </h3>

        <div className="grid  sm:grid-cols-3  md:grid-cols-5 gap-30 mb-18">
          {tools.skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateX: 6,
                rotateY: -6,
                scale: 1.06,
                border: "1px solid oklch(77.7%, 0.152 181.912)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              className="w-46 h-46 bg-white/10 backdrop-blur-md text-gray-300 
                         rounded-xl border border-white/10 flex flex-col 
                         items-center justify-center gap-5 shadow-md"
            >
              <div className="text-6xl">{skill.icon}</div>
              <span className="text-md font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
