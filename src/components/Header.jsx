import React from "react";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center px-[150px] text-[32px]">
      <p className="font-bold">ROW</p>
      <nav className="flex flex-row gap-[50px]">
        <p>Demands</p>
        <p>Intimidation</p>
        <p>Press</p>
        <p>FAQ</p>
        <p>Contact</p>
      </nav>
    </header>
  );
}

export default Header;
