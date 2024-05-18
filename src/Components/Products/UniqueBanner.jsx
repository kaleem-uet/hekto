import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { Container, styled } from "@mui/system";
import { HeroWrapper } from "../../Common/Wrapper/Wrapper";
import Ellipse from "../../assets/img/Ellipse.png";
import unique from "../../assets/img/unique.png";
import { colorObject } from "../../Theme/customColors";


export default function UniqueBanner() {
    return (
        <HeroWrapper>
            <Container>
                <Grid
                    container
                    spacing={0}
                    sx={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Grid item xs={12} md={6.5} sx={{ position: "relative" }}>
                        <ImgContainer>
                            <Img src={unique} />
                        </ImgContainer>
                    </Grid>
                    <Grid item xs={6} md={5.5}>
                        <BannerTitle variant="h2">
                            Unique Features Of leatest & Trending Poducts
                        </BannerTitle>
                        <ContantContiner>
                            <UnOrderList color={colorObject.blue} />
                            <DescTypo variant="h6">
                                Reinforced with double wood dowels, glue, screw
                            </DescTypo>
                        </ContantContiner>
                        <ContantContiner>
                            <UnOrderList color={colorObject.blue} />
                            <DescTypo variant="h6">
                                Reinforced with double wood dowels, glue, screw
                            </DescTypo>
                        </ContantContiner>
                        <ContantContiner>
                            <UnOrderList color={colorObject.blue} />
                            <DescTypo variant="h6">Reinforced with</DescTypo>
                        </ContantContiner>
                        <ContantContiner>
                            <UnOrderList color={colorObject.blue} />
                            <DescTypo variant="h6">
                                Reinforced with double wood dowels, glue, screw
                            </DescTypo>
                        </ContantContiner>
                        <BtnContainer>
                            <CustomeBtn>
                                <CustomTypo variant="h5" sx={{cursor:'pointer'}}>
                                    Add To Cart
                                </CustomTypo>
                            </CustomeBtn>
                            <TextContainer>
                                <CustomTypo variant="h6" color="#151875">
                                    B&B Italian Sofa
                                </CustomTypo>

                                <CustomTypo variant="h6" color="#151875">
                                    $256
                                </CustomTypo>
                            </TextContainer>
                        </BtnContainer>
                    </Grid>
                </Grid>
            </Container>
        </HeroWrapper>
    );
}

const BannerTitle = styled(Typography)(({ theme }) => ({
    color: "#151875",
    fontFamily: theme.typography.customFonts.JosefinSans,
    fontWeight: "600",
    letterSpacing: "0.015em",
}));

const ContantContiner = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    height: 40,
    width: "35%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    cursor: "pointer",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down('md')]:{
        width:"60%"
    }


}));
const TextContainer=styled('div')(({theme})=>({
    width:"60%",
    [theme.breakpoints.down('md')]:{
        width:"50%",
        marginTop:10,
    }
}))
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "400",
}));
const UnOrderList = styled("div")(({ theme, color }) => ({
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: color,
}));
const DescTypo = styled(Typography)(({ theme }) => ({
    marginLeft: 2,
    color: "#ACABC3",
    fontWeight: "500",
    fontFamily: theme.typography.customFonts.Lato,
}));
const HeroShopButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.white,
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.typography.customFonts.JosefinSans,

    borderRadius: 2,
    width: 130,
    height: 40,
    marginTop: 20,
    padding: 10,
    textTransform: "none",

    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.white,
    },
    [theme.breakpoints.down("md")]: {
        marginBottom: "10px",
    },
}));
const BtnContainer = styled("div")(({ theme }) => ({
    marginTop: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection:"row",
    [theme.breakpoints.down('md')]:{
        flexDirection:"column"
    }

}));
const Img = styled("img")(({ theme, src }) => ({
    position: "absoulte",
    top: 1200,
    left: 80,
    width: "350px",
    height: "130%",
}));
const ImgContainer = styled("div")(({ theme }) => ({
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${Ellipse})`,
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
        backgroundImage: `url(${""})`,
    },
}));
