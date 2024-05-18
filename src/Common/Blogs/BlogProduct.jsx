import React, { useState } from "react";
import { Typography, styled, Rating, Box } from "@mui/material";
import relatedProduct from "../../assets/img/guy.png";
function BlogProduct() {
    return (
        <Product>
            <ProductImage src={relatedProduct} />
            <CustomTypo variant="subtitle2" color="#000000">
                Quam sed
            </CustomTypo>
            <ProductContant>
                <CustomTypo variant="subtitle2" color="#232A69">
                    $67.00
                </CustomTypo>
                <CustomTypo variant="subtitle2" color="#FF38B0">
                    <del>$67.00</del>
                </CustomTypo>
                <Rating
                    name="half-rating"
                    value={5}
                    readOnly
                    sx={{ fontSize: 12 }}
                />
            </ProductContant>
        </Product>
    );
}
const Product = styled(Box)(({ theme }) => ({
    height: "215px",
    width: "140px",
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    position: "relative",
}));
const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    height: 160,
    width: "100%",
    marginBottom: "5px",
}));
const ProductContant = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    lineHeight: 2,
    color: color,
    fontWeight: "500",
    textAlign: "center",
}));
export default BlogProduct;
