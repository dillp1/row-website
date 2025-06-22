import React from "react";
import "./vars.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Demands from "./components/Demands";
import Intimidation from "./components/Intimidation";
import PressReleases from "./components/PressReleases";
import FAQ from "./components/FAQ";

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
        {/* Footer */}
        <div className="footer flex flex-row justify-between items-center px-[150px]">
          <p className="text-[64px] font-semibold">ROW</p>
          <div className="flex flex-row gap-[10px]">
            <img src="src/assets/instagram.svg" />
            <img src="src/assets/mail.svg" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
