import React, { useContext } from "react";
import RedBigBlur from '../assets/PNG/redBigBlur.png'
import YellowDesign from "../assets/PNG/yellowDesing.png";
import AddressIcon from "../assets/SVG/Adress.svg"
import EmailIcon from "../assets/SVG/email.svg"
import MobileIcon from "../assets/SVG/mobile.svg"
import { AppContext } from "./context";

function Contacts() {
 const {sectionRefs}=useContext(AppContext)

  return (
    <div ref={(el)=>(sectionRefs.current[1]=el)} className="lg:py-[100px] md:py-[50px] py-[40px] relative overflow-hidden">
    <img className="absolute bottom-[10%] left-[0%] lg:left-[10%] xl:left-[30%]  -z-10" src={RedBigBlur} alt="image background"/>
    <img className="absolute bottom-[25%] left-[0%] lg:left-[40%] xl:left-[60%] -z-10" src={YellowDesign} alt="image background"/>
      <div className="max-w-[1360px] px-3 mx-auto">
        <div className="flex flex-row flex-wrap -mx-3 justify-between">
          <div className="w-full md:w-6/12 px-3">
          <p className="text-base font-normal text-black font_outfit">Send Us A Message</p>
          <p className="text-[20px] md:text-2xl lg:text-[46px] font-normal text-black mt-2 md:mt-[30px] font_outfit lg:leading-[59px]">Get in <span className="text-[#06579C]">touch</span> With Us Today</p>
            <div className="flex gap-7 mt-5 lg:mt-[50px]">
                <div>
                    <img src={AddressIcon} alt="icon"/>
                </div>
                <div>
                    <p className="font-normal font_outfit text-sm opacity-50 text-black lg:text-lg">Address</p>
                    <p className="mt-5 text-black font-normal font_outfit text-base lg:text-[28px]">10709 Mockingbird Dr</p>
                </div>
            </div>
            <div className="flex gap-7 mt-4 lg:mt-[30px]">
                <div>
                    <img src={MobileIcon} alt="icon"/>
                </div>
                <div>
                    <p className="font-normal font_outfit text-sm opacity-50 text-black lg:text-lg">Mobile No</p>
                    <p className="mt-5 text-black font-normal font_outfit text-base lg:text-[28px]">+ 91 88089 88997</p>
                </div>
            </div>
            <div className="flex gap-7 mt-4 lg:mt-[30px]">
                <div>
                    <img src={EmailIcon} alt="icon"/>
                </div>
                <div>
                    <p className="font-normal font_outfit text-sm opacity-50 text-black lg:text-lg">Email</p>
                    <p className="mt-5 text-black font-normal font_outfit text-base lg:text-[28px]">EvolvInfotech79@gmail.com</p>
                </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 px-3 mt-5 md:mt-0">
          <div>
          <p className=" text-base lg:text-2xl font-normal font_outfit">Fill up the Form for  sending messaage</p>
            <form className="mt-3 md:mt-[30px]">
              <div className="flex flex-wrap justify-between">
                <div className="w-full sm:w-6/12 mt-5 sm:pe-3">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md bg-white outline-none font_outfit placeholder:text-[#00000099] placeholder:text-base text-sm md:textbase font-normal"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="w-full sm:w-6/12 mt-5">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md bg-white outline-none font_outfit placeholder:text-[#00000099] placeholder:text-base text-sm md:textbase font-normal"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="w-full sm:w-6/12 mt-5 sm:pe-3">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md bg-white outline-none font_outfit placeholder:text-[#00000099] placeholder:text-base text-sm md:textbase font-normal"
                    type="number"
                    placeholder="Phone number"
                    required
                  />
                </div>

                <div className="w-full sm:w-6/12 mt-5">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md bg-white outline-none font_outfit placeholder:text-[#00000099] placeholder:text-base text-sm md:textbase font-normal"
                    type="text"
                    placeholder="Subject"
                  />
                </div>

                <div className="w-full mt-5">
                  <textarea
                    className="h-[70px] md:h-[120px] resize-none w-full py-2 md:py-[17.5px] px-[10px] rounded-md border-none bg-white font_outfit outline-none placeholder:text-[#00000099] text-sm md:textbase font-normal"
                    placeholder="type here !e"
                  ></textarea>
                </div>
              </div>
              <div className=" flex items-center gap-2 mt-2 md:mt-5">
                <input type="radio" id="save-info" />
                <label
                  htmlFor="save-info"
                  className="text-[12px] md:text-sm font_outfit text-[#00000099]"
                >
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              <button className="text-[14px] font-normal md:text-base   text-white bg-[#06579C] rounded-[10px] py-2 px-2 lg:py-[10px] lg:px-[20px] mt-3 lg:mt-[30px]">
                Send Message
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
