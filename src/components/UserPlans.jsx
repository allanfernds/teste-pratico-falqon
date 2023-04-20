import React from "react";

import add_new_btn from "../assets/icons/56px/add_icon.svg";
import AccomodationCard from "./AccomodationCard";
import TransportationCard from "./TransportationCard";
import PlaceToVisitCard from "./PlaceToVisitCard";

function UserPlans() {
  return (
    <section className="bg-custom-bg-purple px-5 flex-col">
      <div className="flex justify-between items-center">
        <h4 className="font-runda-normal text-custom-light-blue text-2xl">
          Your Plans
        </h4>
        <button>
          <img
            src={add_new_btn}
            alt="botão de adicionar novo planejamento"
            width="56px"
          />
        </button>
      </div>

      <AccomodationCard />
      <TransportationCard />
      <PlaceToVisitCard />
    </section>
  );
}

export default UserPlans;
