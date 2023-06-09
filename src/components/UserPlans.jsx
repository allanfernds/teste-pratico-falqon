import React from "react";

import add_new_btn from "../assets/icons/56px/add_icon.svg";
import AccomodationCard from "./AccomodationCard";
import TransportationCard from "./TransportationCard";
import PlaceToVisitCard from "./PlaceToVisitCard";
import DestinationForm from "./DestinationForm";

function UserPlans() {
  return (
    <section className="bg-custom-bg-purple px-5 flex-col">
      <div className="flex justify-between items-center">
        <h4 className="font-runda-normal relative top-3 text-custom-light-blue text-2xl">
          Your Plans
        </h4>
        <button>
          <img
            className="relative top-3"
            src={add_new_btn}
            alt="botão de adicionar novo planejamento"
            width="56px"
          />
        </button>
      </div>

      <AccomodationCard />
      <TransportationCard />
      <PlaceToVisitCard />
      <DestinationForm />
    </section>
  );
}

export default UserPlans;
