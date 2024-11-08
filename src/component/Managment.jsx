import React from "react";
// import bgc_img from "../assets/PNG/bgc_img.png"
import Security from "../assets/PNG/Security.png"
import Data_img from "../assets/PNG/Data_img.png"
import Network_img from "../assets/PNG/Network_img.png"
const cards = [

    {
        img: Security,
        heading: "Security Management",
        peragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing typesetting industry.",
        button: "Read More"
    },
    {
        img: Data_img,
        heading: "Data Privacy",
        peragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing typesetting industry.",
        button: "Read More"
    },
    {
        img: Network_img,
        heading: "Network Security",
        peragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing typesetting industry.",
        button: "Read More"
    }
]

const Managment = () => {
    return <div>

        <div className="bg_img lg:py-[100px] md:py-[70px] py-[40px]">
            <div className="max-w-[1360px] px-3  mx-auto">
                <div className="text-center">
                    <p className="font_jomolhari  font-normal text-[48px] leading-[62px] text-[white]">What We Do</p>
                    <p className="font_inter font-normal text-[14px] leading-[16px] text-[#FFFFFF99] md:w-[70%] lg:w-[54%] m-auto mt-[30px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>

                </div>
                <div>
                    <div className="flex flex-row flex-wrap justify-center lg:mt-[30px]">
                        {cards.map((card, i) => (
                            <div key={i} className="lg:w-4/12  md:w-6/12 sm:w-9/12 w-12/12  px-3 card cursor-pointer mt-[30px] lg:mt-0 ">
                                <div className="bg-[#FFFFFF] text-center shadow-[0px_4px_25px_0px_#0000001A] card_border rounded-[20px] py-[20px] px-[30px]">
                                    <img className="m-auto" src={card.img} alt="card img" />
                                    <p className="font_outfit font-normal text-[20px] leading-[26px] text-[#000000] mt-[24px]">{card.heading}</p>

                                    <p className="font_inter font-normal text-[14px] leading-[16px] text-[#00000099] mt-[24px]">{card.peragraph}</p>

                                    <button className="m-auto flex items-baseline text-[#06579C] font_inter font-medium text-[14px] leading-[16px] mt-[24px]">{card.button}
                                        <span className="ms-[10px]"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.63675 1.60913C8.50427 1.46696 8.43214 1.27891 8.43557 1.08461C8.439 0.890308 8.51771 0.704922 8.65513 0.567509C8.79254 0.430096 8.97793 0.351384 9.17223 0.347956C9.36653 0.344528 9.55457 0.416651 9.69675 0.549131L13.6967 4.54913C13.8372 4.68976 13.9161 4.88038 13.9161 5.07913C13.9161 5.27788 13.8372 5.46851 13.6967 5.60913L9.69675 9.60913C9.62809 9.68282 9.54529 9.74192 9.45329 9.78291C9.36129 9.8239 9.26197 9.84595 9.16127 9.84772C9.06057 9.8495 8.96054 9.83097 8.86715 9.79325C8.77376 9.75553 8.68893 9.69939 8.61771 9.62817C8.54649 9.55695 8.49035 9.47212 8.45263 9.37873C8.4149 9.28534 8.39638 9.18531 8.39816 9.08461C8.39993 8.98391 8.42198 8.88459 8.46297 8.79259C8.50396 8.70059 8.56306 8.61779 8.63675 8.54913L11.3567 5.82913H1.66675C1.46784 5.82913 1.27707 5.75011 1.13642 5.60946C0.995766 5.46881 0.916748 5.27804 0.916748 5.07913C0.916748 4.88022 0.995766 4.68945 1.13642 4.5488C1.27707 4.40815 1.46784 4.32913 1.66675 4.32913H11.3567L8.63675 1.60913Z" fill="#06579C" />
                                        </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>





        </div>





    </div>;
};

export default Managment;
