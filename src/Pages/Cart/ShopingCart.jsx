import * as React from "react";
import {
    Container,
    Divider,
    Typography,
    styled,
    Grid,
} from "@mui/material";
import CommanHero from "../../Common/HeroCom/CommanHero";
import CartTotal from "../../Common/Cart/CartTotal";
import CalculateShoppingCard from "../../Common/Cart/CalculateShoppingCard";
import CartProductCard from "../../Common/Cart/CartProductCard";
function ShopingCart() {
    return (
        <>
            <CommanHero title={"Shopping Cart"} />
            <Container maxWidth="md" sx={{ marginTop: 10 }}>
                <Grid container spacing={2}>
                    <Grid item md={8} sm={12} xs={12}>
                        <TitleContainer>
                            <Title sx={{ width: 250 }} variant="h3">
                                Priduct
                            </Title>
                            <Title variant="h3">Price</Title>
                            <Title variant="h3">Quantity</Title>
                            <Title variant="h3">Total</Title>
                        </TitleContainer>
                        <CartProductCard />
                        <CustomeDivider />
                        <CartProductCard />
                        <CustomeDivider />
                        <CartProductCard />
                        <CustomeDivider />
                        <CartProductCard />
                        <CustomeDivider />
                        <BtnContainer>
                            <CustomeBtn>
                                <CustomTypo variant="h5">
                                    Update Cart
                                </CustomTypo>
                            </CustomeBtn>
                            <CustomeBtn>
                                <CustomTypo variant="h5">Clear Cart</CustomTypo>
                            </CustomeBtn>
                        </BtnContainer>
                    </Grid>
                    <Grid item md={4} sm={12} xs={12}>
                        <LeftSideTitleContainer>
                            <Title variant="h3">Cart Totals</Title>
                        </LeftSideTitleContainer>
                        <CartTotal />
                        <LeftSideTitleContainer>
                            <Title variant="h3">Calculate Shopping</Title>
                        </LeftSideTitleContainer>
                        <CalculateShoppingCard />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
const Title = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: "#1D3178",
    fontWeight: "800",
    lineHeight: 3,
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "400",
}));
const TitleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    height: 40,
    width: "20%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    cursor: "pointer",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover":{
      backgroundColor:theme.palette.primary.dark,
    },
    [theme.breakpoints.down('md')]:{
        width:"40%"
    }
}));
const BtnContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
}));
const LeftSideTitleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const CustomeDivider = styled(Divider)(({ theme }) => ({
    color: "#E8E6F1",
    lineHeight: 1,
}));
export default ShopingCart;
