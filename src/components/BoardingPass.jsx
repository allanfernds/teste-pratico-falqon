import React from "react";
import airplane_icon from "../assets/icons/24px/grey_airplane_icon.svg";

function BoardingPass() {
  return (
    <div className="w-full bg-custom-soft-black relative top-[120px] bg-opacity-95 text-white rounded-sm shadow-sm">
      <div className="flex-col justify-center items-center content-center">
        <div className="flex">
          <div className="p-2 pt-3 text-left  bg-custom-vivid-green w-[50%] rounded-tl-sm">
            <p className="font-runda-normal text-xs">BOARDING PASS</p>
          </div>
          <div className="p-2 pt-3 text-center bg-custom-soft-black w-[50%] rounded-tr-sm">
            <p className="font-runda-normal text-xs">GATE CLOSES AT 10.00</p>
          </div>
        </div>
        <div className="flex pt-5 pl-3 pr-4 justify-between items-center h-20">
          <div>
            <span className="font-runda-normal text-5xl">LHR</span>
          </div>
          <div className="flex justify-around">
            <div className="flex justify-center items-center">
              <div className="bg-custom-line-grey mb-3 w-5 h-[1px]" />
              <div className="mx-2 left-20 mb-3">
                <img
                  className="rotate-45"
                  src={airplane_icon}
                  alt="icone de um avião"
                />
              </div>
              <div className="bg-custom-line-grey mb-3 w-5 h-[1px]" />
            </div>
          </div>
          <div>
            <span className="font-runda-normal text-5xl">JFK</span>
          </div>
        </div>
        <div className="flex justify-between px-4 font-runda-light text-[10pt]">
          <span>London, England</span>
          <span>New York City, USA</span>
        </div>
        <div
          id="linha"
          className="bg-custom-line-grey mb-3 w-[90%] mt-4 h-[1px] mx-auto bg-opacity-50"
        ></div>
        <div class="grid grid-cols-3 pt-3">
          <div className=" h-20">
            <p className="uppercase font-runda-light text-[11pt] text-center">
              flight
            </p>
            <p className=" font-runda-light text-[14pt] text-center">VA2501</p>
          </div>
          <div className=" h-20">
            <p className="uppercase font-runda-light text-[11pt] text-center">
              seat
            </p>
            <p className=" font-runda-light text-[14pt] text-center">35a</p>
          </div>
          <div>
            <p className="uppercase font-runda-light text-[11pt] text-center">
              gate
            </p>
            <p className=" font-runda-light text-[14pt] text-center">34B</p>
          </div>
        </div>
        <div className="grid grid-cols-3 p">
          <div className="col-span-1 h-20">
            <p className="uppercase font-runda-light text-[11pt] text-center">
              flight
            </p>
            <p className=" font-runda-light text-[14pt] text-center">VA2501</p>
          </div>
          <div className="col-span-2 h-20">
            <button
              type="button"
              className="rounded-sm uppercase bg-custom-dark-purple ml-4 text-[11px] w-[80%] h-14"
            >
              view boarding pass
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardingPass;
