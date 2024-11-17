import React from 'react'
import Header from '../component/Header'
import john_img from "../assets/PNG/john_img.png"
import five_star from "../assets/PNG/five_star.png"
import RedBlur from "../assets/PNG/regBGBlur.png";
import YellowDesign from "../assets/PNG/yellowDesing.png";
import GreenCircleDesign from "../assets/PNG/greenCircle.png";


function Testimonials() {
  return (
    <>
         <Header
        title="Testimonials"
        about="Testimonials: Success"
        span="Stories in Cybersecurity"
      />
       <div className="lg:py-[100px] md:py-[50px] py-[40px] relative overflow-hidden">
       <img className='hidden sm:block absolute left-[2%] top-[0%] -z-10' src={RedBlur} alt='blur desgin image'/>
       <img className='hidden sm:block absolute left-[30%] top-[20%] -z-10' src={YellowDesign} alt='blur desgin image'/>
       <img className='hidden sm:block absolute right-[2%] top-[20%] -z-10' src={GreenCircleDesign} alt='blur desgin image'/>
            <div className="max-w-[1360px] px-3 mx-auto">
                <div className="flex  justify-center items-center">
                    <p className=" font_outfit font-normal text-[20px] leading-[26px] text-[#000000]">Client’s Feed backs</p>
                </div>
                <p className="font_outfit font-normal md:text-[35px] text-[25px] lg:text-[48px] leading-[59px] text-center text-[#000000] lg:mt-[30px] mt-[20px]">"Real Stories of Impact and Trust"</p>
                <p className="font_outfit font-normal text-[14px] leading-[14px] text-[#00000099] lg:w-[56%] md:w-[70%] w-[100%] text-center m-auto lg:mt-[30px] mt-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="flex flex-row flex-wrap items-center justify-center  mt-[30px]">

                    <div className="xl:w-2/12 md:w-3/12 sm:w-11/12 w-12/12 px-3 sm:px-0">
                        <div className="bg-[white] rounded-[7px] sm:py-[30px] py-[30px] md:py-[30px] lg:py-[40px] xl:py-[20px] px-[20px] hover:bg-[#06579C] hover:text-[white] duration-300 cursor-pointer">
                            <img src={john_img} alt="men_img" />
                            <p className="font_inter font-semibold text-[14px] leading-[16px]  mt-[10px]">John doe</p>
                            <p className="font_inter font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">CEO - Company</p>
                            <p className="font_outfit font-normal text-[14px] leading-[16px]  mt-[10px]">
                                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. Faucibus enim potenti viverra a auctor quis ipsum integer placerat.
                            </p>
                            <img className="mt-[10px]" src={five_star} alt="start img" />
                        </div>
                    </div>

                    <div className="xl:w-4/12 md:w-6/12 sm:w-11/12 w-12/12 px-5 ">
                        <div className="sm:flex md:flex-col mt-[20px] md:mt-0">
                            <div className="bg-[white] rounded-[7px] duration-300 cursor-pointer pt-[20px] pb-[16px] px-[20px] hover:bg-[#06579C] hover:text-[white] sm:me-[30px] md:me-0">
                                <div className="flex items-center">
                                    <img src={john_img} alt="men_img" />
                                    <div className="ms-[20px]">
                                        <p className="font_inter font-semibold text-[14px] leading-[16px] mt-[10px]">John doe</p>
                                        <p className="font_inter font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">CEO - Company</p>
                                    </div>
                                </div>
                                <p className="font_outfit font-normal text-[14px] leading-[16px]  mt-[10px]">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra
                                </p>
                                <img className="mt-[10px]" src={five_star} alt="" />
                            </div>

                            <div className="bg-[white] rounded-[7px] duration-300 cursor-pointer pt-[20px] pb-[16px] px-[20px] hover:bg-[#06579C] hover:text-[white] mt-[20px] sm:mt-0 md:mt-[20px]">
                                <div className="flex items-center">
                                    <img src={john_img} alt="men_img" />
                                    <div className="ms-[20px]">
                                        <p className="font_inter font-semibold text-[14px] leading-[16px] mt-[10px]">John doe</p>
                                        <p className="font_inter font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">CEO - Company</p>
                                    </div>
                                </div>
                                <p className="font_outfit font-normal text-[14px] leading-[16px]  mt-[10px]">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra
                                </p>
                                <img className="mt-[10px]" src={five_star} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="xl:w-2/12 md:w-3/12 sm:w-11/12 mt-[20px]  md:mt-0 w-12/12 px-3 sm:px-0">
                        <div className="bg-[white] rounded-[7px] md:py-[30px]  py-[30px]   lg:py-[40px] xl:py-[20px] px-[20px] hover:bg-[#06579C] hover:text-[white] duration-300 cursor-pointer">
                            <img src={john_img} alt="men_img" />
                            <p className="font_inter font-semibold text-[14px] leading-[16px]  mt-[10px]">John doe</p>
                            <p className="font_inter font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">CEO - Company</p>
                            <p className="font_outfit font-normal text-[14px] leading-[16px]  mt-[10px]">
                                Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat. Faucibus enim potenti viverra a auctor quis ipsum integer placerat.
                            </p>
                            <img className="mt-[10px]" src={five_star} alt="start img" />
                        </div>
                    </div>

                    <div className="xl:w-4/12 md:w-12/12 px-3 sm:w-11/12  mt-[20px] xl:mt-0 w-12/12">
                        <div className="sm:flex  xl:flex-col">
                            <div className="bg-[white] rounded-[7px] duration-300 cursor-pointer pt-[20px] pb-[16px] px-[20px] hover:bg-[#06579C] hover:text-[white] sm:me-[30px] xl:me-0">
                                <div className="flex items-center">
                                    <img src={john_img} alt="men_img" />
                                    <div className="ms-[20px]">
                                        <p className="font_inter font-semibold text-[14px] leading-[16px] mt-[10px]">John doe</p>
                                        <p className="font_inter font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">CEO - Company</p>
                                    </div>
                                </div>
                                <p className="font_outfit font-normal text-[14px] leading-[16px]  mt-[10px]">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra
                                </p>
                                <img className="mt-[10px]" src={five_star} alt="" />
                            </div>

                            <div className="bg-[white] rounded-[7px] duration-300 cursor-pointer pt-[20px] pb-[16px] px-[20px] hover:bg-[#06579C] hover:text-[white]  mt-[20px] sm:mt-0 xl:mt-[20px]">
                                <div className="flex items-center">
                                    <img src={john_img} alt="men_img" />
                                    <div className="ms-[20px]">
                                        <p className="font_inter font-semibold text-[14px] leading-[16px] mt-[10px]">John doe</p>
                                        <p className="font_inter font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">CEO - Company</p>
                                    </div>
                                </div>
                                <p className="font_outfit font-normal text-[14px] leading-[16px]  mt-[10px]">
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra
                                </p>
                                <img className="mt-[10px]" src={five_star} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials