import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import trendingProduct from "../../assets/img/trending_product_1.png";
export default function TrendingProductCard({ data }) {
  return (
    <Product>
      <ProdImgContainer>
        <ProductImage src={trendingProduct} />
      </ProdImgContainer>
      <ProductContent>
        <ProductTitle variant="h5">{data.title}</ProductTitle>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ProdPrice variant="caption">${data.price}</ProdPrice>
          <ProdOffPrice variant="subtitle1" sx={{ marginLeft: 2 }}>
            ${data.oldPrice}
          </ProdOffPrice>
          {/* <ProdPrice variant='subtitle1'>
             $26.00
         </ProdPrice> */}
        </div>
      </ProductContent>
    </Product>
  );
}

const Product = styled(Box)(({ theme }) => ({
  marginBottom: 3,
  padding: 5,
  height: "305px",
  width: "95%",
  borderRadius: 5,
  backgroundColor: `linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;`,
  display: "flex",
  // justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  boxShadow: `1px 2px 7px -2px rgb(167 160 160 / 75%)`,
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ProdImgContainer = styled("div")(({ theme }) => ({
  width: "99%",
  height: "244px",
  display: "flex",
  top: 11,
  left: 11,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.primary.shade,
}));
const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "auto",
  height: "auto",
  // padding: '10px',
  [theme.breakpoints.down("md")]: {
    width: "auto",
    // padding: '24px',
  },
}));

const ProductContent = styled("div")(({ theme }) => ({
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 10,
}));

const ProductTitle = styled(Typography)(({ theme, show }) => ({
  fontFamily: theme.typography.customFonts.Lato,
  color: "#151875",
  // show ? theme.palette.secondary.white:theme.palette.primary.main,
  lineHeight: 2,
  fontWeight: "700",
  textAlign: "center",
}));
const ProdPrice = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontFamily: theme.typography.customFonts.JosefinSans,
  lineHeight: 2,
  fontWeight: "400",
  textAlign: "center",
  color: theme.palette.primary.navyBlue,
}));
const ProdOffPrice = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontFamily: theme.typography.customFonts.JosefinSans,
  lineHeight: 2,
  fontWeight: "400",
  textAlign: "center",
  textDecorationLine: "line-through",
  color: `rgba(21, 24, 117, 0.3)`,
}));
