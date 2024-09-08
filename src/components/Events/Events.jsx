import React from "react";
import background from "../../assets/Event-Background.jpg";
import img1 from "../../assets/event1.jpg";
import img2 from "../../assets/event2.jpg";
import img3 from "../../assets/event3.jpg";
import img4 from "../../assets/event4.jpg";
import { Background, Parallax } from "react-parallax";
import { ReactTyped } from "react-typed";
import EventsBox from "./EventsBox/EventsBox";

const Events = () => {
  return (
    <div className="gallery-event-bg-container flex flex-col w-full h-[210vh] md:h-[100vh]">
      <Parallax strength={300} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] object-cover h-[210vh] md:h-[100vh]">
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

        <div className="w-full grid grid-cols-1 md:h-[400px] h-[100%] md:grid-cols-4 gap-10 px-10">
          <EventsBox img={img1} />
          <EventsBox img={img2} />
          <EventsBox img={img3} />
          <EventsBox img={img4} />
        </div>
      </Parallax>
    </div>
  );
};

export default Events;
