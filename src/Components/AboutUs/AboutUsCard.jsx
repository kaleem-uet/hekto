import { Container, styled, Typography, Grid } from "@mui/material";
import React from "react";
import about_us from "../../assets/img/about_us.png";

function AboutUsCard() {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
            }}
        >
            <Grid container spacing={{ md: 3, sm: 2, xs: 2 }}>
                <Grid item md={6.5} sm={12}>
                    <LeftSideContainer>
                    
                        <ImgContainer src={about_us} />
                    </LeftSideContainer>
                </Grid>
                <Grid item md={5.5} sm={12}>
                    <RightSideContainer>
                        <CustomTypo variant="h2" color="#151875">
                            Know About Our Ecomerce Business, History
                        </CustomTypo>
                        <SubTypo variant="subtitle1" color={"#8A8FB9"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mattis neque ultrices mattis aliquam,
                            malesuada diam est. Malesuada sem tristique amet
                            erat vitae eget dolor lobortis. Accumsan faucibus
                            vitae lobortis quis bibendum quam.
                        </SubTypo>
                        <CustomeBtn>
                            <CustomTypo variant="h5" color={"#FFFF"}>
                                Contact us
                            </CustomTypo>
                        </CustomeBtn>
                    </RightSideContainer>
                </Grid>
            </Grid>
        </Container>
    );
}

const LeftSideContainer = styled("div")(({ theme }) => ({
    // width: "100%",
    // height: 334,
    // display:"flex",
    // backgroundColor: "#2B3CAB",
    position: "relative",
    borderRadius: 6,
    
    backgroundColor:"#2B3CAB",
    width: "100%",
    display: "flex",
    height: "100%",
    
    // flexDirection: "column",
}));

const ImgContainer = styled("img")(({ theme }) => ({
    position: "absolute",
    bottom: 9,
    left: 9,
    width:"100%",
    height:"100%",
    // height: "97%",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "100%",
        position:"",
        position: "static",
        bottom: 0,
        left: 0,
    },
}));
const RightSideContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "600",
}));
const SubTypo = styled(Typography)(({ theme, marginTop, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    // width: 634,
    textAlign: "justify",
    color: color,
    marginTop: marginTop ? marginTop : 0,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    marginTop: 30,
    height: 40,
    width: "30%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    cursor: "pointer",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover":{
        backgroundColor: theme.palette.primary.dark,
      },
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }
}));
export default AboutUsCard;
