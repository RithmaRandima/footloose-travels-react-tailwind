import React from "react";
import img1 from "../../assets/package-1.jpeg";
import img2 from "../../assets/package-2.jpeg";
import img3 from "../../assets/package-3.jpeg";
import img4 from "../../assets/package-4.jpeg";
import img5 from "../../assets/package-5.jpeg";
import PackageBox from "./PackageBox/PackageBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Package = () => {
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
    <div className="flex flex-col max-w-[1240px] mx-auto h-[100%] m-a">
      <div className="py-10 px-2 pb-14">
        <p className="text-gray-700 text-[24px] my-1 ">Special Offers</p>
        <h1 className="text-3xl md:text-4xl uppercase">
          <span className="font-bold ">Top </span>
          Tour Packages
        </h1>
      </div>
      {/* desktop */}
      <div className="hidden w-[100%] md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <PackageBox
          img={img1}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <PackageBox
          img={img2}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <PackageBox
          img={img3}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <PackageBox
          img={img4}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <PackageBox
          img={img5}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
      </div>

      {/* mobile */}
      <div className="block md:hidden w-[100%] mx-auto h-[100%]">
        <Slider {...settings}>
          <PackageBox
            img={img1}
            name={"Lion, Singapore"}
            price={"$200"}
            city={"San Francisco, CA"}
          />
          <PackageBox
            img={img2}
            name={"Lion, Singapore"}
            price={"$200"}
            city={"San Francisco, CA"}
          />
          <PackageBox
            img={img3}
            name={"Lion, Singapore"}
            price={"$200"}
            city={"San Francisco, CA"}
          />
          <PackageBox
            img={img4}
            name={"Lion, Singapore"}
            price={"$200"}
            city={"San Francisco, CA"}
          />
          <PackageBox
            img={img5}
            name={"Lion, Singapore"}
            price={"$200"}
            city={"San Francisco, CA"}
          />
        </Slider>
      </div>
    </div>
  );
};

export default Package;
