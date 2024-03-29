import React, { useEffect, useRef, useState } from "react";
import LinearGradient from "./LinearGradient";
import { motion, useInView } from "framer-motion";
import ImageCard from "./shared/ImageCard";
import DATA from "../constants";

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

const Projects = ({ setSelectedPage }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    isInView && setSelectedPage("projects");
  }, [isInView]);

  return (
    <section id="projects" className="py-48 flex  flex-col items-center">
      {/* headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className=" selected flex flex-col justify-center items-center">
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
      <div className=" flex justify-center py-10  ">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div ref={ref} className=" flex flex-wrap gap-10 justify-center">
            {DATA.projects.map((project, index) => (
              <motion.div variants={projectVariant} key={index}>
                <ImageCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <a
        href="https://github.com/durraniarts/"
        className="mt-10 font-playfair font-black underline underline-offset-4 text-yellow  border border-gray-700 p-2 rounded-md"
      >
        FOR MORE PROJECTS VISIT MY GITHUB ACCOUNT
      </a>
    </section>
  );
};

export default Projects;
