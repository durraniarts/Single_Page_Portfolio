import React, { useEffect, useRef, useState } from "react";
import LinearGradient from "./LinearGradient";
import { motion, useInView } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 769px)");

  const overlayStyles = `absolute hover:scale-105
  h-full w-full bg-grey opacity-0 hover:opacity-90 
  transition duration-500 delay-100  z-30 
    flex flex-col justify-center items-center text-center
     p-10 text-deep-blue`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  const imageUrl = new URL(`../assets/${projectTitle}.png`, import.meta.url);
  // console.log(imageUrl);
  return (
    <motion.div variants={projectVariant} className={"relative "}>
      <div className={overlayStyles}>
        <p className=" text-xl  font-playfair  ">{title}</p>
        <p className=" mt-4 text-base">{subtitle}</p>
      </div>
      <img
        src={imageUrl}
        className=" min-h-[150px] xs:min-h-[200px] w-auto"
        alt={projectTitle}
      />
    </motion.div>
  );
};

const Projects = ({ setSelectedPage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    isInView && setSelectedPage("projects");
  }, [isInView]);

  return (
    <section id="projects" className="py-48">
      {/* headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className=" flex flex-col justify-center items-center">
          <p className=" font-playfair font-semibold text-3xl  xs:text-4xl mb-5  ">
            <span className="text-red">PRO</span>JECTS
          </p>
          <LinearGradient width={"w-2/3"} />
        </div>

        <p className=" mt-10 mb-10">
          Some of my personal projects i have been working since I started my
          journey with software development.
        </p>
      </motion.div>

      {/* projects */}
      <div className=" flex justify-center  ">
        <motion.div
          className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 "
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0 }}
        >
          <div
            ref={ref}
            className="   flex justify-center text-center items-center p-6 md:p-10 bg-red  max-h-[400px] text-xl md:text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title={"Project 1"}
            subtitle={"GPT-3 website landing page. Using React.js, CSS."}
          />
          <Project
            title={"Project 2"}
            subtitle={"GERICHT restaurant webpage. Using React.js, CSS."}
          />

          <Project
            title={"Project 3"}
            subtitle={
              "Fylo cloud base company main landing page. Using React.js, CSS."
            }
          />
          <Project
            title={"Project 4"}
            subtitle={
              "Dall-e an AI image generation Web Application. Using MERN, Tailwind CSS, OPEN-AI API."
            }
          />
          <Project
            title={"Project 5"}
            subtitle={
              "TourMonkey a tour guide application main page. Using React.js, MUI. "
            }
          />

          <Project
            title={"Project 6"}
            subtitle={
              "YouTube clone Web Application. Using React.js, MUI, Rapid-API."
            }
          />
          <Project
            title={"Project 7"}
            subtitle={
              "An E-commerce store Frontend. Using React.js, Tailwind CSS."
            }
          />
          <Project
            title={"Project 8"}
            subtitle={"Blogr website main landing page. Using HTML, CSS."}
          />

          <Project
            title={"Project 9"}
            subtitle={
              "AI generated prompt without OpenAI API integration. Using Next.js, Tailwind CSS, MongoDB, NextAuth."
            }
          />
          {/* <div className="   flex justify-center text-center items-center min-h-[180px]  p-6 md:p-10 bg-blue max-w-[400px] max-h-[400px] text-xl md:text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
