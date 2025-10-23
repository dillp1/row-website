import React from "react";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#initiatives", label: "Initiatives" },
    { href: "#about", label: "About" },
    { href: "#demands", label: "Demands" },
    { href: "#intimidation", label: "Intimidation" },
    { href: "#press", label: "Press" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="header-nav fixed left-0 right-0 top-0 z-50 bg-[#11182c] shadow-xl">
      <div className="mx-auto flex h-[80px] w-full items-center justify-between gap-4 px-6 md:px-10 xl:px-16">
        <a
          href="#hero"
          onClick={() => setIsMenuOpen(false)}
          className="text-[22px] font-bold tracking-wide md:text-[24px]"
        >
          ROW
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-[18px] xl:gap-10 xl:text-[20px]">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
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
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#202d51] shadow-xl">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 px-6 py-4 text-[18px] md:px-10 xl:px-16">
            {navItems.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setIsMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
