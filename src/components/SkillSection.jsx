import React, { useRef, useEffect } from "react";
import LinearGradient from "./LinearGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, useInView } from "framer-motion";
import skillsImage from "../assets/skills-image.png";

const SkillSection = ({ setSelectedPage }) => {
  const isAboveMMediumScreens = useMediaQuery("(min-width: 1060px)");
  //   console.log({ pageYOffset });

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log(isInView);
    isInView && setSelectedPage("skills");
  }, [isInView]);

  return (
    <section id="skills" className=" pt-10 pb-24  ">
      {/* header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:basis-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-playfair font-semibold text-3xl  xs:text-4xl mb-5 ">
            My <span className="text-red">SKILLS</span>
          </p>
          <LinearGradient width={"w-1/3"} />

          <p ref={ref} className=" mt-10 mb-7">
            I am a skilled Web Developer with expertise in the MERN stack. My
            focus is on building Websites and Web Apps with exceptional
            functionalities and amazing User Interfaces.
          </p>
        </motion.div>
        <div className="  mt-16 md:mt-0">
          {isAboveMMediumScreens ? (
            <div
              className=" relative z-0 ml-16 before:absolute before:-top-10 before:-left-10
          before:w-full  before:border-2 before:border-blue before:h-full before:z-[-1] "
            >
              <img
                src={skillsImage}
                alt="skills"
                className=" hover:filter hover:saturate-150 transition duration-500 z-10 w-[400px]"
              />
            </div>
          ) : (
            <img
              src={skillsImage}
              alt="skills"
              className=" hover:filter hover:saturate-150 transition duration-500 z-10 w-[400px]"
            />
          )}
        </div>
      </div>

      {/* skill  */}

      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* experience */}
        <motion.div
          className="md:basis-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" relative h-32">
            <div className=" z-10">
              <p className=" font-playfair font-semibold text-4xl ">01</p>
              <p className=" font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className=" z-[-1] w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 " />
          </div>
          <p className=" mt-5">
            Developed Websites and Web Apps using MERN stack, HTML, CSS,
            JavaScript. Built fullstack websites, restful APIs with NodeJs
            ExpressJs.
          </p>
        </motion.div>

        {/* Innovative*/}
        <motion.div
          className="md:basis-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" relative h-32">
            <div className=" z-10">
              <p className=" font-playfair font-semibold text-4xl ">02</p>
              <p className=" font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className=" z-[-1] w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 " />
          </div>
          <p className=" mt-5">
            Developed Websites and Web Apps using MERN stack, HTML, CSS,
            JavaScript. Built fullstack websites, restful APIs with NodeJs
            ExpressJs.
          </p>
        </motion.div>

        {/* Imaginative*/}
        <motion.div
          className="md:basis-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className=" relative h-32">
            <div className=" z-10">
              <p className=" font-playfair font-semibold text-4xl ">03</p>
              <p className=" font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className=" z-[-1] w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 " />
          </div>
          <p className=" mt-5">
            Developed Websites and Web Apps using MERN stack, HTML, CSS,
            JavaScript. Built fullstack websites, restful APIs with NodeJs
            ExpressJs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
