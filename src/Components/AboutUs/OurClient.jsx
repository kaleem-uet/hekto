import React from 'react'
import CommanHero from '../../Common/HeroCom/CommanHero';
import Container from "@mui/material/Container";
import { styled, Grid, Box, Typography } from "@mui/material";
import { HeroWrapper } from '../../Common/Wrapper/Wrapper';
import client from "../../assets/img/client.png";


function OurClient() {
    
    return (
    <HeroWrapper>
     
    <CustomContainer>
        <CustomTypography variant="h3">
            Our Client Say!{" "}
        </CustomTypography>

        <ImageContainer>
            <img src={client} style={{ marginRight: 56 }} />
            <img
                src={client}
                style={{
                    marginLeft: 5,
                    position: "absolute",
                    top: -12,
                    left: 53,
                }}
            />
            <img src={client}  style={{marginLeft:5}}/>
        </ImageContainer>

        <CustomTypography variant="h6">
            Selina Gomez
        </CustomTypography>
        <SubTypo variant="subtitle2">Ceo At Webecy Digital</SubTypo>
        <SubTypo variant="subtitle1" marginTop={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Non duis ultrices quam vel dui sollicitudin aliquet id
            arcu. Nam vitae a enim nunc, sed sapien egestas ac nam.
            Tristique ultrices dolor aliquam lacus volutpat
            praesent.
        </SubTypo>
    </CustomContainer>
</HeroWrapper>
  )
}



const CustomContainer=styled(Container)(({theme})=>({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding:20,
}))
const ImageContainer=styled('div')(({theme})=>({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
    position: "relative",
}))
const CustomTypography = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: "#000000",
    fontWeight: "800",
}));

const SubTypo = styled(Typography)(({ theme, marginTop }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    width: 634,
    textAlign: "center",
    color: "#8A8FB9",
    marginTop: marginTop ? marginTop : 0,
    [theme.breakpoints.down('md')]:{
        width:"100%",
    }
}));
export default OurClient