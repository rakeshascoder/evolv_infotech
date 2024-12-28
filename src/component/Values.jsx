import React from "react";
// import bgc_img from "../assets/PNG/bgc_img.png"
import Security from "../assets/PNG/Security.png"
import Data_img from "../assets/PNG/Data_img.png"
import Network_img from "../assets/PNG/Network_img.png"
import { valuesdata } from "./Helper";


const Values = () => {
    return <div>

        <div className="valuebg_img lg:py-[100px] md:py-[70px] py-[40px]">
            <div className="max-w-[1360px] px-3  mx-auto">
                <div className="text-center">
                    <p className="font_jomolhari font-normal text-[48px] leading-[62px] text-[white]">Our Values</p>
                    <p className=" font-normal text-[14px] leading-[16px] text-[#FFFFFF99] md:w-[70%] lg:w-[54%] m-auto mt-[30px]">
                        Our cybersecurity values emphasize integrity, innovation, vigilance, resilience, accountability, and collaboration to safeguard data, systems, and trust against evolving threats.
                    </p>

                </div>
                <div>
                    <div className="flex flex-row flex-wrap justify-center ">
                        {valuesdata.map((card, i) => (
                            <div key={i} className="lg:w-3/12 md:w-6/12 sm:w-9/12 w-full  px-3 card cursor-pointer mt-6">

                                <div className="bg-[#FFFFFF] flex flex-col justify-between text-center shadow-[0px_4px_25px_0px_#0000001A] card_border rounded-[20px] py-[20px] px-[30px] h-full">
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

export default Values;
