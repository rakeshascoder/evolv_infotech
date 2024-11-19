import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "./context";

const Footer = () => {
 const {scrollToNextSection}=useContext(AppContext)
 const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
  return (
    <div>
      <div className="bg-[#FFFFFF] ">
        <div className="max-w-[1360px] px-3 mx-auto">
          <div className="lg:py-[100px] md:py-[60px] py-[40px]">
            <div className="bg-[#4A52C3] py-[29px] xl:px-[100px] md:px-[30px] px-[30px] rounded-[20px] ">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <p className="font_outfit font-normal text-[30px] text-center md:text-start lg:text-[35px] xl:text-[48px] xl:leading-[62px] text-[#FFFFFF] lg:w-[50%] lg:me-[30px]">
                  Subscribe To Our News Letter
                </p>
                <div>
                  <div className="bg-[#FFFFFF33] md:w-[632px] flex md:flex-row flex-col justify-between rounded-[10px] px-[10px] py-[10px] mt-[20px] lg:mt-0 ">
                    <input
                      className="outline-none border-none bg-transparent md:w-[60.7%] md:me-[123px] text-white  md:text-start"
                      type="email"
                      name=""
                      id=""
                      placeholder="Entre your E-mail address"
                    />
                    <button className="font-normal font_outfit text-[14px] leading-[22px] text-[white] bg-[#06579C] px-[10px] py-[11px] rounded-[10px] hover:text-[#06579C] hover:bg-[#FFFFFFB2] get_start_border duration-500 whitespace-nowrap  mt-[20px] md:mt-0">
                      Get Started
                    </button>
                  </div>
                  <p className="font_outfit font-normal text-center md:text-start text-[14px] leading-[22px] text-[#FFFFFFB2] mt-[10px]">
                    Let’s discuss IT strategy, services, and business solutions
                    & compliance concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center lg:justify-around xl:justify-between justify-around lg:pb-[100px] md:pb-[60px] pb-[40px]">
            <div className=" lg:w-3/12 md:w-5/12 w-11/12 px-3 text-center md:text-start ">
              <p className="font_jacques font-normal text-[24px] leading-[31px] cursor-pointer">
                EVOLV INFOTECH
              </p>
              <p className="font_inter text-[14px] font-normal leading-[16px] mt-[30px] text-[#00000099]">
                Cybersecurity is crucial in today's digital age, where many
                individuals and organizations store a significant amount of
                sensitive data on computers...
              </p>
              <p className="font_inter font-normal text-[16px] leading-[19px] text-[#000000B2] mt-[30px]">
                FOLLOW US
              </p>

              <div className="flex items-center mt-[10px] justify-center md:justify-start">
                <span className="me-[20px]  duration-500 hover:translate-y-[-10px] span_hover">
                  <a
                    target="blank"
                    href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.303 0.329102H4.697C3.51758 0.329102 2.38647 0.797623 1.5525 1.6316C0.718522 2.46557 0.25 3.59668 0.25 4.7761V15.3821C0.25 16.5615 0.718522 17.6926 1.5525 18.5266C2.38647 19.3606 3.51758 19.8291 4.697 19.8291H15.303C16.4824 19.8291 17.6135 19.3606 18.4475 18.5266C19.2815 17.6926 19.75 16.5615 19.75 15.3821V4.7761C19.75 3.59668 19.2815 2.46557 18.4475 1.6316C17.6135 0.797623 16.4824 0.329102 15.303 0.329102ZM6.843 16.0711C6.84614 16.1255 6.83811 16.18 6.81942 16.2312C6.80072 16.2825 6.77176 16.3293 6.7343 16.3689C6.69684 16.4085 6.65167 16.4401 6.60158 16.4616C6.55149 16.4831 6.49752 16.4942 6.443 16.4941H4.663C4.55574 16.4912 4.45386 16.4465 4.37911 16.3695C4.30437 16.2926 4.2627 16.1894 4.263 16.0821V8.6791C4.26153 8.62566 4.27079 8.57245 4.29023 8.52265C4.30967 8.47284 4.3389 8.42744 4.3762 8.38912C4.41349 8.3508 4.45808 8.32035 4.50734 8.29957C4.5566 8.27878 4.60953 8.26808 4.663 8.2681H6.443C6.49651 8.26794 6.5495 8.27855 6.59882 8.29929C6.64815 8.32002 6.6928 8.35047 6.73012 8.38882C6.76744 8.42716 6.79666 8.47262 6.81605 8.52249C6.83544 8.57236 6.84461 8.62562 6.843 8.6791V16.0711ZM5.52 6.7111C5.32729 6.70966 5.13674 6.67027 4.95925 6.59519C4.78176 6.5201 4.62079 6.41079 4.48554 6.2735C4.35029 6.13621 4.24341 5.97362 4.171 5.79503C4.09858 5.61643 4.06206 5.42532 4.0635 5.2326C4.06494 5.03989 4.10433 4.84934 4.17942 4.67185C4.2545 4.49436 4.36381 4.33339 4.5011 4.19814C4.63839 4.0629 4.80098 3.95601 4.97957 3.8836C5.15817 3.81118 5.34929 3.77466 5.542 3.7761C5.92452 3.78854 6.28703 3.94998 6.55219 4.22596C6.81734 4.50194 6.96415 4.87062 6.96128 5.25333C6.9584 5.63604 6.80609 6.00247 6.53682 6.27445C6.26755 6.54642 5.90266 6.7024 5.52 6.7091M16.337 16.0591C16.3368 16.1602 16.2972 16.2573 16.2266 16.3297C16.1561 16.4021 16.0601 16.4442 15.959 16.4471H14.08C13.9788 16.444 13.8828 16.4017 13.8123 16.3291C13.7418 16.2565 13.7022 16.1593 13.702 16.0581V12.6341C13.702 12.1231 13.858 10.4111 12.346 10.4111C11.167 10.4111 10.934 11.6111 10.889 12.1451V16.1361C10.889 16.2375 10.8496 16.3349 10.779 16.4077C10.7085 16.4805 10.6123 16.523 10.511 16.5261H8.688C8.63683 16.5261 8.58617 16.516 8.53891 16.4964C8.49164 16.4768 8.44872 16.448 8.41258 16.4118C8.37645 16.3756 8.34781 16.3326 8.32832 16.2853C8.30883 16.238 8.29887 16.1873 8.299 16.1361V8.6431C8.30187 8.54168 8.34425 8.44539 8.41711 8.37477C8.48997 8.30415 8.58754 8.2648 8.689 8.2651H10.511C10.6125 8.2648 10.71 8.30415 10.7829 8.37477C10.8557 8.44539 10.8981 8.54168 10.901 8.6431V9.2881C11.167 8.89872 11.5343 8.58937 11.9633 8.3934C12.3922 8.19744 12.8665 8.1223 13.335 8.1761C16.37 8.1761 16.359 11.0111 16.359 12.6231L16.337 16.0591Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </span>

                <span className="me-[20px]  duration-500 hover:translate-y-[-10px] telegram_hover">
                  <a target="blank" href="https://telegram.org/">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_149_751)">
                        <path
                          d="M12 0.454102C5.57775 0.454102 0.375 5.6576 0.375 12.0791C0.375 18.5006 5.5785 23.7041 12 23.7041C18.4215 23.7041 23.625 18.5006 23.625 12.0791C23.625 5.6576 18.4215 0.454102 12 0.454102ZM17.7098 8.41835L15.8018 17.4094C15.6608 18.0469 15.2812 18.2014 14.7518 17.9014L11.8455 15.7594L10.4438 17.1094C10.2893 17.2639 10.158 17.3951 9.858 17.3951L10.0642 14.4371L15.45 9.5711C15.6848 9.36485 15.3982 9.24785 15.0885 9.4541L8.43225 13.6444L5.5635 12.7489C4.94025 12.5524 4.926 12.1256 5.69475 11.8256L16.9028 7.50335C17.4233 7.31585 17.8778 7.6301 17.709 8.4176L17.7098 8.41835Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_149_751">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.0791016)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </span>

                <span className="me-[20px]  duration-500 hover:translate-y-[-10px] github_hover">
                  <a target="blank" href="https://github.com/">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.3276 11.4042C20.4276 11.2519 19.4901 11.1522 18.7281 11.1252L18.5931 11.1207C18.6246 11.0532 18.6478 11.0082 18.6553 11.0007C18.6718 10.9872 18.6853 10.9302 18.6868 10.8747C18.6868 10.8447 18.7003 10.7442 18.7213 10.6122C18.9283 10.6197 19.2013 10.6257 19.5013 10.6272C20.6533 10.6369 21.8593 10.7299 22.6866 10.8762C23.1793 10.9632 23.3421 10.9602 22.9791 10.8717C22.6101 10.7817 21.5181 10.6512 20.6481 10.5942C20.0101 10.5558 19.3709 10.5403 18.7318 10.5477C18.7468 10.4622 18.7618 10.3677 18.7798 10.2702C18.8488 9.89217 18.8721 9.51267 18.8736 8.75742C18.8751 7.58742 18.8121 7.26492 18.4311 6.48942C18.2871 6.19063 18.1043 5.91222 17.8873 5.66142C18.0726 5.11392 18.0673 4.26792 17.8761 3.52542C17.7186 2.91642 17.6623 2.87742 17.1111 2.99442C16.6423 3.09417 16.2673 3.22992 15.7866 3.47217C15.5586 3.58692 15.2451 3.76467 15.0178 3.90567C14.4253 3.69792 13.8126 3.56067 13.1578 3.48567C12.4956 3.41067 10.8703 3.45267 10.2928 3.55917C9.73032 3.66417 9.22182 3.79167 8.76282 3.94167C8.53257 3.80067 8.20032 3.60942 7.96182 3.48942C7.47882 3.24642 7.10382 3.11142 6.63432 3.01167C6.08382 2.89392 6.02682 2.93367 5.86932 3.54267C5.67432 4.29492 5.67282 5.15517 5.86557 5.70117C5.88807 5.76342 5.90157 5.80767 5.90682 5.84217C5.12532 6.82617 4.87032 7.92717 5.03982 9.46467C5.08482 9.86442 5.15232 10.2319 5.24832 10.5687C4.74957 10.5657 4.04082 10.5837 3.52782 10.6167C2.65632 10.6744 1.56432 10.8042 1.19532 10.8942C0.83307 10.9819 0.99432 10.9842 1.48782 10.8987C2.31507 10.7532 3.52182 10.6587 4.67382 10.6512C4.89132 10.6497 5.09382 10.6452 5.26932 10.6407C5.32182 10.8184 5.38182 10.9879 5.44932 11.1492H5.44557C4.68432 11.1762 3.74757 11.2767 2.84682 11.4267C2.17182 11.5407 1.17432 11.7672 1.05732 11.8317C0.93432 11.9007 1.03482 11.8857 1.55757 11.7529C2.51232 11.5114 3.75357 11.3254 5.29107 11.1979L5.46357 11.1829C5.79357 11.9479 6.30132 12.5329 7.01982 12.9904C7.45932 13.2694 8.16357 13.5567 8.51832 13.6017C8.61582 13.6137 8.89932 13.6722 9.14832 13.7307C9.39807 13.7892 9.88632 13.8769 10.2328 13.9272H10.2403L10.2223 13.9392C9.80232 14.1567 9.52932 14.4972 9.34482 15.0319C9.26232 15.0567 9.16032 15.0904 9.04932 15.1294C8.65182 15.2644 8.49807 15.2914 8.09682 15.2944C7.67907 15.2974 7.57932 15.2794 7.33182 15.1624C6.94802 14.9737 6.62671 14.6784 6.40632 14.3119C6.03132 13.6924 5.38107 13.2544 4.83882 13.2544C4.37682 13.2544 4.28907 13.4419 4.62357 13.7157C5.12757 14.1282 5.50407 14.5482 5.65857 14.8692L5.95632 15.4872C6.03882 15.6574 6.21282 15.8884 6.37932 16.0482C6.77082 16.4217 7.14882 16.6002 7.71282 16.6842C8.09082 16.7397 8.18382 16.7397 8.63007 16.6827C8.84532 16.6564 9.02757 16.6257 9.18957 16.5874V17.2279C9.18957 18.5524 9.17457 18.9784 9.12207 19.1029C9.02232 19.3399 8.79957 19.5829 8.58432 19.6932C8.36907 19.8034 8.30232 19.9242 8.39307 20.0352C8.44407 20.0952 8.54082 20.1057 8.86557 20.0847C9.48207 20.0472 9.91782 19.8184 10.1406 19.4172C10.2111 19.2874 10.2276 19.0272 10.2501 17.6772C10.2741 16.2132 10.2846 16.0722 10.3798 15.8622C10.4368 15.7384 10.5201 15.6034 10.5673 15.5667C10.6446 15.5022 10.6498 15.6297 10.6498 17.3817C10.6498 19.3152 10.6296 19.5492 10.4361 19.9204C10.3926 20.0052 10.3101 20.1154 10.2523 20.1679C10.1511 20.2602 10.1083 20.4964 10.1788 20.5677C10.2951 20.6832 10.8778 20.5017 11.1958 20.2512C11.7373 19.8222 11.8018 19.4674 11.8063 16.9062L11.8086 15.4024L11.9736 15.4174L12.1371 15.4324L12.1641 17.3974C12.1941 19.6114 12.1986 19.6437 12.5751 20.0712C12.7888 20.3127 13.0041 20.4462 13.3551 20.5512C13.8231 20.6914 13.9641 20.4739 13.6491 20.0967C13.3063 19.6857 13.2891 19.5289 13.3086 17.1004C13.3213 15.5434 13.3213 15.5434 13.4211 15.6342C13.6333 15.8262 13.6738 16.1412 13.6738 17.6014C13.6738 19.4149 13.7263 19.5874 14.3661 19.9039C14.6661 20.0502 14.7486 20.0689 15.1326 20.0689C15.5406 20.0712 15.5653 20.0652 15.5803 19.9587C15.5931 19.8724 15.5428 19.8139 15.3523 19.6977C15.1172 19.5588 14.9315 19.3498 14.8213 19.0999C14.7801 19.0054 14.7523 18.3814 14.7336 17.0974C14.7066 15.3019 14.7006 15.2202 14.5888 14.9389C14.4388 14.5609 14.2078 14.2624 13.9161 14.0644C13.8411 14.0149 13.7646 13.9744 13.6663 13.9429C13.7863 13.9309 13.9041 13.9182 14.0173 13.9017C15.1963 13.7442 15.8196 13.6137 16.3198 13.4202C17.3773 13.0129 18.0936 12.3364 18.4813 11.3772C18.5158 11.2917 18.5503 11.2107 18.5788 11.1447L18.8788 11.1702C20.4163 11.2999 21.6576 11.4852 22.6123 11.7274C23.1358 11.8609 23.2348 11.8774 23.1133 11.8069C22.9993 11.7432 22.0018 11.5174 21.3268 11.4042H21.3276ZM16.8171 11.3802C16.6423 11.7642 16.1548 12.2577 15.7611 12.4512C15.3726 12.6432 14.7636 12.7887 14.0736 12.8592C13.6011 12.9072 10.9708 12.9214 10.5366 12.8787C9.09882 12.7377 8.29407 12.4609 7.69932 11.9067C7.13682 11.3802 6.87432 10.6654 6.91932 9.78567C6.94932 9.23517 7.08207 8.88942 7.42932 8.46942C7.74432 8.08692 8.07732 7.85067 8.46882 7.73067C8.79732 7.63017 9.80382 7.62117 11.1553 7.70817C11.7531 7.74567 12.2473 7.74567 12.8443 7.70817C14.2588 7.61817 15.2031 7.62867 15.5518 7.73667C16.0993 7.90617 16.5996 8.36217 16.8996 8.96967C17.0346 9.24117 17.0616 9.35667 17.0811 9.77592C17.1081 10.3534 17.0083 10.9662 16.8186 11.3794L16.8171 11.3802ZM9.68457 8.90067C8.87982 8.75967 8.42007 10.1382 9.03732 10.8409C9.32982 11.1739 9.59007 11.2287 9.91482 11.0262C10.2171 10.8387 10.3798 10.4862 10.3798 10.0302C10.3798 9.42117 10.1038 8.97417 9.68382 8.89917L9.68457 8.90067ZM14.5693 8.98317C13.7646 8.84217 13.3041 10.2184 13.9213 10.9227C14.2161 11.2564 14.4763 11.3127 14.8018 11.1079C15.1018 10.9204 15.2668 10.5679 15.2668 10.1119C15.2668 9.50592 14.9893 9.05742 14.5693 8.98317ZM12.4048 11.6922C12.3868 11.7477 12.3028 11.8302 12.2173 11.8744C12.0036 11.9847 11.8498 11.9464 11.6226 11.7394C11.4823 11.6134 11.4186 11.5467 11.3751 11.6794C11.3361 11.8024 11.5851 12.0492 11.7786 12.1249C11.9556 12.1962 12.0823 12.1984 12.2736 12.1174C12.4648 12.0387 12.6313 11.8249 12.6313 11.6862C12.6313 11.5572 12.4461 11.5632 12.4041 11.6937L12.4048 11.6922ZM12.1663 11.2609C12.2886 11.1522 12.3163 10.9309 12.1993 10.8124C12.0823 10.6939 11.8446 10.7127 11.7516 10.8447C11.6428 10.9992 11.7006 11.1169 11.7778 11.2422C11.8978 11.3352 12.0591 11.3547 12.1656 11.2602L12.1663 11.2609Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </span>

                <span className=" duration-500 hover:translate-y-[-10px] whatapp_hover">
                  <a target="blank" href="https://web.whatsapp.com/">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.9249 6.43907C17.7899 1.57907 11.3699 0.139067 6.40493 3.15407C1.55993 6.16907 -7.16448e-05 12.7391 3.13493 17.5841L3.38993 17.9741L2.33993 21.9041L6.26993 20.8541L6.65993 21.1091C8.35493 22.0241 10.1999 22.5491 12.0299 22.5491C13.9949 22.5491 15.9599 22.0241 17.6549 20.9741C22.4999 17.8241 23.9399 11.3891 20.9249 6.40907V6.43907ZM18.1799 16.5491C17.6549 17.3291 16.9949 17.8541 16.0799 17.9891C15.5549 17.9891 14.8949 18.2441 12.2849 17.2091C10.0649 16.1591 8.21993 14.4491 6.91493 12.4841C6.13493 11.5691 5.72993 10.3841 5.60993 9.19907C5.60993 8.14907 5.99993 7.23407 6.65993 6.57407C6.91493 6.31907 7.18493 6.18407 7.43993 6.18407H8.09993C8.35493 6.18407 8.62493 6.18407 8.75993 6.70907C9.01493 7.36907 9.67493 8.94407 9.67493 9.07907C9.80993 9.21407 9.74993 10.2191 9.14993 10.7891C8.81993 11.1641 8.75993 11.1791 8.89493 11.4491C9.41993 12.2291 10.0799 13.0241 10.7249 13.6841C11.5049 14.3441 12.2999 14.8691 13.2149 15.2591C13.4699 15.3941 13.7399 15.3941 13.8749 15.1241C14.0099 14.8691 14.6549 14.2091 14.9249 13.9391C15.1799 13.6841 15.3149 13.6841 15.5849 13.8041L17.6849 14.8541C17.9399 14.9891 18.2099 15.1091 18.3449 15.2441C18.4799 15.6341 18.4799 16.1591 18.2099 16.5491H18.1799Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </span>
              </div>
            </div>

            <div className="xl:w-2/12 lg:w-3/12  md:w-4/12 w-6/12 mt-[50px] sm:w-4/12 md:mt-0  xl:text-start">
             <div className="ms-10 ">

             <p className="font_inter font-medium text-[14px] md:text-[16px] leading-[21px] text-[#000000B2]">
                Category
              </p>

              <p className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[30px] cursor-pointer hover:translate-x-[20px] duration-500">
                Tech Solutions
              </p>
              <p className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                Digital Marketing
              </p>
              <p className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                Web Development
              </p>
              <p className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                IT Consulting
              </p>
              <p className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                Data Analytics
              </p>
             </div>
            </div>

            <div className="xl:w-2/12 lg:w-3/12 md:w-5/12 sm:w-4/12 w-4/12 mt-[50px] lg:mt-0 flex flex-col">
              <p className="font_inter font-medium text-[14px] md:text-[16px] leading-[21px] text-[#000000B2]">
                Quicks Links
              </p>

              <NavLink
       onClick={() =>scrollToTop()}
               to="/" 
              //  ref={()=>scrollTopSection(2)}
            
                className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[30px] cursor-pointer hover:translate-x-[20px] duration-500"
              >
                Home
              </NavLink>
              <NavLink
                onClick={() =>scrollToTop()}
               to="/aboutUs" className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                About Us
              </NavLink>
              <NavLink
                onClick={() =>scrollToTop()}
              to="/ourService" className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                Services
              </NavLink>
{/*               <NavLink
                onClick={() =>scrollToTop()}
              to="/clints" className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                Clients
              </NavLink> */}
{/*               <NavLink
                onClick={() =>scrollToTop()}
                to="testimonials" className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099] mt-[20px] cursor-pointer hover:translate-x-[20px] duration-500">
                Testimonials
              </NavLink> */}
            </div>

            <div className="xl:w-2/12 lg:w-3/12 md:w-4/12 sm:w-6/12  mt-[50px] lg:mt-0">
              <p className="font_inter font-medium text-[14px] md:text-[16px] text-center sm:text-start leading-[21px] text-[#000000B2]">
                Address
              </p>
              <div className="mt-5 lg:mt-[30px]">
                <p className="font_inter font-medium text-[14px] md:text-[16px] text-center sm:text-start  leading-[21px] text-[#000000B2] ">
                  Colorado Boulder Centre :
                </p>

                <div className="flex items-center   mt-[10px]">
                  <span className="me-[10px]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 21.2677L12.7211 20.4551C13.5394 19.5188 14.2758 18.6277 14.9303 17.782L15.4708 17.0689C17.7283 14.0281 18.8571 11.6155 18.8571 9.83114C18.8571 6.02314 15.7874 2.93628 12 2.93628C8.21254 2.93628 5.14282 6.02314 5.14282 9.83114C5.14282 11.6155 6.27158 14.0285 8.52911 17.07L9.06968 17.7831C10.004 18.9801 10.9814 20.1416 12 21.2677Z"
                        stroke="black"
                        stroke-opacity="0.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 12.6506C13.5779 12.6506 14.8571 11.3714 14.8571 9.79342C14.8571 8.21547 13.5779 6.93628 12 6.93628C10.422 6.93628 9.14282 8.21547 9.14282 9.79342C9.14282 11.3714 10.422 12.6506 12 12.6506Z"
                        stroke="black"
                        stroke-opacity="0.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="font_inter font-normal  text-[12px]  md:text-[14px] leading-[16px] text-[#00000099]">
                    121 King Street Melbourne, <br /> 3000, Australia
                  </p>
                </div>
              </div>
              <div className="mt-[30px]">
                <p className="font_inter font-medium text-[14px] text-center sm:text-start leading-[21px] text-[#000000B2] ">
                  Colorado Boulder Centre :
                </p>

                <div className="flex items-center mt-[10px]">
                  <span className="me-[10px]">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 21.2677L12.7211 20.4551C13.5394 19.5188 14.2758 18.6277 14.9303 17.782L15.4708 17.0689C17.7283 14.0281 18.8571 11.6155 18.8571 9.83114C18.8571 6.02314 15.7874 2.93628 12 2.93628C8.21254 2.93628 5.14282 6.02314 5.14282 9.83114C5.14282 11.6155 6.27158 14.0285 8.52911 17.07L9.06968 17.7831C10.004 18.9801 10.9814 20.1416 12 21.2677Z"
                        stroke="black"
                        stroke-opacity="0.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 12.6506C13.5779 12.6506 14.8571 11.3714 14.8571 9.79342C14.8571 8.21547 13.5779 6.93628 12 6.93628C10.422 6.93628 9.14282 8.21547 9.14282 9.79342C9.14282 11.3714 10.422 12.6506 12 12.6506Z"
                        stroke="black"
                        stroke-opacity="0.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="font_inter font-normal text-[12px] md:text-[14px] leading-[16px] text-[#00000099]">
                    121 King Street Melbourne, <br /> 3000, Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black py-[20px] text-center">
          <p className="font_outfit font-normal text-[12px]  md:text-[14px] leading-[21px] text-[#FFFFFF]">
            ©2024 Hexabirds Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
