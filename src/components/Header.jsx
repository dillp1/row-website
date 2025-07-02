import React from "react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-nav bg-[#11182c] flex justify-between items-center w-full px-6 lg:px-[150px] text-[24px] lg:text-[32px] h-[80px] shadow-xl fixed z-50">
      <a
        href="#hero"
        onClick={() => setIsMenuOpen(false)}
        className="font-bold"
      >
        ROW
      </a>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex flex-row gap-[50px]">
        <a href="#about">About</a>
        <a href="#demands">Demands</a>
        <a href="#intimidation">Intimidation</a>
        <a href="#press">Press</a>
        <a href="#faq">FAQ</a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle Menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#202d51] flex flex-col items-center gap-4 py-4 text-[20px] lg:hidden shadow-xl">
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#demands" onClick={() => setIsMenuOpen(false)}>
            Demands
          </a>
          <a href="#intimidation" onClick={() => setIsMenuOpen(false)}>
            Intimidation
          </a>
          <a href="#press" onClick={() => setIsMenuOpen(false)}>
            Press
          </a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
