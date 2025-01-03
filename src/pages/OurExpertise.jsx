import React from 'react'
import PinkDesign from "../assets/PNG/pinkDesign.png"
import GreenCircleDesign from "../assets/PNG/greenCircle.png"
import YellowDesign from "../assets/PNG/yellowDesing.png"
import Partner from "../assets/PNG/partners.png"
import Expertise from "../assets/PNG/Expertise.png"
import tickicon from "../assets/SVG/tickIcon.svg"

function OurExpertise() {
    return (
        <div>
            <section className="relative overflow-hidden">



                <div className="max-w-[1360px] mx-auto py-7 lg:pt-[100px]">
                    <div className="flex flex-wrap px-[-12px] flex-row justify-between">
                        <div className="w-10/12 sm:w-8/12 mx-auto md:w-5/12 px-3">
                            <img
                                className="w-full h-full"
                                src={Expertise}
                                alt="Expertise"
                            />
                        </div>
                        <div className="w-full md:w-7/12 px-3 xl:ps-[88px] mt-5 md:mt-0">
                            <div className='flex items-center'> <span className="me-[10px]">
                                <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.8">
                                        <circle cx="6" cy="6.53955" r="6" fill="#FF9800" />
                                        <circle cx="13" cy="6.53955" r="6" fill="#EE0000" />
                                        <circle cx="20" cy="6.53955" r="6" fill="#06579C" />
                                    </g>
                                </svg>

                            </span>
                                <h6 className="font-medium text-xs lg:text-xl  text-black">
                                    Trusted Cybersecurity Partner
                                </h6></div>
                            <h1 className=" font-normal text-lg lg:text-5xl mt-3 lg:mt-4 xl:mt-[30px] text-black  lg:leading-[62px]">
                                With extensive experience in infrastructure management, we serve key sectors such as
                            </h1>
                            <p className="font-light  text-[12px] lg:text-sm  opacity-70 text-black mt-3 lg:mt-4 xl:mt-[30px]">
                                We work closely with our clients to design and implement solutions that align with their unique business goals, ensuring a smooth integration of cloud services, enterprise applications, and other critical systems.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[50px]">
                                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12 sm:pe-2">
                                    <div>
                                        <img src={tickicon} alt="tickicon" />
                                    </div>
                                    <p className=" font-normal text-xs sm:text-sm lg:text-[20px] text-black">
                                        Manufacturing
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2.5 w-full sm:w-6/12 mt-3 sm:mt-0">
                                    <div>
                                        <img src={tickicon} alt="tickicon" />
                                    </div>
                                    <p className=" font-normal text-xs sm:text-sm lg:text-[20px] text-black">
                                        Education
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[30px]">
                                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12 sm:pe-2">
                                    <div>
                                        <img src={tickicon} alt="tickicon" />
                                    </div>
                                    <p className=" font-normal text-xs sm:text-sm lg:text-[20px] text-black">
                                        Banking and Insurance
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12 mt-3 md:mt-0">
                                    <div>
                                        <img src={tickicon} alt="tickicon" />
                                    </div>
                                    <p className=" font-normal text-xs sm:text-sm lg:text-[20px] text-black ">
                                    financial
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-center mt-3 lg:mt-4 xl:mt-[30px]">
                                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12 sm:pe-2">
                                    <div>
                                        <img src={tickicon} alt="tickicon" />
                                    </div>
                                    <p className=" font-normal text-xs sm:text-sm lg:text-[20px] text-black">
                                        Communications
                                    </p>
                                </div>
                                <div className="flex items-center gap-x-2.5 w-full lg:w-6/12 mt-3 md:mt-0">
                                    <div>
                                        <img src={tickicon} alt="tickicon" />
                                    </div>
                                    <p className=" font-normal text-xs sm:text-sm lg:text-[20px] text-black ">
                                        Public Sector
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-2.5 w-full  sm:pe-2 mt-3 xl:mt-[30px]">
                                <div>

                                    <img src={tickicon} alt="tickicon" />
                                </div>
                                <p className=" font-normal text-xs sm:text-sm lg:text-[20px] text-black">
                                    ITES (Information Technology-enabled Services)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurExpertise
