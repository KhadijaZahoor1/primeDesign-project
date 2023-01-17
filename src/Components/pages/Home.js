import React from "react";
import { Link } from "react-router-dom";
import bhmImg from "../../assets/images/1.jpg";
import bhmImg2 from "../../assets/images/2.jpeg";
import LindaMahoney from "../../assets/images/LindaMahoney.png";
import foxtons from "../../assets/images/foxtons.png";
import map from "../../assets/images/map.png";
import agency from "../../assets/images/agency.png";
import Slider1 from "./Slider1";
import Slider2 from "./Slider2";
import journalImg from "../../assets/images/journalImg.jpeg";
import LindaMahoney2 from "../../assets/images/LindaMahoney2.png";
import chairman from "../../assets/images/Rectangle9.png";
import { SlArrowRight } from "react-icons/sl";
import whiteLogo from "../../assets/images/whiteLogo.svg";
import { Navbar } from "../Navbar";

export const Home = () => {
  const color = "white";
  const logoColor = whiteLogo;
  const position = "absolute";
  return (
    <>
      {/* hero section */}
      <div className="bg-main-bg bg-no-repeat  h-[100vh] bg-cover bg-center md:bg-center xl:bg-top  ">
        <div className="container">
          <Navbar color={color} logoColor={logoColor} position={position} />
          <div className="mx-auto absolute left-0 right-0 xl:bottom-[16%] md:bottom-[16%] bottom-[28%] md:mx-auto bg-white container content-center">
            <div className="grid grid-cols-2 xl:grid-flow-col md:grid-cols-2 py-[37px] px-[30px] gap-[30px]">
              <select className=" focus:outline-none text-[14px] text-[#B4B9BE] leading-[21px] font-font-poppin font-normal border-b border-[#B4B9BE] bg-white">
                <option className="">sale</option>
                <option></option>
                <option></option>
              </select>
              {/* <span class="pic arrow-down"></span> */}
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
        </div>
        <div className="visible xl:hidden md:hidden absolute top-[88%] left-0 right-0 text-white text-center">
          <button className="border border-[#fffff] text-[14px] text-white px-[20px] py-[14px] w-[75%]">
            List with us
          </button>
        </div>
      </div>
      {/* section 2 */}
      <div className="container flex flex-col xl:mt-[176px] md:mt-[174px] mt-[156px] gap-[33px] xl:flex-row md:flex-col md:px-[60px]">
        <div className="text-center text-[40px] leading-[40px] xl:text-[50px] xl:leading-[61px] md:text-[50px] md:leading-[61px] font-font-quiche font-thin italic xl:text-start md:text-center ">
          A CURATED COLLECTION OF{" "}
          <span className="text-[#CA8342]">UNIQUE PROPERTIES</span>
        </div>
        <div className="">
          <p className="xl:w-[410px]  xl:text-start font-font-poppin text-[14px] leading-[21px] font-light text-center md:text-center">
            Anchored by a market-leading heritage brand with a business pedigree
            spanning more than three decades, Prime by Betterhomes is dedicated
            to luxury residences that offer the rare, the exclusive and the
            extraordinary.{" "}
          </p>
          <br />
          <p className="xl:w-[410px]  xl:text-start font-font-poppin text-[14px] leading-[21px] font-light text-center md:text-center ">
            {" "}
            Our unique local knowledge, global reach and international
            reputation as a sought-after real estate matchmaker, puts us in
            prime position to support high-net-worth homeowners and home
            seekers.
          </p>
        </div>
      </div>
      {/* section 2 imges */}
      <div className="container  flex flex-col  mt-[65px] gap-[27px] font-font-poppin xl:flex-row xl:px-0 md:flex-col   ">
        <div className=" w-full xl:max-h-[289px] mx-auto xl:w-[60%] h-auto shadow-[_10px_10px_30px_#00000029] relative">
          <img
            src={bhmImg}
            alt=""
            className=" w-[100%] xl:max-h-[289px] md:h-full object-cover object-top"
          />
          <div className="absolute bottom-[5%] left-[4%]">
            <p className="font-font-poppin font-medium text-[14px] text-[#EDF0F2] leading-[21px]">
              Palm Jumeirah, Dubai
            </p>
            <h3 className="text-[#EDF0F2] font-font-poppin font-medium text-[22px]">
              AED 55,000,000
            </h3>
          </div>
        </div>
        <div className="w-full mx-auto xl:max-h-[289px]  xl:w-[40%] bg-slate-500 h-auto block shadow-[_10px_10px_30px_#00000029] relative">
          <img
            src={bhmImg2}
            alt=""
            className="w-[100%] xl:max-h-[289px] md:h-full object-cover object-top"
          />
          <div className="absolute bottom-[5%] left-[4%] ">
            <p className="font-font-poppin font-medium text-[14px] text-[#EDF0F2] leading-[21px]">
              Palm Jumeirah, Dubai
            </p>
            <h3 className="text-[#EDF0F2] font-font-poppin font-medium text-[22px]">
              AED 55,000,000
            </h3>
          </div>
        </div>
      </div>
      <div className="container flex flex-col mt-[30px] gap-[27px] font-font-poppin xl:flex-row xl:px-0 md:flex-col">
        <div className="w-full mx-auto xl:max-h-[289px] xl:w-[40%] bg-slate-500 h-auto shadow-[_10px_10px_30px_#00000029] relative ">
          <img
            src={bhmImg}
            alt=""
            className=" w-[100%] xl:max-h-[289px] md:h-full object-cover object-top"
          />
          <div className="absolute bottom-[5%] left-[4%] ">
            <p className="font-font-poppin font-medium text-[14px] text-[#EDF0F2] leading-[21px]">
              Palm Jumeirah, Dubai
            </p>
            <h3 className="text-[#EDF0F2] font-font-poppin font-medium text-[22px]">
              AED 55,000,000
            </h3>
          </div>
        </div>
        <div className="w-full mx-auto xl:max-h-[289px] xl:w-[60%] bg-slate-500 h-auto block shadow-[_10px_10px_30px_#00000029] relative">
          <img
            src={bhmImg2}
            alt=""
            className=" w-[100%] xl:max-h-[289px] md:h-full object-cover object-top"
          />
          <div className="absolute bottom-[5%] left-[4%] ">
            <p className="font-font-poppin font-medium text-[14px] text-[#EDF0F2] leading-[21px]">
              Palm Jumeirah, Dubai
            </p>
            <h3 className="text-[#EDF0F2] font-font-poppin font-medium text-[22px]">
              AED 55,000,000
            </h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-[30px] flex justify-end md:pl-[200px] xl:p-0">
        <Link>
          <p className="flex xl:gap-[10px] text-[20px] font-font-poppin text-[#CA8342] font-normal leading-[30px] text-end md:text-end">
            Tap into an exclusive inventory of pre-market and off-market
            properties{" "}
            <span className="xl:text-[28px] md:text-[20px] text-[18px] xl:pt-[1px] pt-[65px] md:pt-[36px]">
              {" "}
              <SlArrowRight />
            </span>
          </p>
        </Link>
      </div>{" "}
      {/* section 3 (36 years of.....) */}
      <div className="md:mt-[100px] xl:mt-[200px] mt-[100px] xl:pt-[115px] xl:pb-[135px]  xl:bg-legacy-bg xl:bg-no-repeat xl:bg-cover">
        <div className="xl:container mx-auto flex justify-end flex-col md:flex-col xl:flex-row">
          <div className="xl:w-[50%] ">
            <img
              src={chairman}
              alt="chairman"
              className="xl:hidden sm:visible md:visible md:w-[770px]"
            />
          </div>
          <div className="xl:w-[50%] py-[38px] px-[30px] xl:p-0 xl:bg-transparent bg-[#FAFAFA]  md:bg-[#FAFAFA] md:px-[80px] md:py-[56px] ">
            <h1 className="xl:text-[#FAFAFA] xl:text-[50px] md:text-[50px] text-[40px] italic font-font-quiche xl:leading-[61px] md:leading-[61px] leading-[40px] font-thin text-center text-[#0D1D2C]  md:text-center md:text-[#0D1D2C] xl:text-end">
              <span className="text-[#CA8342] md:text-[#CA8342] xl:text-[#FAFAFA]">
                {" "}
                36 YEARS{" "}
              </span>{" "}
              <br className="xl:hidden sm:visible md:hidden" />
              OF LEGACY
            </h1>
            <p className="text-[14px] text-center xl:text-white font-light leading-[21px] mt-[20px] text-[#0D1D2C] md:text-center md:text-[#0D1D2C] xl:text-end">
              Betterhomes has been at the forefront of Dubai's real estate
              market since 1986 and our resident team of passionate,
              knowledgeable industry professionals have represented thousands of
              satisfied buyers, landlords, and sellers across a diverse tranche
              of properties. Recognising the need for a bespoke resource for
              ultra-premium homes and residences, the launch of PRIME by
              Betterhomes has redefined the way we market and sell Dubai's most
              unique and sought-after properties.
            </p>
            <div className="flex xl:justify-end justify-center mt-[30px] md:justify-center">
              {" "}
              <img alt="" src={LindaMahoney} className="xl:block hidden" />
              <img alt="" src={LindaMahoney2} className="visible xl:hidden" />
            </div>
            <p className="xl:text-[14px] font-medium leading-[21px] xl:text-white  text-center sm:text-[#0D1D2C] mt-[14px] md:text-center md:text-[#0D1D2C] md:mt-[14px] xl:text-end">
              Chairman
            </p>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="container mx-auto flex-col p-0 mt-[100px]  md:flex-col md:px-[55px] xl:mt-[200px] xl:p-0 xl:flex-row">
        <div className="xl:max-w-[900px] xl:mx-auto xl:flex xl:gap-[50px] ">
          <div className="xl:w-[50%]  font-font-quiche italic font-thin xl:text-[45px] xl:leading-[61px] text-center text-[43px] leading-[51px] md:text-center xl:text-start">
            BESPOKE SERVICE
            <span className="text-[#CA8342]"> GLOBAL REACH</span>
          </div>
          <div className="xl:w-[50%]">
            <p className="xl:w-[370px]  pt-[30px] xl:pt-[10px] pb-[9px] font-font-poppin text-[14px] leading-[21px] font-light text-center md:text-center xl:text-start">
              Showcase your property across Europe, Asia, and the United States
              of America, through our global network of affiliated luxury
              agencies. With this exceptional worldwide reach, we will find the
              right buyer for your property, wherever they are.
            </p>
          </div>
        </div>
      </div>
      {/* section 5 map */}
      <div className="mt-[63px] xl:mt-[70px] md:mt-[51px]">
        <img src={map} alt="map" className="mx-auto" />
        <p className="mt-[60px] text-[20px] leading-[30px] font-font-poppin text-[#0D1D2C] font-medium  text-center">
          International Partners
        </p>
        <div className="container mx-auto mt-[10px] ">
          <div className="flex justify-center sm:items-center gap-3">
            <img
              src={foxtons}
              alt="foxtons"
              className=" w-[112px] h-[50px] xl:w-[282px] xl:h-[109px] md:w-[282px] md:h-[109px]  hover:shadow-[#4b977f] hover:shadow-xl"
              //
            />
            <img
              src={agency}
              alt="agency"
              className="w-[112px] h-[50px] xl:w-[282px] xl:h-[109px] md:w-[282px] md:h-[109px] hover:shadow-[#e4443c] hover:shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto xl:w-[1124px] xl:mt-[200px] mt-[100px] w-[340px] md:w-[680px] md:mt-[100px] border-b border-[#CA8342]"></div>
      {/* section 6 content */}
      <div className="container mx-auto flex xl:mt-[160px] mt-[80px] gap-[40px] flex-col md:flex-col xl:flex-row xl:p-0 xl:px-[100px]">
        <div className="xl:w-[50%] xl:text-[50px] md:text-[50px] text-[36px] font-font-quiche italic  font-thin leading-[40px] xl:leading-[61px] md:leading-[61px] text-center md:text-center xl:text-start">
          LOCAL PROPERTY ADVISORS WITH A
          <span className="text-[#CA8342]"> GLOBAL REACH</span>
        </div>
        <div className="xl:w-[50%]">
          <p className="xl:w-[441px] pt-[10px] pb-[9px] font-font-poppin text-[14px] leading-[21px] font-light text-center md:text-center xl:text-start">
            Perfect pairings are rooted in unparalleled market insight, rich
            experience and an inherent ability to sell a lifestyle - not merely
            bricks and mortar. Our hand-picked team of international property
            consultants, forward-thinking marketers, and global partner network,
            is the backbone of our exclusively curated offering. Together, they
            craft an individually tailored narrative that reflects each
            property's unique story and taps into each client's unique needs and
            desires.
          </p>
        </div>
      </div>
      {/* section 7 testimonial slider  */}
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto mt-[129px] ">
          <Slider2 />
        </div>
      </div>
      {/* section gallery slider */}
      <div className="xl:container xl:mx-auto xl:mt-[200px] flex-col xl:p-0  my-[100px]">
        <h1 className="text-[40px] leading-[50px] xl:leading-[61px] font-font-quiche font-thin italic text-center xl:text-[50px] md:text-[50px]">
          <span className="text-[#CA8342]">RECENT</span> PRIME TRANSACTIONS
        </h1>
        <div className="xl:mx-auto mt-[51px]">
          <Slider1 />
        </div>
      </div>
      {/* last section journal */}
      <div className="container mx-auto xl:mt-[250px] mt-[100px]  xl:p-0 xl:mb-[200px] mb-[112px] md:mb-[100px]">
        <div className="mx-auto xl:flex justify-between flex-col md:flex-col xl:flex-row ">
          <div>
            <h1 className="text-[50px] text-[#0D1D2C] leading-[61px] font-thin font-font-quiche italic xl:mt-[30px]">
              JOURNAL
            </h1>
          </div>
          <div className="md:items-center md:flex md:mt-[30px]">
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
        <div className="xl:mt-[71px] mt-[37px] xl:flex gap-[34px] flex-col md:flex-col xl:flex-row">
          <div className="xl:w-1/3 xl:m-0 m-0 md:mt-[30px] relative">
            <button className=" text-[#ffff] border rounded-[100%] border-[#ffff] hover:border-[#CA8342] hover:bg-[#CA8342] absolute xl:top-[36%] top-[35%] md:top-[55%] right-[5%]">
              <SlArrowRight className="text-[23px] m-[10px]" />
            </button>
            <img src={journalImg} alt="journalImg" />
            <div className="flex text-[14px] font-font-poppin font-light leading-[21px] text-[#0D1D2C] mt-[30px] divide-x">
              <p className=" pr-[6px]">Inspiration</p>
              <p className=" px-[6px]">Lifestyle</p>
              <p className="px-[6px]">Luxury Insights</p>
            </div>
            <h4 className="text-[20px] text-[#0D1D2C] leading-[30px] font-normal font-font-poppin pt-[10px]">
              Feugiat Sed Lectus
            </h4>
            <h6 className="text-[12px] leading-[18px] text-[#CA8342] font-font-poppin font-normal pt-[10px]">
              23 May 2022
            </h6>
            <p className="text-[14px] leading-[21px] text-[#0D1D2C] font-light font-font-poppin pt-[14px]">
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas purus
              viverra accumsan in nisl nisi scelerisque eu ultrices vitae…
            </p>
          </div>
          <div className="xl:w-1/3 xl:m-0 mt-[60px] md:mt-[60px] relative">
            <button className=" text-[#ffff] border rounded-[100%] border-[#ffff] hover:border-[#CA8342] hover:bg-[#CA8342] absolute top-[36%] right-[5%]">
              <SlArrowRight className="text-[23px] m-[10px]" />
            </button>
            <img src={journalImg} alt="journalImg" />
            <div className="flex text-[14px] font-font-poppin font-light leading-[21px] text-[#0D1D2C] mt-[30px] divide-x">
              <p className="pr-[6px]">Inspiration</p>
              <p className="px-[6px]">Lifestyle</p>
              <p className="px-[6px]">Luxury Insights</p>
            </div>
            <h4 className="text-[20px] text-[#0D1D2C] leading-[30px] font-normal font-font-poppin pt-[10px]">
              Feugiat Sed Lectus
            </h4>
            <h6 className="text-[12px] leading-[18px] text-[#CA8342] font-font-poppin font-normal pt-[10px]">
              23 May 2022
            </h6>
            <p className="text-[14px] leading-[21px] text-[#0D1D2C] font-light font-font-poppin pt-[14px]">
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas purus
              viverra accumsan in nisl nisi scelerisque eu ultrices vitae…
            </p>
          </div>
          <div className="xl:w-1/3 xl:m-0 mt-[60px] md:mt-[60px] relative">
            <button className=" text-[#ffff] border rounded-[100%] border-[#ffff] hover:border-[#CA8342] hover:bg-[#CA8342] absolute top-[36%] right-[5%]">
              <SlArrowRight className="text-[23px] m-[10px]" />
            </button>
            <img src={journalImg} alt="journalImg" />
            <div className="flex text-[14px] font-font-poppin font-light leading-[21px] text-[#0D1D2C] mt-[30px] divide-x">
              <p className=" pr-[6px]">Inspiration</p>
              <p className=" px-[6px]">Lifestyle</p>
              <p className="px-[6px]">Luxury Insights</p>
            </div>
            <h4 className="text-[20px] text-[#0D1D2C] leading-[30px] font-normal font-font-poppin pt-[10px]">
              Feugiat Sed Lectus
            </h4>
            <h6 className="text-[12px] leading-[18px] text-[#CA8342] font-font-poppin font-normal pt-[10px]">
              23 May 2022
            </h6>
            <p className="text-[14px] leading-[21px] text-[#0D1D2C] font-light font-font-poppin pt-[14px]">
              Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed
              ullamcorper morbi tincidunt ornare massa eget egestas purus
              viverra accumsan in nisl nisi scelerisque eu ultrices vitae…
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
