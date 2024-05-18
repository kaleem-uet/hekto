import CommanHero from "../../Common/HeroCom/CommanHero";
import React from "react";
import OurClient from "../../Components/AboutUs/OurClient";
import OurFeature from "../../Components/AboutUs/OurFeature";
import AboutUsCard from "../../Components/AboutUs/AboutUsCard";
import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const data = ["1", "2", "3", "4"];
function AboutUs() {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <ArrowBackIcon />
    );

    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <ArrowBackIcon />
    );
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
    };
    return (
        <>
            <CommanHero title={"About Us"} />
            <AboutUsCard />
            <OurFeature />
            <div style={{ marginBottom: 100, marginTop: 100 }}>
                <OurClient />
            </div>
        </>
    );
}

export default AboutUs;
