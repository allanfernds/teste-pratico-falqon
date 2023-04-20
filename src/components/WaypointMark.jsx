import React from "react";
import pencil_icon from "../assets/icons/36px/pencil_icon.svg";

function WaypointMark({ vehicle, street, referencePoint, destination }) {
  return (
    <div className="flex content-start items-start gap-2 ">
      <div className="flex-col">
        <div className="flex justify-center items-center border-2 border-white w-9 h-9  rounded-full ">
          {destination ? (
            <div className="bg-custom-light-blue rounded-full h-6 w-6"></div>
          ) : (
            <div className="bg-custom-bright-purple rounded-full h-6 w-6"></div>
          )}
        </div>
        {destination ? (
          ""
        ) : (
          <div className="bg-white  w-[2px] h-24 mx-auto bg-opacity-50"></div>
        )}
      </div>
      <div className="flex items-start flex-wrap">
        <div className="flex-col ml-2 justify-between  text-white">
          <h4 className="font-runda-normal hover:text-purple-700 text-2xl">
            {destination ? "Destination" : vehicle}
          </h4>
          <p className="text-xs w-48 font-runda-normal">
            {street} <br /> {referencePoint}
          </p>
        </div>
        <button>
          <img
            className="w-[36px] h-[36px]"
            src={pencil_icon}
            alt="icone de lapis para edição de rota"
          />
        </button>
      </div>
    </div>
  );
}

export default WaypointMark;
