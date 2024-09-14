import React from "react";
import background from "../../assets/Event-Background.jpeg";
import img1 from "../../assets/event1.jpeg";
import img2 from "../../assets/event2.jpeg";
import img3 from "../../assets/event3.jpeg";
import img4 from "../../assets/event4.jpeg";
import { Background, Parallax } from "react-parallax";
import { ReactTyped } from "react-typed";
import EventsBox from "./EventsBox/EventsBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Events = () => {
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
    <div className="gallery-event-bg-container flex flex-col w-full h-[70vh] md:h-[100vh]">
      <Parallax strength={300} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] object-cover h-[90vh] md:h-[100vh]">
          <img
            src={background}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover"
          />
        </Background>

        <div className="text-center mb-10 py-5">
          <p className="text-white text-[24px] my-1"> Some fun facts</p>
          <h1 className="text-3xl md:text-4xl text-white">
            Latest News &
            <span className="font-bold text-[#f00] ml-3">
              <ReactTyped strings={["Events"]} typeSpeed={490} loop />
            </span>
          </h1>
        </div>

        <div className="hidden w-full md:grid grid-cols-1 md:h-[400px] h-[100%] md:grid-cols-4 gap-10 px-10">
          <EventsBox img={img1} />
          <EventsBox img={img2} />
          <EventsBox img={img3} />
          <EventsBox img={img4} />
        </div>

        {/* mobile */}
        <div className="block md:hidden w-[78%] mx-auto h-[100%]">
          <Slider {...settings}>
            <EventsBox img={img1} />
            <EventsBox img={img2} />
            <EventsBox img={img3} />
            <EventsBox img={img4} />
          </Slider>
        </div>
      </Parallax>
    </div>
  );
};

export default Events;
