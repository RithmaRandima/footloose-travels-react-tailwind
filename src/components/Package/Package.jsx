import React from "react";
import img1 from "../../assets/package-1.jpg";
import img2 from "../../assets/package-2.jpg";
import img3 from "../../assets/package-3.jpg";
import img4 from "../../assets/package-4.jpg";
import img5 from "../../assets/package-5.jpg";
import PackageBox from "./PackageBox/PackageBox";

const Package = () => {
  return (
    <div className="flex flex-col max-w-[1240px] mx-auto h-[100%] m-a">
      <div className="py-10 px-2 pb-14">
        <p className="text-gray-700 text-[24px] my-1 ">Special Offers</p>
        <h1 className="text-3xl md:text-4xl uppercase">
          <span className="font-bold ">Top </span>
          Tour Packages
        </h1>
      </div>
      <div className=" w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
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
    </div>
  );
};

export default Package;
