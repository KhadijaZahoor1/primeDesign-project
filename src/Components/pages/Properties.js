import React from "react";
import propertiesData from "./propertiesData";
import { SlArrowRight } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const Properties = () => {
  return (
    <>
      {propertiesData.map((item, index) => {
        const { img, name, title, info, bed, bath, fit, price } = item;
        return (
          <div
            className="shadow-[_4px_4px_10px_rgba(0,0,0,0.2)] relative"
            key={index}
          >
            <Link to="/propertyinfo">
              <button className=" text-[#ffff] border rounded-[100%] border-[#ffff] hover:border-[#CA8342] hover:bg-[#CA8342] absolute top-[42%] right-[5%] ">
                <SlArrowRight className="text-[23px] m-[10px]" />
              </button>
            </Link>
            <img src={img} alt="journalImg" className="h-[263px]" />
            <div className="pt-[5px] px-[21px]">
              <div className="flex text-[14px] font-font-poppin font-light leading-[21px] text-[#0D1D2C] mt-[18px]">
                <p className="pr-[6px]">{name}</p>
              </div>
              <h4 className="text-[20px] text-[#0D1D2C] leading-[30px] font-normal font-font-poppin pt-[6px]">
                {title}
              </h4>
              <p className="mt-[10px] text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-normal ">
                {info}
              </p>
              <h6 className="text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-normal py-[10px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-3">
                <span className="flex items-center gap-2">
                  <IoBedOutline className="text-[20px]" />
                  {bed}
                </span>
                <span className="flex items-center gap-2 md:hidden xl:flex">
                  {" "}
                  <BiBath className="text-[20px]" /> {bath}
                </span>
                <span className="flex items-center gap-2">
                  <HiOutlineCodeBracketSquare className="text-[20px]" /> {fit}
                </span>
              </h6>
              <div className="flex justify-between border-t border-[#0D1D2C] py-2 items-center">
                <h5>{price}</h5>
                <CiHeart className="text-[#CA8342] text-[30px]" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
