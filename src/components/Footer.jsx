import React from "react";

import instagramIcon from "../assets/instagram.svg";
import mailIcon from "../assets/mail.svg";

function Footer() {
  return (
    <footer className="footer flex flex-row justify-between items-center px-[150px]">
      <p className="text-[64px] font-semibold">ROW</p>
      <div className="flex flex-row gap-[10px]">
        <img src={instagramIcon} />
        <img src={mailIcon} />
      </div>
    </footer>
  );
}

export default Footer;
