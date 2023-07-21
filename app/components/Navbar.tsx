"use client";
import Link from "next/link";
import Menu from "./Menu";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      const threshold = 100;
      setIsSticky(offset <= threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <Menu />
      <div className="flex justify-center font-mono uppercase text-sm bg-black text-white border-b-4 border-b-slate-900 text-center"></div>
      <ul className="flex justify-end font-mono text-xs mt-2 gap-5">
        <li>
          <Link href="/1">help</Link>
        </li>
        <li>
          <Link href="/1">orders and returns</Link>
        </li>
        <li>
          <Link href="/1">join adiClub</Link>
        </li>
        <li>
          <Link href="/1">
            <button>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_the_United_States.png/640px-Flag_of_the_United_States.png"
                alt="usa flag"
                className="w-5 h-auto"
              />
            </button>
          </Link>
        </li>
      </ul>
      <div className="flex justify-between ml-5 mr-5">
        <p>LOGO</p>
        <p>Navbar2</p>
        <p>SEARCHBAR</p>
        <p>ICONS</p>
      </div>
    </header>
  );
};

export default Navbar;
