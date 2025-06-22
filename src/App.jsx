import React from "react";
import "./vars.css";

import { useState } from "react";

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
        {/* Header Section */}
        <div className="flex flex-row justify-between items-center px-[150px] text-[32px]">
          <p className="font-bold">ROW</p>
          <div className="flex flex-row gap-[50px]">
            <p>Demands</p>
            <p>Intimidation</p>
            <p>Press</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex flex-row justify-between items-center px-[150px]">
          <div className="flex flex-col space-y-[25px]">
            <p className="text-[96px] font-bold leading-tight">
              ResLife Organized Workers
            </p>
            <p className="text-[24px]">
              Representing all Resident Assistants and Residential Education
              Assistants at Purdue University
            </p>
            <div className="flex flex-row items-center gap-[15px]">
              <button className="btn-primary-yellow text-black w-[275px] h-[80px] rounded-[40px] text-[24px]">
                About Us
              </button>
              <button className="btn-secondary-yellow text-white w-[275px] h-[80px] rounded-[40px] text-[24px]">
                Sign A Card
              </button>
            </div>
          </div>
          <img src="/src/assets/row-logo.png" className="" />
        </div>
        {/* Demands Section */}
        <div className="flex flex-col px-[150px]">
          <p className="text-[64px] font-semibold pb-[25px]">We Demand...</p>
          <div className="grid grid-cols-2 gap-[40px]">
            <div className="flex flex-row gap-[15px]">
              <img src="src/assets/MetNotification.svg" className="" />
              <p>
                ... that any ResLife student staff never be assigned to share a
                living space with residents or a bedroom with any other
                individuals.
              </p>
            </div>
            <div className="flex flex-row gap-[15px]">
              <img src="src/assets/MetNotification.svg" className="" />
              <p>
                ... that any ResLife student staff never be assigned to share a
                living space with residents or a bedroom with any other
                individuals.
              </p>
            </div>
            <div className="flex flex-row gap-[15px]">
              <img src="src/assets/AddressedNotification.svg" className="" />
              <p>
                ... that any ResLife student staff never be assigned to share a
                living space with residents or a bedroom with any other
                individuals.
              </p>
            </div>
            <div className="flex flex-row gap-[15px]">
              <img src="src/assets/AddressedNotification.svg" className="" />
              <p>
                ... that any ResLife student staff never be assigned to share a
                living space with residents or a bedroom with any other
                individuals.
              </p>
            </div>
            <div className="flex flex-row gap-[15px]">
              <img src="src/assets/AddressedNotification.svg" className="" />
              <p>
                ... that any ResLife student staff never be assigned to share a
                living space with residents or a bedroom with any other
                individuals.
              </p>
            </div>
            <div className="flex flex-row gap-[15px]">
              <img src="src/assets/UnaddressedNotification.svg" className="" />
              <p>
                ... that any ResLife student staff never be assigned to share a
                living space with residents or a bedroom with any other
                individuals.
              </p>
            </div>
          </div>
        </div>
        {/* Intimidation Reporting */}
        <div className="flex flex-row justify-between items-center px-[150px] gap-[50px]">
          <div className="space-y-[24px]">
            <p className="text-[64px] font-semibold">Intimidation Reporting</p>
            <p className="text-[24px]">
              Has a professional staff member made you feel uncomfortable or
              threatened regarding your participation in union activity?{" "}
              <span className="font-bold">Let us know!</span> It is illegal for
              supervisors to threaten or coerce you regarding your participation
              in union activity.
            </p>
            <button className="btn-primary-yellow w-[275px] h-[80px] rounded-[40px] text-[24px]">
              Email Us
            </button>
          </div>
          <div>
            <img src="src/assets/IntimidationReporting.png" className="" />
          </div>
        </div>
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
