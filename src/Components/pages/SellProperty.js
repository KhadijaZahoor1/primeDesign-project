import React from "react";
import { Navbar } from "../Navbar";
import { ImgContent } from "./ImgContent";
import gallery1 from "../../assets/images/gallery1.jpg";
import gallery2 from "../../assets/images/gallery2.jpg";
import gallery3 from "../../assets/images/gallery3.jpg";
import gallery4 from "../../assets/images/gallery4.jpg";
import gallery5 from "../../assets/images/gallery5.jpg";
import whiteLogo from "../../assets/images/whiteLogo.svg";
import prime from "../../assets/images/prime.svg";
import { ContactForm } from "./ContactForm";

export const SellProperty = () => {
  const color = "#ffff";
  const logoColor = whiteLogo;
  const position = "absolute";
  return (
    <>
      <div className="bg-main2-bg bg-no-repeat h-[100vh] bg-cover bg-center md:bg-center xl:bg-top">
        <div className="container">
          <Navbar color={color} logoColor={logoColor} position={position} />
          <div className="container xl:absolute xl:left-0 xl:right-0 xl:bottom-[30%] xl:text-[50px] xl:leading-[61px] xl:px-[200px] italic font-font-quiche font-thin text-center text-white text-[40px] leading-[50px] bottom-[35%] absolute left-0 right-0 md:absolute md:left-0 md:right-0 md:bottom-[39%] md:px-[72px] md:text-[50px] md:leading-[60px]">
            <div>SELL YOUR LUXURY PROPERTY WITH PRIME BY BETTERHOMES</div>
          </div>
          <div className="visible xl:hidden md:hidden absolute top-[88%] left-0 right-0 text-white text-center">
            <button className="border border-[#fffff] text-[14px] text-white px-[20px] py-[14px] w-[75%]">
              List with us
            </button>
          </div>
        </div>
      </div>
      {/* heading */}
      <div className="container flex xl:flex-row md:flex-col flex-col">
        <div className="xl:w-[60%] xl:text-[50px] text-center xl:text-start md:text-center font-font-quiche font-thin xl:leading-[61px] text-[#0D1D2C] italic xl:mt-[100px] xl:px-0 md:mt-[100px] text-[40px] leading-[41px] mt-[100px] md:text-[50px] md:leading-[61px]">
          HIGH-END REAL ESTATE DEMANDS A{" "}
          <span className="text-[#CA8342]">BESPOKE APPROACH</span>
        </div>
        <div className="xl:w-[40%]"></div>
      </div>
      {/* section 2 img/content */}
      <div className="xl:bg-prime-Bg xl:bg-no-repeat xl:bg-right-top xl:mt-[100px] md:bg-none md:mt-[100px] bg-none mt-[100px]">
        <div className="container">
          <ImgContent />
        </div>
      </div>
      {/* gallery section */}
      <div className="bg-[#FAFAFA] xl:mt-[300px] md:mt-[200px] mt-[100px]">
        <div className="xl:container xl:py-5">
          <div className="flex xl:flex-row md:flex-row md:gap-[37px] flex-row xl:gap-[36px] gap-5">
            <div className="xl:w-[329px] md:w-[233px] w-[118px] xl:mt-[50px] md:mt-[50px] mt-[20px]">
              <img
                src={gallery1}
                alt=""
                className="xl:h-[464px] md:h-[327px] h-[166px] w-ful shadow-[0_10px_29px_rgba(0,0,0,0.48)]"
              />
            </div>
            <div className="xl:w-[363px] md:w-[257px] w-[130px] xl:-mt-[70px] -mt-8">
              <img
                src={gallery3}
                alt=""
                className="w-full xl:h-[363px] md:h-[256px] h-[174px] shadow-[0_10px_29px_rgba(0,0,0,0.48)]"
              />
            </div>
            <div className="xl:w-[469px] md:w-[331px] w-[168px]  mt-[20px]">
              <img
                src={gallery4}
                alt=""
                className="w-[469px] xl:h-[332px] md:h-[234px] h-[119px] shadow-[0_10px_29px_rgba(0,0,0,0.48)]"
              />
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row xl:gap-32 md:flex-row md:mt-[44px] xl:mt-[30px] md:gap-16 mt-[20px] flex-row gap-11">
          <div className="xl:w-[40%]  ">
            <img
              src={gallery5}
              alt=""
              className="w-[305] xl:h-[172px] md:h-[122px] h-[62px] shadow-[0_10px_29px_rgba(0,0,0,0.48)]"
            />
          </div>
          <div className="xl:w-[40%]  md:w-1/3 xl:-mt-[50px] md:mt-0">
            <h1 className="uppercase xl:text-[55px] md:text-[35px] text-[24px] font-thin font-font-quiche italic text-center">
              Only with
            </h1>
            <img src={prime} alt="" className="w-full" />
          </div>
          <div className="xl:w-[40%] xl:-mt-[160px]  md:-mt-[122px] -mt-[40px]">
            <img
              src={gallery2}
              alt=""
              className="xl:w-[248px] xl:h-[352px] md:h-[249px] md:w-[172px] h-[126px] w-[89px] xl:ml-[120px] shadow-[0_10px_29px_rgba(0,0,0,0.48)]"
            />
          </div>
        </div>
      </div>
      {/* section marketing points */}
      <div className="xl:py-[119px] md:py-[60px] bg-[#FAFAFA]">
        <div className="container mx-auto flex xl:flex-row md:flex-col flex-col py-[40px] xl:border-t xl:border-b border-[#B4B9BE]">
          <hr className="md:visible xl:hidden my-6 mx-auto md:w-[609px] w-[354px]" />
          <div className="xl:w-1/3 xl:border-r border-[#B4B9BE]">
            <h2 className="text-[29px] text-[#CA8342] leading-[43px] font-font-poppin font-light text-center">
              Prime marketing
            </h2>
            <p className="text-[14px] text-[#0D1D2C] font-font-poppin font-light leading-[21px] mt-[20px] text-center xl:px-[45px] md:px-[110px]">
              From editorial features in BetterLiving magazine to features in
              well-known media outlets, your property will reach the right
              buyers.
            </p>
            <hr className="md:visible xl:hidden my-6 mx-auto md:w-[609px] w-[354px]" />
          </div>
          <div className="xl:w-1/3 xl:border-r border-[#B4B9BE]">
            <h2 className="text-[29px] text-[#CA8342] leading-[43px] font-font-poppin font-light text-center">
              Prime media
            </h2>
            <p className="text-[14px] text-[#0D1D2C] font-font-poppin font-light leading-[21px] mt-[20px] text-center xl:px-[45px] md:px-[110px]">
              With an in-house marketing agency, we create prime video and
              photography, to make sure your distinguished home will be
              showcased in the right way.
            </p>
            <hr className="md:visible xl:hidden my-6 mx-auto md:w-[609px] w-[354px]" />
          </div>
          <div className="xl:w-1/3 ">
            <h2 className="text-[29px] text-[#CA8342] leading-[43px] font-font-poppin font-light text-center">
              Prime advertising
            </h2>
            <p className="text-[14px] text-[#0D1D2C] font-font-poppin font-light leading-[21px] mt-[20px] text-center xl:px-[45px] md:px-[110px]">
              Listings are advertised on the UAE’s most visited real estate
              website, local and global portals, all amplified through
              agency-level digital campaigns.
            </p>
          </div>
          <hr className="md:visible xl:hidden my-6 mx-auto md:w-[609px] w-[354px]" />
        </div>
        <div className="text-[20px] leading-[30px] font-font-poppin font-light text-[#0D1D2C] text-center xl:px-[160px] md:px-[80px] xl:mt-[90px] px-[36px] pb-[60px] xl:pb-0 md:pb-0">
          Every home has its own distinctive personality - and story. We weave
          individual character and breathe life into each room in your property,
          in collaboration with a small but influential cadre of high-profile
          interior designers who are well versed in the luxury aesthetic, and
          who have an exceptional eye for detail. From one-of-a-kind staging to
          décor upgrades, we guarantee a happy ending.
        </div>
      </div>
      {/* last section contact form */}
      <div className="bg2Clrs pt-[23px]">
        <ContactForm />
      </div>
    </>
  );
};
