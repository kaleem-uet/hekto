import React from "react";
import { styled, Button, Typography } from "@mui/material";

export const Wrapper = styled("div")(({ theme, color, type }) => ({
    backgroundColor: color,
    width: "100%",
    display: type == "row" ? "flex" : "block",
    justifyContent: "center",
    alignItems: "center",
}));

export const SectionWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    height: "100%",
    margin: "20px 0px",
}));

export const SectionHeading =styled(Typography)(({theme})=>({
    color: "#151875",
    fontFamily: theme.typography.customFonts.JosefinSans,

}))

export const HeroWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.heroGray,
    width: "100%",
    // minHeight:"200px",
    display: "flex",
    alignItems: "center",
    height: "100%",
    margin: "20px 0px",
}));

export const HeroShopButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.white,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
    width: 130,
    height: 40,
    marginTop: 20,
    padding: 10,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.white,
    },
}));
