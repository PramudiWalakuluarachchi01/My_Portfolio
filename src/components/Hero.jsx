import React, { Fragment } from "react";
import AnimatedTitles from "./utils/AnimatedTitles";
import { LiaLinkedin } from "react-icons/lia";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Hero = () => {
  return (
    <Fragment>
      <section
        id="home"
        className="relative min-h-screen flex justify-center items-center 
                   bg-linear-to-b from-teal-900 to-teal-800 
                   pt-16 pb-20 overflow-hidden"
      >
        {/* Wave SVG at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
                 82.39-16.68,168.19-17.16,250.45-.39,
                 C823.78,31.79,906.67,59.71,985,83.45,
                 c70,21.07,140,34.09,215,29.8v7.13H0V27.35,
                 A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#0f766e"
            ></path>
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left">
          <div className="flex-1">
            <h3 className="text-teal-200 text-lg mb-4">Hello,</h3>
            <h1 className="text-white text-5xl font-extrabold font-cursive">
              I'm Pramudi Walakuluarachchi
            </h1>

            <AnimatedTitles />

            <p className="text-teal-100 mt-6 mb-8 max-w-lg mx-auto md:mx-0">
              I'm a passionate front-end developer specializing in creating
              dynamic and beautiful mobile applications. Let's build something
              amazing together!
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full">Projects</span>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-5 text-gray-400 justify-center md:justify-start mt-6">
              <button className="p-3 border border-white rounded-full text-white hover:bg-teal-400 transition-all">
                <FaFacebook />
              </button>
              <button className="p-3 border border-white rounded-full text-white hover:bg-teal-400 transition-all">
                <BsWhatsapp />
              </button>
              <button className="p-3 border border-white rounded-full text-white hover:bg-teal-400 transition-all">
                <LiaLinkedin />
              </button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-1 cursor-pointer text-sm rounded-full bg-linear-to-r from-teal-400 to-teal-700 font-light text-white
                hover:opacity-70 transition-opacity">View my works</button>

                <button className="px-6 py-1 cursor-pointer text-sm rounded-full bg-white/10 backdrop-blur-md font-light text-white
                hover:opacity-70 transition-opacity">Download CV</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
