import React from "react";
import Header from "../component/Header";
import { cyberSafe } from "../component/Helper";
import RedDesign from "../assets/PNG/redDesign.png";
import YellowLightDesing from "../assets/PNG/yellowLightDesign.png";
import GreenCircleDesign from "../assets/PNG/greenCircle.png";
import Partner from "../assets/PNG/partners.png";
import Doubletick from "../assets/SVG/doubleTick.svg";
import PinkDesign from "../assets/PNG/pinkDesign.png";
import YellowDesign from "../assets/PNG/yellowDesing.png";
import MenWomen from "../assets/PNG/menWomen.png";
import LightGreen from "../assets/PNG/lightGreenDesign.png";
import Suse from "../assets/PNG/Suse.png";
import Veeam from "../assets/PNG/Veeam.png";
import Redhat from "../assets/PNG/Redhat.png";
import Paloalto from "../assets/PNG/Paloalto.png";
import SliderCenter from "../assets/PNG/sliderCenter.png";
import Consulting from "../assets/PNG/Consulting.png"
import infrastructure from "../assets/PNG/infrasturcture.png"
import dots1 from "../assets/PNG/dots1.png"
import dots2 from "../assets/PNG/dots2.png"

function OurService() {
  return (
    <>
      <Header
        title="Our Services"
        about="Comprehensive"
        span="Cybersecurity Services"
      />
      <section className="py-[50px] lg:pt-[100px] relative overflow-hidden">
        <img
          className="absolute hidden lg:flex left-[0] top-0"
          src={LightGreen}
          alt="design image"
        />
        <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
          <div className="flex  justify-between -mx-3  flex-col-reverse xl:flex-row">
            <div className=" w-full lg:w-10/12  mx-auto  xl:w-6/12 px-3 ">
              <div>
                <h6 className="font-medium text-xs sm:text-base  text-black mt-7 xl:mt-0">
                  Consulting
                </h6>
                <h1 className=" font-normal text-lg lg:text-5xl mt-3 lg:mt-4 xl:mt-[30px] text-black  lg:leading-[60px]">
                  Empowering Growth Through Expert Consulting
                </h1>
                <p className=" text-[11px] sm:text-sm  font-light sm:leading-[25px] mt-3 lg:mt-4 xl:mt-[30px] text-black opacity-50 border-t-[1px] border-black border-dashed pt-7">
                  At EVOLV, we specialize in IT consulting and system integration, helping businesses optimize their technology infrastructure and achieve seamless connectivity. We work closely with organizations to design tailored solutions that improve efficiency, enhance performance, and drive innovation.
                </p>
                <p className=" text-[11px] sm:text-sm  font-light sm:leading-[25px] mt-3 lg:mt-4 xl:mt-[30px] text-black opacity-50 pb-4 lg:pb-6 xl:pb-[30px]">
                  Whether you're looking to integrate cloud services, streamline enterprise applications, or optimize your IT ecosystem, our expert consultants provide strategic guidance every step of the way. We combine deep technical expertise with a collaborative approach to ensure your technology investments align with your business goals.
                </p>
              </div>

            </div>
            <div className="w-10/12 sm:w-8/12 lg:w-6/12 mx-auto xl:w-5/12  px-3  mt-5 xl:mt-0">
              <div className=" relative ">
                <img
                  className="w-full "
                  src={Consulting}
                  alt="consulting"
                />
                <img className=" absolute start-[-45px] top-[-60px] z-[-1] hidden md:block" src={dots1} alt="dots1" />
              <img className="absolute bottom-[-50px] end-[-65px] z-[-1] hidden md:block" src={dots2} alt="dots2" />
                </div>
              
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[50px] xl:pt-[50px] lg:pb-[100px] relative overflow-hidden">
        <img
          className="absolute hidden lg:flex left-[0] top-0"
          src={LightGreen}
          alt="design image"
        />
        <div className="container mx-auto px-2 lg:px-4 lg:max-w-[1360px]">
          <div className="flex  justify-between -mx-3  flex-col-reverse xl:flex-row-reverse">
            <div className=" w-full lg:w-10/12  mx-auto  xl:w-6/12 px-3 ">
              <div>
                <h6 className="font-medium text-xs sm:text-base  text-black mt-7 xl:mt-0">
                  Infrastructure Management
                </h6>
                <h1 className=" font-normal text-lg lg:text-5xl mt-3 lg:mt-4 xl:mt-[30px] text-black  lg:leading-[60px]">
                  Streamlining Infrastructure for Optimal Performance
                </h1>
                <p className=" text-[11px] sm:text-sm  font-light sm:leading-[25px] mt-3 lg:mt-4 xl:mt-[30px] text-black opacity-50 border-t-[1px] border-black border-dashed pt-7">
                  At Evolv, we specialize in IT consulting and system integration, offering tailored solutions that optimize technology infrastructure for businesses across various industries. Our focus is on providing seamless integration and management of IT systems, helping organizations achieve enhanced efficiency, scalability, and long-term success.
                </p>

              </div>

            </div>
            <div className="w-10/12 sm:w-8/12 lg:w-6/12 mx-auto xl:w-5/12  px-3  mt-5 xl:mt-0">
              <img
                className="w-full"
                src={infrastructure}
                alt="infrastructure"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden ">
        <img
          className="absolute right-[50%] top-0 translate-x-2/4 z-50 h-full"
          src={SliderCenter}
          alt="design image"
        />
        <div className="bg-[#164343] py-[50px] ">
          <p className=" text-center text-white font-medium text-xl lg:text-[28px]">
            Trusted Cybersecurity Partner
          </p>
          <div className="relative overflow-hidden">
            <div className="flex gap-[50px] mt-[50px] animate-scroll">
              <img className="w-[40%] lg:w-full" src={Redhat} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Suse} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Veeam} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Paloalto} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Redhat} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Suse} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Veeam} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Paloalto} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Redhat} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Suse} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Veeam} alt="image of company tag" />
              <img className="w-[40%] lg:w-full" src={Paloalto} alt="image of company tag" />

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService;
