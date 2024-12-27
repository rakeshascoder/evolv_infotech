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
            In today’s interconnected world, cybersecurity is more critical than ever. We specialize in protecting your digital assets, safeguarding sensitive information, and ensuring a resilient defense against emerging threats. With cutting-edge technology and proven expertise, we empower individuals and businesses to navigate the digital landscape with confidence.
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
                    What types of cybersecurity services do you offer?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
              Threat detection and response:
 Network security,
 Data encryption and protection,
 Vulnerability assessment,
 Penetration testing,
 Incident response and recovery
              </AccordionBody>
            </Accordion>
            <Accordion className={`rounded-[10px] mt-5 ${open === 2 ? "bg-white border-[0.5px] border-[#0000004D]":"bg-[#06579C1A]"}`} open={open===2}>
              <div onClick={()=>handleAccordian(2)}>
                <AccordionHeader>
                  <div className={`flex items-center gap-2 lg:gap-5 p-3 lg:p-5`} >
                  {open === 2 ?<img src={SubtractIcon} alt="sub icon"/>:<img src={AddIcon} alt="add icon"/>}
                    <p className="font-medium font_outfit text-xs lg:text-base text-black">
                    How do I know if my business is at risk of a cyberattack?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
               Every business connected to the internet is at some level of risk. Key signs include:

Unauthorized access to systems,
Suspicious email activity or phishing attempts,
Data breaches or loss of sensitive information
              </AccordionBody>
            </Accordion>
            <Accordion className={`rounded-[10px] mt-5 ${open === 3 ? "bg-white border-[0.5px] border-[#0000004D]":"bg-[#06579C1A]"}`} open={open===3}>
              <div onClick={()=>handleAccordian(3)}>
                <AccordionHeader>
                  <div className={`flex items-center gap-2 lg:gap-5 p-3 lg:p-5`} >
                  {open === 3 ?<img src={SubtractIcon} alt="sub icon"/>:<img src={AddIcon} alt="add icon"/>}
                    <p className="font-medium font_outfit text-xs lg:text-base text-black">
                    How often should I update my cybersecurity measures?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
              Cyber threats are constantly evolving, so it’s important to regularly:

Update software and systems,
Conduct security assessments,
Train employees on the latest threats
              </AccordionBody>
            </Accordion>
            <Accordion className={`rounded-[10px] mt-5 ${open === 4 ? "bg-white border-[0.5px] border-[#0000004D]":"bg-[#06579C1A]"}`} open={open===4}>
              <div onClick={()=>handleAccordian(4)}>
                <AccordionHeader>
                  <div className={`flex items-center gap-2 lg:gap-5 p-3 lg:p-5`} >
                  {open === 4 ?<img src={SubtractIcon} alt="sub icon"/>:<img src={AddIcon} alt="add icon"/>}
                    <p className="font-medium font_outfit text-xs lg:text-base text-black">
                    Can small businesses afford effective cybersecurity?
                    </p>
                  </div>
                </AccordionHeader>
              </div>
              <AccordionBody className="font-normal text-[10px] lg:text-sm font_outfit text-[#00000099] ps-[44px] lg:ps-[64px] pe-5 pb-5 ">
              Yes, we offer scalable solutions tailored to small businesses, ensuring you get the protection you need without overspending.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
