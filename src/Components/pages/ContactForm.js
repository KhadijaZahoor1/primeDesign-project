import React from "react";
import contact from "../../assets/images/contact.PNG";

export const ContactForm = () => {
  return (
    <>
      <div className="container">
        <div className="flex xl:flex-row xl:p-0 md:flex-col flex-col ">
          <div className="xl:w-2/5">
            {" "}
            <img
              src={contact}
              alt="contact"
              className="w-full xl:h-[100%] md:h-[342px] h-[264px]"
            />
          </div>
          <div className="xl:w-3/5 bg-[#FAFAFA] xl:py-[37px] xl:px-[50px] md:px-[54px] md:py-[56px] p-[48px] ">
            <h2 className="text-[29px] leading-[43px] text-[#CA8342] font-font-poppin font-light">
              Sell your property with us
            </h2>
            <p className="text-[14px] leading-[21px] text-[#0D1D2C] font-font-poppin font-light mt-[27px] xl:w-[548px]">
              Connect with our local advisors who can provide an up to date
              property valuation and a bespoke marketing plan for your needs.
            </p>
            <div className="grid grid-cols-1 gap-[10px] mt-[27px]">
              <input
                placeholder="Full Name"
                className="focus:outline-none text-[12px] leading-[18px] text-[#B4B9BE] font-font-poppin font-normal border-[2px] border-solid py-[15px] px-[22px] bg-[#FAFAFA]"
              />
              <input
                placeholder="Email Address"
                className="focus:outline-none text-[12px] leading-[18px] text-[#B4B9BE] font-font-poppin font-normal border-[2px] border-solid py-[15px] px-[22px] bg-[#FAFAFA]"
              />
              <input
                placeholder="Phone Number"
                className="focus:outline-none text-[12px] leading-[18px] text-[#B4B9BE] font-font-poppin font-normal border-[2px] border-solid py-[15px] px-[22px] bg-[#FAFAFA]"
              />
              <input
                placeholder="Location"
                className="focus:outline-none text-[12px] leading-[18px] text-[#B4B9BE] font-font-poppin font-normal border-[2px] border-solid py-[15px] px-[22px] bg-[#FAFAFA]"
              />
              <input
                placeholder="Property Type"
                className="focus:outline-none text-[12px] leading-[18px] text-[#B4B9BE] font-font-poppin font-normal border-[2px] border-solid py-[15px] px-[22px] bg-[#FAFAFA]"
              />
              <button className="text-[12px] leading-[18px] font-font-poppin font-normal text-[#FFFFFF] bg-[#CA8342] py-[15px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-[58px] border-[#B4B9BE] opacity-100" />
    </>
  );
};
