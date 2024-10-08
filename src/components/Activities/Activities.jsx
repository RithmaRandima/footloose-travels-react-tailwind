import React from "react";

import activity_img1 from "../../assets/activity-1.jpeg";
import activity_img2 from "../../assets/activity-2.jpeg";
import activity_img3 from "../../assets/activity-3.jpeg";
import ActivityBox from "../ActivityBox/ActivityBox";

const Activities = () => {
  return (
    <div className="md:py-10 w-[100%] mt-[-20px]  md:mt-[-120px]">
      {/* desktop */}
      <div className="hidden md:grid max-w-[1000px] sm:text-center h-[100%] m-auto w-full grid-cols-1 md:grid-cols-3 gap-5 ">
        <ActivityBox img={activity_img1} text="Write Down Your Experience" />
        <ActivityBox img={activity_img2} text="Write Down Your Experience" />
        <ActivityBox img={activity_img3} text="Write Down Your Experience" />
      </div>
      {/* mobile */}
      <div className="md:hidden mt-[-100px] w-[90%] max-w-[1000px] sm:text-center h-[100%] m-auto  grid grid-cols-2 gap-3 ">
        <ActivityBox img={activity_img1} text="Write Down Your Experience" />
        <ActivityBox img={activity_img2} text="Write Down Your Experience" />
      </div>

      {/* desktop */}
      <div className="h-[100%] w-[100%] m-auto hidden  md:grid grid-cols-1 gap-3 z-50 md:grid-cols-6 md: relative my-[50px] ">
        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300 cursor-pointer">
          <div className="about-content  cursor-pointer text-center p-5">
            {/* <GiTakeMyMoney className="my-1 mx-auto" size={30} /> */}
            <h1 className="text-[14px] font-bold my-3 ">
              Best Price Guarantee
            </h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden  shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300 cursor-pointer">
          <div className="about-content  text-center p-5">
            {/* <BsHearts className="my-1 mx-auto" size={30} /> */}
            <h1 className="text-[14px] font-bold my-3 ">Travelers Love Us</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300 cursor-pointer">
          <div className="about-content  text-center p-5">
            {/* <LiaUserSecretSolid className="my-1 mx-auto" size={30} /> */}
            <h1 className="text-[14px] font-bold my-3 ">Best Travel Agent</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300 cursor-pointer">
          <div className="about-content  text-center p-5">
            {/* <FaUsersCog className="my-1 mx-auto" size={30} /> */}
            <h1 className="text-[14px] font-bold my-3 ">
              Our Dedicated Support
            </h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300 cursor-pointer">
          <div className="about-content  text-center p-5">
            {/* <GiCommercialAirplane className="my-1 mx-auto" size={30} /> */}
            <h1 className="text-[14px] font-bold my-3 ">Best Air Tickets</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden  shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300 cursor-pointer">
          <div className="about-content  text-center p-5">
            {/* <GiBattleship className="my-1 mx-auto" size={30} /> */}
            <h1 className="text-[14px] font-bold my-3 ">Best Cruises</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
