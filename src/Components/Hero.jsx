import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import  { useEffect } from "react";
import StarIcon from "./StarIcon";


const HeroSection = () => {
  return (
    <motion.section
      className=" w-[80%] max-w-[1400px] mx-auto"
      initial={{ opacity: 0,y:50,  }}
      animate={{opacity:  1,y:0}}
      transition={{ duration: 3, type:"spring" }}>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center">
        <div className="">
          <h1 className="text-white text-4xl lg:text-6xl font-extrabold text-center md:text-left">
            <span className="lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Olivia",
                1000,
                "Web Developer",
                1000,
                "React Developer",
                1000,
                "Freelancer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] max-w-[550px] text-lg md:text-xl py-6 text-center md:text-left">
          Detailed-oriented Front End Developer with years of experience working with HTML, CSS, Javascript,TypeScript, Reactjs ,Nextjs and Git.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
            <Link
              to="/contact"
              className=" w-40 text-center font-semibold px-6 inline-block py-3 sm:w-fit rounded-full  bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white"
            >
              Download CV
            </Link>
            <Link
              to="/"
              className=" text-center font-semibold px-1 inline-block py-1 sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
            >
              <span className="w-40 text-center font-semibold block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Hire me
              </span>
            </Link>
          </div>
        </div>

        <motion.div
      className="relative mx-auto overflow-hidden rounded-xl w-full lg:w-auto"
      animate={{ y: [0, -20, 0], transition: { duration: 3, ease: "linear", repeat: Infinity } }}
    >
      <img
        alt="Image"
        className="w-full h-auto pt-6 md:pt-0"
        width={1200}
        height={450}
        src="/oly.png"
      />
    </motion.div>
      </div>
      <nav className="text-white border-b pt-8 pb-2 font-black">
  <ul className="grid gap-3 grid-cols-2 lg:grid-cols-6 justify-between">
    <li>
      <a className="flex items-start font-bold text-lg md:text-xl" href="#">
        <p>Responsive</p>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg md:text-xl" href="#">
        <span>Cloning</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg md:text-xl" href="#">
        <span>Optimization</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg md:text-xl" href="#">
        <span>Interactive </span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg md:text-xl" href="#">
        <span>Figma Design</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
    <li>
      <a className="flex items-center font-bold text-lg md:text-xl" href="#">
        <span>Web Animations</span>
        <StarIcon className="text-purple-400" />
      </a>
    </li>
  </ul>
</nav>

      </motion.section>
  );
};

export default HeroSection;
    