/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import business_right_circle from "../assets/PNG/business_right_circle.png";
import business_left_circle from "../assets/PNG/business_left_circle.png";
// import men_img from "../assets/PNG/men_img.png";
// import hero_img from "../assets/PNG/hero_img.png";
// import circle from "../assets/PNG/circle.png";

const Herosection = () => {
  const circleRef = useRef(null);
  const statsRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

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
      // Combine translate and rotate transformations
      circleRef.current.style.transform = `translate(-50%, -20%) rotate(${rotation}deg)`;
    }
  }, [rotation]);

  return (
    <div className="relative overflow-hidden bg_hero_header_img flex items-center justify-center">
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
      <div className="max-w-[1140px]  mx-auto  mt-[88px] text-center relative overflow-hidden">
        <div>
          <h1 className="font_jomolhari xl:text-[72px] md:text-[50px] sm:text-[40px] text-[30px] md:leading-[55px] xl:leading-[89px] text-[white] font-normal w-[76%] m-auto  font_Times_New_Roman">
            IT consulting service for{" "}
            <span className="text-[#3bf2f5] font-medium font_Times_New_Roman sm:block">
              Your Business
            </span>
          </h1>
          <p className="text-white/70 mt-4 w-[95%] sm:w-[80%] m-auto">
            With 18+ years of experience in the industry, our team of IT experts
            understands the ever-evolving nature of technology. We offer
            tailored business goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
