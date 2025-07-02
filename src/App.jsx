import React from "react";
import "./vars.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Demands from "./components/Demands";
import Intimidation from "./components/Intimidation";
import PressReleases from "./components/PressReleases";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-custom min-h-screen text-white">
      <main className="flex flex-col space-y-[50px]">
        <Header />
        <Hero />
        <About />
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
