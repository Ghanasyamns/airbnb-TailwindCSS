import config from "../config.js";
import {
  SearchIcon,
  UserCircleIcon,
  GlobeAltIcon,
} from "@heroicons/react/solid";
import { MenuIcon } from "@heroicons/react/solid";

function NavBar() {
  return (
    <header className="nav grid grid-cols-3  sticky top-0 z-50 bg-white shadow-md p-5 md:px-10">
      {/* left section */}
      <div className="logo  relative flex items-center h-12 w-32  cursor-pointer my-auto">
        <img src={config.logoImg} alt="logo" />
      </div>
      {/* middle section */}
      <div className="flex  items-center md md:border-2 rounded-full md:shadow-sm">
        <input
          className="flex flex-grow outline-none mx-3 text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your Search"
        />
        <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-1 cursor-pointer md:mx-2" />
      </div>
      {/* right section */}
      <div className="flex justify-end items-center text-gray-800 space-x-4">
        <p className="font-semibold hidden md:inline cursor-pointer  ">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 " />
        <div className="flex items-center border-2 space-x-2 p-2  rounded-full">
          <MenuIcon className="h-6 " />
          <UserCircleIcon className="h-6 " />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
