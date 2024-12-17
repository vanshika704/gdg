import React from "react";
import FluidAnimation from "@/components/custom/FluidAnimation";
import { TeamCarousel } from "@/components/custom/TeamCarousel";
import Globe from "@/components/custom/Globe";
import RounderBorderAbout from "@/components/custom/RounderBorderWapper";

const About = () => {
  return (
    <div className="w-full justify-center bg-gradient-to-b from-[#0a0a0a] to-[#5e5d5d] overflow-hidden">
      <div
  className="absolute inset-0 bg-center bg-no-repeat mb-24 ml-10"
  style={{
    backgroundImage: `url('/images/contact/gdg logoo.png')`,
    backgroundSize: "55%", // Adjust size as needed
    opacity: 0.1,
    filter: "blur(8px)" // Increase blur level
  }}
></div>

      {/* Faculty Advisor Section */}
      
      <div className="flex w-full mx-auto max-w-4xl justify-between items-center gap-6 p-6 flex-col md:flex-row  ">
        {/* Left */}
        {/* <FluidAnimation path={"/images/vishalsir.jpeg"} /> */}
        <FluidAnimation
  path="/images/vishalsir.jpeg"
  quote="Act without expectation"
/>
        {/* Right */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mb-3">
            Dr. Vishal Gupta
          </h1>
          <p className="text-white text-sm md:text-base mt-2">
            Faculty Advisor
          </p>
        </div>
      </div>

      {/* GDG Lead Section */}
      <div className="flex w-full mx-auto max-w-4xl justify-between items-center gap-6 p-6 flex-col-reverse md:flex-row">
        {/* Left */}
        <div className="text-center md:text-left ">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mb-3">
            Mr. Parag Sharma
          </h1>
          <p className="text-white text-sm md:text-base mt-2">
            GDGoC Organizer
          </p>
        </div>
        {/* Right */}
        {/* <FluidAnimation path={"/images/parag.jpeg"} /> */}
        <FluidAnimation
  path="/images/parag.jpeg"
  quote="believe you can"
/>
      </div>

      {/* Team Carousel */}
      <div className="p-20">
        <TeamCarousel />
      </div>
      {/* <GlobeDemo /> */}
      <Globe />
      {/* description */}
      <RounderBorderAbout />
    </div>
  );
};

export default About;
