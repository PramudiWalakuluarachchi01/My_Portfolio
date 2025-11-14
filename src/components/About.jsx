import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          {" "}
          About
          <span className="text-outline "> me</span>
        </h2>
        <p className="text-gray-500 text-center text-l mb-15 ">
          Get to know more about my background and eperience.
        </p>

        <div className="bg-[#022c2b] backdrop-blur-md rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20 place-items-center text-center">
          <div className="lg:col-span-2 max-w-xl">
            <p className="text-gray-100 text-lg mb-9">
              I'm a passionate Frontend Mobile App Developer who brings ideas to
              life through clean, modern, and intuitive mobile interfaces.
            </p>
            <div className="text-left">
              <p className="text-gray-300 whitespace-pre-line mb-3">
                ✨ Building beautiful app frontends with Flutter
              </p>
              <p className="text-gray-300 whitespace-pre-line mb-3">
                🎨 Crafting smooth UI/UX experiences with a focus on clarity and
                creativity
              </p>
              <p className="text-gray-300 whitespace-pre-line mb-3">
                ⚡ Creating responsive, interactive, and user-friendly screens
              </p>
              <p className="text-gray-300 whitespace-pre-line mb-3">
                📐 Turning wireframes and concepts into polished, pixel-perfect
                designs
              </p>
              <p className="text-gray-300 whitespace-pre-line mb-9">
                🚀 Continuously learning and exploring new ways to improve my
                craft
              </p>
            </div>
            <p className="text-gray-200 text-base mb-2">
              I aim to design experiences that feel natural, look stunning, and
              make a real impact.
            </p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;
