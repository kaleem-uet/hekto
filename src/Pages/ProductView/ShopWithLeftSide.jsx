import React from "react";
import ShopListCard from "../../Common/products/ShopListCard";
import { Container, Grid } from "@mui/material";
import Services from "../../Components/Services";
import ShopLeftSideBar from '../../Components/Filter/ShopLeftSideBar';
function ShopWithLeftSide() {
    return (
        <Container>
            {/* <Grid > */}
                {/* <Grid item xl={3} sm={3} md={3}>
                    <ShopLeftSideBar />
                </Grid> */}
                <Grid container spacing={2} sx={{alignItems:"center",justifyContent:"center"}}>
                    <Grid item xl={12} md={12} sm={12}>
                        <ShopListCard />
                    </Grid>
                    <Grid item xl={12} md={12} sm={12}>
                        <ShopListCard />
                    </Grid>
                    <Grid item xl={12} md={12} sm={12}>
                        <ShopListCard />
                    </Grid>
                    <Grid item xl={12} md={12} sm={12}>
                        <ShopListCard />
                    </Grid>
                    <Grid item xl={12} md={12} sm={12}>
                        <ShopListCard />
                    </Grid>
                </Grid>
            {/* </Grid> */}
            <Services />
        </Container>
    );
}

export default ShopWithLeftSide;
