import React from "react";
import { Navbar } from "../Navbar";
import logoClr from "../../assets/images/prime-logo.svg";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {
  IoBedOutline,
  IoCarSportOutline,
  IoCallOutline,
} from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { BsShare } from "react-icons/bs";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import main2bg from "../../assets/images/main2-bg.png";
import gallery4 from "../../assets/images/gallery4.jpg";
import { Link } from "react-router-dom";
import paperdiploma from "../../assets/images/paper-diploma.png";
import train from "../../assets/images/train.png";
import primeagentface from "../../assets/images/primeagentface.jpg";
import mapss from "../../assets/images/mapss.png";
import { SimilarProperties } from "./SimilarProperties";
import { FacilitiesPoint } from "./FacilitiesPoint";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

export const PropertyInfo = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [nearest, setNearest] = useState(false);
  const near = nearest;
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
      {/* fixed header */}
      <div className="xl:hidden md:hidden fixed bg-white bottom-0 w-full shadow-[0px_-7px_20px_rgba(0,0,0,0.2)] grid grid-cols-3 gap-[10px] px-[38px] pt-[27px] pb-[43px] ">
        <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
          <span className="flex items-center gap-1">
            <IoCallOutline /> Call
          </span>
        </button>
        <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
          <span className="flex items-center gap-1">
            <AiOutlineMail /> Email
          </span>
        </button>
        <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
          <span className="flex items-center gap-1">
            <AiOutlineWhatsApp /> Whatsapp
          </span>
        </button>
      </div>
      {/* filter section */}
      {searchBar && (
        <div className="bg-[#FAFAFA] border-[0.5px] ">
          <div className="container xl:py-[25px] md:py-[53px] py-[29px]">
            <div className="grid grid-cols-2 xl:grid-flow-col md:grid-cols-2 py-[20px] px-[30px] gap-[30px] bg-[#FAFAFA]">
              <select className="focus:outline-none text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-[#FAFAFA]">
                <option className="">sale</option>
                <option></option>
                <option></option>
              </select>
              <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-[#FAFAFA]">
                <option>Property type</option>
                <option></option>
                <option></option>
              </select>
              <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-[#FAFAFA]">
                <option>Enter location</option>
                <option></option>
                <option></option>
              </select>
              <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-[#FAFAFA]">
                <option>AED</option>
                <option></option>
                <option></option>
              </select>
              <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-[#FAFAFA]">
                <option>Price from</option>
                <option></option>
                <option></option>
              </select>
              <select className="focus:outline-none  text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-[#FAFAFA]">
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
        </div>
      )}
      {/* section 2 */}
      <div className="container py-[26px] border-b">
        <div className="flex justify-between items-center">
          <div className="text-[14px] leading-[21px] font-font-poppin font-light text-[#0D1D2C] xl:flex xl:gap-3 items-center  md:grid md:grid-cols-3 md:gap-x-1">
            <span className="flex items-center gap-1">
              <SlArrowLeft />{" "}
              <span className="border-r pr-4 border-[#0D1D2C]">
                Back to Listings
              </span>
            </span>
            <span className="hidden xl:flex xl:items-center xl:gap-1 md:flex md:items-center md:gap-1 ">
              Home Page <SlArrowRight />
            </span>
            <span className="hidden xl:flex xl:items-center xl:gap-1 md:flex md:items-center md:gap-1">
              Dubai <SlArrowRight />
            </span>
            <span className="hidden xl:flex xl:items-center xl:gap-1 md:flex md:items-center md:gap-1">
              {" "}
              Palm Jumeirah <SlArrowRight />
            </span>
            <span className="hidden xl:flex xl:items-center xl:gap-1 md:flex md:items-center md:gap-1">
              Six Senses Residences <SlArrowRight />
            </span>
            <span className="hidden xl:flex xl:items-center xl:gap-1 md:flex md:items-center md:gap-1">
              {" "}
              5 Bedrooms Villa
            </span>
          </div>
          <div
            className="cursor-pointer "
            onClick={() => setSearchBar(!searchBar)}
          >
            <span className="flex items-center gap-1 text-[14px] leading-[21px] font-font-poppin font-light text-[#CA8342]">
              Change search <SlArrowDown className="" />
            </span>
          </div>
        </div>
      </div>
      {/* section 3 six residences */}
      <div className="container">
        <div className="flex xl:justify-between xl:mt-[37px] md:mt-[29px] mt-[41px] flex-col md:flex-col xl:flex-row gap-6">
          <p className="text-[25px] leading-[30px] xl:text-[35px] md:text-[35px] text-[#0D1D2C] xl:leading-[50px] md:leading-[50px] font-medium font-font-poppin xl:text-start text-center md:text-start">
            Six Senses Residences, <br /> Palm Jumeirah
          </p>
          <div className="xl:grid xl:justify-items-end md:justify-between md:flex md:flex-row-reverse flex justify-center">
            <button className="hidden xl:block md:block bg-[#CA8342] text-white text-[14px] leading-[20px] font-font-poppin font-normal px-[20px]">
              Contact Agent
            </button>
            <p className="text-[29px] text-[#CA8342] leading-[43px] font-light font-font-poppin flex items-center gap-1 text-center xl:text-start">
              93,000,000
              <span>
                <select className="focus:outline-none border-none text-[29px] text-[#CA8342] leading-[43px] font-font-poppin font-light bg-transparent">
                  <option className="">AED</option>
                  <option>USD</option>
                  <option>PKR</option>
                  <option>AUD</option>
                  <option>EUR</option>
                  <option>JOD</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container py-[26px]">
        <div className="flex xl:justify-between md:flex-col md:gap-[16px] xl:items-center xl:flex-row flex-col">
          <div className="flex xl:gap-[30px] md:gap-[30px] gap-1 items-center text-[14px] leading-[21px] font-font-poppin font-light text-[#0D1D2]">
            <span className="flex items-center gap-1">
              <IoBedOutline className="text-[20px] hidden xl:flex md:flex" /> 5
              bed
            </span>
            <span className="flex items-center gap-1">
              <BiBath className="text-[20px] hidden xl:flex md:flex" /> 7 bath
            </span>
            <span className="flex items-center gap-1">
              <IoCarSportOutline className="text-[20px] hidden xl:flex md:flex" />{" "}
              4 parking
            </span>
            <span className="flex items-center gap-1">
              <HiOutlineCodeBracketSquare className="text-[20px] hidden xl:flex md:flex" />{" "}
              16016 sq. ft.
            </span>
            <p className=" text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-semibold ">
              BHM-S-552274
            </p>
          </div>
          <div className="hidden xl:block md:block">
            <span className="flex gap-[30px] items-center text-[14px] leading-[21px] font-font-poppin font-light text-[#0D1D2C]">
              <span className="flex items-center gap-1">
                <BsShare /> Share
              </span>
              <span className="flex items-center gap-1">
                <IoCallOutline /> Call
              </span>
              <span className="flex items-center gap-1">
                <AiOutlineMail /> Email
              </span>
              <span className="flex items-center gap-1">
                <AiOutlineWhatsApp /> Whatsapp
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* section 4 gallery */}
      <div className="container ">
        <div className="flex xl:gap-[36px] md:gap-[20px]  md:flex-col xl:flex-row flex-col">
          <div className="xl:w-[70%]">
            <Link to="/blog">
              <img alt="" src={main2bg} />
            </Link>
          </div>
          <div className="xl:w-[30%]">
            <div className="xl:grid md:grid xl:grid-cols-1 xl:gap-[29px] md:grid-cols-2 md:gap-[16px] hidden">
              <div>
                <img
                  alt=""
                  src={gallery4}
                  className="xl:h-[246px] md:h-auto h-auto"
                />
              </div>
              <div>
                <img
                  alt=""
                  src={gallery4}
                  className="xl:h-[246px] md:h-auto h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 5 content */}
      <div className="container mt-[45px]">
        <div className="flex gap-[36px] xl:flex-row md:flex-col flex-col mb-0 xl:mb-0 md:mb-[200px]">
          <div className="xl:w-[70%]">
            <div className="xl:flex md:flex grid grid-cols-2 gap-[10px]">
              <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
                Show 14 Photos
              </button>
              <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
                Videos
              </button>
              <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
                360 Tour
              </button>
              <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
                Floorplan
              </button>
              <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px]">
                Map
              </button>
            </div>
            <div className="pt-[54px] pb-[60px] border-b border-[#B4B9BE]">
              <h3 className="text-[20px] leading-[30px] font-normal font-font-poppin text-[#0D1D2C]">
                Property Details
              </h3>
              <p className="text-[14px] leading-[20px] font-light font-font-poppin text-[#0D1D2C] mt-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Interdum velit laoreet id donec ultrices. Aliquet nec
                ullamcorper sit amet risus nullam. Accumsan tortor posuere ac ut
                consequat semper. Sit amet consectetur adipiscing elit
                pellentesque habitant morbi tristique. Tincidunt augue interdum
                velit euismod in pellentesque massa placerat. Scelerisque purus
                semper eget duis at tellus at urna condimentum. Pharetra magna
                ac placerat vestibulum lectus mauris. Habitant morbi tristique
                senectus et. Vulputate dignissim suspendisse in est ante in.
                Elit pellentesque habitant morbi tristique senectus et netus.
                Blandit aliquam etiam erat velit scelerisque. Eu turpis egestas
                pretium aenean pharetra magna. Mattis molestie a iaculis at erat
                pellentesque adipiscing commodo elit. Ipsum a arcu cursus vitae
                congue mauris rhoncus aenean vel. Tellus cras adipiscing enim
                eu. Praesent elementum facilisis leo vel fringilla est
                ullamcorper.
              </p>
            </div>
            <div className="py-[60px]">
              <h3 className="text-[20px] leading-[30px] font-normal font-font-poppin text-[#0D1D2C]">
                Facilities and Amenities
              </h3>
              <div className="mt-[10px]">
                <FacilitiesPoint near={near} />
              </div>
            </div>
            <div>
              <h3 className="text-[20px] leading-[30px] font-normal font-font-poppin text-[#0D1D2C]">
                Schools and Metro
              </h3>
              <div className="mt-[20px] flex items-center gap-5">
                <button className="flex items-center gap-3 text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px] hover:bg-[#B4B9BE] hover:text-white hover:border-[#B4B9BE]">
                  <img alt="" src={paperdiploma} className="hover:text-white" />{" "}
                  Nearest School
                </button>
                <button
                  onClick={() => setNearest(!nearest)}
                  className="xl:flex md:flex items-center gap-3 text-[14px] leading-[20px] hover:bg-white hover:text-[#0D1D2C] bg-[#B4B9BE] text-[#ffff] font-normal font-font-poppin border boder-[#0D1D2C] px-[20px] py-[14px] hidden "
                >
                  <img alt="" src={train} className="" /> Show 14 Photos
                </button>
              </div>
              <div className="py-[20px] flex justify-between">
                Asya’s Nursery <span>2 KM</span>
              </div>
              <hr />
              <div className="py-[20px] flex justify-between ">
                ITEC <span>4 KM</span>
              </div>
              <hr />
              <div className="pt-[20px] flex justify-between">
                Education Zone <span>4 KM</span>
              </div>
            </div>
            <div className="mt-[30px] mb-[200px] xl:mb-0 md:mb-0">
              <img alt="" src={mapss} className="xl:min-w-[790px]" />
            </div>
          </div>
          <div className="xl:w-[30%] hidden md:block">
            <h3 className="text-[20px] leading-[30px] font-normal font-font-poppin text-[#0D1D2C]">
              Interested? Contact the Agent
            </h3>
            <div className="mt-[20px] bg-[#FAFAFA] pt-[30px] px-[26px] pb-[70px] xl:text-center md:text-start">
              <h3 className="text-[20px] leading-[30px] font-light font-font-poppin text-[#0D1D2C]">
                Six Senses Residences, <br className="xl:block md:hidden" />
                Palm Jumeirah
              </h3>
              <h4 className="text-[20px] leading-[30px] font-medium font-font-poppin text-[#0D1D2C] mt-[8px]">
                AED 93,000,000
              </h4>
              <p className="text-[14px] leading-[20px] font-light font-font-poppin text-[#0D1D2C] mt-[12px]">
                BHM-S-552274
              </p>
              <p className="text-[12px] leading-[18px] font-light font-font-poppin text-[#0D1D2C] mt-[4px] mb-[10px]">
                4 beds | 5 bath | 1 parking | 2,500 sq ft
              </p>
              <hr />
              <div className="md:flex md:gap-5 xl:block">
                <div className="xl:w-[130px] xl:mx-auto mt-[40px]">
                  <img
                    alt=""
                    src={primeagentface}
                    className="rounded-[100%] h-[130px] w-[130px]"
                  />
                </div>
                <div className="md:grid md:content-center">
                  <h4 className="text-[20px] leading-[30px] font-medium font-font-poppin text-[#0D1D2C] mt-[15px]">
                    Omar Elmahdy
                  </h4>
                  <p className="text-[12px] leading-[18px] font-light font-font-poppin text-[#0D1D2C] my-[4px]">
                    Off Plan and Investment Consultant
                  </p>
                  <p className="text-[12px] leading-[18px] font-light font-font-poppin text-[#0D1D2C]">
                    RERA — No 43076
                  </p>
                </div>
              </div>
              <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] w-full py-[14px] mt-[30px]">
                Make an enquiry
              </button>
              <div className="flex gap-3 mt-[10px]">
                <button className="text-[14px] leading-[20px] text-[#0D1D2C] font-normal font-font-poppin border boder-[#0D1D2C] w-[50%] py-[14px]">
                  call
                </button>
                <button className="text-[14px] leading-[20px] text-[#ffff] bg-[#29D266] font-normal font-font-poppin border boder-[#0D1D2C] w-[50%] py-[14px]">
                  Whatsapp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section 7 similar properties */}
      <div className="bg-[#FAFAFA] mt-[200px] hidden md:hidden xl:block">
        <div className="container py-[64px]">
          <h3 className="text-[20px] leading-[30px] font-normal font-font-poppin text-[#0D1D2C]">
            Similar Proerties
          </h3>
          <div className="grid grid-cols-3 gap-[35px] mt-[21px]">
            <SimilarProperties />
          </div>
        </div>
      </div>
      {/* last section contact form */}
      <div className="bg2ClrsWithWhite pt-[23px]">
        <ContactForm />
      </div>
    </>
  );
};
