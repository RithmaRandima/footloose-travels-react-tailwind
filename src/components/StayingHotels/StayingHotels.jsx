import React from "react";
import img1 from "../../assets/hotel1.jpeg";
import img2 from "../../assets/hotel2.jpeg";
import img3 from "../../assets/hotel3.jpeg";
import img4 from "../../assets/hotel4.jpeg";
import img5 from "../../assets/hotel5.jpeg";
import StayingHotelBox from "./StayingHotelBox/StayingHotelBox";

const StayingHotels = () => {
  return (
    <div className="hidden md:flex flex-col max-w-[1240px] m-auto w-ful p-3 sm:mb-[50px] h-[2700px] md:h-[790px] ">
      <div className="py-10 px-2 pb-14">
        <p className="text-gray-700 text-[24px] my-1 ">Special Offers</p>
        <h1 className="text-3xl md:text-4xl uppercase">
          <span className="font-bold">Popular </span>
          Hotels & Rooms
        </h1>
      </div>
      <div className=" w-[100%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 h-[200px] gap-2">
        <StayingHotelBox
          img={img1}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <StayingHotelBox
          img={img2}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <StayingHotelBox
          img={img3}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <StayingHotelBox
          img={img4}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <StayingHotelBox
          img={img5}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
      </div>
    </div>
  );
};

export default StayingHotels;
