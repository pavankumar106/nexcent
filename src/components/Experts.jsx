import React from "react";
import image from "../assets/laptop.jpg";

const Experts = () => {
  return (
    <div className="max-w-[1240px] my-10 mx-auto p-2  md:grid  grid-cols-3">
      <div className=" col-span-1 md:w-[80%]">
        <img src={image} alt="stats-image" />
      </div>
      <div className=" col-span-2 flex flex-col justify-center text-center">
        <h1 className="text-[#00df9a] font-bold m-2">Learn From Experts</h1>
        <p className="m-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt
          quasi, quia qui sed quo. Quod illo repellat explicabo veritatis id
          sequi quos perspiciatis sint? Non quidem, vero laboriosam laudantium
          aperiam debitis quo ex necessitatibus qui perspiciatis? Dolore
          aspernatur nulla minima voluptatem libero, consequatur quaerat
          repellat inventore sunt, corporis voluptate.
        </p>
        <button className="bg-black inline w-[30%] text-white p-3 rounded m-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
