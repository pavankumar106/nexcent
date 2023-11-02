import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold ">
        <div className="text-xl md:text-3xl mt-4">Learn with us</div>
        <h2 className="text-white text-3xl md:text-[60px] mt-4">
          Grow with us
        </h2>
        <div className="text-[20px] md:text-[50px] text-white mt-4">
          Learn
          <Typed
            className="pl-3"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
        </div>
        <button className="bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
