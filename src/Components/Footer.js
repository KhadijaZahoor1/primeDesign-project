import React from "react";
import { Link } from "react-router-dom";
import logoFooter from "../assets/images/logoFooter.png";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#0D1D2C] xl:pt-[100px] pt-[61px] md:pt-[100px] md:px-[80px] xl:p-0">
        <footer className="container xl:px-[100px] mx-auto xl:flex flex-col md:flex xl:flex-row md:flex-row">
          <div className="xl:w-1/3 md:w-[50%]">
            <Link to="/" className="">
              {" "}
              <img
                src={logoFooter}
                alt=""
                className="mx-auto md:mx-0 xl:mx-0"
              />
            </Link>
            <div className="text-[#EDF0F2] text-[14px] leading-[21px] font-light font-font-poppin mt-[48px] text-center md:text-start xl:text-start ">
              <ul className="">
                <li>
                  {" "}
                  <Link className="hover:text-[#CA8342]">
                    Prime properties for sale
                  </Link>
                </li>
                <li className="py-1">
                  {" "}
                  <Link className="hover:text-[#CA8342]">
                    Prime properties for rent
                  </Link>
                </li>
                <li className="py-1">
                  {" "}
                  <Link className="hover:text-[#CA8342]">
                    Off-market properties
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link className="hover:text-[#CA8342]">Journal</Link>
                </li>
              </ul>
            </div>
            <div className="mt-[48px] flex items-center gap-[15px] justify-center xl:justify-start xl:flex md:flex">
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
          <div className="xl:w-1/3 md:w-1/3 "></div>
          <div className="text-[#EDF0F2] xl:w-1/3 md:w-[50%]">
            <div className="xl:w-[269px]">
              <h3 className="pt-[38px] xl:pt-0 md:pt-0 text-[20px] leading-[30px] font-font-poppin text-[#EDF0F2] font-normal text-center xl:text-start md:text-start ">
                Luxury property and global real estate insights from our experts
              </h3>
              <div className="grid gap-[10px] mt-[30px]">
                <input
                  placeholder="Your name"
                  className="bg-transparent focus:outline-none font-font-poppin text-[12px] leading-[18px] text-[#B4B9BE] font-normal py-[10px] border-[#B4B9BE] border px-[19px]"
                />
                <input
                  placeholder="Your email"
                  className="bg-transparent focus:outline-none font-font-poppin text-[12px] leading-[18px] text-[#B4B9BE] font-normal py-[10px] border-[#B4B9BE] border px-[19px]"
                />

                <button className="hover:bg-[#cf8e52] text-center text-[12px] leading-[18px] font-font-poppin font-normal bg-[#CA8342] block py-[10px]">
                  Subscribe
                </button>

                <label className="checkboxEdit appearance-none text-[10px] leading-[16px] text-[#EDF0F2] font-normal font-font-poppin">
                  <input
                    type="checkbox"
                    className="bg-transparent font-font-poppin text-[12px] leading-[18px] text-[#B4B9BE] font-normal py-[10px]"
                  />
                  <span className="checkmark"></span>I accept to be contacted by
                  e-mail in order to have information about the hotel
                </label>
              </div>
            </div>
          </div>
        </footer>
        <div className="container mx-auto opacity-25 border-t border-[#B4B9BE] xl:mt-[80px] mt-[40px] md:mt-[80px]">
          <p className="py-[20px] text-[12px] text-[#EDF0F2] font-font-poppin font-normal leading-[18px] text-center">
            Betterhomes Properties 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};
