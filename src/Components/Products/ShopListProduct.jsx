import ShopListCard from "../../Common/products/ShopListCard";
import { Container, Grid } from "@mui/material";
import React from "react";

import Services from "../Services";

export default function ShopListProduct() {
    return (
        <Container>
            <Grid container spacing={2}>
                {/* <Grid item xl={3} sm={3} md={3}>
               <ShopLeftSideBar/>   
            </Grid> */}

                <Grid item xl={12} md={12} sm={12} spacing={3}>
                    <ShopListCard />
                </Grid>
                <Grid item xl={12} md={12} sm={12} spacing={3}>
                    <ShopListCard />
                </Grid>
                <Grid item xl={12} md={12} sm={12} spacing={3}>
                    <ShopListCard />
                </Grid>
                <Grid item xl={12} md={12} sm={12} spacing={3}>
                    <ShopListCard />
                </Grid>

                      <Grid item xl={12} md={12} sm={12} spacing={3}>
                    <ShopListCard />
                </Grid>
                      <Grid item xl={12} md={12} sm={12} spacing={3}>
                    <ShopListCard />
                </Grid>
                <Grid item xl={12} md={12} sm={12} spacing={3}>
                    <ShopListCard />
                </Grid>
                
                {/* <Grid item xl={12} md={12} sm={12}>
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
                    </Grid> */}
                {/* </Grid> */}
            </Grid>
            <Services />
        </Container>
    );
}
