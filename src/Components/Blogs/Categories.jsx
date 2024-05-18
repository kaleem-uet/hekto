import { SectionHeading } from "../../Common/CommonTypo";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, styled } from "@mui/material";

function Categories() {
    return (
        <div style={{ marginTop: 50 }}>
            <SectionHeading>Categories</SectionHeading>
            <RowContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
            </RowContainer>
            <RowContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
            </RowContainer>
            <RowContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
            </RowContainer><RowContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
                <CatNameContainer>
                    <CustomTypo variant="subtitle1">Hobbies (14)</CustomTypo>
                </CatNameContainer>
            </RowContainer>
        </div>
    );
}

const RowContainer=styled('div')(({theme})=>({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  marginTop:10,
}))
const CatNameContainer = styled("div")(({ theme }) => ({
    width: 122,
    height: 30,
    borderRadius: 3,
    cursor:"pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover":{
      backgroundColor: "#F939BF",
      color:"#FFF"
    }
}));
const CustomTypo = styled(Typography)(({ theme}) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color:"#3F509E",
  fontWeight: "400",
  lineHeight: 2,
  "&:hover":{
    color:"#FFF"
  }
}));
export default Categories;
