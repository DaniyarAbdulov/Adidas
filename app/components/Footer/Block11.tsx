import React from "react";
import Link from "next/link";

const Block11 = () => {
  return (
    <div className="box-border bg-slate-900 mt-10">
      <div className="flex justify-center  box-border mb-5">
        <div className=" text-white mt-10">
          <ul className="flex gap-10 text-sm font-sans">
            <li>
              <Link href="/*">
                <span>Data Settings</span>
              </Link>
            </li>
            <p>|</p>
            <li>
              <Link href="/*">
                <span>Do not sell my personal information</span>
              </Link>
            </li>
            <p>|</p>
            <li>
              <Link href="/*">
                <span>Privacy Policy</span>
              </Link>
            </li>
            <p>|</p>
            <li>
              <Link href="/*">
                <span>Terms and Conditions</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center  box-border">
        <div className=" text-white mt-10">
          <ul className="flex gap-10 text-sm font-sans">
            <li>
              
                <span>&copy; 2023 made by Dani Garrincha</span>
              
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Block11;
