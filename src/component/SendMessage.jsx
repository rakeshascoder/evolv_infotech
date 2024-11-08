import React, { useEffect } from "react";

export default function SendMessage({ togglePopup }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      togglePopup();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center"
        onClick={handleOverlayClick}
      >
        <div className="w-full mx-auto md:w-10/12 lg:w-8/12 2xl:w-6/12  px-3 md:px-6">
          <div className="bg-white p-4 md:p-8 rounded-lg relative">
            <div className="flex justify-end" onClick={togglePopup}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="black" />
              </svg>

            </div>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-[#06579C] rounded-full"></div>
                <p className="text-xl font_inter">Send Us A Message</p>
              </div>
              <p className="text-[20px] md:text-2xl text-[#06579C] mt-2 md:mt-5 font_jomolhari">Get in touch With Us Today</p>
              <p className="text-[12px] md:text-sm font_inter text-[#00000099] mt-2 md:mt-5 max-w-md mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
            </div>

            <form className="mt-3 md:mt-5">
              <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-6/12 px-3 mt-5 ">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md border border-[#0000004D] focus:ring-0 focus:shadow-[0px_2px_5px_0px_#00000040] bg-white outline-none font_inter placeholder:text-[#00000099] placeholder:text-base"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="w-full md:w-6/12 px-3 mt-5">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md border border-[#0000004D] focus:ring-0 focus:shadow-[0px_2px_5px_0px_#00000040] bg-white outline-none font_inter placeholder:text-[#00000099] placeholder:text-base"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="w-full md:w-6/12 px-3 mt-5">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md border border-[#0000004D] bg-white outline-none font_inter placeholder:text-[#00000099] focus:ring-0 focus:shadow-[0px_2px_5px_0px_#00000040] placeholder:text-base"
                    type="number"
                    placeholder="Phone number"
                    required
                  />
                </div>

                <div className="w-full md:w-6/12 px-3 mt-5">
                  <input
                    className="py-2 md:py-[17.5px] px-[10px] w-full rounded-md border border-[#0000004D] bg-white outline-none font_inter placeholder:text-[#00000099] focus:ring-0 focus:shadow-[0px_2px_5px_0px_#00000040] placeholder:text-base"
                    type="text"
                    placeholder="Subject"
                  />
                </div>

                <div className="w-full px-3 mt-5">
                  <textarea
                    className="h-[70px] md:h-[120px] w-full py-2 md:py-[17.5px] px-[10px] rounded-md border border-[#0000004D] bg-white focus:ring-0 focus:shadow-[0px_2px_5px_0px_#00000040] font_inter outline-none placeholder:text-[#00000099]"
                    placeholder="Type your message"
                  ></textarea>
                </div>
              </div>
              <div className="sm:px-3 flex items-center gap-2 mt-2 md:mt-5">
                <input type="radio" id="save-info" />
                <label htmlFor="save-info" className="text-[12px] md:text-sm font_inter text-[#00000099]">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>


              <button className="text-[14px] font-normal md:text-base ms-3 font_inter text-white bg-[#06579C] rounded-[10px] py-2 px-2 lg:p-[15px] mt-3 lg:mt-[30px]">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
