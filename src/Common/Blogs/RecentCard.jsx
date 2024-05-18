import React from "react";
import image19 from "../../assets/img/image19.png";
import { styled, Typography, Box } from "@mui/material";
function RecentCard({ title, date }) {
    return (
        <Product>
            <ProdImgContainer>
                <ProductImage src={image19} />
            </ProdImgContainer>
            <ProductContent>
                <ProductTitle variant="subtitle1">{title}</ProductTitle>
                <ProdPrice variant="subtitle1">{date}</ProdPrice>
            </ProductContent>
        </Product>
    );
}

const Product = styled(Box)(({ theme }) => ({
    height: "52px",
    width: "100%",
    borderRadius: 5,
    backgroundColor: `linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const ProdImgContainer = styled("div")(({ theme }) => ({
    backgroundColor: "#F5F6F8",
    width: "30%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "auto",
    height: "auto",
    [theme.breakpoints.down("md")]: {
        width: "auto",
    },
}));

const ProductContent = styled("div")(({ theme }) => ({
    flexDirection: "column",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    width: "100%",
    marginLeft: 5,
}));

const ProductTitle = styled(Typography)(({ theme, show }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: "#151875",
    lineHeight: 1,
    fontWeight: "700",
    textAlign: "center",
}));
const ProdPrice = styled(Typography)(({ theme }) => ({
    fontSize: 12,
    fontFamily: theme.typography.customFonts.JosefinSans,
    lineHeight: 2,
    fontWeight: "400",
    color: theme.palette.primary.navyBlue,
}));

export default RecentCard;
