import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/assets/logo.png";
// Import Icons
import { BsSearch, BsGlobe } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle, FaUsers } from "react-icons/fa";
// Import Date
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer"
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number ofGuests{" "}
            </h2>
            <FaUsers className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button className="flex-grow text-red-400">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
