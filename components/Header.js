import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.png";
// Import Icons
import { BsSearch, BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src={logo}
          fill
          alt="logo"
          // objectFit="contain"
          objectPosition="left"
          className="objectFit-contain"
        />
      </div>
      <div className="flex items-center rounded-full py-2 md:border-2 md:shadow-sm">
        <input
          type="text"
          className="pl-5 flex-grow outline-none bg-transparent text-gray-600 text-sm placeholder-gray-400"
          placeholder="Start Your Search"
        />
        {/* <SearchIcon/> */}
        <BsSearch className="hidden md:inline-block bg-red-400 md:mx-2 text-white rounded-full h-8 w-8 p-2 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <BsGlobe className="h-6 cursor-pointer" />
        <div className="flex space-x-2 items-center p-3 border-2 rounded-full">
          <AiOutlineMenu className="h-6" />
          <FaUserCircle className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
