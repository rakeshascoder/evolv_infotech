import React from "react";
// import bgc_img from "../assets/PNG/bgc_img.png"
import Security from "../assets/PNG/Security.png"
import Data_img from "../assets/PNG/Data_img.png"
import Network_img from "../assets/PNG/Network_img.png"
import consulting from "../assets/SVG/consulting.png"
import automation from "../assets/SVG/automation.svg"
const cards = [

    {
        img: Security,
        heading: "Cloud Integration",
        peragraph: "Connecting cloud services with your existing infrastructure for scalability and flexibility.",
        button: "Read More"
    },
    {
        img: Data_img,
        heading: "Enterprise Systems",
        peragraph: " Integrating ERP, CRM, and other business-critical applications to streamline workflows",
        button: "Read More"
    },
    {
        img: Network_img,
        heading: "Data Integration",
        peragraph: " Ensuring smooth data flow between platforms, eliminating silos, and enabling actionable insights",
        button: "Read More"
    },
    {
        img: automation,
        heading: "IoT & Automation",
        peragraph: " Bringing automation and smart devices into your ecosystem for enhanced operational efficiency"
    },
    {
        img: consulting,
        heading: "Consulting & Support",
        peragraph: "Offering strategic guidance and ongoing support to optimize and future-proof your IT infrastructure",
        button: "Read More"
    },
]

const Managment = () => {
    return <div>

        <div className="bg_img lg:py-[100px] md:py-[70px] py-[40px]">
            <div className="max-w-[1360px] px-3  mx-auto">
                <div className="text-center">
                    <p className="font_jomolhari  font-normal text-[48px] leading-[62px] text-[white]">What We Do</p>
                    <p className=" font-normal text-[14px] leading-[16px] text-[#FFFFFF99] md:w-[70%] lg:w-[54%] m-auto mt-[30px]">
                    We deliver tailored integration solutions that bridge the gap between your business needs and cutting-edge technologies. Our expertise spans across.
                    </p>

                </div>
                <div>
                    <div className="flex flex-row flex-wrap justify-center ">
                        {cards.map((card, i) => (
                            <div key={i} className="lg:w-4/12 h-full  md:w-6/12 sm:w-9/12 w-12/12  px-3 card cursor-pointer mt-6">
                            
                                <div className="bg-[#FFFFFF] flex flex-col justify-between text-center shadow-[0px_4px_25px_0px_#0000001A] card_border rounded-[20px] py-[20px] px-[30px]">
                                    <img className="m-auto w-[52px]" src={card.img} alt="card img" />
                                    <p className="font_outfit font-normal text-[20px] leading-[26px] text-[#000000] mt-[24px]">{card.heading}</p>

                                    <p className=" font-normal  text-[14px] leading-[16px] text-[#00000099] mt-[24px]">{card.peragraph}</p>

                                   
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>





        </div>





    </div>;
};

export default Managment;
