import { Container, styled } from "@mui/material";
import React from "react";
import services from "../assets/img/services.png";

export default function Services() {
    // this is the services images
    return (
        <CustomContainer>
            <img src={services} style={{width:"100%"}} />
        </CustomContainer>
    );
}

const CustomContainer=styled(Container)(({theme})=>({
    width: "80%",
    marginTop: 5,
    marginBottom: 5,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.down("md")]: {
        marginTop:0,
    },
    
}))