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
    <div className="gallery-event-bg-container flex flex-col w-full h-[500vh] md:h-[100vh]">
      <Parallax strength={300} className="w-[100%] h-[100%]">
        <Background className="custom-bg w-[100vw] object-cover h-[100%]">
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
          <div className="w-[100%] h-[400px] relative">
            <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/40 to-black/30 flex flex-col justify-center items-center text-center px-6 z-10 text-white">
              <h1 className="uppercase text-[22px] my-4">Rithma Randima</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                minima.
              </p>
            </div>
            <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>

          <EventsBox img={img2} />

          <div className="w-[100%] h-[100%] relative">
            <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/40 to-black/30 flex flex-col justify-center items-center text-center px-6 z-10 text-white">
              <h1 className="uppercase text-[22px] my-4">Rithma Randima</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                minima.
              </p>
            </div>
            <img src={img2} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>

          <div className="w-[100%] h-[400px] relative">
            <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/40 to-black/30 flex flex-col justify-center items-center text-center px-6 z-10 text-white">
              <h1 className="uppercase text-[22px] my-4">Rithma Randima</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                minima.
              </p>
            </div>
            <img src={img3} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>

          <div className="w-[100%] h-[100%] relative">
            <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/40 to-black/30 flex flex-col justify-center items-center text-center px-6 z-10 text-white">
              <h1 className="uppercase text-[22px] my-4">Rithma Randima</h1>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
                minima.
              </p>
            </div>
            <img src={img4} className="w-[100%] h-[100%] object-cover" alt="" />
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Events;
