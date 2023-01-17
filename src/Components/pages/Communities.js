import React from "react";
import kevin2 from "../../assets/images/kevin-canlas.png";
import kevin from "../../assets/images/kevinCanlas.png";
import { SlArrowRight } from "react-icons/sl";

const communities = [
  {
    img: kevin2,
    text: "AC FEUGIAT SED LECTUS / VESTIBULUM MATTIS / ULLAMCORPER",
    title: "Feugiat Sed Lectus",
  },
  {
    img: kevin,
    text: "AC FEUGIAT SED LECTUS / VESTIBULUM MATTIS / ULLAMCORPER",
    title: "Feugiat Sed Lectus",
  },
  {
    img: kevin2,
    text: "AC FEUGIAT SED LECTUS / VESTIBULUM MATTIS / ULLAMCORPER",
    title: "Feugiat Sed Lectus",
  },
  {
    img: kevin,
    text: "AC FEUGIAT SED LECTUS / VESTIBULUM MATTIS / ULLAMCORPER",
    title: "Feugiat Sed Lectus",
  },
];

export const Coummnities = () => {
  const dataCommunity = communities;
  return (
    <>
      {dataCommunity.map((item) => {
        const { img, text, title } = item;
        return (
          <div className="xl:w-[550px] md:w-[608px]">
            <img src={img} alt="" className="max-h-[307px] w-full" />
            <div className="flex justify-between  mt-[20px]">
              <p className="text-[12px] text-[#CA8342] font-font-poppin leading-[18px] font-light ">
                {text}
              </p>
              <SlArrowRight className="text-[#CA8342]" />
            </div>
            <h4 className="text-[20px] leading-[30px] text-[#0D1D2C] font-normal font-font-poppin mt-[10px]">
              {title}
            </h4>
          </div>
        );
      })}
    </>
  );
};
