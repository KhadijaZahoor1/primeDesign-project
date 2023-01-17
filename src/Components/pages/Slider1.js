import data from "../pages/Data";
//import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useState } from "react";

function Slider1() {
  const myData = data;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myData.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myData.length) {
      setActiveSlide(1);
    } else if (id < myData.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myData.length - 1);
    }
  };

  return (
    <>
      <div className="">
        {myData.map((item) => {
          const { id, img, price, description } = item;
          return (
            <div
              key={id}
              className={
                activeSlide === id
                  ? "flex justify-center items-center"
                  : "hidden"
              }
            >
              <button
                className="text-4xl xl:text-[#CA8342] border rounded-[100%] xl:border-[#CA8342] text-white border-white absolute left-7 z-[1] mb-[80px] md:mb-0 xl:mb-0 md:absolute md:left-11 md:z-[1] md:text-white md:border-white xl:static"
                onClick={() => prevSliderHandler(id)}
              >
                <SlArrowLeft className="text-[23px] m-[16px] xl:text-[30px] xl:m-[20px] md:text-[25px] md:m-[16px] " />
              </button>
              <div className="mx-auto max-w-[934px]  max-h-[525px] w-full">
                <div className="animate-[fade_1s] slider-tran">
                  <img src={img} alt="" className="w-full h-auto " />
                </div>
                <div className="mt-[30px] animate-[fade_1s] slider-tran">
                  <p className="text-center text-[20px] leading-[30px] text-[#0D1D2C] font-medium font-font-poppin md:mt-[15px] ">
                    {description}
                  </p>
                  <h3 className="text-center text-[20px] leading-[30px] text-[#0D1D2C] font-normal font-font-poppin">
                    {price}
                  </h3>
                </div>
              </div>
              <button
                className="transitionEffect text-4xl xl:text-[#CA8342] border rounded-[100%] xl:border-[#CA8342] text-white border-white absolute right-7 z-[1] mb-[80px] md:mb-0 xl:mb-0 md:absolute md:right-11 md:z-[1] md:text-white md:border-white xl:static"
                onClick={() => nextSliderHandler(id)}
              >
                <SlArrowRight className="text-[23px] m-[16px] xl:text-[30px] xl:m-[20px] md:text-[25px] md:m-[16px]" />
                {/* <FiChevronRight className="xl:w-[58px] xl:h-[58px] md:w-[58px] md:h-[58px] w-[42px] h-[42px]" /> */}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Slider1;
