import React from "react";
import clock_icon from "../assets/icons/16px/clock_icon.svg";

function PlaceToVisitCard() {
  return (
    <div className="my-3 bg-liberty_statue bg-cover bg-center bg-no-repeat w-full h-[380px] flex items-end rounded-sm">
      <div className="backdrop-blur-md bg-opacity-70 bg-black w-full font-runda-normal text-white text-[20pt] p-6 mb-3">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">Lady Liberty Tour</h3>
        </div>
        <div className="bg-white mb-4 w-full mt-4 h-[1px] mx-auto bg-opacity-50"></div>
        <div className="flex">
          <img src={clock_icon} alt="icone de marcação em mapa" />
          <p className="text-[10pt] ml-4 font-runda-light">
            Thursday 4th Jan at 09.15
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlaceToVisitCard;
