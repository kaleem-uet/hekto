import { Typography, styled } from "@mui/material";
import { Box, style } from "@mui/system";
import free from "../../assets/img/free.png";
import React, { useState } from "react";

export default function ShopexOfferCard({ title, details }) {
    const [Show, setShow] = useState(false);
    const handleMouseEnter = () => {
        setShow(true);
    };
    const handleMouseLeave = () => {
        setShow(false);
    };
    return (
        <ShopexCardContainer
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            showOption={Show}
        >
            <ImgContainer>
                <LogoImg src={free} />
            </ImgContainer>
            <CardContant>
                <CartTitle variant="h4">{title}</CartTitle>
                <CardDescription variant="h6">{details}</CardDescription>
            </CardContant>
        </ShopexCardContainer>
    );
}

const ShopexCardContainer = styled(Box)(({ theme, showOption }) => ({
    display: "flex",
    width: "100%",
    margin:2,
    // padding: "5px 5px 10px 5px",
    left: 0,
    top: 0,
    borderStyle:"solid",
    borderBottomWidth:2,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "transparent",
    borderBottomColor:showOption ? "#FF9100" :"transparent",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    boxShadow: `0px 3px 40px 0 rgba(49, 32, 138, 0.05)`,
}));

const ImgContainer = styled(Box)(({ theme }) => ({
    marginTop: 40,
}));
const LogoImg = styled("img")(({ theme }) => ({
    height: 36,
    width: 63,
    borderRadius: 0,
    padding:10,
}));

const CardContant = styled("div")(({}) => ({
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
    padding: 10,
}));
const CartTitle = styled(Typography)(({ theme }) => ({
    fontSize: 22,
    color: "#151875",
    fontFamily: theme.typography.customFonts.JosefinSans,
    fontWeight: "600",
    textAlign: "center",
}));

const CardDescription = styled(Typography)(({ theme }) => ({
    width: "100%",
    textAlign: "center",
    fontFamily: theme.typography.customFonts.Lato,
    fontWeight: "500",
    color: `rgba(26, 11, 91, 0.3)`,
}));
