import React, { useState } from "react";
import { Button, Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
function ProductSection({ image, data }) {
    const [showOptions, setShowOptions] = useState(false);
    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <Product
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            showOptions={showOptions}>
            <ProdImgContainer show={showOptions}>
                <ProductImage src={image} />
            </ProdImgContainer>
            <CustomBtn show={showOptions}>
                <CustomTypo variant="subtitle2" color={"#FFFF"}>
                    View Shop
                </CustomTypo>
            </CustomBtn>
            <ProductContent>
                <ProductTitle variant="h6">{data.prodName}</ProductTitle>
                <PriceWrapper>
                    <Price variant="price">${data.price}</Price>
                </PriceWrapper>
            </ProductContent>
        </Product>
    );
}

const Product = styled(Box)(({ theme, showOptions }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
    transition: "all 0.2s ease",
    width:"100%"
}));

/*
============ Product Image Section ===========
*/

const ProdImgContainer = styled('dev')(({ theme, show }) => ({
    width: "220px",
    height: "220px",
    background: "#F6F7FB",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
      borderStyle: "solid",
  borderWidth: "0px 0px 0px 6px",
    boxShadow: `0px 5px 30px rgba(49, 32, 138, 0.05)`,
    borderColor: show ? "#9575e5" : "transparent",
}));

const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "150px",
}));

/*
============ Product Content Section ===========
*/
const CustomBtn = styled("div")(({ theme, show }) => ({
    cursor: "pointer",
    display: show ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.Green,
    position: "absolute",
    bottom: 70,
    width: 94,
    height: 29,
    borderRadius: 3,
    "&:hover": {
        backgroundColor: theme.palette.primary.hoverGreen,
    },
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "400",
    textAlign: "center",
}));
const ProductContent = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    // padding: "0px 15px",
    justifyContent: "center",
    marginTop: 10,
}));

const ProductTitle = styled(Typography)(({ theme, showOptions }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: theme.palette.primary.navyBlue,
    lineHeight: 2,
    fontWeight: "600",
}));

/*
============ Product Price Section ===========
*/

const PriceWrapper = styled("div")(({ theme, showOptions }) => ({
    width: "27%",
    display: "flex",
    justifyContent: "space-around",
}));
const Price = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.navyBlue,
}));

const BtnText = styled(Typography)(({ theme }) => ({}));
const ProductSalebtn = styled(Button)(({ theme, show }) => ({
    color: theme.palette.secondary.white,
    backgroundColor: theme.palette.primary.Green,
    fontFamily: show ? theme.typography.customFonts.JosefinSans : "",
    borderRadius: 2,
    position: "absolute",
    bottom: 70,
    // left: 75,
    width: 94,
    height: 29,
    fontSize: "11px",
    padding: 15,
    display: show ? "visible" : "none",
    "&:hover": {
        backgroundColor: theme.palette.primary.hoverGreen,
    },
}));

export default ProductSection;
