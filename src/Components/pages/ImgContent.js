import React from "react";
import kevin from "../../assets/images/kevinCanlas.png";
import JOB from "../../assets/images/JOB.png";
import pagesPic from "../../assets/images/2pages.png";
import dataexchange from "../../assets/images/dataexchange.png";
import kevin2 from "../../assets/images/kevin-canlas.png";
import { Link } from "react-router-dom";

const imgContent = [
  {
    img: kevin,
    title: "A Legacy",
    description:
      " Pioneers of the real estate industry in the Emirates, Betterhomes has been a benchmark for quality and professionalism since 1986. An award-winning agency with agenuine passion for people and properties, our brand DNA is anchored by our heritage and attested by our track record.",
  },
  {
    img: JOB,
    title: "Professional Powerhouse",
    description:
      "Our hand-picked team represents the very best in the luxury real estate world. Experienced and successful negotiators with aninnate understanding of people, market and property dynamics, they are also acknowledged lifestyle experts who simply love what they do, and operate with the utmost discretion",
  },
  {
    img: pagesPic,
    title: "Next-Generation Marketing",
    description:
      " In an increasingly digitalised world, traditional marketing tools are giving way to new, innovative communication channels. We remain ahead of the curve by piloting new approaches and customised solutions that showcase your high-end property to the right audience.",
  },
  {
    img: dataexchange,
    title: "Global Reach",
    description:
      " Our expert reach extends beyond UAE borders with a selective global network of independent strategic partners who embody the Prime by Betterhomes values. Located in key gateway cities across the US, UK and Hong Kong, we work collaboratively to deliver a bespoke service for high-net-worth investors around the world.",
  },
  {
    img: kevin2,
    title: "Unmatched Experience",
    description:
      "  Our unique local knowledge, global reach and international reputation as a sought-after real estate matchmaker, puts us in prime position to support high-net-worth homeowners and home seekers. Discretion and privacy are our signature; personalisation is our hallmark.",
  },
];

export const ImgContent = () => {
  const data = imgContent;

  return (
    <>
      {/* portion 2 */}
      <div>
        {data.map((item, index) => {
          const { img, title, description } = item;
          return (
            <div
              className="flex xl:flex-row xl:mt-[50px] md:flex-col md:mt-[52px] flex-col mt-[61px] xl:gap-[70px]"
              key={index}
            >
              <div className="xl:w-[50%]">
                <img src={img} alt="" className="md:mx-auto xl:mx-0 mx-auto" />
              </div>
              <div className="content xl:w-[50%] grid content-center md:mt-[32px] mt-[32px] xl:m-0">
                <div className="xl:pl-[17px] md:mx-auto xl:mx-0 mx-auto">
                  <Link to="/primeUae">
                    <h2 className="xl:max-w-[362px] xl:leading-[40px] leading-[40px] text-[35px] text-[#0D1D2C] font-font-poppin font-light  md:text-center xl:text-start text-center">
                      {title}
                    </h2>
                  </Link>
                  <p className="text-[14px] font-font-poppin text-[#0D1D2C] leading-[21px] font-light xl:w-[361px] mt-[10px] md:text-center md:w-[504px] xl:text-start text-center">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
