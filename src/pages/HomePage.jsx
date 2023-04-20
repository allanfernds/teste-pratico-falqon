import React from "react";
import HeroSection from "../components/HeroSection";

import UserPlans from "../components/UserPlans";

function HomePage() {
  return (
    <>
      <header className="bg-custom-bg-purple">
        <HeroSection />
      </header>
      <main>
        <UserPlans />
      </main>
    </>
  );
}

export default HomePage;
