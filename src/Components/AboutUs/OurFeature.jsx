import CommanHero from "../../Common/HeroCom/CommanHero";
import React from "react";
import ShopexOfferCard from "../../Common/shopexOffer/ShopexOfferCard";
import Container from "@mui/material/Container";
import { styled, Grid, Box, Typography } from "@mui/material";
function OurFeature() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 5 }}>
    <HeaderContainer>
        <CustomTypography variant="h1">
            Our Features
        </CustomTypography>
    </HeaderContainer>
    <Grid container spacing={2}>
        <CustomeGridItem item xs={12} sm={6} md={3}>
            <ShopexOfferCard
                title="24/7 Support"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
        </CustomeGridItem>
        <CustomeGridItem item xs={12} sm={6} md={3}>
            <ShopexOfferCard
                title="24/7 Support"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
        </CustomeGridItem>
        <CustomeGridItem item xs={12} sm={6} md={3}>
            <ShopexOfferCard
                title="24/7 Support"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
        </CustomeGridItem>
        <CustomeGridItem item xs={12} sm={6} md={3}>
            <ShopexOfferCard
                title="24/7 Support"
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
        </CustomeGridItem>
    </Grid>
</Container>
  )
}
const CustomeGridItem = styled(Grid)(({ theme }) => ({
    "&.MuiGrid-item": {
        margin: 0,
    },
}));
const HeaderContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "15px auto",
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: "#000000",
    fontWeight: "800",
}));

export default OurFeature