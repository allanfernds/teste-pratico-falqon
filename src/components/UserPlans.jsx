import React from "react";
import CardSection from "./CardSection";
import add_new_btn from "../assets/icons/56px/add_icon.svg";

function UserPlans() {
  return (
    <section>
      <CardSection>
        <div className="flex justify-between items-center">
          <h4 className="font-runda-normal text-custom-light-blue text-2xl">
            Your Plans
          </h4>
          <img
            src={add_new_btn}
            alt="botão de adicionar novo planejamento"
            width="56px"
          />
        </div>
      </CardSection>
    </section>
  );
}

export default UserPlans;
