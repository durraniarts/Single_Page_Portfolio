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

const Project = ({ title }) => {
  const overlayStyles = `absolute
  h-full w-full bg-grey opacity-0 hover:opacity-90 transition duration-500 delay-100  z-30 
    flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  const imageUrl = new URL(`../assets/${projectTitle}.png`, import.meta.url);

  return (
    <motion.div variants={projectVariant} className=" relative  ">
      <div className={overlayStyles}>
        <p className=" text-2xl font-playfair  ">{title}</p>
        <p className=" mt-7">
          loreum ipsum dolor sit amet, consectetur adipiscing elit sed diam
          nonumy euismod tempor
        </p>
      </div>
      <img src={imageUrl} className="h-auto" />
    </motion.div>
  );
};

const Projects = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 769px)");

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log(isInView);
    isInView && setSelectedPage("projects");
  }, [isInView]);
  console.log(isAboveMediumScreens);
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
          Developed Websites and Web Apps using MERN stack, HTML, CSS,
          JavaScript. Built fullstack websites, restful APIs with NodeJs
          ExpressJs.
        </p>
      </motion.div>

      {/* projects */}
      <div className=" flex justify-center  ">
        <motion.div
          className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            ref={ref}
            className="   flex justify-center text-center items-center p-6 md:p-10 bg-red  max-h-[400px] text-xl md:text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <Project title={"Project 1"} />
          <Project title={"Project 2"} />
          <Project title={"Project 3"} />
          <Project title={"Project 4"} />
          <Project title={"Project 5"} />
          <Project title={"Project 6"} />
          <Project title={"Project 7"} />
          <Project title={"Project 8"} />
          {/* <div className="   flex justify-center text-center items-center min-h-[180px]  p-6 md:p-10 bg-blue max-w-[400px] max-h-[400px] text-xl md:text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
