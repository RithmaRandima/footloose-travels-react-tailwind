import React from "react";
import img1 from "../../assets/destination-1.jpeg";
import img2 from "../../assets/destination-2.jpeg";
import img3 from "../../assets/destination-3.jpeg";
import img4 from "../../assets/destination-4.jpeg";
import DestinationBox from "./DestinationBox/DestinationBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Destination = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
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
      {/* desktop */}
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

      {/* mobile */}
      <div className="block md:hidden w-[100%] mx-auto h-[100%]">
        <Slider {...settings}>
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
        </Slider>
      </div>
    </div>
  );
};

export default Destination;
