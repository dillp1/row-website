import React from "react";

function PressItem({ day, date, title, source }) {
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col leading-[1]">
        <p className="text-[64px]">{day}</p>
        <p className="text-[20px]">{date}</p>
      </div>
      <div className="w-[5px] h-[100px] bg-white rotate-[15deg] mx-6"></div>
      <div>
        <p className="text-[24px] font-semibold">{title}</p>
        <p className="text-[20px] italic">{source}</p>
      </div>
    </div>
  );
}

export default PressItem;
