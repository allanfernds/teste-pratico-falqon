import React from "react";
import BoardingPass from "./BoardingPass";

function HeroSection() {
  return (
    <section id="hero">
      <div className="flex-col">
        <div class="bg-hero bg-cover bg-center bg-no-repeat h-96 w-full px-5">
          <h1 className="relative top-[100px] font-runda-light text-white text-5xl">
            Let's get <br />
            you there...
          </h1>
          <BoardingPass />
        </div>
        <div class="h-[180px] bg-custom-bg-purple"></div>
      </div>
    </section>
  );
}

export default HeroSection;
