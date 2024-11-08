import React from "react";

// import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faqs = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return <div>

        <div className="max-w-[1360px] px-3 mx-auto lg:my-[100px] my-[40px]">

            <div className="flex items-center justify-center lg:justify-start">
                <span className="me-[10px]"><svg width="26" height="13" viewBox="0 0 26 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <circle cx="6" cy="6.0791" r="6" fill="#FF9800" />
                        <circle cx="13" cy="6.0791" r="6" fill="#EE0000" />
                        <circle cx="20" cy="6.0791" r="6" fill="#06579C" />
                    </g>
                </svg>
                </span>

                <p className="font_inter font-normal text-[20px] leading-[26px] text-[#06579C]">FAQS</p>
            </div>


            <div className="flex flex-row flex-wrap justify-center lg:justify-start ">
                <div className="lg:w-6/12 px-3 md:w-9/12 sm:w-10/12 w-12/12 text-center lg:text-start">
                    <p className="font_jomolhari font-normal lg:text-[38px] md:text-[35px] text-[25px] xl:text-[48px] text-[#000000] xl:leading-[62px] lg:mt-[30px] mt-[20px]">
                        A Dedication to Supporting All Aspects of Your Life.
                    </p>
                    <p className="font_inter font-normal text-[14px] leading-[16px text-[#00000099] lg:mt-[30px] mt-[20px]">
                        Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla
                        magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat.
                    </p>
                    <div className="flex  items-center lg:mt-[30px] mt-[20px] justify-center lg:justify-start">
                        <p className="font_inter font-semibold text-[48px] leading-[62px] text-[#000000] me-[10px]">10+</p>
                        <p className="font_inter font-normal text-[14px] leading-[16px] text-[#000000]">Years of <br /> experience</p>
                    </div>
                </div>

                <div className="lg:w-6/12 px-3 md:w-9/12 sm:w-10/12 w-12/12 mt-[30px] lg:mt-0 ">

                    <div>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '100%' }}>
                                    What should i study for cybersecurity?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="mt-[20px]" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                            <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '100%' }}>
                                    What should i study for cybersecurity?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="mt-[20px]" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                            <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '100%' }}>
                                    What should i study for cybersecurity?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="mt-[20px]" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                            <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Typography sx={{ width: '100%' }}>
                                    What should i study for cybersecurity?
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet consectetur. Imperdiet vulputate enim tortor nulla facilisi magna. Aenean ac commodo nisi vitae. In volutpat placerat urna consectetur sollicitudin maecenas viverra. Viverra egestas amet sed arcu eu. Faucibus enim potenti viverra a auctor quis ipsum integer placerat.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>

                </div>
            </div>
        </div>
    </div>;
};

export default Faqs;
