import { SectionHeading } from "../../Common/CommonTypo";
import { Typography, Link, styled } from "@mui/material";
import React from "react";
function Tags() {
    return (
        <div style={{ marginTop: 30 }}>
            <SectionHeading variant="h4">Tags</SectionHeading>
            <TagsContainer>
                <CustomLink variant="h6" underline="hover">
                    General
                </CustomLink>
                <CustomLink variant="h6" underline="hover">
                    General
                </CustomLink>
                <CustomLink variant="h6" underline="hover">
                    General
                </CustomLink>
                <CustomLink variant="h6" underline="hover">
                    General
                </CustomLink>
                <CustomLink variant="h6" underline="hover">
                    General
                </CustomLink>
            </TagsContainer>
        </div>
    );
}

const CustomLink = styled(Link)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    width: "30%",
    color:"#151875",
    cursor:"pointer",
    "&:hover":{
      color:theme.palette.primary.main,
    }
}));
const TagsContainer=styled('div')(({theme})=>({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
}))
export default Tags;
