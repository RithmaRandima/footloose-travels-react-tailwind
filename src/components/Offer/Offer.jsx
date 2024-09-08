import React from "react";
import OfferBox from "./OfferBox/OfferBox";
import img1 from "../../assets/about-img-1.jpeg";
import img2 from "../../assets/about-img-2.jpeg";
import img3 from "../../assets/about-img-3.jpeg";
import img4 from "../../assets/about-img-4.jpeg";
import img5 from "../../assets/about-img-5.jpeg";
import img6 from "../../assets/about-img-6.jpeg";

const Offer = () => {
  return (
    <div className="mt-[-550px] md:mt-[50px] flex flex-col w-[100%] h-[100%]">
      <div className="py-10 px-5 pb-14">
        <p className="text-gray-700 text-[24px] my-1">Special Offers</p>
        <h1 className="text-3xl md:text-4xl">
          BEST
          <span className="font-bold"> OFFERS </span>
        </h1>
      </div>
      <div className="hidden md:grid w-[100%] h-[100%] grid-cols-1 md:grid-cols-3">
        <OfferBox
          img={img1}
          country={"spain"}
          place={"Grand Spain Madrid"}
          day_count={"9 days"}
          price={"3000"}
        />
        <OfferBox
          img={img2}
          country={"TURKEY"}
          place={"Grand Turkey"}
          day_count={"8 days"}
          price={"2000"}
        />
        <OfferBox
          img={img3}
          country={"SLOVENIA, HUNGARY, CZECH"}
          place={"East Europe"}
          day_count={"10 days"}
          price={"3000"}
        />
        <OfferBox
          img={img4}
          country={"AUSTRIA, SWITZERLAND"}
          place={"Swiss Alps Trip"}
          day_count={"13 days"}
          price={"4000"}
        />
        <OfferBox
          img={img5}
          country={"ENGLAND, SCOTLAND, WALES"}
          place={"UK Trip"}
          day_count={"13 days"}
          price={"5000"}
        />
        <OfferBox
          img={img6}
          country={"ITALY"}
          place={"Grand Italy"}
          day_count={"8 days"}
          price={"3000"}
        />
      </div>

      <div className="md:hidden w-[100%] h-[100%] grid grid-cols-1 md:grid-cols-3">
        <OfferBox
          img={img1}
          country={"spain"}
          place={"Grand Spain Madrid"}
          day_count={"9 days"}
          price={"3000"}
        />
        <OfferBox
          img={img2}
          country={"TURKEY"}
          place={"Grand Turkey"}
          day_count={"8 days"}
          price={"2000"}
        />
        <OfferBox
          img={img3}
          country={"SLOVENIA, HUNGARY, CZECH"}
          place={"East Europe"}
          day_count={"10 days"}
          price={"3000"}
        />
      </div>
    </div>
  );
};

export default Offer;
