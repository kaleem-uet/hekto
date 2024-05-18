import { styled, Typography } from "@mui/material";
import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import pen from "../../assets/img/pen.png";
function BlogHero() {
    return (
        <>
            <ImgContainer>
                <Image
                    src={`https://cdn.pixabay.com/photo/2020/03/06/08/00/laptop-4906312_960_720.jpg`}
                />
            </ImgContainer>
            <InfoContainer>
                <InfoBg>
                    <IconImage src={pen} />
                    <TextContainer>
                        <CustomeTypo variant="subtitle2">
                            Surf Auxion
                        </CustomeTypo>
                    </TextContainer>
                </InfoBg>
                <InfoBg>
                    <CalenderIcon />
                    <TextContainer>
                        <CustomeTypo variant="subtitle2">
                            Aug 09 2020
                        </CustomeTypo>
                    </TextContainer>
                </InfoBg>
            </InfoContainer>
            <BlogTitle variant="h3">
                Mauris at orci non vulputate diam tincidunt nec.
            </BlogTitle>
        </>
    );
}
const CalenderIcon = styled(CalendarMonthIcon)(({ theme }) => ({
    color: "#FFA454",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));
const IconImage = styled("img")(({ theme }) => ({
    width: 16,
    height: 16,
    fontSize: 24,
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: 6,
}));

const InfoContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
    marginTop: 10,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const InfoBg = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));

const TextContainer = styled("div")(({ theme }) => ({
    marginLeft: 5,
    width: 127,
    height: 23,
    backgroundColor: "#FFECE2",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
const CustomeTypo = styled(Typography)(({ theme }) => ({
    color:theme.palette.primary.nayaBlue,
    fontFamily: theme.typography.customFonts.JosefinSans,
    padding: 5,
}));

const BlogTitle = styled(Typography)(({ theme }) => ({
    color:theme.palette.primary.nayaBlue,
    fontFamily: theme.typography.customFonts.JosefinSans,
    lineHeight: 3,
    [theme.breakpoints.down("md")]: {
        lineHeight: 2,
    },
}));

const ImgContainer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
export default BlogHero;
