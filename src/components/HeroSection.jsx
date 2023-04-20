import React from "react";
import BoardingPass from "./BoardingPass";

function HeroSection() {
  return (
    <section id="hero">
      <div className="flex-col">
        <div class="bg-hero bg-cover bg-center bg-no-repeat h-96 w-full px-5">
          <BoardingPass />
        </div>
        {/* <div class="h-[137px] bg-custom-bg-purple"></div> */}
      </div>
    </section>
  );
}

export default HeroSection;
