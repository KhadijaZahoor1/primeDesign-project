import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavbarPopup } from "./NavbarPopup";

export const Navbar = (prop) => {
  const [hamburgerClick, setHumburgerClick] = useState(false);
  const bg = ["white", "#ffff"].includes(prop.color)
    ? `bg-white`
    : `bg-[${prop.color}]`;

  return (
    <>
      <div className={`flex justify-between items-center xl:px-0 py-[30px] `}>
        <div className="">
          <div
            className=" cursor-pointer"
            onClick={() => setHumburgerClick(!hamburgerClick)}
          >
            <div className={`w-8 h-[1px] ${bg} `}></div>
            <div className={`w-8 h-[1px] ${bg} my-[9px]`}></div>
            <div className={`w-8 h-[1px] ${bg}`}></div>
          </div>
          {hamburgerClick && (
            <NavbarPopup onClose={() => setHumburgerClick(false)} />
          )}
        </div>
        <div>
          <Link to="/" className={``}>
            <img src={prop.logoColor} alt="" />
          </Link>
        </div>
        <div className="">
          <Link
            to="/sellproperty"
            className={`hidden md:block xl:block border border-[${
              prop.color
            }] text-[14px] text-[${
              prop.color === "white" ? "#ffff" : prop.color
            }] px-[20px] py-[14px] hover:bg-[#CA8342] hover:text-white hover:border-[#CA8342] xl:visible md:visible `}
          >
            List with us
          </Link>
        </div>
      </div>
    </>
  );
};
