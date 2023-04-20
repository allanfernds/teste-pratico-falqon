import React from "react";

function TransportVehicleIcon({ image, price, vehicle, color }) {
  return (
    <div className="flec-col">
      <button type="button">
        <div
          className={`flex justify-center items-center  ${color} rounded-full p-3 drop-shadow-md`}
        >
          <img src={image} alt={`${vehicle} image `} />
        </div>
      </button>
      <div className="mt-3 hover:text-white">
        <p className="text-center font-runda-light uppercase text-gray-300  hover:text-white text-sm">
          {price}
          <br />
          {vehicle}
        </p>
      </div>
    </div>
  );
}

export default TransportVehicleIcon;
