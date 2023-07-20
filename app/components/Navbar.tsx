import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-center font-mono uppercase text-sm bg-black text-white border-b-4 border-b-slate-900 text-center">
        <div className="flex flex-row">
          <div>score up to 60% off</div>
          <div className="flex justify-center">
          <svg fill="currentColor" viewBox="0 0 16 16" height={20}>
            <path
              fillRule="evenodd"
              d="M8 4a.5.5 0 01.5.5v5.793l2.146-2.147a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L7.5 10.293V4.5A.5.5 0 018 4z"
            />
          </svg>
          </div>
        </div>
      </div>
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
    </header>
  );
};

export default Navbar;
