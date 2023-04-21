import React from "react";
import pinIcon from "../assets/icons/16px/pin_icon.svg";

const AccomodationCard = () => {
  return (
    <div className=" mb-3 bg-accomodation bg-cover bg-center bg-no-repeat  h-96 max-h-[375px] flex items-end rounded-sm">
      <div className="backdrop-blur-md bg-opacity-70  mb-2  bg-black w-full font-runda-normal text-white text-2xl p-6">
        <div className="flex justify-betweenitems-center">
          <h3>The James Hotel</h3>
          <span className="w-20 ml-12 flex justify-center items-center font-runda-light uppercase text-sm h-7 bg-gradient-to-br from-indigo-700 to-purple-600">
            4 nights
          </span>
        </div>
        <div className="bg-white mb-4 w-full mt-4 h-px mx-auto bg-opacity-50"></div>
        <div className="flex mt-2">
          <img src={pinIcon} alt="icone de marcação em mapa" />
          <p className="text-sm ml-4 font-runda-light">
            36 W 38th St, New York, NY 10018
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccomodationCard;
