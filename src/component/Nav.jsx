import React, { useState } from "react";
import SendMessage from "./SendMessage";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [toggleNav, setToggleNav] = useState();

  const [sendMessagePopup, setSendMessagePopup] = useState(false);

  const handleToggleNav = () => {
    if (window.innerWidth < 1024) {
      // Only toggle nav on screens smaller than 1024px
      setToggleNav((prev) => {       
        document.body.style.overflow = prev ? "auto" : "hidden";
        return !prev;
      });
    }
  };
  function toggleSendMessage() {
    setSendMessagePopup(!sendMessagePopup);
    if (!sendMessagePopup) {
      setToggleNav(false);
    }
  }

  return (
    <div>
      {sendMessagePopup && (
        <div
          onClick={() => setSendMessagePopup(!sendMessagePopup)}
          className="fixed inset-0 bg-black opacity-60 backdrop-blur-3xl z-[30]"
        ></div>
      )}
      {toggleNav && (
        <div
          onClick={() => setToggleNav(!toggleNav)}
          className="fixed inset-0 bg-black opacity-60 backdrop-blur-3xl z-[20]"
        ></div>
      )}
      <div className="max-w-[1360px] px-3  mx-auto   z-[-10] pt-5">
        <div className=" bg-white shadow-[0px_4px_20px_0px_#0000001A] px-[30px] py-[20px] rounded-[20px] ">
          <div className="flex items-center justify-between z-[5000] relative">
            <div>
              <p className="text-[#000000] font-normal text-[24px]  leading-[26.17px] font_Orelega whitespace-nowrap cursor-pointer">
                Evolv Infotech
              </p>
            </div>

            <div
              className={`max-lg:fixed max-lg:h-screen  max-lg:w-[50%] max-md:w-[100%] top-0  max-lg:flex items-center justify-center max-lg:flex-col  bg-white  lg:bg-transparent duration-700  ${
                !toggleNav ? "-left-full" : "left-0"
              }`}
            >
              <ol className="flex max-lg:flex-col gap-10 ">
                <li>
                  <NavLink
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/aboutUs"
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/ourService"
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="/clints"
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300"
                  >
                    Clients
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  to="testimonials"
                    className="font-medium font_outfit leading-[20px] text-[16px] text-black hover:text-[#06579C] duration-300"
                  >
                    Testimonials
                  </NavLink>
                </li>
              </ol>
              <div className="mt-7 lg:hidden">
                <button
                  className="font-normal font_outfit text-[18px] leading-[22px] text-[white] bg-[#06579C] px-[10px] py-[11px] rounded-[10px] hover:text-[#06579C] hover:bg-[white] get_start_border duration-500 whitespace-nowrap"
                  onClick={toggleSendMessage}
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <button
                className="font-normal font_outfit text-[18px] leading-[22px] text-[white] bg-[#06579C] px-[10px] py-[11px] rounded-[10px] hover:text-[#06579C] hover:bg-[white] get_start_border duration-500 whitespace-nowrap"
                onClick={toggleSendMessage}
              >
                Contact Us
              </button>
            </div>

            <div
              onClick={handleToggleNav}
              className="flex justify-end lg:hidden  cursor-pointer"
            >
              <div
                style={{
                  transform: toggleNav ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              >
                <span
                  style={{
                    transform: toggleNav
                      ? "rotate(-5deg) translate(10px, 5px)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                  className="block w-8 h-[3px] bg-black mb-[6px]"
                ></span>
                <span
                  style={{
                    opacity: toggleNav ? 0 : 1,
                    transition: "opacity 0.3s",
                  }}
                  className="block w-8 h-[3px] bg-black mb-[6px]"
                ></span>
                <span
                  style={{
                    transform: toggleNav
                      ? "rotate(-80deg) translate(14px, 8px)"
                      : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                  className="block w-8 h-[3px] bg-black"
                ></span>
              </div>
            </div>

            {sendMessagePopup && (
              <div className=" fixed top-0 left-0 z-[30] flex items-center justify-center h-[70vh] lg:h-screen w-screen">
                <SendMessage togglePopup={toggleSendMessage} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

};

export default Nav;
