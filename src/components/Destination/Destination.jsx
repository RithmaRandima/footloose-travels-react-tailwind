import React from "react";
import img1 from "../../assets/destination-1.jpeg";
import img2 from "../../assets/destination-2.jpeg";
import img3 from "../../assets/destination-3.jpeg";
import img4 from "../../assets/destination-4.jpeg";
import DestinationBox from "./DestinationBox/DestinationBox";

const Destination = () => {
  return (
    <div
      id="destination"
      className=" flex flex-col max-w-[1240px] h-full m-auto w-ful p-3 md:mb-[100px] sm:mb-[200px]"
    >
      <div className="py-10 px-2 pb-14">
        <p className="text-gray-700 text-[24px] my-1">Featured</p>
        <h1 className="text-3xl md:text-4xl uppercase">
          <span className="font-bold">Featured </span>
          Destination
        </h1>
      </div>
      <div className="hidden md:grid  w-[100%]   grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-[100%] gap-3">
        <DestinationBox
          img={img1}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />

        <DestinationBox
          img={img2}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />

        <DestinationBox
          img={img3}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />

        <DestinationBox
          img={img4}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />
      </div>

      <div className="md:hidden w-[100%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-[100%] gap-3">
        <DestinationBox
          img={img1}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />

        <DestinationBox
          img={img2}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />
      </div>
    </div>
  );
};

export default Destination;
