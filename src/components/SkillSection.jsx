import React, { useRef, useEffect } from "react";
import LinearGradient from "./LinearGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion, useInView } from "framer-motion";
import skillsImage from "../assets/skills-image.png";
import Card from "./shared/Card";
import DATA from "../constants";

const SkillSection = ({ setSelectedPage }) => {
  const isAboveMMediumScreens = useMediaQuery("(min-width: 1060px)");

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log(isInView);
    isInView && setSelectedPage("skills");
  }, [isInView]);
  // console.log(DATA);
  return (
    <section id="skills" className=" pt-10 pb-24  ">
      {/* header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:basis-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-playfair font-semibold text-3xl  xs:text-4xl mb-5 ">
            What <span className="text-red">I KNOW</span>
          </p>
          <LinearGradient width={"w-1/3"} />
        </motion.div>
      </div>

      {/* skill  */}

      <div
        ref={ref}
        className="flex justify-center flex-col mt-16 gap-16 w-full "
      >
        <motion.div
          className="flex flex-row gap-5 flex-wrap  justify-start "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {DATA.skills.map((data, index) => (
            <Card skills={data.technologies} key={index} title={data.title} />
          ))}
        </motion.div>
        <div className="border border-blue  p-7 gap-7 flex flex-wrap rounded-md items-center sm:w-fit w-[300px]">
          <h4 className="font-opensans text-yellow font-black sm:text-lg text-md">
            LANGUAGES
          </h4>
          <div className="flex gap-4 flex-wrap">
            {DATA.languages.map((language, index) => (
              <div
                key={index}
                className="p-4 
                border  border-red  rounded-md"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
