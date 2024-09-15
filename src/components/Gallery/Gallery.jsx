import React from "react";
import gallery_img1 from "../../assets/Gallery-1.jpeg";
import gallery_img2 from "../../assets/Gallery-2.jpeg";
import gallery_img3 from "../../assets/Gallery-3.jpeg";
import gallery_img4 from "../../assets/Gallery-4.jpeg";
import gallery_img5 from "../../assets/Gallery-5.jpeg";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div
      id="gallery"
      className="gallery-event-bg-container max-w-[100%] m-auto w-full bg-black my-10 p-6
      "
    >
      <div className="px-2 pb-5 text-center text-white">
        <p className=" text-[24px] my-1">Special Places to Visit</p>
        <h1 className="text-3xl md:text-4xl">
          <span className="font-bold">Top </span>
          Tour Gallery
        </h1>
      </div>
      <div className="max-w-[1140px] mx-auto grid sm:grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 70,
            delay: 0.1,
          }}
          className="sm:col-span-3 col-span-2 row-span-2"
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img1}
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 60,
            delay: 0.4,
          }}
          className="border-[20px] border-black"
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img2}
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 80,
            delay: 0.3,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img3}
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 60,
            delay: 0.5,
          }}
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img4}
            alt=""
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 50,
            delay: 0.2,
          }}
          className="border-[20px] border-black"
        >
          <img
            className="w-full h-full object-cover"
            src={gallery_img5}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;
