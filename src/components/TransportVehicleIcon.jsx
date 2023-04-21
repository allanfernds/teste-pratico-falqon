import React from "react";

function TransportVehicleIcon({ image, price, vehicle, color }) {
  return (
    <div className="flex-col">
      <button type="button">
        <div
          className={`flex justify-center items-center  ${color} rounded-full p-4 drop-shadow-md`}
        >
          <img
            src={image}
            alt={`${vehicle} image`}
            className="h-[31px] w-[31px]"
          />
        </div>
      </button>
      <div className="mt-3 hover:text-white">
        <p className="text-center font-runda-normal uppercase text-gray-300  hover:text-white text-sm">
          {price}
          <br />
          {vehicle}
        </p>
      </div>
    </div>
  );
}

export default TransportVehicleIcon;
