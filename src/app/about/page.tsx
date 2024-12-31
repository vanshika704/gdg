

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
      <div className="flex w-full mx-auto max-w-4xl justify-between items-center gap-6 p-6 flex-col md:flex-row">
        {/* Left */}
        <FluidAnimation path="/images/vishalsir.jpeg" quote="Dr. Vishal Gupta" />
        {/* Right */}
        <div className="text-center md:text-left group relative">
          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mb-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            Dr. Vishal Gupta
          </h1>
          <p className="text-white text-sm md:text-base mt-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            Faculty Advisor
          </p>
          {/* Quote replaces name and title on hover */}
          <div className="quote  group-hover:block absolute inset-0 flex items-center justify-center text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            "An inspiring mentor and leader."
          </div>
        </div>
      </div>

      {/* GDG Lead Section */}
      <div className="flex w-full mx-auto max-w-4xl justify-between items-center gap-6 p-6 flex-col-reverse md:flex-row">
        {/* Left */}
        <div className="text-center md:text-left group relative">
          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mb-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            Mr. Parag Sharma
          </h1>
          <p className="text-white text-sm md:text-base mt-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
            GDGoC Organizer
          </p>
          {/* Quote replaces name and title on hover */}
          <div className="quote  group-hover:block absolute text-2xl inset-0 flex items-center justify-center text-white  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            "Passionate about tech and community growth."
          </div>
        </div>
        {/* Right */}
        <FluidAnimation path="/images/parag.jpeg" quote="Mr. Parag Sharma" />
      </div>

      {/* Team Carousel */}
      <div className="p-20">
        <TeamCarousel />
      </div>
      <Globe />
      {/* description */}
      <RounderBorderAbout />
    </div>
  );
};

export default About;
