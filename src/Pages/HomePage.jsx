import React from "react";
import HeroSection from "../components/HeroSection";

import UserPlans from "../components/UserPlans";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <header className="bg-custom-bg-purple">
        <HeroSection />
      </header>
      <main className="bg-custom-bg-purple">
        <UserPlans />
        <br />
        <br />
        <br />
        <br />
        <Navbar />
      </main>
    </>
  );
}

export default HomePage;
