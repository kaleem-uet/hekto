import { IconButton, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import CartProd from "../../assets/img/blog.png";
function OrderCard() {
    return (
        <CardWrapper>
            <ProdContainer>
                <ProdImage src={CartProd} />
                <ProdContant>
                    <CustomeTypo variant="subtitle2" sx={{ lineHeight: 2 }}>
                        Ut diam consequat
                    </CustomeTypo>
                    <CustomeTypo variant="subtitle2" sx={{ lineHeight: 2 }}>
                        Color: Brown
                    </CustomeTypo>
                    <CustomeTypo variant="subtitle2" sx={{ lineHeight: 2 }}>
                        Size: XL
                    </CustomeTypo>
                </ProdContant>
            </ProdContainer>
        </CardWrapper>
    );
}

const CardWrapper = styled("div")(({ theme }) => ({
    position: "relative",
}));

const ProdContainer = styled("div")(({ theme }) => ({
    width: 250,
    height: 83,
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
const ProdImage = styled("img")(({ theme, src }) => ({
    src: `url(${src})`,
    width: "33%",
    height: "88%",
    borderRadius: 3,
    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
    },
}));

const ProdContant = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "60%",
    marginLeft: 4,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const CustomeTypo = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
}));
export default OrderCard;
