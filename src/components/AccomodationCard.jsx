import React from "react";
import pin_icon from "../assets/icons/16px/pin_icon.svg";

function AccomodationCard() {
  return (
    <div className="bg-accomodation bg-cover bg-center h-96 pb-3 w flex items-end rounded-sm">
      <div className="top-70 bg-custom-soft-black w-full font-runda-normal text-white text-[20pt] p-6">
        <div className="flex justify-between items-center">
          <h3>The James Hotel</h3>
          <span className=" w-20 flex justify-center items-center font-runda-light uppercase text-[10pt] h-7 bg-gradient-to-br from-indigo-700 to-purple-600">
            4 nights
          </span>
        </div>
        <div className="bg-white mb-4 w-[100%] mt-4 h-[1px] mx-auto bg-opacity-50"></div>
        <div className="flex mt-2">
          <img src={pin_icon} alt="icone de marcação em mapa" />
          <p className="text-[10pt] ml-4 font-runda-light">
            36 W 38th St, New York, NY 10018
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccomodationCard;
