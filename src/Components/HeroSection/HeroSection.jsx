import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation,Pagination,Autoplay } from "swiper";

import { Button, Typography } from "@mui/material";
import { Box, Container, styled } from "@mui/system";

import { HeroWrapper } from "../../Common/Wrapper/Wrapper";
import HeroImg_1 from "../../assets/img/hero_img1.png";
import vectoresale from "../../assets/img/Vector_Sale.png";
import HeroImg_2 from "../../assets/img/Hero_Img.png";

function HeroSection() {

  return (
    <>
      <Swiper navigation={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
          modules={[Autoplay,Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper">
        <SwiperSlide>
          {" "}
          <HeroWrapper>
            <HeroContainer>
              <HeroImgLeft src={HeroImg_1} />
              <HeroContant>
                <CustomCaption variant="caption">
                  Best Furniture For Your Castle....
                </CustomCaption>
                <HeroTitle variant="h1">
                  New Furniture Collection Trends in 2020
                </HeroTitle>
                <HeroDescription variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </HeroDescription>
                <HeroShopButton color="primary">Shop Now</HeroShopButton>
              </HeroContant>
              <div style={{ position: "relative" }}>
                <DiscountOffer vectoresale={vectoresale}>
                  <DiscountTypo>
                    50% <br /> Off
                  </DiscountTypo>
                </DiscountOffer>
                <Ellips1>
                  <Ellips2>
                    {/* <CustomSale src={VectoreSale} /> */}
                    <HeroImgRight src={HeroImg_2} />
                  </Ellips2>
                </Ellips1>
              </div>
            </HeroContainer>
          </HeroWrapper>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <HeroWrapper>
            <HeroContainer>
              <HeroImgLeft src={HeroImg_1} />
              <HeroContant>
                <CustomCaption variant="caption">
                  Best Furniture For Your Castle....
                </CustomCaption>
                <HeroTitle variant="h1">
                  New Furniture Collection Trends in 2020
                </HeroTitle>
                <HeroDescription variant="subtitle1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </HeroDescription>
                <HeroShopButton color="primary">Shop Now</HeroShopButton>
              </HeroContant>
              <div style={{ position: "relative" }}>
                <DiscountOffer vectoresale={vectoresale}>
                  <DiscountTypo>
                    50% <br /> Off
                  </DiscountTypo>
                </DiscountOffer>
                <Ellips1>
                  <Ellips2>
                    {/* <CustomSale src={VectoreSale} /> */}
                    <HeroImgRight src={HeroImg_2} />
                  </Ellips2>
                </Ellips1>
              </div>
            </HeroContainer>
          </HeroWrapper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

const HeroContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  padding: "20px 0px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const HeroContant = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  fontSize: 53,
  [theme.breakpoints.down("md")]: {
    marginBottom: "30px",
    width: "80%",
  },
}));

const HeroImgLeft = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "200px",
  height: "200px",
  left: -130,
  top: 0,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    width: "75%",
    fontSize: "20px",
    lineHeigh: 30,
    letterSpacing: "0.012em",
  },
  margin: 0,
  fontSize: "53px",
  lineHeigh: 82,
  letterSpacing: "0.015em",
  fontFamily: theme.typography.customFonts.JosefinSans,
  fontWeight: "bold",
}));
const CustomCaption = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Loto,
  color: theme.palette.primary.dark,
  lineHeight: 3,
}));

const HeroDescription = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontFamily: theme.typography.customFonts.Loto,
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));
const HeroShopButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.white,
  backgroundColor: theme.palette.primary.main,
  fontFamily: theme.typography.customFonts.JosefinSans,
  borderRadius: 2,
  width: 130,
  height: 40,
  marginTop: 20,
  padding: 10,
  textTransform: "none",

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.white,
  },
}));
const HeroImgRight = styled("img")(({ theme }) => ({
  // position:"absolute",
  width: "400px",
  height: "400px",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "300px",
  },
  [theme.breakpoints.down("custom_sm")]: {
    width: "200px",
    height: "200px",
  },
}));

const Ellips1 = styled("div")(({ theme }) => ({
  width: 400,
  height: 400,
  left: 1096,
  top: 161,
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: `rgba(236, 210, 250, 0.35)`,
  borderRadius: "50%",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "300px",
  },
  [theme.breakpoints.down("custom_sm")]: {
    width: "200px",
    height: "200px",
  },
}));

const Ellips2 = styled("div")(({ theme }) => ({
  width: 400,
  height: 400,
  left: 1096,
  top: 161,
  zIndex: 50,
  marginLeft: 30,
  marginBottom: 40,
  justifyContent: "center",
  textAlign: "center",
  backgroundColor: `rgba(236, 210, 250, 0.35)`,

  borderRadius: "50%",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    height: "300px",
  },
  [theme.breakpoints.down("custom_sm")]: {
    width: "200px",
    height: "200px",
  },
}));

const DiscountOffer = styled("div")(({ theme, vectoresale }) => ({
  backgroundImage: `url(${vectoresale})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  position: "absolute",
  zIndex: "1",
  width: "100px",
  height: "100px",
  top: "-10px",
  right: "-10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
    top: "0px",
    right: "10px",
  },
}));

const DiscountTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: "#fff",
  fontWeight: "bold",
}));

export default HeroSection;
