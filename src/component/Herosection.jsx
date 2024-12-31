import React, { useEffect, useRef, useState } from "react";
import business_right_circle from "../assets/PNG/business_right_circle.png";
import business_left_circle from "../assets/PNG/business_left_circle.png";
import men_img from "../assets/PNG/men_img.png";
import circle from "../assets/PNG/circle.png";
import CountUp from "react-countup";

const Herosection = () => {
  const circleRef = useRef(null);
  const statsRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let timeoutId;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      // Update rotation based on scroll direction and speed
      setRotation((prevRotation) => prevRotation + scrollDelta * 0.5); // Adjust 0.5 for sensitivity
      setIsScrolling(true);

      lastScrollY = currentScrollY;

      // Clear any previous timeout and set a new one to stop animation after scrolling ends
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.transform = `rotate(${rotation}deg)`;
    }
  }, [rotation]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the green div is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div>
        <img
          className="absolute right-0 bottom-[20%] hidden lg:block"
          src={business_right_circle}
          alt="ellips"
        />
      </div>
      <div>
        <img
          className="absolute left-0 top-[10%] hidden lg:block"
          src={business_left_circle}
          alt="ellips"
        />
      </div>
      <div className="max-w-[1140px] px-3 mx-auto lg:mt-[50px] mt-[30px] text-center relative overflow-hidden">
        
        <div>
          <p className="font_jomolhari lg:text-[72px] md:text-[50px] sm:text-[40px] text-[30px] lg:leading-[89px] text-[black] font-normal w-[76%] m-auto mt-[20px] font_Times_New_Roman">
            IT consulting service for{" "}
            <span className="text-[#06579C] font-medium font_Times_New_Roman">
              Your Business
            </span>
          </p>
        </div>
        <div className="lg:mt-[150px] sm:mt-[120px] mt-[40px]">
          <div className="mb-8 lg:mt-[74px] mt-[30px]">
            <img className="m-auto w-90" src={men_img} alt="business img" />
          </div>
          <div
            ref={circleRef}
            className="absolute lg:top-[32%] lg:right-[9%] md:top-[34%] md:right-[4%] sm:top-[31%] sm:right-[2%]"
          >
            <img className="m-auto w-full" src={circle} alt="business img" />
          </div>
        </div>
      </div>

      <div
        ref={statsRef}
        className="bg-[#164343] py-[26px] xl:px-[120px] lg:px-10 px-3 translate-y-[-33px] w-full"
      >
        <div className="flex gap-5 justify-center lg:justify-between flex-wrap lg:text-start text-center">
          {/* First Stat */}
          <div className="flex items-center">
            <div className="max-lg:px-5">
              <p className="font-semibold leading-[62px] lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                {startCount && <CountUp start={0} end={36} duration={2.5} suffix="+" />}
              </p>
              <p className="leading-[16px] text-[14px] font-medium mt-[5px] text-[white] whitespace-nowrap">
                YEAR’S EXPERIENCE
              </p>
            </div>
          </div>

          <div className="h-[130px] w-[1.5px] bg-[#FFFFFF99] hidden lg:block"></div>

          {/* Second Stat */}
          <div className="flex items-center">
            <div className="max-lg:px-5">
              <p className="font-semibold leading-[62px] lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                {startCount && <CountUp start={0} end={645} duration={2.5} suffix="+" />}
              </p>
              <p className="leading-[16px] text-[14px] font-medium mt-[5px] text-[white] whitespace-nowrap">
                CYBER SECURITY EXPERTS
              </p>
            </div>
          </div>

          <div className="h-[130px] w-[1.5px] bg-[#FFFFFF99] hidden lg:block"></div>

          {/* Third Stat */}
          <div className="flex items-center">
            <div className="max-lg:px-5">
              <p className="font-semibold leading-[62px] lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                {startCount && <CountUp start={0} end={100} duration={2.5} suffix="%" />}
              </p>
              <p className="leading-[16px] text-[14px] font-medium mt-[5px] text-[white] whitespace-nowrap">
                CUSTOMER SATISFACTION
              </p>
            </div>
          </div>

          <div className="h-[130px] w-[1.5px] bg-[#FFFFFF99] hidden lg:block"></div>

          {/* Fourth Stat */}
          <div className="flex items-center">
            <div className="max-lg:px-5">
              <p className="font-semibold leading-[62px] lg:text-[35px] text-[25px] xl:text-[48px] text-[white]">
                {startCount && <CountUp start={0} end={35} duration={2.5} suffix=" M" />}
              </p>
              <p className="leading-[16px] text-[14px] font-medium mt-[5px] text-[white] whitespace-nowrap">
                CUSTOMER SERVED GLOBALLY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
