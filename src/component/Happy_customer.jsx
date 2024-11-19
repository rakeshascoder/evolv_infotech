import React from "react";
import Regent from "../assets/PNG/Regent.png"
import namo from "../assets/PNG/namo.png"
import wsd from "../assets/PNG/wsd.png"
import stsm from "../assets/PNG/stsm.png"

const Happy_customer = () => {
    return <div>
        <div className="bg-[#164343] lg:py-[100px] md:py-[50px] py-[40px]">
            <div className="max-w-[1360px] px-3 mx-auto ">
                <div>
                    <p className="font_jomolhari font-normal lg:text-[48px] md:text-[35px] text-[24px] lg:leading-[62px] lg:w-[70%] sm:w-[80%] w-[100%] text-[#FFFFFF] text-center m-auto">We have more than 270+ Happy Customers with satisfaction</p>
                    <p className=" font-normal leading-[16px] text-[#FFFFFF99] lg:w-[45%] sm:w-[60%]  text-center  m-auto lg:mt-[30px] mt-[20px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="flex mt-[30px] justify-center xl:justify-between flex-wrap">
                        <img src={Regent} alt="logo img" />
                        <img src={namo} alt="logo img" />
                        <img src={wsd} alt="logo img" />
                        <img src={stsm} alt="logo img" />
                    </div>
                </div>
            </div>
        </div>




    </div>;
};

export default Happy_customer;
