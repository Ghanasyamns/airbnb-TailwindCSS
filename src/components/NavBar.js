import { useState, useEffect } from "react";
import config from "../config.js";
import {
  SearchIcon,
  UserCircleIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { Link } from "react-router-dom";
function NavBar() {
  const [searchInput, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [width, setWidth] = useState(window.innerWidth);
  // eslint-disable-next-line no-unused-vars
  const [numGuests, setNumGuests] = useState("");
  let [screenHeight, setScreenHeight] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    window.addEventListener("scroll", () =>
      window.scrollY < 80 ? setScreenHeight(true) : setScreenHeight(false)
    );
  }, [width, screenHeight]);
  const handleSelect = (ranges) => {
    setStartDate(ranges.Selection.startDate);
    setEndDate(ranges.Selection.endDate);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "Selection",
  };

  return (
    <header
      onScroll={() => {
        window.scrollY < 80 ? (screenHeight = true) : (screenHeight = false);
      }}
      className={` nav p-3  grid grid-cols-3  sticky top-0 z-50 ${
        screenHeight && window.location.pathname === "/"
          ? "bg-transparent text-gray-50"
          : "bg-white text-gray-800 shadow-md "
      }   sm:p-5 md:px-10`}
    >
      {/* left section */}
      <Link to="/">
        <div className="logo  relative flex    items-center h-12 w-32   my-auto">
          <img
            className="absolute w-[90%]   sm:w-[100%] "
            src={config.logoImg}
            alt="logo"
          />
        </div>
      </Link>
      {/* middle section */}
      <div className="flex  items-center md md:border-2 rounded-full md:shadow-sm">
        <input
          value={searchInput}
          className="flex flex-grow bg-transparent outline-none mx-3 text-sm  placeholder-gray-400"
          type="text"
          placeholder="Start your Search"
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-1 cursor-pointer md:mx-2" />
      </div>
      {/* right section */}
      <div
        className={`flex justify-end items-center    space-x-4`}
      >
        <p className="font-semibold hidden md:inline cursor-pointer  ">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex items-center border-2 space-x-2 p-2  rounded-full">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
      {searchInput && (
        <div className=" absolute top-[100%]  bg-white  flex justify-self-center m-1 sm:m-4">
          <div className="absolute  transform -translate-x-1/2 p-0  md:p-4 ">
            <DateRange
              className=" rounded-t-xl   "
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              showMonthAndYearPickers={false}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              months={width > 700 ? 2 : 1}
              direction="horizontal"
              showDateDisplay={false}
              onChange={handleSelect}
            />
            <div className=" bg-white p-2 grid grid-cols-2 border-b-[1px] ">
              <h2 className="text-md  md:text-xl font-semibold">
                Number of Guests
              </h2>
              <span className=" flex justify-end ">
                <UsersIcon className="w-6 h-6 mr-2" />
                <input
                  onChange={(e) => setNumGuests(e.target.value)}
                  className="w-12 h-full text-lg border border-red-300 pl-2 rounded-lg text-red-400 focus:outline-none"
                  type="number"
                  min="1"
                  max="20"
                />
              </span>
            </div>
            <div className="bg-white p-3 flex rounded-b-xl text-md">
              <button
                className="w-1/2 px-auto text-gray-500"
                onClick={() => setInput("")}
              >
                Cancel
              </button>
              <button className="w-1/2 px-auto text-red-500">Search</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
