import React from "react";
import { BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { LuLinkedin } from "react-icons/lu";
import { Contact as contactLinks } from "../data/data"; // Import your array

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-60 px-4 sm:px-6 bg-linear-to-r from-[#011914] to-[#022c2b]"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-outline-white text-gray-400">
          Let's Connect!
        </h2>

        <p className="text-gray-500 text-center text-lg mb-10">
          Reach out anytime, I’m always open to new opportunities
        </p>

        <div className="mt-8">
          <div className="flex flex-wrap gap-4 justify-center">

            {/* LinkedIn */}
            <a
              href={`https://${contactLinks[0].linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 bg-white/40 backdrop:blur-2xl rounded-full hover:bg-teal-600 border-white/20"
            >
              <LuLinkedin size={24} />
            </a>

            {/* GitHub */}
            <a
              href={`https://${contactLinks[1].github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 bg-white/40 backdrop:blur-2xl rounded-full hover:bg-teal-600 border-white/20"
            >
              <BsGithub size={24} />
            </a>

            {/* Email */}
            <a
              href={`mailto:${contactLinks[2].email}`}
              className="p-4 sm:p-5 bg-white/40 backdrop:blur-2xl rounded-full hover:bg-teal-600 border-white/20"
            >
              <GoMail size={24} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;