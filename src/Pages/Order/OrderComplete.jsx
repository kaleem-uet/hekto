import React from "react";
import Container from "@mui/material/Container";
import Servises from "../../Components/Services";
import { Typography, styled, Box, Button } from "@mui/material";
import watch from "../../assets/img/watch.png";
import edit from "../../assets/img/edit.png";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CommanHero from "../../Common/HeroCom/CommanHero";
function OrderComplete() {
    return (
        <>
        <CommanHero title="Order Completed"/>
            <Wrapper>
               
                <BannerContant>
                    <WatchImage src={watch} />
                     <TaskAltIcon fontSize="large" color="primary"/>
                    <BannerTitle
                        variant="h2"
                        LineHight={"3"}
                        color={"#101750"}
                        sx={{ fontWeight: "600" }}
                    >
                        Your Order Is Completed!
                    </BannerTitle>
                    <BannerTitle
                        variant="h6"
                        LineHight={"1.5"}
                        color={"#8D92A7"}
                    >
                        Thank you for your order! Your order is being processed
                        and will be completed within 3-6 hours. You will receive
                        an email confirmation when your order is completed.
                    </BannerTitle>
                    <HeroShopButton>Continue Shopping</HeroShopButton>
                    <EditImg src={edit}/>
                </BannerContant>
            </Wrapper>
            <Box sx={{ marginTop:15 }}>
            <Servises />
                 
            </Box>
        </>
    );
}

const Wrapper = styled(Box)(({ theme }) => ({
    marginTop: "8%",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
const BannerContant = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    [theme.breakpoints.down('md')]:{
        borderBottomWidth: 0,
        borderLeftWidth: 0,
    }
}));

const WatchImage =styled('img')(({theme})=>({
    position: "absolute",
    top: -50,
    left: -47,
    width:94,
    height:92,
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
}))
const EditImg =styled('img')(({theme})=>({
    position: "absolute",
    bottom: -31,
    right: -68,
    width:70,
    height:70,
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
}))
const BannerTitle = styled(Typography)(({ theme, LineHight, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    width: "60%",
    fontWeight: "400",
    lineHeight: LineHight,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        width: "auto",
        height: "auto",
        lineHeight:1,

    },
}));

const HeroShopButton = styled(Button)(({ theme }) => ({
    marginTop: 15,
    marginBottom: 15,
    color: theme.palette.secondary.white,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
    width: "40%",
    height: 40,
    padding: 10,
    fontSize: 15,
    textTransform: "none",
    fontFamily: theme.typography.customFonts.JosefinSans,
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.white,
    },

    [theme.breakpoints.down('md')]:{
      width: "100%",

    }
}));

export default OrderComplete;
