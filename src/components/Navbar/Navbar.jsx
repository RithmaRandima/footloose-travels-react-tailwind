import React from "react";
import { AiFillPhone, AiOutlineClockCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-5 bg-black">
      <div className="flex items-center">
        <h1 className="relative text-xl text-[#fff] ">
          foot
          <span className="font-bold text-[#ff00008d] text-[24px]">LOOSE</span>
          <p className="absolute text-[#ff00008d] text-[9px] bottom-[-18px] left-[20px]">
            Your Dream Destination
          </p>
        </h1>
      </div>
      <div className="flex">
        <div className="hidden md:flex items-center px-6">
          <AiOutlineClockCircle
            size={20}
            className="mr-2 text-[var(--primary-dark)]"
          />{" "}
          */
          <p className="text-sm text-gray-700">9AM - 5AM</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]" />
          <p className="text-sm text-gray-700">1-888-817-1234</p>
        </div>
        <button className="uppercase text-[10px] hover:scale-90 duration-200 ">
          Get a Free Ride
        </button>
      </div>
    </div>
  );
};

export default Navbar;
