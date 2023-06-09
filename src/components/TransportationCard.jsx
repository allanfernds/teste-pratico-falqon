import React from "react";
import WaypointMark from "./WaypointMark";
import people_icon from "../assets/images/people_icon.png";
function TransportationCard() {
  return (
    <div className="bg-driver bg-cover bg-no-repeat rounded-sm">
      <div className="flex justify-center  items-center py-8 bg-custom-soft-black bg-gradient-to-bl bg-opacity-90 p-5 rounded-sm">
        <ol className="flex-col">
          <li>
            <div className="flex content-start items-start gap-2 flex-wrap mb-8">
              <div className="flex-col gap-0">
                <div className="flex justify-center items-center border-2 border-white w-9 h-9  rounded-full ">
                  <img src={people_icon} alt="" />
                </div>
              </div>
              <div className="flex items-start flex-wrap">
                <p className="text-white ml-2 text-sm w-52 font-runda-normal">
                  Ryan from Corey Car Services is confirmed for pickup at
                  <span className="text-custom-vivid-green"> 15.40</span>.
                </p>
              </div>
            </div>
            <WaypointMark
              vehicle="Pickup"
              street="John F. Kennedy International "
              referencePoint="Airport"
            />
            <WaypointMark
              destination={true}
              street="36 W 38th Street"
              referencePoint="New York, NY 10018"
            />
          </li>
        </ol>
      </div>
    </div>
  );
}

export default TransportationCard;
