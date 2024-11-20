import React from "react";
import start_img from "../assets/PNG/start_img.png"

const Our_service = () => {
    return <div>

        <div className="max-w-[1360px] px-3 mx-auto ">
            <div className="flex flex-row flex-wrap lg:py-[100px] sm:py-[60px] py-[50px] justify-center lg:justify-start">
                <div className="lg:w-6/12 md:w-9/12 text-center lg:text-start m-auto lg:m-0">
                    <div className="flex items-center justify-center lg:justify-start">
                        <span className="me-[10px]"><svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <circle cx="6" cy="6.0791" r="6" fill="#FF9800" />
                                <circle cx="13" cy="6.0791" r="6" fill="#EE0000" />
                                <circle cx="20" cy="6.0791" r="6" fill="#06579C" />
                            </g>
                        </svg>
                        </span>

                        <p className=" font-normal text-[20px] leading-[26px] text-[#06579C]">Our Services</p>
                    </div>
                    <p className="font_jomolhari font-normal xl:text-[48px] md:text-[40px] text-[25px] xl:leading-[62px] text-[#000000] md:mt-[30px] mt-[20px] lg:w-[85%]">Our clients are the best at IT Management</p>
                    <p className=" font-normal text-[14px] leading-[16px] text-[#00000099] md:mt-[30px] mt-[20px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                    <button className='font-normal font_outfit text-[18px] leading-[22px] text-[white] bg-[#06579C] px-[10px] py-[11px] rounded-[10px] hover:text-[#06579C] hover:bg-[white] get_start_border duration-500 whitespace-nowrap mt-[30px]'>
                        View All Services
                    </button>
                </div>


                <div className="lg:w-6/12  lg:ps-[30px] md:9/12 mt-[40px] ">
                    <div className="bg-[#FFFFFF] shadow-[0px_4px_25px_0px_#0000001A] py-[20px] px-[30px] rounded-[20px] hover:bg-[#06579C] duration-300 hover:text-[white]  cursor-pointer ">
                        <div className="sm:flex items-center ">
                            <div className="me-[24px]"><img className="start_img_border m-auto   p-[10px] rounded-[50%] " src={start_img} alt="star img" /></div>
                            <div className="text-center sm:text-start">
                                <p className="font_outfit font-normal text-[20px] leading-[26px] mt-[10px] sm:mt-[0]">Network Security</p>
                                <h1 className=" font-normal text-[12px] leading-[14px] mt-[7px] sm:mt-0  sm:w-[60%] opacity-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#FFFFFF] shadow-[0px_4px_25px_0px_#0000001A] py-[20px] px-[30px] rounded-[20px] hover:bg-[#06579C] duration-300 hover:text-[white]  cursor-pointer mt-[20px]">
                        <div className="sm:flex items-center ">
                            <div className="me-[24px]"><img className="start_img_border  m-auto  p-[10px] rounded-[50%] " src={start_img} alt="star img" /></div>
                            <div className="text-center sm:text-start">
                                <p className="font_outfit font-normal text-[20px] leading-[26px] mt-[10px] sm:mt-[0]">Application Security</p>
                                <p className=" font-normal text-[12px] leading-[14px]  mt-[7px] sm:mt-0  sm:w-[60%] opacity-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#FFFFFF] shadow-[0px_4px_25px_0px_#0000001A] py-[20px] px-[30px] rounded-[20px] hover:bg-[#06579C] duration-300 hover:text-[white]  cursor-pointer mt-[20px]">
                        <div className="sm:flex items-center ">
                            <div className="me-[24px]"><img className="start_img_border  m-auto  p-[10px] rounded-[50%] " src={start_img} alt="star img" /></div>
                            <div className="text-center sm:text-start">
                                <p className="font_outfit font-normal text-[20px] leading-[26px] mt-[10px] sm:mt-[0]">Security Awareness</p>
                                <p className=" font-normal text-[12px] leading-[14px]  mt-[7px] sm:mt-0  sm:w-[60%] opacity-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>


                    <div className="bg-[#FFFFFF] shadow-[0px_4px_25px_0px_#0000001A] py-[20px] px-[30px] rounded-[20px] hover:bg-[#06579C] duration-300 hover:text-[white]  cursor-pointer mt-[20px]">
                        <div className="sm:flex items-center ">
                            <div className="me-[24px]"><img className="start_img_border  m-auto  p-[10px] rounded-[50%] " src={start_img} alt="star img" /></div>
                            <div className="text-center sm:text-start">
                                <p className="font_outfit font-normal text-[20px] leading-[26px] mt-[10px] sm:mt-[0]">Cloud Security</p>
                                <p className=" font-normal text-[12px] leading-[14px]  mt-[7px] sm:mt-0  sm:w-[60%] opacity-[60%]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;



};

export default Our_service;
