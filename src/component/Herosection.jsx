import React from "react";
// import Business_img from "../assets/PNG/Business_img.png"
import business_right_circle from "../assets/PNG/business_right_circle.png";
import business_left_circle from "../assets/PNG/business_left_circle.png";
import men_img from "../assets/PNG/men_img.png";
import circle from "../assets/PNG/circle.png";

const Herosection = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <img
          className="absolute right-0 bottom-[20%] hidden lg:block "
          src={business_right_circle}
          alt="ellips"
        />
      </div>
      <div>
        <img
          className="absolute left-0 top-[10%] hidden lg:block"
          src={business_left_circle}
          alt="ellips"
        />
      </div>
      <div className="max-w-[1140px] px-3  mx-auto lg:mt-[50px] mt-[30px] text-center relative overflow-hidden">
        <div className=" bg-[#0000001A] inline-block px-[10px] py-[10px] rounded-[20px]">
          <div className="flex  items-center">
            <span className="me-[24px]">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 11.5C22 17.5751 17.0751 22.5 11 22.5C4.92487 22.5 0 17.5751 0 11.5C0 5.42487 4.92487 0.5 11 0.5C17.0751 0.5 22 5.42487 22 11.5ZM8.09699 11.5C8.09699 13.1033 9.39671 14.403 11 14.403C12.6033 14.403 13.903 13.1033 13.903 11.5C13.903 9.89671 12.6033 8.59699 11 8.59699C9.39671 8.59699 8.09699 9.89671 8.09699 11.5Z"
                  fill="#06579C"
                />
              </svg>
            </span>

            <p className="font_outfit font-normal text-[20px] leading-[24px] text-[black]">
              WELCOME TO CYBERTY
            </p>
          </div>
        </div>

        <div>
          <p className="font_jomolhari lg:text-[72px]  md:text-[50px] sm:text-[40px] text-[30px] lg:leading-[89px] text-[black] font-normal w-[80%] m-auto mt-[20px]">
            IT consulting service for
            <span className="text-[#06579C]  font-bold">Your Business</span>
          </p>
        </div>

        <div className="lg:mt-[150px] sm:mt-[120px] mt-[40px]">
          <div className="mb-8 lg:mt-[74px] mt-[30px]">
            <img className="m-auto w-90" src={men_img} alt="business img" />
          </div>
          <div className=" absolute lg:top-[32%] lg:right-[9%] md:top-[34%] md:right-[4%] sm:top-[31%] sm:right-[2%] rotate-animation ">
            <img className="m-auto w-full" src={circle} alt="business img" />
          </div>
        </div>
      </div>

      <div className="bg-[#164343] py-[26px] xl:px-[120px] lg:px-10 px-3 translate-y-[-18%] w-full">
        <div className="flex gap-5 justify-center lg:justify-between flex-wrap lg:text-start text-center ">
          <div className="flex items-center ">
            <div className="max-lg:p x-5 ">
              <p className="font_inter font-semibold leading-[62px] lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                36+
              </p>
              <p className="font_inter leading-[16px] text-[14px] font-medium mt-[5px]  text-[white] whitespace-nowrap">
                YEAR’S EXPERIENCE
              </p>
            </div>
          </div>
          <div className="h-[130px] w-[1.5px] bg-[#FFFFFF99] hidden lg:block "></div>

          <div className="flex items-center ">
            <div className="max-lg:p x-5 ">
              <p className="font_inter font-semibold leading-[62px]  lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                645+
              </p>
              <p className="font_inter leading-[16px] text-[14px] font-medium mt-[5px]  text-[white] whitespace-nowrap">
                CYBER SECURITY EXPERTS
              </p>
            </div>
          </div>
          <div className="h-[130px] w-[1.5px] bg-[#FFFFFF99] hidden lg:block "></div>

          <div className="flex items-center ">
            <div className="max-lg:p x-5 ">
              <p className="font_inter font-semibold leading-[62px]  lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                100%
              </p>
              <p className="font_inter leading-[16px] text-[14px] font-medium mt-[5px]  text-[white] whitespace-nowrap">
                CUSTOMER SATIFICATION
              </p>
            </div>
          </div>
          <div className="h-[130px] w-[1.5px] bg-[#FFFFFF99] hidden lg:block "></div>

          <div className="flex items-center ">
            <div className="max-lg:p x-5 ">
              <p className="font_inter font-semibold leading-[62px]  lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                35 M
              </p>
              <p className="font_inter leading-[16px] text-[14px] font-medium mt-[5px]  text-[white] whitespace-nowrap">
                CUSTOMER SERVED GLOBALY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
