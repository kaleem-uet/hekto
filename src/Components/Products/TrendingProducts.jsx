import React from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Link, styled, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import { product } from "../../assets/data/product";
import { SectionHeading } from "../../Common/CommonTypo";
import TrendingProductCard from "../../Common/products/TrendingProductCard";
export default function TrendingProducts() {
  return (
    <Wrapper>
      <HeaderContainer>
        <SectionHeading variant="h1">Trending Products</SectionHeading>
      </HeaderContainer>
      <Container sx={{ padding: 0 }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {product.trendingProduct.map((data, index) => (
            <SwiperSlide key={index}>
              <TrendingProductCard data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        <GridContainer container spacing={2}></GridContainer>
      </Container>
    </Wrapper>
  );
}
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
}));
const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: theme.palette.primary.navyBlue,
  fontWeight: "600",
  lineHeight: 3,
}));

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const CustomeGridItem = styled(Grid)(({ theme }) => ({
  "& .MuiGrid-item": {
    paddin: 0,
  },
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",

  // [theme.breakpoints.down('md')]: {
  //     gap:0.005,
  // },
}));
