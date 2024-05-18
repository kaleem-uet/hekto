import React from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import TopCategoriesCard from "../../Common/products/TopCategoriesCard";
import styled from "@emotion/styled";
import { Typography, Grid, Container } from "@mui/material";
import { SectionWrapper } from "../../Common/Wrapper/Wrapper";
import { SectionHeading } from "../../Common/CommonTypo";
import top1 from "../../assets/img/top1.png";
import { product } from "../../assets/data/product";

export default function TopCategories() {
  return (
    <SectionWrapper>
      <SectionHeading variant="h1" color="primary">
        Top Categories
      </SectionHeading>
      <Container sx={{ padding: 0 }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320:{
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
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {product.topCategories.map((data, index) => (
            <SwiperSlide key={index}>
              <TopCategoriesCard image={top1} data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </SectionWrapper>
  );
}

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: theme.palette.primary.navyBlue,
  fontWeight: "600",
  lineHeight: 2,
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
}));
const CustomeGridItem = styled(Grid)(({ theme }) => ({
  "& .MuiGrid-item": {
    paddin: 0,
  },
}));
