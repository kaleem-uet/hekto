import styled from "@emotion/styled";
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function OffBanerCard({ img, bgColor }) {
    return (
        <BannerContainer BannerColor={bgColor}>
            <BannerContent>
                <BannerTtitle variant="h3">
                    23% off in all products
                </BannerTtitle>
                <div>
                    <CustomBtn component="button" variant="h5">
                        View Collections
                    </CustomBtn>
                </div>
            </BannerContent>
            <ImgContainer>
                <BannerImg src={img} />
            </ImgContainer>
        </BannerContainer>
    );
}

const BannerContainer = styled(Box)(({ theme, BannerColor }) => ({
    display: "flex",
    flexDirection: "column",
    width: "370px",
    height: "253px",
    padding: "0px 0px",
    background: BannerColor,
    position: "relative",
    boxShadow: `0px 8px 40px rgba(49, 32, 138, 0.05)`,

    [theme.breakpoints.down("md")]: {
        width: "auto",
    },
}));

const BannerContent = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    justifyContent: "flex-start",
}));
const BannerTtitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    fontWeight: "600",
    color: theme.palette.primary.darkBlue,
}));

const CustomBtn = styled(Link)(({ theme }) => ({
    color: theme.palette.primary,
    fontSize: "16px",
    fontWeight: "600",
    lineHeight: 2,
    fontFamily: theme.typography.customFonts.Lato,
}));

const ImgContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    bottom: 0,
    right: 0,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));
const BannerImg = styled("img")(({ src }) => ({
    src: `url(${src})`,
    height: "207",
}));
