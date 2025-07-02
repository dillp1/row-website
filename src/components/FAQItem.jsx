import React from "react";

import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b-[5px] py-[20px] cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
        <p>{question}</p>
        <img
          src="src/assets/chevron.svg"
          alt="chevron"
          className={`w-6 h-6 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      {open && <p className="text-[16px] sm:text-[17px] lg:text-[18px] pt-[15px] text-white">{answer}</p>}
    </div>
  );
}

export default FAQItem;
