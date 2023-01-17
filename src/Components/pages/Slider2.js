//import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import { useState } from "react";
import img from "../../assets/images/primeagent.jpg";
import img2 from "../../assets/images/JOB.png";
import msgIcon from "../../assets/images/msgIcon.png";
import whtsapIcon from "../../assets/images/whtsapIcon.png";
import callIcon from "../../assets/images/callIcon.png";
import { Link } from "react-router-dom";

const testimonial = [
  {
    id: 1,
    img: img,
    heading: "Rita Mouawad",
    text: "Senior Property Consultant",
    description:
      "Rita brings to her real estate career a long and colorful career in sales and a level of service that goes above and beyond her clients' expectations. Rita prides herself in handling some of the most high-end negotiations in Dubai, equally representing both buyers and sellers. As a result, Rita has created a reputation for herself at the upper end of the luxury market. Rita is fluent in French, English, and Arabic.",
  },
  {
    id: 2,
    img: img2,
    heading: "kevin Mouawad",
    text: "Team Members",
    description:
      "Rita brings to her real estate career a long and colorful career in sales and a level of service that goes above and beyond her clients' expectations. Rita prides herself in handling some of the most high-end negotiations in Dubai, equally representing both buyers and sellers. As a result, Rita has created a reputation for herself at the upper end of the luxury market. Rita is fluent in French, English, and Arabic.",
  },
];

function Slider2() {
  const myTestimonial = testimonial;
  const [activeSlide, setActiveSlide] = useState(1);

  const prevSliderHandler = (id) => {
    if (id === 1) {
      setActiveSlide(myTestimonial.length);
    } else if (id > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(myTestimonial.length - 1);
    }
  };

  const nextSliderHandler = (id) => {
    if (id === myTestimonial.length) {
      setActiveSlide(1);
    } else if (id < myTestimonial.length) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(myTestimonial.length - 1);
    }
  };

  return (
    <div className="">
      {myTestimonial.map((item) => {
        const { id, img, heading, text, description } = item;
        return (
          <div
            key={id}
            className={
              activeSlide === id
                ? "flex justify-center items-center md:px-[30px] sm:px-[20px] xl:p-0 gap-5 relative "
                : "hidden"
            }
          >
            <button
              className=" text-[#CA8342] border rounded-[100%] border-[#CA8342] md:mb-[70%] xl:m-0 absolute left-[-1%] top-[15%]  xl:static md:static"
              onClick={() => prevSliderHandler(id)}
            >
              <SlArrowLeft className="text-[18px] m-[10px] xl:text-[30px] xl:m-[20px] md:text-[25px] md:m-[16px] " />
            </button>
            <div className="flex -mt-[35px] pb-[60px] xl:gap-[98px] flex-col  md:flex-col xl:flex-row gap-5">
              <div className="bg-legacy-bg xl:w-[50%] xl:pl-[21px] md:mx-auto xl:mx-0 mx-auto animate-[fade_1s] slider-tran">
                <img
                  src={img}
                  alt=""
                  className="w-[245px] h-[248px] md:w-[432px] md:h-[432px] xl:w-[450px] xl:h-[430px]  object-cover shadow-[0_3px_20px_rgba(0,0,0,0.29)]"
                />
              </div>
              <div className="xl:w-[50%] xl:grid xl:content-end md:grid md:mt-[47px] my-[35px] xl:my-0 grid animate-[fade_1s] slider-tran">
                <h2 className="text-[#0D1D2C] text-[20px] leading-[30px] font-font-poppin font-normal xl:text-start md:text-center text-center">
                  {heading}
                </h2>
                <p className="text-[#0D1D2C] text-[14px] leading-[21px] font-font-poppin font-light  xl:text-start md:text-center text-center">
                  {text}
                </p>
                <p className="text-[#0D1D2C] text-[14px] xl:max-w-[364px] leading-[21px] font-light font-font-poppin mt-[20px]  xl:text-start md:text-center text-center ">
                  {description}
                </p>
                <div className="flex gap-[5px] mt-[20px] md:mx-auto xl:mx-0 mx-auto">
                  <Link>
                    <img src={msgIcon} alt="" />
                  </Link>
                  <Link>
                    <img src={callIcon} alt="" />
                  </Link>
                  <Link>
                    <img src={whtsapIcon} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <button
              className="text-4xl text-[#CA8342] border rounded-[100%] border-[#CA8342]  md:mb-[70%] xl:m-0 absolute right-[-1%] top-[15%] xl:static md:static"
              onClick={() => nextSliderHandler(id)}
            >
              <SlArrowRight className="text-[18px] m-[10px] xl:text-[30px] xl:m-[20px] md:text-[25px] md:m-[16px]" />
              {/* <FiChevronRight className="xl:w-[58px] xl:h-[58px] w-[35px] h-[35px]" /> */}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider2;
