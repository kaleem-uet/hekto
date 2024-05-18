import React from "react";
import OffBanerCard from "../../Common/offBanner/OffBanerCard";
import { Container, styled, Stack, Grid } from "@mui/material";
import TrendingListProductCard from "../../Common/products/TrendListProdCard";
import off_prod from "../../assets/img/off_Prod.png";
import off_Prod2 from "../../assets/img/off_prod2.png";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


export default function OffBanner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    console.log("this is matches", matches);
    return (
        <Wrapper>
            <Grid container spacing={0}>
                <Grid item xs={12} md={5} sm={6}>
                    <OffBanerCard img={off_prod} bgColor={"#FFF6FB"} />
                </Grid>
                <Grid item xs={12} md={5} sm={6}>
                    <OffBanerCard img={off_Prod2} bgColor={"#EEEFFB"} />
                </Grid>
                <Grid item xs={12} md={2} sm={12}>
                    <ListProductContainer>
                        <Stack spacing={6}>
                            <TrendingListProductCard />
                            <TrendingListProductCard />
                            <TrendingListProductCard />
                        </Stack>
                    </ListProductContainer>
                </Grid>
            </Grid>
        </Wrapper>
    );
}

const Wrapper = styled(Container)(({ theme }) => ({
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const ListProductContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginLeft: 8,
    [theme.breakpoints.down("md")]: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
}));
