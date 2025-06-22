import React from "react";
import "./vars.css";

import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Demands from "./components/Demands";
import Intimidation from "./components/Intimidation";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b-[5px] py-[20px] cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center text-[24px] font-semibold">
        <p>{question}</p>
        <img
          src="src/assets/chevron.svg"
          alt="chevron"
          className={`w-6 h-6 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <p className="text-[18px] pt-[15px] text-white">{answer}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="text-white bg-custom min-h-screen">
      <main className="flex flex-col space-y-[70px] pt-[70px]">
        <Header />
        <Hero />
        <Demands />
        <Intimidation />
        {/* Press Releases */}
        <div className="flex flex-col justify-between px-[150px]">
          <p className="text-[64px] font-semibold">Press Releases</p>
          <div className="flex flex-col gap-[18px]">
            <div className="flex flex-row items-center">
              <div className="flex flex-col leading-[1]">
                <p className="text-[64px]">01</p>
                <p className="text-[20px]">MAY 25'</p>
              </div>
              <div className="w-[5px] h-[100px] bg-white rotate-[15deg] mx-6"></div>
              <div>
                <p className="text-[24px] font-semibold">
                  Purdue RAs discuss unionizing as overcrowded dorms cause
                  concern
                </p>
                <p className="text-[20px] italic">The Exponent</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col leading-[1]">
                <p className="text-[64px]">01</p>
                <p className="text-[20px]">MAY 25'</p>
              </div>
              <div className="w-[5px] h-[100px] bg-white rotate-[15deg] mx-6"></div>
              <div>
                <p className="text-[24px] font-semibold">
                  Purdue RAs discuss unionizing as overcrowded dorms cause
                  concern
                </p>
                <p className="text-[20px] italic">The Exponent</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col leading-[1]">
                <p className="text-[64px]">01</p>
                <p className="text-[20px]">MAY 25'</p>
              </div>
              <div className="w-[5px] h-[100px] bg-white rotate-[15deg] mx-6"></div>
              <div>
                <p className="text-[24px] font-semibold">
                  Purdue RAs discuss unionizing as overcrowded dorms cause
                  concern
                </p>
                <p className="text-[20px] italic">The Exponent</p>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="flex flex-col justify-between px-[150px]">
          <p className="text-[64px] font-semibold">FAQ</p>
          <FAQItem
            question="What does the acronym ROW stand for?"
            answer="ROW stands for ResLife Organized Workers—the official name of our union."
          />
          <FAQItem
            question="What does the acronym ROW stand for?"
            answer="ROW stands for ResLife Organized Workers—the official name of our union."
          />
          <FAQItem
            question="What does the acronym ROW stand for?"
            answer="ROW stands for ResLife Organized Workers—the official name of our union."
          />
        </div>
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
