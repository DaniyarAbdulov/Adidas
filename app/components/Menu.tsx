"use client";
import React, { useState } from "react";

interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = ({setIsMenuOpen}: Props) => {

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="flex justify-center bg-gray-950 h-9 abs">
      <button onClick={toggleMenu} className="">
        <div className="flex  text-white">
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
      </button>
      
    </div>
  );
};

export default Menu;
