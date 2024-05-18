import React from "react";
import { styled, Grid } from "@mui/material";
import { Container } from "@mui/system";
import GridProductCard from "../../Common/products/GridProductCard";
import { data } from "../../assets/data/shopGridProd";
import Services from "../Services";

export default function GridProduct() {
    return (
        <Container>
            <Grid container spacing={2} sx={{ marginTop: "10px" }}>
                {data.map((p, i) => (
                    <CustomeGridItem item key={i} xs={12} sm={6} md={3}>
                        <GridProductCard
                            name={p.title}
                            newPrice={p.price.new}
                            oldPrice={p.price.old}
                            src={p.img}
                        />
                    </CustomeGridItem>
                ))}
            </Grid>
             <Services/>
        </Container>
    );
}

const CustomeGridItem = styled(Grid)(({ theme }) => ({
    "&.MuiGrid-item": {
        margin: 0,
    },
}));
