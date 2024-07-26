import React from "react";

const EventsBox = (props) => {
  return (
    <div className="w-[100%] h-[400px] relative">
      <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/40 to-black/30 flex flex-col justify-center items-center text-center px-6 z-10 text-white">
        <h1 className="uppercase text-[22px] my-4">
          Rithma Randima{props.title}
        </h1>
        <p className="text-[14px]">
          {props.description}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
          minima.
        </p>
        <button className="uppercase text-[10px] hover:scale-90 duration-200 ">
          Show More
        </button>
      </div>
      <img src={props.img} className="w-[100%] h-[100%] object-cover" alt="" />
    </div>
  );
};

export default EventsBox;
