import React from "react";
import { Navbar } from "../Navbar";
import logoClr from "../../assets/images/prime-logo.svg";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiBarChartFill } from "react-icons/ri";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import img from "../../assets/images/3.jpeg";
import { SlArrowRight } from "react-icons/sl";
import { RxDoubleArrowRight } from "react-icons/rx";
import { JournalData } from "./JournalData";
import { Link } from "react-router-dom";

export const Blog = () => {
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
      {/* section 2  */}
      <div className="container pt-[55px] flex xl:flex-row md:flex-row md:gap-4 flex-col-reverse gap-[14px]">
        <div className="xl:w-[40%] md:w-[50%] grid content-center">
          <div className="">
            <button className="bg-[#B4B9BE] text-white text-[13px] leading-[19px] font-font-poppin font-medium uppercase px-[10px] py-[2px]">
              News
            </button>
            <h1 className="text-[25px] leading-[34px] md:text-[35px] md:leading-[50px] xl:text-[35px] xl:leading-[50px] text-[#0D1D2C] font-font-poppin font-medium mt-[20px]">
              Feugiat sed lectus velit sedsads ullamcorper morbi tincidunt
            </h1>
            <div className="flex xl:gap-5 xl:flex-row md:flex-col md:gap-2 flex-col gap-2 mt-[20px] text-[#CA8342]">
              <span className="flex items-center gap-2">
                <AiOutlineCalendar /> 23 May 2022
              </span>
              <span className="flex items-center gap-2">
                <RiBarChartFill /> 1.3K views
              </span>
            </div>
            <div className="flex xl:gap-5 xl:flex-row md:flex-col md:gap-2 flex-col gap-2 mt-[10px] text-[#CA8342]">
              <span className="flex items-center gap-2 ">
                <MdAccessTimeFilled /> 2 minute read
              </span>
              <span className="flex items-center gap-2">
                <BsShare /> Shares 849
              </span>
            </div>
          </div>
        </div>
        <div className="xl:w-[60%] md:w-[50%] relative">
          <img alt="" src={img} className="xl:h-full md:h-[370px]" />
          <button className="md:hidden xl:block hidden text-[#ffff] border rounded-[100%] border-[#ffff] hover:border-[#CA8342] hover:bg-[#CA8342] absolute xl:top-[75%] right-[5%] md:top-[30%] top-[35%]">
            <SlArrowRight className="text-[23px] m-[15px]" />
          </button>
        </div>
      </div>
      {/* section 3 */}
      <div className="container mt-[47px] flex xl:flex-row gap-[33px] md:flex-col flex-col">
        <div className="xl:w-1/3">
          <div className="border border-[#B4B9BE] px-[37px] pt-[37px] pb-[109px] hoverEffect  relative">
            <h3 className="text-[20px] leading-[30px] font-font-poppin font-normal text-[#0D1D2C]">
              Feugiat Sed Lectus
            </h3>
            <div className="flex gap-5 mt-[8px] text-[#CA8342]">
              <span className="flex items-center gap-2">
                <RiBarChartFill /> 1.3K views
              </span>
              <span className="flex items-center gap-2">
                <BsShare /> Shares 849
              </span>
            </div>
            <p className="text-[12px] leading-[18px] font-font-poppin text-[#0D1D2C] font-normal mt-[8px]">
              23 May 2022
            </p>
            <p className="mt-[20px] text-[14px] leading-[21px] font-font-poppin text-[#0D1D2C] font-normal">
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas purus
              viverra accumsan in nisl nisi scelerisque eu ultrices vitae…
            </p>
            <Link to="/blogdetail">
              <button className="hidden btnDisplay text-[#CA8342] border rounded-[100%] border-[#CA8342] hover:border-[#CA8342] hover:text-[#fff] hover:bg-[#CA8342]  ">
                <SlArrowRight className="text-[23px] m-[10px]" />
              </button>
            </Link>
          </div>
        </div>
        <div className="xl:w-1/3">
          <div className="border border-[#B4B9BE] px-[37px] pt-[37px] pb-[109px] relative hoverEffect">
            <h3 className="text-[20px] leading-[30px] font-font-poppin font-normal text-[#0D1D2C]">
              Feugiat Sed Lectus
            </h3>
            <div className="flex gap-5 mt-[8px] text-[#CA8342]">
              <span className="flex items-center gap-2">
                <RiBarChartFill /> 1.3K views
              </span>
              <span className="flex items-center gap-2">
                <BsShare /> Shares 849
              </span>
            </div>
            <p className="text-[12px] leading-[18px] font-font-poppin text-[#0D1D2C] font-normal mt-[8px]">
              23 May 2022
            </p>
            <p className="mt-[20px] text-[14px] leading-[21px] font-font-poppin text-[#0D1D2C] font-normal">
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas purus
              viverra accumsan in nisl nisi scelerisque eu ultrices vitae…
            </p>
            <button className="hidden btnDisplay text-[#CA8342] border rounded-[100%] border-[#CA8342] hover:border-[#CA8342] hover:text-[#fff] hover:bg-[#CA8342]  ">
              <SlArrowRight className="text-[23px] m-[10px]" />
            </button>
          </div>
        </div>
        <div className="xl:w-1/3">
          <div className="border border-[#B4B9BE] px-[37px] pt-[37px] pb-[109px] relative hoverEffect">
            <h3 className="text-[20px] leading-[30px] font-font-poppin font-normal text-[#0D1D2C]">
              Feugiat Sed Lectus
            </h3>
            <div className="flex gap-5 mt-[8px] text-[#CA8342]">
              <span className="flex items-center gap-2">
                <RiBarChartFill /> 1.3K views
              </span>
              <span className="flex items-center gap-2">
                <BsShare /> Shares 849
              </span>
            </div>
            <p className="text-[12px] leading-[18px] font-font-poppin text-[#0D1D2C] font-normal mt-[8px]">
              23 May 2022
            </p>
            <p className="mt-[20px] text-[14px] leading-[21px] font-font-poppin text-[#0D1D2C] font-normal">
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas purus
              viverra accumsan in nisl nisi scelerisque eu ultrices vitae…
            </p>
            <button className="hidden btnDisplay text-[#CA8342] border rounded-[100%] border-[#CA8342] hover:border-[#CA8342] hover:text-[#fff] hover:bg-[#CA8342]  ">
              <SlArrowRight className="text-[23px] m-[10px]" />
            </button>
          </div>
        </div>
      </div>
      {/* last section journal */}
      <div className="container mx-auto xl:mt-[60px] mt-[100px] xl:p-0">
        <div className="mx-auto xl:flex justify-between flex-col md:flex-col xl:flex-row ">
          <div>
            <h1 className="text-[50px] text-[#0D1D2C] leading-[61px] font-thin font-font-quiche italic xl:mt-[30px]">
              JOURNAL
            </h1>
          </div>
          <div className="md:items-center md:flex md:mt-[30px] ">
            <ul className="effect list-none xl:inline-flex gap-[20px] inline-block md:inline-flex md:items-center">
              <li className=" xl:px-5 xl:py-3  text-[14px] leading-[21px] text-[#CA8342] font-font-poppin font-normal ">
                Homes
              </li>
              <li className=" xl:px-5 xl:py-3 py-1 text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-normal">
                Communities
              </li>
              <li className="xl:px-5 xl:py-3 py-1 text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-normal D2C] ">
                Architecture
              </li>
              <li className="xl:px-5 xl:py-3 py-1  text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-normal ">
                Design
              </li>
              <li className="xl:px-5 xl:py-3 py-1 text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-normal  ">
                Lifestyle
              </li>
              <li className="xl:px-5 xl:py-3 py-1 text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-normal ">
                Insights
              </li>
            </ul>
          </div>
        </div>
        {/* journal images */}
        <div className="xl:mt-[71px] mt-[37px] gap-[34px] grid xl:grid-cols-3 md:grid-cols-2">
          <JournalData />
        </div>
      </div>
      {/* pagination numbers */}
      <div className="container  xl:mt-[60px] xl:mb-[80px] my-[50px] md:mb-[190px] md:mt-8">
        <div className="flex items-center gap-3 justify-start">
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
    </>
  );
};
