import { SectionHeading } from "../../Common/CommonTypo";
import { colorObject } from "../../Theme/customColors";
import styled from "@emotion/styled";
import { Grid, Container } from "@mui/material";
import React from "react";
import BlogCard from "../../Common/Blogs/BlogCard";
import { product } from "../../assets/data/product";
export default function LeatestBlogs() {
  return (
    <SectionWrapper>
      <SectionHeading variant="h1">Leatest Blog</SectionHeading>
      <Container sx={{ padding: 0}}>
        <GridContainer container spacing={4}>
          {product.blogPosts.map((data, index) => (
            <GridItem item xs={12} sm={12} md={4} key={index}>
              <BlogCard titleColor={colorObject.primary} data={data} />
            </GridItem>
          ))}
        </GridContainer>
      </Container>
    </SectionWrapper>
  );
}

const SectionWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  height: "100%",
  margin: "0px 0px",
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  // [theme.breakpoints.down('md')]: {
  //     gap:0.005,
  // },
}));
const GridItem = styled(Grid)(({ theme }) => ({
  "&.MuiGrid-item": {},
}));
