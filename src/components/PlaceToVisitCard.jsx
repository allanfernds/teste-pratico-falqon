import React from "react";
import clock_icon from "../assets/icons/16px/clock_icon.svg";

function PlaceToVisitCard() {
  return (
    <div className="bg-liberty_statue bg-cover bg-center bg-no-repeat w-[100%] h-96 flex items-end rounded-sm">
      <div className="top-70 bg-custom-soft-black w-full font-runda-normal text-white text-[20pt] p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl">Lady Liberty Tour</h3>
        </div>
        <div className="bg-white mb-4 w-[100%] mt-4 h-[1px] mx-auto bg-opacity-50"></div>
        <div className="flex mt-2">
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
