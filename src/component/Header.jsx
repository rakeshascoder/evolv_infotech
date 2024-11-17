import React from "react";
import { useLocation } from "react-router-dom";

function Header({  title, about, span }) {
    const location = useLocation()
  return (
    <>
      <div
        className={`${location.pathname === "/aboutUs" ? "header_bg_image" :location.pathname === "/ourService"?"ourServie_bg_image":location.pathname === "/testimonials"?"testimonials_bg_image":location.pathname === "/clints"?"clints_bg_image":""} h-[260px] sm:h-[300px] md:h-[360px] lg:h-[450px] absolute top-[0px] w-full -z-[1] `}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex items-center mt-[60px]">
            <div className="h-[18px] w-[18px] border-[7px] sm:h-[22px] sm:w-[22px] bg-transparent sm:border-[8px] border-white rounded-full"></div>
            <p className="font-normal text-base sm:text-xl ms-6 text-white font_outfit">
              {title}
            </p>
          </div>
          <p className="text-white mt-5 text-center font-medium text-2xl sm:text-4xl md:text-5xl lg:text-7xl font_outfit lg:leading-[90px]">
            "{about} <span className="block">{span}"</span>
          </p>
        </div>
      </div>
      <div className="mt-[174px] sm:mt-[214px] md:mt-[274px] lg:mt-[344px]"></div>
    </>
  );
}

export default Header;
