import React from "react";
import john_img from "../assets/PNG/john.png";
import five_star from "../assets/PNG/five_star.png";
import Tesstimonialbg from "../assets/PNG/Tesstimonialbg.png";
import Slider from "react-slick";
import test1 from "../assets/PNG/test1.png"
import test2 from "../assets/PNG/test2.png"
import test3 from "../assets/PNG/test3.png"
import test4 from "../assets/PNG/test4.png"
import test5 from "../assets/PNG/test5.png"

const Clients = ({display,hidden}) => {



    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            // For screens larger than 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,  // Show 4 slides
              slidesToScroll: 4, // Scroll 4 slides at a time
            },
          },
        
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1, // Show 2 slides
              slidesToScroll: 1, // Scroll 2 slides at a time
            },
          },
         
        ],
      };
  return (
    <div>
      <div className="bg-[#000000] lg:py-[100px] md:py-[50px] py-[40px] relative mt-[50px] md:mt-[30px] lg:mt-0">
        <img
          className="hidden sm:block absolute left-[-30px] top-[70px]"
          src={Tesstimonialbg}
          alt="Tesstimonialbg"
        />

        <div className="max-w-[1360px] px-3 mx-auto">
          <div className="flex  justify-center items-center">
            <span className="me-[10px]">
              <svg
                width="26"
                height="13"
                viewBox="0 0 26 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.8">
                  <circle cx="6" cy="6.0791" r="6" fill="#FF9800" />
                  <circle cx="13" cy="6.0791" r="6" fill="#EE0000" />
                  <circle cx="20" cy="6.0791" r="6" fill="#06579C" />
                </g>
              </svg>
            </span>

            <p className="  font-normal text-[20px] leading-[26px] text-[#FFFFFF]">
              TESTIMONIAL
            </p>
          </div>
          <p className="font_jomolhari font-normal md:text-[35px] text-[25px] lg:text-[48px] leading-[59px] text-center text-[#FFFFFF] lg:mt-[30px] mt-[20px]">
            What Our Clients Says
          </p>
          <p className=" font-normal text-[14px] leading-[14px] text-[#FFFFFF99] lg:w-[56%] md:w-[70%] w-[100%] text-center m-auto lg:mt-[30px] mt-[20px]">
          Our clients trust us for top-notch cybersecurity solutions, praising our expertise in safeguarding their digital assets. From personalized threat prevention to rapid response, they commend our proactive approach, reliability, and cutting-edge technology. With unwavering dedication, we ensure their peace of mind in a constantly evolving cyber threat landscape
          </p>
          <div className={`flex-row flex-wrap items-center justify-center   mt-[30px] ${display} `}>
            <div className="xl:w-2/12 md:w-3/12 sm:w-11/12 w-12/12 px-3 sm:px-0 z-40">
              <div className="bg-white overflow-hidden  relative  rounded-[20px] py-[30px] px-[20px] border-hover hover:text-white duration-[700ms] cursor-pointer">
               <div className="z-40 relative">
               <img src={test1} alt="men_img" />
                <p className=" font-semibold text-[14px] leading-[16px]  mt-[10px]">
                  Taylor
                </p>
                <p className=" font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
                  CEO - Company
                </p>
                <p className=" font-normal text-[14px] leading-[16px]  mt-[10px]">
                Partnering with them was the best decision we made. Their expertise in cybersecurity is unmatched, offering innovative solutions and proactive strategies that safeguarded our operations. Highly recommended for businesses seeking reliability, professionalism, and peace of mind..
                </p>
                <img className="mt-[10px]" src={five_star} alt="start img" />
               </div>
              </div>
            </div>

            <div className="xl:w-4/12 md:w-6/12 sm:w-11/12 w-12/12 px-5 z-40">
              <div className="sm:flex md:flex-col mt-[20px] md:mt-0 ">
                <div className="bg-[white] border-hover relative overflow-hidden  rounded-[20px] duration-[700ms] cursor-pointer pt-[20px] pb-[16px] px-[20px]  hover:text-[white] sm:me-[30px] md:me-0">
                  <div className="z-20 relative">
                  <div className="flex items-center">
                    <img src={test2} alt="men_img" />
                    <div className="ms-[20px]">
                      <p className=" font-semibold text-[14px] leading-[16px] mt-[10px]">
                        Wist
                      </p>
                      <p className=" font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
                        CEO - Company
                      </p>
                    </div>
                  </div>
                  <p className=" font-normal text-[14px] leading-[16px]  mt-[10px]">
                  "The team’s proactive approach and advanced solutions have revolutionized our business’s security. Their dedication to protecting our assets is inspiring. Exceptional service and expertise, making them a trusted partner for any business aiming to enhance its cybersecurity posture."
                  </p>
                  <img className="mt-[10px]" src={five_star} alt="" />
                  </div>
                </div>

                <div className="bg-[white] rounded-[20px] duration-[700ms] cursor-pointer pt-[20px] pb-[16px] px-[20px] border-hover  relative overflow-hidden hover:text-[white] mt-[20px] sm:mt-0 md:mt-[20px]">
                <div className="z-20 relative">
                <div className="flex items-center">
                    <img src={test3} alt="men_img" />
                    <div className="ms-[20px]">
                      <p className=" font-semibold text-[14px] leading-[16px] mt-[10px]">
                        Anderson
                      </p>
                      <p className=" font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
                        CEO - Company
                      </p>
                    </div>
                  </div>
                  <p className=" font-normal text-[14px] leading-[16px]  mt-[10px]">
                  We’ve relied on this team for years, and their consistency never ceases to amaze. Their innovative strategies and personalized approach ensure that our digital assets remain safe and sound. Truly a game-changer in the cybersecurity field.
                  </p>
                  <img className="mt-[10px]" src={five_star} alt="" />
                </div>
                </div>
              </div>
            </div>

            <div className="xl:w-2/12 md:w-3/12 sm:w-11/12 mt-[20px]  md:mt-0 w-12/12 px-3 sm:px-0 z-40">
              <div className="bg-[white] rounded-[20px] md:py-[30px]  py-[30px]   lg:py-[40px] xl:py-[20px] px-[20px] border-hover relative overflow-hidden hover:text-[white] duration-[700ms] cursor-pointer">
               <div className="z-20 relative">
               <img src={test4} alt="men_img" />
                <p className=" font-semibold text-[14px] leading-[16px]  mt-[10px]">
                  Victor
                </p>
                <p className=" font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
                  CEO - Company
                </p>
                <p className=" font-normal text-[14px] leading-[16px]  mt-[10px]">
                Unwavering dedication to excellence and customer satisfaction sets this team apart. Their cutting-edge technology has fortified our operations against potential threats. Highly professional and reliable; they are the cybersecurity partner every forward-thinking business needs in today’s digital era.
                </p>
                <img className="mt-[10px]" src={five_star} alt="start img" />
               </div>
              </div>
            </div>

            <div className="xl:w-4/12 md:w-12/12 px-3 sm:w-11/12  mt-[20px] xl:mt-0 w-12/12">
              <div className="sm:flex  xl:flex-col">
                <div className="bg-[white] rounded-[20px] duration-[700ms] cursor-pointer pt-[20px] pb-[16px] px-[20px] border-hover relative overflow-hidden hover:text-[white] sm:me-[30px] xl:me-0">
                 <div className="z-20 relative">
                 <div className="flex items-center">
                    <img src={test5} alt="men_img" />
                    <div className="ms-[20px]">
                      <p className=" font-semibold text-[14px] leading-[16px] mt-[10px]">
                        wall Smith
                      </p>
                      <p className=" font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
                        CEO - Company
                      </p>
                    </div>
                  </div>
                  <p className=" font-normal text-[14px] leading-[16px]  mt-[10px]">
                  This team’s professionalism and cutting-edge strategies have been instrumental in securing our digital landscape. They’ve exceeded expectations with their proactive approach and dedication to excellence. A vital partner in achieving our goals and maintaining operational security
                  </p>
                  <img className="mt-[10px]" src={five_star} alt="" />
                 </div>
                </div>

                <div className="bg-[white] rounded-[20px] duration-[700ms] cursor-pointer pt-[20px] pb-[16px] px-[20px] border-hover overflow-hidden relative hover:text-[white]  mt-[20px] sm:mt-0 xl:mt-[20px]">
                  <div className="relative z-20">
                  <div className="flex items-center">
                    <img src={john_img} alt="men_img" />
                    <div className="ms-[20px]">
                      <p className=" font-semibold text-[14px] leading-[16px] mt-[10px]">
                        Karsol
                      </p>
                      <p className=" font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
                        CEO - Company
                      </p>
                    </div>
                  </div>
                  <p className=" font-normal text-[14px] leading-[16px]  mt-[10px]">
                  Their innovative solutions combined with outstanding expertise have reshaped how we perceive cybersecurity. A highly skilled team that delivers results beyond expectations. Their commitment to safeguarding businesses is truly exceptional. A trustworthy partner for navigating the complexities of technology
                  </p>
                  <img className="mt-[10px]" src={five_star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>




        <div className={` ${hidden} mt-10`}>
        <Slider {...settings}>
        <div className="w-11/12 px-3 ">
  <div className="bg-white overflow-hidden  relative  rounded-[20px] py-[30px] px-[20px] border-hover hover:text-white duration-[700ms] cursor-pointer ">
    <div className="flex items-center gap-5 z-20 relative ">
      <img src={john_img} alt="John Doe" />
      <div>
        <p className="font-semibold text-[14px] leading-[16px] mt-[10px]">
          wiblson
        </p>
        <p className="font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
          CEO - Company
        </p>
      </div>
    </div>
    <p className="font-normal text-[14px] leading-[16px] mt-[10px] z-20 relative">
    Their expertise and innovative approach have revolutionized our digital security. They proactively identify risks and resolve them before they become issues. An exceptional team that delivers reliability, trust, and peace of mind every step of the way.
    </p>
    <img className="mt-[10px] z-20 relative " src={five_star} alt="Five Star Rating" />
  </div>
</div>
        <div className="w-11/12 px-3 ">
  <div className="bg-white overflow-hidden  relative  rounded-[20px] py-[30px] px-[20px] border-hover hover:text-white duration-[700ms] cursor-pointer ">
    <div className="flex items-center gap-5 z-20 relative ">
      <img src={test1} alt="John Doe" />
      <div>
        <p className="font-semibold text-[14px] leading-[16px] mt-[10px]">
          Daniel        </p>
        <p className="font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
          CEO - Company
        </p>
      </div>
    </div>
    <p className="font-normal text-[14px] leading-[16px] mt-[10px] z-20 relative">
    Outstanding service and commitment to cybersecurity excellence. Their insights and advanced strategies have elevated our security to a whole new level. I highly recommend them to any business looking for dependable and forward-thinking protection.
    </p>
    <img className="mt-[10px] z-20 relative " src={five_star} alt="Five Star Rating" />
  </div>
</div>
        <div className="w-11/12 px-3 ">
  <div className="bg-white overflow-hidden  relative  rounded-[20px] py-[30px] px-[20px] border-hover hover:text-white duration-[700ms] cursor-pointer ">
    <div className="flex items-center gap-5 z-20 relative ">
      <img src={test2} alt="John Doe" />
      <div>
        <p className="font-semibold text-[14px] leading-[16px] mt-[10px]">
          Harry
        </p>
        <p className="font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
          CEO - Company
        </p>
      </div>
    </div>
    <p className="font-normal text-[14px] leading-[16px] mt-[10px] z-20 relative">
    This team goes beyond expectations, providing tailored solutions for our unique needs. Their professionalism, dedication, and innovative mindset make them a trusted partner in protecting critical business assets. It’s a pleasure working with such a reliable cybersecurity firm.
    </p>
    <img className="mt-[10px] z-20 relative " src={five_star} alt="Five Star Rating" />
  </div>
</div>
        <div className="w-11/12 px-3 ">
  <div className="bg-white overflow-hidden  relative  rounded-[20px] py-[30px] px-[20px] border-hover hover:text-white duration-[700ms] cursor-pointer ">
    <div className="flex items-center gap-5 z-20 relative ">
      <img src={test3} alt="John Doe" />
      <div>
        <p className="font-semibold text-[14px] leading-[16px] mt-[10px]">
          John kliff
        </p>
        <p className="font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
          CEO - Company
        </p>
      </div>
    </div>
    <p className="font-normal text-[14px] leading-[16px] mt-[10px] z-20 relative ">
    Their ability to deliver proactive solutions has been invaluable to our business. Always one step ahead, they ensure our operations remain secure and efficient. A team of experts who truly care about their clients’ success
    </p>
    <img className="mt-[10px] z-20 relative " src={five_star} alt="Five Star Rating" />
  </div>
</div>
        <div className="w-11/12 px-3 ">
  <div className="bg-white overflow-hidden  relative  rounded-[20px] py-[30px] px-[20px] border-hover hover:text-white duration-[700ms] cursor-pointer ">
    <div className="flex items-center gap-5 z-20 relative ">
      <img src={test4} alt="John Doe" />
      <div>
        <p className="font-semibold text-[14px] leading-[16px] mt-[10px]">
          John Doe
        </p>
        <p className="font-normal text-[14px] leading-[16px] opacity-[60%] mt-[5px]">
          CEO - Company
        </p>
      </div>
    </div>
    <p className="font-normal text-[14px] leading-[16px] mt-[10px] z-20 relative">
    Partnering with this company has been a transformative experience. Their cutting-edge technology and customer-focused approach provide unparalleled security solutions. They’ve earned our trust as a key partner in safeguarding our business..
    </p>
    <img className="mt-[10px] z-20 relative " src={five_star} alt="Five Star Rating" />
  </div>
</div>

           
          </Slider>
        </div>

           
     
        </div>
      </div>
    </div>
  );
};

export default Clients;
