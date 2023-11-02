import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] py-[10px]  flex justify-between items-center  mx-auto">
        <div className="text-3xl font-bold">NEXCENT</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-5">
          <li>HOME</li>
          <li>Company</li>
          <li>About</li>
          <li>Contact</li>
          <li>Resource</li>
        </ul>
        {/* RESPONSIVE MENU */}
        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[88px] ${
            toggle ? "left-[0]" : "left-[-100%]"
          }`}
        >
          <li className="p-5">HOME</li>
          <li className="p-5">Company</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
          <li className="p-5">Resource</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
