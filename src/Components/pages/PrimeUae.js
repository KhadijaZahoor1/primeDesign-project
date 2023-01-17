import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RiArrowDownSLine, RiHeartFill } from "react-icons/ri";
import { Navbar } from "../Navbar";
import { Properties } from "./Properties";
import { Coummnities } from "./Communities";
import logoClr from "../../assets/images/prime-logo.svg";
import { ContactForm } from "./ContactForm";

export const PrimeUae = () => {
  const color = "#0D1D2C";
  const hoverclr = "#ffffff";
  const logoColor = logoClr;
  const position = "";
  return (
    <>
      {/* header */}
      <div className="bg-[#FAFAFA] ">
        <div className="container">
          <Navbar
            color={color}
            logoColor={logoColor}
            position={position}
            hoverclr={hoverclr}
          />
        </div>
      </div>
      {/* filter form */}
      <div className="container mx-auto xl:py-[80px] md:py-[53px] py-[29px]">
        <div className="grid grid-cols-2 xl:grid-flow-col md:grid-cols-2 py-[37px] px-[30px] gap-[30px] bg-white shadow-[_0px_20px_40px_rgba(0,0,0,0.2)]">
          <select className="focus:outline-none text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-white">
            <option className="">sale</option>
            <option></option>
            <option></option>
          </select>
          <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-white">
            <option>Property type</option>
            <option></option>
            <option></option>
          </select>
          <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-white">
            <option>Enter location</option>
            <option></option>
            <option></option>
          </select>
          <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-white">
            <option>AED</option>
            <option></option>
            <option></option>
          </select>
          <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-white">
            <option>Price from</option>
            <option></option>
            <option></option>
          </select>
          <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-white">
            <option>Price to</option>
            <option></option>
            <option></option>
          </select>
          <div className=" xl:w-full md:w-[610px] w-[297px]">
            <button className="bg-[#CA8342] text-[14px] text-[#EDF0F2] leading-[20px] py-[14px] px-[20px] font-normal font-font-poppin w-[100%] ">
              Search
            </button>
          </div>
        </div>
      </div>
      {/* prime promotions */}
      <div className="container">
        <h1 className="xl:text-[50px] md:text-[50px] text-[40px] leading-[40px] text-[#0D1D2C] font-thin font-font-quiche xl:leading-[61px] md:leading-[61px] italic text-center md:text-center md:px-[80px] xl:p-0 p-0 xl:text-start">
          PRIME PROPERTIES FOR SALE IN UAE
        </h1>
        <div className="flex xl:justify-between xl:mt-[29px] md:mt-[29px] mt-[41px] flex-col md:flex-row md:justify-center md:gap-[45px] xl:flex-row gap-6">
          <p className="text-[20px] text-[#0D1D2C] leading-[30px] font-normal font-font-poppin xl:text-start text-center">
            <b>32 </b>Properties found
          </p>
          <p className="text-[20px] text-[#0D1D2C] leading-[30px] font-normal font-font-poppin flex items-center gap-2 text-center xl:text-start">
            Sort: Newest{" "}
            <span>
              <RiArrowDownSLine />
            </span>
            <span className="text-[#CA8342]">
              <RiHeartFill />
            </span>
            <span className="text-[#CA8342]">Save this search</span>
          </p>
        </div>
      </div>
      {/* properties option */}
      <div className="container ">
        <div className="xl:mt-[86px] md:mt-[32px] mt-[26px] grid xl:grid-cols-3 xl:gap-x-[35px] xl:gap-y-[50px] md:grid-cols-2 md:gap-x-[16px] md:gap-y-[25px] gap-y-[24px]">
          <Properties />
        </div>
      </div>
      {/* pagination numbers */}
      <div className="container  xl:mt-[60px] xl:mb-[80px] my-[50px] md:mb-[190px] md:mt-8">
        <div className="flex items-center gap-3  justify-center md:justify-center xl:justify-start">
          <span className="py-[10px] px-[16px] bg-[#CA8342] font-font-poppin text-xs text-white">
            1
          </span>
          <span className="py-[10px] px-[16px] bg-[#FAFAFA] font-font-poppin text-xs">
            2
          </span>
          <span className="py-[10px] px-[16px] bg-[#FAFAFA] font-font-poppin text-xs">
            3
          </span>
          <span className="py-[10px] px-[16px] bg-[#FAFAFA] font-font-poppin text-xs">
            4
          </span>
          <span className="py-[10px] px-[16px] bg-[#FAFAFA] font-font-poppin text-xs">
            5
          </span>
          <span className="py-[10px] px-[16px] bg-[#FAFAFA] font-font-poppin text-xs">
            <RxDoubleArrowRight />
          </span>
        </div>
      </div>
      {/* section buy property in UAE */}
      <div className="container  xl:p-0 ">
        <hr className="border-[#CA8342]" />
        <div className="xl:py-[100px] md:py-[100px] py-[70px]">
          <h1 className="xl:text-[35px] md:text-[35px] text-[25px] text-[#0D1D2C] font-font-poppin font-light leading-[53px]">
            Buying a Property in UAE
          </h1>
          <p className="text-[14px] text-[#0D1D2C] font-font-poppin font-light leading-[21px] mt-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
            velit laoreet id donec ultrices. Aliquet nec ullamcorper sit amet
            risus nullam. Accumsan tortor posuere ac ut consequat semper. Sit
            amet consectetur adipiscing elit pellentesque habitant morbi
            tristique. Tincidunt augue interdum velit euismod in pellentesque
            massa placerat. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Pharetra magna ac placerat vestibulum lectus mauris.
            Habitant morbi tristique senectus et. Vulputate dignissim
            suspendisse in est ante in. Elit pellentesque habitant morbi
            tristique senectus et netus. Blandit aliquam etiam erat velit
            scelerisque. Eu turpis egestas pretium aenean pharetra magna. Mattis
            molestie a iaculis at erat pellentesque adipiscing commodo elit.
            Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Tellus
            cras adipiscing enim eu. Praesent elementum facilisis leo vel
            fringilla est ullamcorper.
          </p>
        </div>
      </div>
      {/* section communities */}
      <div className="container  xl:mb-[200px] md:mb-[200px] mb-[100px] xl:p-0 ">
        <div className="xl:text-[35px] md:text-[35px] text-[25px] text-[#0D1D2C] font-font-poppin font-light leading-[53px]">
          Nearby Communities
        </div>
        <div className="mt-[30px] grid xl:grid-cols-2 xl:gap-x-[24px] xl:gap-y-[31px] md:gap-[50px] gap-y-[30px]">
          <Coummnities />
        </div>
      </div>
      {/* last section contact form */}
      <div className="bg2ClrsWithWhite pt-[23px]">
        <ContactForm />
      </div>
    </>
  );
};
