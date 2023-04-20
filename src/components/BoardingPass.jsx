import React from "react";
import airplane_icon from "../assets/icons/24px/grey_airplane_icon.svg";

function BoardingPass() {
  return (
    <div class="h-[279px]  w-full  bg-custom-soft-black relative top-[212px]  z-20 rounded-lg bg-opacity-95 text-white">
      <div className="flex-col">
        <div className="flex">
          <div className="p-2 pt-3 text-left  bg-custom-vivid-green w-[50%]">
            <p className="font-runda-normal text-xs">BOARDING PASS</p>
          </div>
          <div className="p-2 pt-3 text-center bg-custom-soft-black w-[50%]">
            <p className="font-runda-normal text-xs">GATE CLOSES AT 10.00</p>
          </div>
        </div>
        <div className="flex pt-5 px-3 justify-around items-center">
          <div className="">
            <span className="font-runda-normal text-[4rem]">LHR</span>
          </div>
          <div>
            <div className="flex justify-center items-center">
              <div className="bg-custom-line-grey mb-3 w-6 h-[1px]" />
              <div className="ml-2 mr-3  mb-3">
                <img
                  className="rotate-45"
                  src={airplane_icon}
                  alt="icone de um avião"
                />
              </div>
              <div className="bg-custom-line-grey mb-3 w-6 h-[1px]" />
            </div>
          </div>
          <div className="">
            <span className="font-runda-normal text-[4rem]">JFK</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardingPass;
