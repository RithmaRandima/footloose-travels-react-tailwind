import { motion } from "framer-motion";

const ActivityBox = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        duration: 500,
      }}
      className=" activity-img-container overflow-hidden relative h-[250px]"
    >
      <div className="z-10 absolute bg-gradient-to-t from-black/50 to-transparent w-[100%] h-[100%] flex items-end justify-center text-white pb-8">
        <h2 className="activity-img-title text-1xl font-bold duration-300">
          {props.text}
        </h2>
      </div>
      <img
        src={props.img}
        className="w-full h-full object-cover relative shadow-lg duration-300"
        alt=""
      />
    </motion.div>
  );
};

export default ActivityBox;
