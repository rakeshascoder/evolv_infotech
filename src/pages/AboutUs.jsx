import React from "react";
import Header from "../component/Header";
import TickIcon from "../assets/SVG/tickIcon.svg";
import CyberMan from "../assets/PNG/cyberMan.png";
import Dots from "../assets/PNG/dots.png";
import YellowBubble from "../assets/PNG/header_bubble_yellow.png";
import BlueBubble from "../assets/PNG/header_blue_bubble.png";
import { teamMember } from "../component/Helper";
import Dribble from "../assets/SVG/Dribble.svg";
import Xsvg from "../assets/SVG/Xsvg.svg";
import LinkedIn from "../assets/SVG/LinkedIn.svg";
import GreenCircleDesign from "../assets/PNG/greenCircle.png";
import OurTeamBgDesign from "../assets/PNG/ourTeamBgDesign.png";
import Clients from "../component/Clients";

function AboutUs() {
  return (
    <>
      {/* ----------about us ------------------ */}
      <Header title={"About Us"} about={"Your Trusted Partner"} span="in Cybersecurity" />
      {/* ----------why choose us----------------- */}
      <div className="relative overflow-hidden">
        <img
          className="hidden lg:block absolute right-0 top-0 -z-10"
          src={BlueBubble}
          alt="image for design"
        />
        <div className="max-w-[1360px] mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center px-[-12px] py-14 lg:py-28 ">
            <div className="w-full md:w-7/12 xl:w-6/12 px-3">
              <h6 className="font-medium text-xs sm:text-base font_inter text-black mt-7">
                Why Choose Us
              </h6>
              <h1 className="font_outfit font-medium text-lg lg:text-5xl mt-3 lg:mt-4 xl:mt-6 text-black  lg:leading-[60px]">
                Our Partner in Proactive Cyber Defense
              </h1>
              <p className="font_outfit text-sm lg:text-xl font-light leading-[25px] mt-3 lg:mt-4 xl:mt-[50px] text-black opacity-50 pb-4 lg:pb-6 xl:pb-[30px] border-b-[1px] border-black border-dashed">
                We have over 20+ years of experience in all stages of software
                design, development, maintenance, and support.
              </p>
              <p className="font-normal font_outfit text-sm lg:text-xl text-black mt-3 lg:mt-4 xl:mt-[50px]">
                Our teams know how to harness the power of data, artificial
                intelligence, modernising core, optimising and automating
                operations to achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[50px]">
                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black">
                    IT Professional services
                  </p>
                </div>
                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12 mt-3 md:mt-0">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black">
                    Application Development services
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[50px]">
                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black">
                    Managed IT services
                  </p>
                </div>
                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12 mt-3 md:mt-0">
                  <div>
                    <img src={TickIcon} alt="image" />
                  </div>
                  <p className="font_outfit font-normal text-sm lg:text-xl text-black ">
                    Maintenance And Support
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-4 lg:mt-5 xl:mt-[50px]">
                <div className=" me-6 sm:me-24 lg:me-[152px]">
                  <button className="font_outfit text-sm  sm:text-lg text-white font-normal bg-[#06579C] py-3 px-4 sm:py-[15px] sm:px-[30px] rounded-[10px] hover:bg-[#06569ccf] transition-all">
                    More About Us’
                  </button>
                </div>
                <div>
                  <p className="font_outfit text-xs sm:text-sm font-normal text-black opacity-30">
                    Co founder
                  </p>
                  <p className="font_pinyon text-base sm:text-[30px] font-normal text-black">
                    John Deo
                  </p>
                </div>
              </div>
            </div>
            <div className="w-8/12 sm:w-7/12 md:w-5/12 lg:w-5/12 px-3">
              <div className="relative">
                <img
                  className="hidden lg:block absolute top-[-56px] left-[-80px] -z-10"
                  src={Dots}
                  alt="image for design"
                />
                <img
                  className="hidden lg:block absolute  bottom-[-56px] right-[-80px] -z-10"
                  src={Dots}
                  alt="image for design"
                />
                <img
                  className="hidden lg:block absolute  bottom-[-95px] left-[-183px] -z-10"
                  src={YellowBubble}
                  alt="image for design"
                />
                <img className="w-full" src={CyberMan} alt="image of a man" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------our team member--------------- */}
      <div className="relative overflow-hidden">
        <img
          className="hidden lg:block absolute  bottom-[25%] left-[0%] -z-10"
          src={OurTeamBgDesign}
          alt="image for design"
        />
        <div className="max-w-[1360px] mx-auto py-7 lg:py-[100px]">
          <h4 className="text-base font-normal font_inter text-black text-center">
            Together
          </h4>
          <h2 className="font_outfit text-2xl lg:text-5xl font-medium text-center text-[#06579C] mt-3 lg:mt-5">
            <span className="text-black">Our</span> Team member’s
          </h2>
          <p className="font_roboto font-normal text-sm lg:text-lg text-black mt-3 lg:mt-5 text-center">
            Meet the passionate individuals behind our mission.
          </p>
          <div className="flex flex-wrap  justify-between px-[-12px] flex-row relative">
            <img
              className="hidden lg:block absolute  bottom-[0%] left-[20%] -z-10"
              src={GreenCircleDesign}
              alt="image for design"
            />
            {teamMember.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-10/12 sm:w-6/12 md:w-4/12 mx-auto lg:w-3/12 px-3 mt-6 lg:mt-[50px]"
                >
                  <div className="px-3">
                    <img
                      className="w-full"
                      src={item.image}
                      alt="image of team member"
                    />
                    <h1 className="font_outfit font-semibold text-base lg:text-xl text-center mt-3 lg:mt-[30px]">
                      {item.name}
                    </h1>
                    <p className="font_outfit font-normal text-sm xl:text-base mt-3 lg:mt-[30px] text-center px-2 sm:px-3 md:px-0 xl:px-2">
                      {item.discription}
                    </p>
                    <div className="flex items-center justify-center gap-[14px] mt-3 lg:mt-[30px]">
                      <button>
                        <img src={LinkedIn} alt="linkedin icon" />
                      </button>
                      <button>
                        <img src={Xsvg} alt="icon" />
                      </button>
                      <button>
                        <img src={Dribble} alt="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* -----------------what our clients saya------------- */}
      <Clients />
    </>
  );
}

export default AboutUs;
