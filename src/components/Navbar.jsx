import React from "react";
import withe_airplane_icon from "../assets/icons/24px/withe_airplane_icon.svg";
import discover_icon from "../assets/icons/24px/discover_icon.svg";
import traveller_icon from "../assets/icons/24px/traveller_icon.svg";
import heart_icon from "../assets/icons/24px/heart_icon.svg";

function Navbar() {
  return (
    <nav className="bg-custom-dark-purple fixed bottom-0 left-0 w-full h-[60px]">
      <ol className="flex justify-between p-5 px-9">
        <li>
          <button>
            <img src={withe_airplane_icon} alt="" className="w-6 h-6" />
          </button>
        </li>
        <li>
          <img src={discover_icon} alt="" className="w-6 h-6" />
        </li>
        <li>
          <img src={traveller_icon} alt="" className="w-6 h-6" />
        </li>
        <li>
          <img src={heart_icon} alt="" className="w-6 h-6" />
        </li>
      </ol>
    </nav>
  );
}

export default Navbar;
