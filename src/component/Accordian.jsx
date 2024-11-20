import React, { useState } from "react";
import FaqsIcon from "../assets/SVG/faqsIcon.svg";
import AddIcon from "../assets/SVG/plusIcon.svg";
import SubtractIcon from "../assets/SVG/minusIcon.svg";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Accordian() {
  const [open, setOpen] = useState(1);
  const handleAccordian = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="lg:py-[100px] md:py-[50px] py-[40px]">
      <div className="max-w-[1360px] px-3 mx-auto">
        <div className="flex items-center gap-[7px]">
          <img src={FaqsIcon} alt="icon" />
          <p className="text-base lg:text-xl font-normal text-[#06579C] font_outfit">FAQS</p>
        </div>
        <div className="flex flex-wrap -mx-3 flex-row mt-4 lg:mt-[30px]">
          <div className="w-full md:w-6/12 px-3">
            <p className=" text-xl sm:text-2xl lg:text-3xl xl:text-5xl font_outfit text-black xl:leading-[62px]">
              A Dedication to Supporting All Aspects of Your Life.
            </p>
            <p className="font-normal text-[10px] sm:text-xs lg:text-sm font_outfit text-[#00000099] mt-4 lg:mt-[30px]">
              Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
              tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
              volutpat placerat urna consectetur sollicitudin maecenas viverra.
              Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a
              auctor quis ipsum integer placerat.{" "}
            </p>
            <div className="flex items-center gap-2.5 mt-4 lg:mt-[30px]">
              <p className=" text-xl sm:text-2xl lg:text-5xl font-semibold font_outfit text-black">
                10+
              </p>
              <p className="font-normal text-[10px] sm:text-sm font_outfit text-[#000000]">
                Years of <br /> experience
              </p>
            </div>
          </div>
          <div className=" w-full md:w-6/12 px-3 mt-5 md:mt-0">
            <Accordion className={`rounded-[10px] ${open === 1 ? "bg-white border-[0.5px] border-[#0000004D]":"bg-[#06579C1A]"}`} open={open===1}>
              <div onClick={()=>handleAccordian(1)}>
                <AccordionHeader>
                  <div className={`flex items-center gap-2 lg:gap-5 p-3 lg:p-5`} >
                    {open === 1 ?<img src={SubtractIcon} alt="sub icon"/>:<img src={AddIcon} alt="add icon"/>}
                    <p className="font-medium font_outfit text-xs lg:text-base text-black">
                      Frequently Ask Questions?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                volutpat placerat urna consectetur sollicitudin maecenas
                viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti
                viverra a auctor quis ipsum integer placerat.
              </AccordionBody>
            </Accordion>
            <Accordion className={`rounded-[10px] mt-5 ${open === 2 ? "bg-white border-[0.5px] border-[#0000004D]":"bg-[#06579C1A]"}`} open={open===2}>
              <div onClick={()=>handleAccordian(2)}>
                <AccordionHeader>
                  <div className={`flex items-center gap-2 lg:gap-5 p-3 lg:p-5`} >
                  {open === 2 ?<img src={SubtractIcon} alt="sub icon"/>:<img src={AddIcon} alt="add icon"/>}
                    <p className="font-medium font_outfit text-xs lg:text-base text-black">
                      Frequently Ask Questions?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                volutpat placerat urna consectetur sollicitudin maecenas
                viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti
                viverra a auctor quis ipsum integer placerat.
              </AccordionBody>
            </Accordion>
            <Accordion className={`rounded-[10px] mt-5 ${open === 3 ? "bg-white border-[0.5px] border-[#0000004D]":"bg-[#06579C1A]"}`} open={open===3}>
              <div onClick={()=>handleAccordian(3)}>
                <AccordionHeader>
                  <div className={`flex items-center gap-2 lg:gap-5 p-3 lg:p-5`} >
                  {open === 3 ?<img src={SubtractIcon} alt="sub icon"/>:<img src={AddIcon} alt="add icon"/>}
                    <p className="font-medium font_outfit text-xs lg:text-base text-black">
                      Frequently Ask Questions?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                volutpat placerat urna consectetur sollicitudin maecenas
                viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti
                viverra a auctor quis ipsum integer placerat.
              </AccordionBody>
            </Accordion>
            <Accordion className={`rounded-[10px] mt-5 ${open === 4 ? "bg-white border-[0.5px] border-[#0000004D]":"bg-[#06579C1A]"}`} open={open===4}>
              <div onClick={()=>handleAccordian(4)}>
                <AccordionHeader>
                  <div className={`flex items-center gap-2 lg:gap-5 p-3 lg:p-5`} >
                  {open === 4 ?<img src={SubtractIcon} alt="sub icon"/>:<img src={AddIcon} alt="add icon"/>}
                    <p className="font-medium font_outfit text-xs lg:text-base text-black">
                      Frequently Ask Questions?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim
                tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In
                volutpat placerat urna consectetur sollicitudin maecenas
                viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti
                viverra a auctor quis ipsum integer placerat.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
