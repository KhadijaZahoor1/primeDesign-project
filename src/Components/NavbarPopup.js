import React from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import logoClr from "../assets/images/prime-logo.svg";
import { SlArrowLeft } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";

export const NavbarPopup = ({ onClose }) => {
  return (
    <>
      <div className=" top-0 left-0 right-0 bottom-0 z-[1] bg-[#fffffffb] fixed">
        <div className="container flex justify-between items-center xl:px- py-[30px]">
          <div>
            <button
              className="border rounded-[100%] border-[#CA8342] text-[#CA8342]"
              onClick={onClose}
            >
              <RxCross1 className="m-[10px] text-[24px]" />
            </button>
          </div>
          <div>
            <Link to="/" className="">
              <img src={logoClr} alt="" />
            </Link>
          </div>
          <div className="">
            <Link
              to="/sellproperty"
              className={`hidden xl:block md:block border border-[#CA8342] text-[14px] text-[#CA8342] px-[20px] py-[14px] xl:visible md:visible `}
            >
              List with us
            </Link>
          </div>
        </div>
        <div className="container mt-[120px]">
          <div className="xl:text-[42px] md:text-[42px] text-[28px] font-font-quiche font-light xl:leading-[52px] md:leading-[52px] leading-[32px] text-[#0D1D2C] italic">
            <ul className="">
              <li>
                {" "}
                <Link to="/sellproperty">Prime properties for sale</Link>
              </li>
              <li className="mt-6">
                {" "}
                <Link to="/primeuae">Prime properties for rent</Link>
              </li>
              <li className="mt-6">
                {" "}
                <Link to="/propertyinfo">Off-market properties</Link>
              </li>
              <li className="mt-6">
                {" "}
                <Link to="/blog">Journal</Link>
              </li>
            </ul>
          </div>
          <div className="mt-[42px]">
            <Link className="flex items-center gap-2" onClick={onClose} to="/">
              <span className="">
                {" "}
                <SlArrowLeft className="text-[#CA8342] text-[15px]" />
              </span>
              <p className="text-[20px] font-font-poppin text-[#CA8342] font-normal leading-[30px]">
                Return back to Betterhomes
              </p>
            </Link>
          </div>{" "}
          <div className="flex items-center gap-[15px] justify-end mt-[100px]">
            <Link>
              {" "}
              <FaInstagram className="text-[#CA8342] text-[30px]" />
            </Link>
            <Link>
              {" "}
              <p className="text-[#CA8342] text-[14px] leading-[21px] font-light font-font-poppin ">
                Follow us for latest updates
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
