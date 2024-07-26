import React from "react";
import Hero_Video from "../../assets/Hero-Video.mp4";
import Hero_Background from "../../assets/Mobile-Hero-Background.jpg";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] relative bg-red-500 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        id="video"
        className="hidden md:block w-[100%] "
      >
        <source src={Hero_Video} type="video/mp4" classN />
      </video>

      <img
        src={Hero_Background}
        alt=""
        className="md:hidden w-full h-full object-cover object-bottom"
      />
      <div className="bg-gradient-to-r from-black/60 to-transparent w-full h-full absolute top-0"></div>
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[20%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 10,
              duration: 500,
            }}
            className="font-bold text-4xl uppercase"
          >
            Never stop Exploring
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 10,
              duration: 500,
              delay: 0.1,
            }}
            className="text-4xl py-5 italic"
          >
            With <span className="ml-[15px]">foot</span>
            <span className="text-red-500 uppercase font-bold text-[50px]">
              <ReactTyped strings={["LOOSE"]} typeSpeed={490} loop />
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 10,
              duration: 500,
              delay: 0.3,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex
            voluptatum nostrum. Magnam vitae, ipsum eligendi adipisci ad id
            inventore ab aut odit earum necessitatibus explicabo dolor placeat
            architecto consequuntur?
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 10,
              delay: 0.1,
            }}
            className="w-[150px] text-center my-[30px] bg-black  uppercase py-3 hover:bg-[#f00] hover:scale-90 duration-300 "
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
