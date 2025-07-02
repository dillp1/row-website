import React from "react";

import instagramIcon from "../assets/instagram.svg";
import mailIcon from "../assets/mail.svg";

function Footer() {
  return (
    <footer className="footer flex flex-col sm:flex-row justify-between items-center px-6 py-4 md:px-[75px] lg:px-[150px] gap-4 sm:gap-0">
      <p className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold">ROW</p>
      <div className="flex flex-row gap-[20px]">
        <img src={instagramIcon} className="w-8 h-8 sm:w-10 sm:h-10" />
        <img src={mailIcon} className="w-8 h-8 sm:w-10 sm:h-10" />
      </div>
    </footer>
  );
}

export default Footer;
