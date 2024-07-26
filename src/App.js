import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AboutDetails from "./components/AboutDetails/AboutDetails";
import Activities from "./components/Activities/Activities";
import BookingSection from "./components/BookingSection/BookingSection";
import Destination from "./components/Destination/Destination";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import NavbarBottom from "./components/NavbarBottom/NavbarBottom";
import Offer from "./components/Offer/Offer";
import Package from "./components/Package/Package";
import StayingHotels from "./components/StayingHotels/StayingHotels";
// import NavbarBottom from "./components/NavbarBottom/NavbarBottom";

const App = () => {
  return (
    <div>
      <Navbar />
      <NavbarBottom />
      <Hero />
      <Activities />
      <AboutDetails />
      <Offer />
      <Destination />
      <BookingSection />
      <Package />
      <Gallery />
      <StayingHotels />
      <Events />
      <Footer />
    </div>
  );
};

export default App;
