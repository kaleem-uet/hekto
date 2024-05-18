import OfferProductCard from "../../Common/Blogs/OfferProductCard";
import { SectionHeading } from "../../Common/CommonTypo";
import GridProductCard from '../../Common/products/GridProductCard';
import React from "react";
import Rectangle2 from "../../assets/img/Rectangle2.png";
import Grid from "@mui/material/Grid";

function OfferProduct() {
    return (
        <div style={{ marginTop: 30 }}>
            <SectionHeading>Offer Product</SectionHeading>
            <Grid container spacing={2}>
                <Grid item md={6} sm={12}>
                    <OfferProductCard
                        title="Duis lectus est"
                        src={Rectangle2}
                    />
                </Grid>
                <Grid item md={6} sm={12}>
                    <OfferProductCard
                        title="Duis lectus est"
                        src={Rectangle2}
                    />
                </Grid>
                <Grid item md={6} sm={12}>
                    <OfferProductCard
                        title="Duis lectus est"
                        src={Rectangle2}
                    />
                </Grid>
                <Grid item md={6} sm={12}>
                    <OfferProductCard
                        title="Duis lectus est"
                        src={Rectangle2}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default OfferProduct;
