import React from "react";
import "./vars.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Demands from "./components/Demands";
import Intimidation from "./components/Intimidation";
import PressReleases from "./components/PressReleases";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-white bg-custom min-h-screen">
      <main className="flex flex-col space-y-[70px] pt-[70px]">
        <Header />
        <Hero />
        <Demands />
        <Intimidation />
        <PressReleases />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;
