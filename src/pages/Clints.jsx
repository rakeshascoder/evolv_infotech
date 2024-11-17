import React from "react";
import Header from "../component/Header";
import Panda from "../assets/PNG/panda.png";
import Avira from "../assets/PNG/avira.png";
import Msp from "../assets/PNG/msp.png";

import RedBlur from "../assets/PNG/regBGBlur.png";
import YellowDesign from "../assets/PNG/yellowDesing.png";
import GreenCircleDesign from "../assets/PNG/greenCircle.png";

function Clints() {
  return (
    <>
      <Header
        title="Our Clients"
        about="Clients Who Rely on"
        span="Our Expertise"
      />
      <div className="lg:py-[100px] md:py-[50px] py-[40px] relative overflow-hidden">
      <img className='hidden md:block absolute left-[2%] top-[0%] -z-10' src={RedBlur} alt='blur desgin image'/>
       <img className='hidden md:block absolute left-[30%] top-[20%] -z-10' src={YellowDesign} alt='blur desgin image'/>
       <img className='hidden md:block absolute right-[2%] top-[20%] -z-10' src={GreenCircleDesign} alt='blur desgin image'/>
        <div className="max-w-[1360px] px-3 mx-auto ">
          <div className="flex  justify-center items-center">
            <p className=" font_outfit font-normal text-[20px] leading-[26px] text-[#000000]">
              Our Client’s
            </p>
          </div>
          <p className="font_outfit font-normal md:text-[35px] text-[25px] lg:text-[48px] leading-[59px] text-center text-[#000000] lg:mt-[30px] mt-[20px]">
            <span className="text-[#06579C]">Clients</span> in Secure Hands
          </p>
          <div className="flex flex-wrap flex-row items-center justify-center gap-[30px] lg:gap-[50px] mt-[30px] lg:py-[30px] lg:px-[30px]">
            <img className="w-[100px] h-[35px] lg:w-[200px] lg:h-[70px]" src={Avira} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[200px] lg:h-[70px]" src={Avira} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[200px] lg:h-[70px]" src={Avira} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[200px] lg:h-[70px]" src={Avira} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[200px] lg:h-[70px]" src={Avira} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[200px] lg:h-[70px]" src={Avira} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[215px] lg:h-[70px]"  src={Msp} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
            <img className="w-[100px] h-[35px] lg:w-[210px] lg:h-[70px]"  src={Panda} alt="image of company tag" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Clints;
