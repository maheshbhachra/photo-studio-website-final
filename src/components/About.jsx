import React from "react";

const About = () => {
  return (
    <div className="h-200 w-full mt-0 p-30">
      <h1 className="text-[#E85D04]/80 text-5xl font-serif text-center tracking-widest">
        ABOUT THE STUDIO
      </h1>
      <div className=" mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 mt-10 items-center ">
        <div className="border-l-3 border-[#E85D04]/50 ">
          <p className="font-Sans-serif text-[#F2F2F2] text-4xl mb-5 ml-5 leading-12 italic">
            We believe the most powerful photographs are the ones that feel
            real.
          </p>
          <p className="font-Sans-serif text-[#B5B5B5] text-2xl ml-5 leading-normal">
            Our approach focuses on capturing authentic moments as they
            naturally unfold. Through thoughtful composition and attention to
            detail, we create images that tell stories and{" "}
            <span className="text-[#E85D04]">preserve memories</span> in a way
            that feels timeless and personal.
          </p>
        </div>
        <div>
          <img
            className="h-100 w-full ml-5 object-cover rounded-2xl"
            src="/src/assets/images/about2.jpg"
            alt="about-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
