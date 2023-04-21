import React from "react";
import train_icon from "../assets/icons/56px/train_icon.svg";
import taxi_icon from "../assets/icons/56px/taxi_icon.svg";
import TransportVehicleIcon from "./TransportVehicleIcon";

function DestinationForm() {
  return (
    <div className="my-3 bg-gradient-to-br from-indigo-700 min-h-[335px] to-purple-600 px-6 pt-5  rounded-sm">
      <form>
        <div className="flex-col justify-center items-center">
          <div className="flex my-2 bg-white">
            <p className="w-[50px] bg-white text-custom-light-blue p-3 w-">
              From
            </p>
            <input
              type="text"
              className="p-3 w-full"
              placeholder="JFK Airport "
            />
          </div>
          <div className="flex my-3 bg-white">
            <p className="w-[55px] bg-white text-custom-light-blue p-3">To</p>
            <input
              type="text"
              className="p-3 w-full"
              placeholder="36 W 38th St, New York, NY 1008"
            />
          </div>
        </div>
      </form>
      <div className="bg-custom-line-grey my-5 w-full h-[1px]" />
      <div className="flex justify-between gap-2 flex-wrap h-full">
        <TransportVehicleIcon
          image={taxi_icon}
          price="$65-$105"
          vehicle="TAXI"
          color="bg-custom-bright-purple"
        />
        <TransportVehicleIcon
          image={train_icon}
          price="$20-$30"
          vehicle="SUBWAY"
          color="bg-custom-light-blue"
        />
        <TransportVehicleIcon
          image={taxi_icon}
          price="$45-$65"
          vehicle="UBER"
          color="bg-indigo-500"
        />
        <TransportVehicleIcon
          image={taxi_icon}
          price="$45-$65"
          vehicle="UBER"
          color="bg-gray-500"
        />
      </div>
    </div>
  );
}

export default DestinationForm;
