"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 sm:px-12 md:px-16 lg:px-20 mt-20 md:mt-32 lg:mt-40 w-full z-[20] gap-10"
    >
      {/* Left Section */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0 flex items-center gap-2 rounded-md"
        >
          <SparklesIcon className="text-[#b49bff] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] sm:text-[15px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Shree
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Next-Gen{" "}
            </span>
            Full Stack Developer
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-5 max-w-[600px] mx-auto lg:mx-0"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        {/* Download Resume Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="/K_ShreeRam_Resume(1).docx" // place your resume file inside public/ folder
          download="ShreeRam_Resume.docx"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={500}
          width={500}
          className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[550px] xl:w-[650px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
