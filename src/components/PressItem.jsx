import React from "react";

function PressItem({ day, date, title, source, link }) {
  return (
    <div className="flex flex-row items-center">
      {/* date */}
      <div className="flex flex-col items-center leading-[1] min-w-[60px]">
        <p className="text-[52px] sm:text-[52px] lg:text-[64px]">{day}</p>
        <p className="text-[14px] lg:text-[20px]">{date}</p>
      </div>

      {/* divider */}
      <div className="w-[4px] h-[100px] bg-white rotate-[15deg] mx-6 shrink-0"></div>

      {/* info */}
      <div>
        <a href={link} className="hover:underline">
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold">{title}</p>
          <p className="text-[18px] sm:text-[20px] lg:text-[24px] italic">{source}</p>
        </a>
      </div>
    </div>
  );
}

export default PressItem;
