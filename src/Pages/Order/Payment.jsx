import CheckOutForm from "../../Common/Order/CheckOutForm";
import React from "react";
import Grid from "@mui/material/Grid";
import { Container, Divider, styled, Typography } from "@mui/material";
import CommanHero from "../../Common/HeroCom/CommanHero";
import OrderCard from "../../Common/Order/OrderCard";
import CartTotal from "../../Common/Cart/CartTotal";

function Payment() {
    return (
        <>
            <CommanHero title={"Hekto Demo"} />
            <Container sx={{ marginTop: 10 }}>
                <Grid container spacing={1}>
                    <Grid item md={8} xs={12} sm={12}>
                        <CheckOutForm />
                    </Grid>
                    <Grid item md={4} xs={12} sm={12}>
                        <ProdCardWrapper>
                        <OrderCard />
                        <CustomeTypo variant="h6">$20:00</CustomeTypo>
                        </ProdCardWrapper>
                        <CustomDivider/>
                        <ProdCardWrapper>
                        <OrderCard />
                        <CustomeTypo variant="h6">$20:00</CustomeTypo>
                        </ProdCardWrapper>
                        <CustomDivider/>
                        <ProdCardWrapper>
                        <OrderCard />
                        <CustomeTypo variant="h6">$20:00</CustomeTypo>
                        </ProdCardWrapper>
                        <CustomDivider/>
                        <ProdCardWrapper>
                        <OrderCard />
                        <CustomeTypo variant="h6">$20:00</CustomeTypo>
                        </ProdCardWrapper>
                        <CustomDivider/>
                        <div style={{ marginTop: 30 }}>
                            <CartTotal />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

const CustomeTypo = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: "#15245E",
}));

const ProdCardWrapper = styled("div")(({ theme }) => ({
    marginTop:5,
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
     justifyContent:"space-between"
}));

const CustomDivider=styled(Divider)(({theme})=>({
    color: "#E8E6F1"   
}))
export default Payment;
