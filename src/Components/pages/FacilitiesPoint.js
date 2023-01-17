import React from "react";
import tickIcon from "../../assets/images/tickIcon.png";

const points = [
  {
    img: tickIcon,
    text: "Balcony",
  },
  {
    img: tickIcon,
    text: "Private Pool",
  },
  {
    img: tickIcon,
    text: " Central A/C Heating",
  },
  {
    img: tickIcon,
    text: "Shared Pool",
  },
  {
    img: tickIcon,
    text: "Maid Service",
  },
  {
    img: tickIcon,
    text: "View of Landmark",
  },
  {
    img: tickIcon,
    text: "Private Garden",
  },
  {
    img: tickIcon,
    text: "Built in Kitchen Appliances",
  },
];

export const FacilitiesPoint = (prop) => {
  return (
    <>
      <div className="grid xl:grid-cols-2 xl:gap-[10px] md:grid-cols-2 md:gap-[10px] grid-cols-1 gap-[10px]">
        {points.map((item) => {
          const { img, text } = item;
          return (
            <span className="flex items-center gap-3 text-[14px] leading-[20px] font-light font-font-poppin text-[#0D1D2C]">
              {prop.near && (
                <div className="border border-[#707070] w-[35px] h-[35px] opacity-[0.5]"></div>
              )}
              {!prop.near && <img alt="" src={img} />} {text}
            </span>
          );
        })}
      </div>
    </>
  );
};
