import React from "react";
import { Navbar } from "../Navbar";
import logoClr from "../../assets/images/prime-logo.svg";
import blogdetailImg from "../../assets/images/blogdetailImg.webp";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiBarChartFill } from "react-icons/ri";
import { MdAccessTimeFilled } from "react-icons/md";
import { BsShare } from "react-icons/bs";
import { RiDoubleQuotesL } from "react-icons/ri";
import gallery4 from "../../assets/images/nad.jpg";
import { SlArrowRight } from "react-icons/sl";

export const BlogDetail = () => {
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
      {/* section 2 menu img */}
      <div className="container text-center mt-[20px]">
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
        <div className="mt-[20px]">
          <img alt="" src={blogdetailImg} className="w-full max-h-[631px]" />
        </div>
      </div>
      {/* section 3 */}
      <div className="container mt-[62px] flex flex-col xl:flex-row xl:gap-[36px] md:flex-col md:gap-[63px] xl:mb-[175px] md:mb-0">
        <div className="xl:w-[70%]">
          <div className="">
            <button className="bg-[#B4B9BE] text-white text-[13px] leading-[19px] font-font-poppin font-medium uppercase px-[10px] py-[2px]">
              News
            </button>
            <h1 className="text-[25px] leading-[34px] md:text-[35px] md:leading-[50px] xl:text-[35px] xl:leading-[50px] text-[#0D1D2C] font-font-poppin font-medium mt-[20px]">
              Feugiat sed lectus velit sedsads ullamcorper morbi tincidunt
            </h1>
            <div className="grid grid-cols-2 gap-[10px] md:grid-flow-col md:grid-cols-none md:gap-0 xl:grid-flow-col xl:grid-cols-none xl:gap-0  mt-[20px] text-[#CA8342]">
              <span className="flex items-center gap-2">
                <AiOutlineCalendar /> 23 May 2022
              </span>
              <span className="flex items-center gap-2">
                <RiBarChartFill /> 1.3K views
              </span>
              <span className="flex items-center gap-2 ">
                <MdAccessTimeFilled /> 2 minute read
              </span>
              <span className="flex items-center gap-2">
                <BsShare /> Shares 849
              </span>
            </div>
            <div className="py-[60px] text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-light">
              <p>
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
                ullamcorper.{" "}
              </p>
              <p className="mt-[20px]">
                Lorem ipsum dolor sit amet consectetur adipiscing. Id diam
                maecenas ultricies mi eget mauris pharetra et ultrices. Ornare
                massa eget egestas purus viverra accumsan in. Et magnis dis
                parturient montes nascetur ridiculus mus. Fusce id velit ut
                tortor pretium viverra suspendisse. Pharetra et ultrices neque
                ornare. Amet volutpat consequat mauris nunc congue. Ut etiam sit
                amet nisl purus in mollis. Tempus egestas sed sed risus pretium
                quam vulputate dignissim suspendisse. Pharetra magna ac placerat
                vestibulum lectus mauris ultrices eros in. In nisl nisi
                scelerisque eu ultrices vitae auctor. Vitae turpis massa sed
                elementum tempus egestas sed sed risus. Nisi scelerisque eu
                ultrices vitae. Mauris pellentesque pulvinar pellentesque
                habitant morbi tristique senectus et. Dictum varius duis at
                consectetur lorem donec
              </p>
            </div>
            <div className="flex items-start xl:flex-row gap-[20px]">
              <div>
                <RiDoubleQuotesL className="text-[60px] text-[#CA8342]" />
              </div>
              <div>
                <h3 className="text-[19px] leading-[29px] xl:text-[29px] md:text-[29px]  text-[#0D1D2C] xl:leading-[43px] md:leading-[43px] font-font-poppin font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Enim tortor at auctor urna nunc id
                </h3>
                <p className="text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-light mt-[10px]">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="py-[60px] text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-light">
              <p>
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
            <div>
              <img alt="" src={gallery4} className="w-full" />
            </div>
            <div className="text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-light">
              <h3 className="mt-[60px] text-[19px] leading-[29px] xl:text-[29px] md:text-[29px]  text-[#CA8342] xl:leading-[35px] md:leading-[35px] font-normal font-font-poppin">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="py-[20px]">
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
              <ul className="list-disc list-outside  pl-5">
                <li className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et{" "}
                </li>
                <li>dolore magna aliqua Id leo in vitae turpis.</li>
                <li> Donec enim diam vulputate ut pharetra sit. </li>
                <li>
                  Vitae proin sagittis nisl rhoncus. Aenean vel elit scelerisque
                  mauris pellentesque.
                </li>
              </ul>
              <p className="py-[20px]">
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
          </div>
        </div>
        <div className="xl:w-[30%] md:mb-[105px] xl:m-0 mb-[69px]">
          <div className="bg-[#FAFAFA] p-[40px]">
            <h3 className="text-[20px] leading-[30px] font-font-poppin text-[#0D1D2C] font-normal text-start  ">
              Luxury property and global real estate insights from our experts
            </h3>
            <div className="grid gap-[10px] mt-[30px]">
              <input
                placeholder="Your name"
                className="bg-transparent focus:outline-none font-font-poppin text-[12px] leading-[18px] text-[#0D1D2C] font-normal py-[10px] border-[#B4B9BE] border px-[19px]"
              />
              <input
                placeholder="Your email"
                className="bg-transparent focus:outline-none font-font-poppin text-[12px] leading-[18px] text-[#0D1D2C] font-normal py-[10px] border-[#B4B9BE] border px-[19px]"
              />

              <button className="text-center text-[#fff] text-[12px] leading-[18px] font-font-poppin font-normal bg-[#CA8342] block py-[10px]">
                Subscribe
              </button>
              <label className="text-[10px] leading-[16px] text-[#0D1D2C] font-normal font-font-poppin">
                <input
                  type="checkbox"
                  className="bg-transparent font-font-poppin text-[12px] leading-[18px] text-[#0D1D2C] font-normal py-[10px]"
                />
                &nbsp; I accept to be contacted by e-mail in order to have
                information about the hotel
              </label>
            </div>
          </div>
          <h3 className="mt-[56px] text-[29px] text-[#CA8342] leading-[35px] font-normal font-font-poppin">
            The Latest
          </h3>
          <div className="mt-[20px] flex xl:flex-col gap-[33px] md:flex-col flex-col">
            <div className="">
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
                <button className="hidden btnDisplay text-[#CA8342] border rounded-[100%] border-[#CA8342] hover:border-[#CA8342] hover:text-[#fff] hover:bg-[#CA8342]  ">
                  <SlArrowRight className="text-[23px] m-[10px]" />
                </button>
              </div>
            </div>
            <div className="">
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
            <div className="">
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
        </div>
      </div>
    </>
  );
};
