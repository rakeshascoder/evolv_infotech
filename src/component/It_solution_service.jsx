import React from "react";
import study_img from "../assets/PNG/study_img.png"

const It_solution_service = () => {
    return <div>
        <div className="max-w-[1360px] px-3  mx-auto lg:my-[100px] sm:my-[50px] my-[30px]">

            <div className="flex flex-row flex-wrap items-center lg:justify-between justify-center">
                <div className="lg:w-4/12  px-3 ">
                    <img className="w-full" src={study_img} alt="study img" />
                </div>

                <div className="lg:w-7/12  lg:mt-0 mt-[30px]">
                    <div className="flex items-center justify-center md:justify-start">
                        <span className="me-[10px]">
                            <svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.8">
                                    <circle cx="6" cy="6.53955" r="6" fill="#FF9800" />
                                    <circle cx="13" cy="6.53955" r="6" fill="#EE0000" />
                                    <circle cx="20" cy="6.53955" r="6" fill="#06579C" />
                                </g>
                            </svg>

                        </span>

                        <p className=" font-normal text-[20px] leading-[26px] text-[#06579C]">
                            About Evolv Infotech
                        </p>
                    </div>


                    <p className="font_jomolhari md:leading-[62px] font-normal sm:text-[35px] text-[30px] md:text-[48px] text-center md:text-start text-[black] md:mt-[30px] mt-[20px]">We Provide the best IT Solutions services</p>

                    <p className=" font-normal text-[15px] leading-[16px] text-[#00000099] md:mt-[30px] mt-[20px]">
                    At Evolv, we are passionate about empowering businesses through seamless, innovative IT system integration. We specialize in connecting diverse technologies, platforms, and processes to create customized solutions that drive efficiency, improve productivity, and foster growth.
                    </p>
                    <p className=" font-normal text-[15px] leading-[16px] text-[#00000099] md:mt-[30px] mt-[20px]">
                    As a dynamic and forward-thinking systems integrator, our mission is to simplify complex IT environments for organizations of all sizes. Whether you’re looking to integrate cloud solutions, optimize your enterprise applications, or streamline your infrastructure, we provide end-to-end services that ensure your systems work together as one cohesive, high-performing ecosystem.

                    </p>


                    <div className="sm:flex items-center mt-[20px] md:mt-[30px]">

                        <div className="sm:me-[30px]">
                            <p className="font_outfit font-normal text-[20px] leading-[26px] text-[#000000]">
                                Our Mission & Vission
                            </p>
                            <p className="  font-normal leading-[16px] text-[14px] text-[#00000099] mt-[10px] w-[93%]">
                            To empower individuals and businesses with robust cyber security solutions, ensuring safe and resilient digital environments in an ever-evolving cyber landscape. To be a global leader in cyber security, fostering trust and innovation by safeguarding digital ecosystems for a secure future.
                            </p>
                        </div>
                        <div className="mt-[15px] sm:mt-[0]">
                            <p className="font_outfit font-normal text-[20px] sm:leading-[26px] text-[#000000]">
                                Our Purpose
                            </p>
                            <p className="  font-normal leading-[16px] text-[14px] text-[#00000099] mt-[10px] w-[93%]">
                            Our purpose is to safeguard digital ecosystems by providing cutting-edge cybersecurity solutions, ensuring data privacy, and building trust in an ever-connected world.
                            </p>
                        </div>
                    </div>

                    {/* <button className="text-[18px] p-[10px] bg-[#06579C] text-white rounded-[10px] mt-6">Read More</button> */}

                </div>
            </div>

        </div>





    </div>;
};

export default It_solution_service;
