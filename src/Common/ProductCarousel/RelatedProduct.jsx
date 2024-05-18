import React, { useState } from "react";
import {
    Typography,
    styled,
    Rating,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import guy from '../../assets/img/guy.png'

function RelatedProduct({ data }) {
    return (
        <>
            <Product>
                <ProductImage src={guy} />
                <ProductContant>
                    <CustomTypo variant="subtitle2">
                        Wolx Dummy Fashion
                    </CustomTypo>
                    <Rating
                        name="half-rating"
                        value={5}
                        readOnly
                        sx={{ fontSize: 12 }}
                    />
                </ProductContant>
                <CustomTypo variant="subtitle2">$67.00</CustomTypo>
            </Product>
        </>
    );
}

const Product = styled(Box)(({ theme }) => ({
    marginTop:25,
    height: "250px",
    width: "200px",
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    position: "relative",
   
}));

const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    height: 250,
    width: "100%",
    marginBottom: "15px",
}));

const ProductContant = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
}));

const CustomTypo = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    lineHeight: 2,
    color: theme.palette.primary.navyBlue,
    fontWeight: "500",
}));


export default RelatedProduct;
