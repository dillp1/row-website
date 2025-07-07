import React from "react";

import { Mail, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="footer flex flex-col sm:flex-row justify-between items-center px-6 py-4 md:px-[75px] lg:px-[150px] gap-4 sm:gap-0">
      <p className="text-[40px] sm:text-[48px] lg:text-[64px] font-semibold">ROW</p>
      <div className="flex flex-row gap-[20px]">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
          <Instagram className="w-full h-full" />
        </div>
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
          <Mail className="w-full h-full" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
