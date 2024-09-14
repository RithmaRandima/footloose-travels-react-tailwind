import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] text-white  bg-[#050505]" id="footer">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-9 pt-3">
        {/* logo */}
        <div className=" w[100%] h-[100%] text-center md:p-6  ">
          <h1 className="relative text-xl text-[#fff] md:mb-5 ">
            foot
            <span className="font-bold text-[#ff00008d] text-[24px]">
              LOOSE
            </span>
            <p className="absolute text-[#ff00008d] text-[9px] bottom-[-18px] left-[50%] md:left-[85px]">
              Your Dream Destination
            </p>
          </h1>
          <p className="hidden md:block w-[240px] mx-auto mb-5 text-[15px] text-gray-400">
            .theWalk, founded in 2022, is dedicated to all those who love to
            wander far and wide.
          </p>
          <p className="hidden md:block w-[200px] mx-auto text-[15px] text-gray-400">
            We'd like to invite you on a culinary adventure, where you’ll
            explore undiscovered gourmet experiences.
          </p>
        </div>

        {/*col-2  */}
        <div className=" w[100%] h-[100%] text-center p-6">
          <h1 className="font-bold mb-5 text-[18px]">VISIT</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            317 Pacific C Hwy Huntington, CA 92648
          </p>

          <h1 className="font-bold my-5 text-[18px]">TALK</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            123,456-7
          </p>

          <h1 className="font-bold my-5 text-[18px]">WRITE</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            routs@brightside.com
          </p>
        </div>

        {/* col-3 */}
        <div className="hidden md:block text-center">
          <h1 className="font-bold my-5 text-[18px]">RESERVATIONS</h1>
          <button className=" text-white py-2 px-6 mb-5 hover:scale-95 duration-200">
            BOOK YOUR TICKET
          </button>
          <h1 className="font-bold my-5 text-[18px]">Hours</h1>
          <p className="mx-auto text-[14px] text-gray-400">
            MONDAY thru FRIDAY
          </p>
          <p className="mx-auto text-[14px] text-gray-400 mb-5">11am - 9pm</p>
          <p className="mx-auto text-[14px] text-gray-400">SATURDAY/SUNDAY</p>
          <p className="mx-auto text-[14px] text-gray-400"> 10am - 11pm</p>
        </div>

        {/* col-4 */}
        <div className="hidden md:block text-center">
          <h1 className="font-bold my-5 text-[18px]">ABOUT</h1>
          <p className="mx-auto text-[14px] text-gray-400">FAQ</p>
          <p className="w-[50%] mx-auto text-[14px] text-gray-400 mb-7">
            Reservation Policy Privacy Policy Health & Safety
          </p>
          <h1 className="font-bold my-5 text-[18px]">FOLLOW ALONG</h1>
          <div className="flex gap-6 items-center justify-center">
            <p>{<FaInstagram size={24} />}</p>
            <p>{<FaFacebook size={24} />}</p>
            <p>{<FaTwitter size={24} />}</p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="flex justify-between px-2 md:px-10  items-center py-4 gap-7 pb-[17px]  bg-[#000000] text-white">
        <p className="text-[8px] tracking-[4px]">
          © 2023 foot<span className="text-red-500 font-bold">LOOSE</span> ALL
          RIGHTS RESERVED.
        </p>
        <h1 className="hidden md: block text-xl text-[#fff] ">
          foot
          <span className="font-bold text-[#ff00008d] text-[24px]">LOOSE</span>
        </h1>
        <p className="hidden md:block text-[10px] font-bold tracking-[4px]">
          FLY ABOVE THE WORLD
        </p>
      </div>
    </div>
  );
};

export default Footer;
