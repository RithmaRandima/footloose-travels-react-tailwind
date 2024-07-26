import React from "react";
import about_top from "../../assets/about-img-3.jpg";
import about_bottom from "../../assets/Event-Background.jpg";
import about_Big from "../../assets/Gallery-5.jpg";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

const AboutDetails = () => {
  return (
    <div
      id="about"
      className="max-w-[1140px] m-auto w-full  grid grid-cols-1 md:grid-cols-2 mb-[50px] text-center md:text-left  md:py-[50px]"
    >
      <motion.div className="p-4 py-10">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 70,
          }}
          className="text-[15px] my-3 tracking-[4px]"
        >
          ABOUT US
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 70,
            delay: 0.1,
          }}
          className="text-5xl my-4 mb-8 leading-tight"
        >
          Welcome To <br />
          <span> Mystic</span>
          <span className="text-red-500 uppercase font-bold text-[50px] mr-4">
            <ReactTyped strings={["Routes"]} typeSpeed={490} loop />
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 60,
            delay: 0.2,
          }}
          className="text-gray-700 text-[20px]"
        >
          With over 340 hotels worldwide, NH Hotel Group offers a wide variety
          of hotels catering for a perfect stay no matter where your
          destination.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 90,
            delay: 0.1,
          }}
          className="mt-10 text-[17px]"
        >
          Manager: <span className="text-red-500">Rithma Randima</span>
        </motion.p>
      </motion.div>
      <div className="flex flex-row gap-2 h-[500px]">
        <div className="hidden md:flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 60,
              delay: 0.1,
            }}
            className="w-[100%]  h-[100%] relative md:rounded-l-full md:rounded-tr-full overflow-hidden"
          >
            <img
              src={about_top}
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
            <div className="absolute w-[100%] h-[100%] top-0 left-0 from-transparent "></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 60,
              delay: 0.1,
            }}
            className="w-full h-[100%]"
          >
            <img
              src={about_bottom}
              className="w-[100%] h-[100%] md:rounded-l-full md:rounded-br-full object-cover"
              alt=""
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 60,
              delay: 0.6,
            }}
            className="hidden md:flex md:w-[330px] md:h-[100%] overflow-hidden rounded-r-full"
          >
            <img
              src={about_Big}
              className="w-[100%] h-[100%] object-cover"
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
