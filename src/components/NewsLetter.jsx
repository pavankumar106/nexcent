import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="md:flex max-w-[1240px] justify-between">
        <div className=" p-[20px] ml-[40px]">
          <h1 className="text-white text-bold text-[20px] md:text-[50px]">
            Want to learn latest IT skills
          </h1>
          <p className="text-white text-[15px] md:text-[25px]">
            Sign up to our newsletters and stay up to date
          </p>
        </div>
        <div className="p-5 m-5  ">
          <input
            className="p-[5px] rounded px-[20px]"
            type="email"
            name=""
            placeholder="Enter email"
            id=""
          />
          <button className="bg-black text-white p-[5px] rounded ml-[10px] mt-2 px-[20px]">
            Notify Me
          </button>
          <p className="text-white">
            we care about the protection of your data. Read our{" "}
            <span className="text-black">privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
