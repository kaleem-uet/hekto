import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import { Typography, styled, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import { product } from "../../assets/data/product";
import FeaturedProductCard from "../../Common/products/FeaturedProductCard";
import { SectionHeading } from "../../Common/CommonTypo";

export default function FeaturedProducts() {
  return (
    <Container>
      <TextContainer>
        <SectionHeading variant="h1">Featured Products</SectionHeading>
      </TextContainer>
      <div style={{marginTop:10}}>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween: 20,
        },
          360:{
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
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}

      >
         {product.featureProducts.map((p)=>(
           <SwiperSlide key={p.id}>
           <FeaturedProductCard
             title={p.title}
             price={p.price}
             image={p.images}
             name={p.name}
           />
         </SwiperSlide>
         ))}
      </Swiper>
      </div>
    </Container>
  );
}

const TextContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  textAlign: "center",
}));
const CustomeTypo = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: "#1A0B5B",
  fontWeight: "600",
  lineHeight: "49px",
  fontSize: "42px",
}));

const CustomeGridItem = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-item": {
    margin: 0,
  },
}));
