import React from "react";

const Hero = () => {
  return (
    <div className="bg-#0F0F0F h-180 w-full relative overflow-hidden mt-20">
      <img
        className="h-100 absolute bottom-0 left-55  rounded-lg shadow-xl border
        border-[#2A2A2A] z-20 opacity-90 object-cover"
        src="src/assets/images/hero4.jpg"
        alt="photographer"
      />
      <img
        className="h-100 absolute top-0 right-55 rounded-lg shadow-xl border
        border-[#2A2A2A] z-10 opacity-80 object-cover"
        src="src/assets/images/hero3.jpg"
        alt="photographer"
      />
      <img
        className="h-200 absolute top-0 left-165 rounded-lg shadow-xl border
        border-[#2A2A2A] z-30 object-contain"
        src="src/assets/images/hero5.jpg"
        alt="photographer"
      />
      <h2
        className="absolute top-6 left-6 md:top-40 md:left-20 text-5xl md:text-7xl font-extrabold uppercase tracking-wide text-[#E85D04]/60 z-40 select-none">
        Where Moments
      </h2>
      <h2
        className="absolute bottom-20 right-10 md:bottom-45 md:right-40 text-4xl md:text-6xl font-extrabold uppercase tracking-wide text-[#E85D04]/60 z-40 select-none">
        Become Memories
      </h2>
    </div>
  );
};

export default Hero;
