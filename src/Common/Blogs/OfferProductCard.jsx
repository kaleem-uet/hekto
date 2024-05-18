import React from "react";
import { IconButton, Tooltip, Typography, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { colorObject } from "../../Theme/customColors";
function OfferProductCard({ title, newPrice, oldPrice, src }) {
    return (
        <Product>
            <ProdImgContainer>
                <ProductImage src={src} />
            </ProdImgContainer>
            <ProductTitle variant="h6">{title}</ProductTitle>
            <PriceWrapper>
                <NewPrice variant="subtitle2">$12.00</NewPrice>
                <OldPrice variant="subtitle2">$15.00</OldPrice>
            </PriceWrapper>
        </Product>
    );
}
const Product = styled(Box)(({ theme }) => ({
    height: "100%",
    width: "100%",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    transition: "all 0.2s ease",
}));

const ProdImgContainer = styled("div")(({ theme }) => ({
    width: "80%",
    height: "60%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
}));
const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    height: "100%",
}));

/*
============ Product Content Section ===========
*/

const ProductTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: theme.palette.primary.navyBlue,
    lineHeight: 2,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "700",
}));

/*
============ Product Price Section ===========
*/

const PriceWrapper = styled("div")(({ theme }) => ({
    width: "27%",
    display: "flex",
    justifyContent: "space-around",
}));
const NewPrice = styled(Typography)(({ theme }) => ({
    color: "#8A8FB9",
    fontFamily: theme.typography.customFonts.Lato,
    fontWeight: "400",
}));
const OldPrice = styled(Typography)(({ theme }) => ({
    marginLeft: 5,
    color: "#8A8FB9",
    fontFamily: theme.typography.customFonts.Lato,
    fontWeight: "400",
}));

export default OfferProductCard;
