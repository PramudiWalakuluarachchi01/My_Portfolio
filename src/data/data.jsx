import React, { useState, useEffect } from "react";

import {
  FaAngular,
  FaBootstrap,
  FaCss3Alt,
  FaFacebook,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { ImInstagram } from "react-icons/im";
import { MdEmail, MdOutlineSettingsApplications } from "react-icons/md";
import { PiPhone } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";
import bone_care_01 from "../assets/images/bone_care_01.png";
import bone_care_02 from "../assets/images/bone_care_02.png";
import bone_care_03 from "../assets/images/bone_care_03.png";
import travel_app_01 from "../assets/images/travel_app_01.png";
import shop_app_01 from "../assets/images/shop_app_01.png";
import weather_app_01 from "../assets/images/weather_app_01.png";
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostgresql,
  SiPostman,
  SiRedux,
  SiSpring,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  GiMaterialsScience,
  GiNorthStarShuriken,
  GiSandsOfTime,
} from "react-icons/gi";
import { DiDart, DiJava, DiPython, DiVisualstudio } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";

export const skillsData = [
  {
        title: "Technologies",

    skills: [
      { name: "Dart", icon: <DiDart className="text-blue-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
      { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="text-teal-400" />,
      },
      { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
      { name: "Node JS", icon: <FaNodeJs className="text-green-400" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },

    ],
  },
 
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: <DiVisualstudio className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    ],
  },
];

// Navigation data
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "Experience", label: "Experience" },
    { id: "Qualification", label: "Qualification" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

// Testimonials data
export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart",
    content:
      '"Imam delivered exceptional work on our website redesign. His attention to detail and communication throughout the project was impressive."',
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Michael Chen",
    position: "Product Manager, InnovateCo",
    content:
      '"Working with Imam was a great experience. He transformed our complex requirements into a beautiful, user-friendly interface."',
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "David Wilson",
    position: "Founder, StartupHub",
    content:
      '"Imam\'s technical skills and creative design solutions helped us create an engaging platform that our users love. Highly recommended!"',
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

// Portfolio data
export const portfolioItems = [
  {
    title: "BoneCare",
    category: "Mobile Application",
    skills: ["Flutter", "Dart", "Node.js,MySQL,Python & PyTorch,Flask"],
    images: [
      bone_care_01,
      bone_care_02,
      bone_care_03,
      bone_care_03,
    ],
    description: "Bone Care is a healthcare mobile application built with Flutter that helps users monitor bone health and manage physiotherapy. It includes an AI-based X-ray analysis module using a PyTorch deep learning model to detect knee osteoarthritis stages, along with exercise guides, progress tracking, and a social platform. The backend is developed using Node.js, and the AI model is served through a Python Flask API.",
    link: "https://github.com/PramudiWalakuluarachchi01/BoneCare"
  },
  {
   title: "Travel_App",
    category: "Mobile Application",
    skills: ["Flutter", "Dart", "Firebase"],
    images: [travel_app_01],
    description: "A Flutter-based mobile application that allows users to share travel experiences, post places they visit, and interact with other travelers through likes and comments using Firebase backend services.",
    link: "https://github.com/PramudiWalakuluarachchi01/Travel_App"
  },
  {
   title: "Shop_App",
    category: "Mobile Application",
    skills: ["Flutter", "Dart", "Firebase"],
    images: [shop_app_01],
    description: "A Flutter-based e-commerce mobile application that allows users to browse a collection of shoes, filter products by brand, search items, view product details, select sizes, and add items to a shopping cart. The app uses Provider for state management to handle cart operations and provides a clean and responsive shopping interface.",
    link: "https://github.com/PramudiWalakuluarachchi01/Shop_App"
  },
   {
   title: "Weather_App",
    category: "Mobile Application",
    skills: ["Flutter", "Dart", "OpenWeatherMap API"],
    images: [weather_app_01],
    description: " A Flutter mobile app that shows real-time weather and hourly forecasts using the OpenWeather API. Features include temperature, sky conditions, humidity, wind speed, and pressure, with a clean and responsive UI.",
    link: "https://github.com/PramudiWalakuluarachchi01/Weather_Application"
  },
];
export const experiences = [
  {
    id: 1,
    company: "Webverse Digital",
    logo: <GiSandsOfTime/>, // replace with actual logo
    title: "Fullstack Developer",
    period: "April 2024 - Present",
    description:
      "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Next JS",
    ],
  },
  {
    id: 2,
    company: "Agumentik Group of Companies",
    logo: <IoIosStarOutline />, // replace with actual logo
    title: "Fullstack Engineer",
    period: "July 2023 - March 2024",
    description:
      "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using modern technologies.",
    skills: ["React JS", "Node JS", "Express", "MongoDB"],
  },
];

export const qualification = [
  {
    id: 1,
    duration: "2024 - 2025 (Completed)",
    degree: "B.Sc. (Hons) in Software Engineering",
    university: "University of Bedfordshire (SLIIT CITY UNI)",
  },
  {
    id: 2,
    duration: "2021 - 2024 (Completed)",
    degree: "Higher Diploma in Information Technology",
    university: "SLIIT CITY UNI",
}
];
export const Contact = [
  {
    id: 1,
    linkedin: "www.linkedin.com/in/pramudi-walakuluarachchi-45988026a",
  },
  {
    id: 2,
    github: "www.github.com/PramudiWalakuluarachchi01",
  },
  {
    id: 3,
    email: "pramudinethmini01@gmail.com",
}
];