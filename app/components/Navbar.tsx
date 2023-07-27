"use client";
import Link from "next/link";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import classes from "./Navbar.module.css";
interface Props {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ setIsMenuOpen }: Props) => {
  return (
    <div className={`sticky ${classes.sticky}`}>
      <div>
        <div className="flex flex-col box-border bg-slate-50">
          <div className="box-border">
            <div className="flex justify-end box-border">
              <ul className="flex font-mono text-xs mt-2 gap-5">
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
            </div>
            <div className="flex items-center justify-between mr-5 ml-5 mb-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/300px-Adidas_isologo.svg.png"
                width={60}
              />
              <ul className="flex  font-light text-sm gap-9 self-end uppercase">
                <p className="font-bold">men</p>
                <p className="font-bold">women</p>
                <p className="font-bold">kids</p>
                <p>back to school</p>
                <p>sale</p>
                <p>3 stripe life</p>
              </ul>
              <div className="flex gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-200 focus:outline-none py-1 px-1 pl-3"
                  />
                </div>
                <div className="flex ">
                  <svg
                    width="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3C5.79086 3 4 4.79086 4 7C4 9.20914 5.79086 11 8 11ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11 14C11.5523 14 12 14.4477 12 15V21H14V15C14 13.3431 12.6569 12 11 12H5C3.34315 12 2 13.3431 2 15V21H4V15C4 14.4477 4.44772 14 5 14H11Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 7H20V9H22V11H20V13H18V11H16V9H18V7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex">
                  <svg
                    width="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="flex ">
                  <svg
                    width="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
