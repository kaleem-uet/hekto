import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../css/style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import ShopexOfferCard from "../../Common/shopexOffer/ShopexOfferCard";
import { Box, Container, Link, styled, Typography, Grid } from "@mui/material";
import { product } from "../../assets/data/product";
export default function ShopexOffer() {
  const products = product.featureProducts.filter((p) => p.id !== 5);

  return (
    <Container sx={{ margin: "40px auto" }}>
      <HeaderContainer>
        <CustomTypography variant="h1">What Shopex Offer!</CustomTypography>
      </HeaderContainer>

      <div style={{ marginTop: 10 }}>
        <Swiper
          slidesPerView={4}
          spaceBetween={3}
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
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <ShopexOfferCard title={p.title} details={p.details} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin: "15px auto",
}));
const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: theme.palette.primary.navyBlue,
  fontWeight: "600",
  lineHeight: 2,
}));

const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const CustomeGridItem = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-item": {
    margin: 0,
  },
}));
