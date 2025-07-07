import React from "react";
import { useState } from "react";

import { ChevronDown } from "lucide-react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b-[5px] py-[20px] cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">
        <p>{question}</p>
        <ChevronDown className={`w-10 h-10 ml-6 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}/>
      </div>
      {open && (
        <div className="text-[16px] sm:text-[17px] lg:text-[18px] pt-[15px] text-white">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQItem;
