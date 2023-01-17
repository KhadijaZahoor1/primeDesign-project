import React from "react";
import journalImg from "../../assets/images/journalImg.jpeg";
import { SlArrowRight } from "react-icons/sl";

const journalData = [
  {
    img: journalImg,
    title: " Feugiat Sed Lectus",
    date: "23 May 2022",
    explaination:
      "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae…",
  },
  {
    img: journalImg,
    title: " Feugiat Sed Lectus",
    date: "23 May 2022",
    explaination:
      "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae…",
  },
  {
    img: journalImg,
    title: " Feugiat Sed Lectus",
    date: "23 May 2022",
    explaination:
      "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae…",
  },
  {
    img: journalImg,
    title: " Feugiat Sed Lectus",
    date: "23 May 2022",
    explaination:
      "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae…",
  },
  {
    img: journalImg,
    title: " Feugiat Sed Lectus",
    date: "23 May 2022",
    explaination:
      "Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae…",
  },
];
export const JournalData = () => {
  return (
    <>
      {journalData.map((item) => {
        const { img, title, date, explaination } = item;
        return (
          <div className="relative">
            <button className=" text-[#ffff] border rounded-[100%] border-[#ffff] hover:border-[#CA8342] hover:bg-[#CA8342] absolute top-[36%] right-[5%]">
              <SlArrowRight className="text-[23px] m-[10px]" />
            </button>
            <img src={img} alt="journalImg" />
            <h4 className="text-[20px] text-[#0D1D2C] leading-[30px] font-normal font-font-poppin pt-[10px]">
              {title}
            </h4>
            <h6 className="text-[12px] leading-[18px] text-[#CA8342] font-font-poppin font-normal pt-[10px]">
              {date}
            </h6>
            <p className="text-[14px] leading-[21px] text-[#0D1D2C] font-light font-font-poppin pt-[14px]">
              {explaination}
            </p>
          </div>
        );
      })}
    </>
  );
};
