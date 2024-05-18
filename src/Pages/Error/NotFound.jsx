import CommanHero from "../../Common/HeroCom/CommanHero";
import Services from "../../Components/Services";
import { Container, styled, Typography } from "@mui/material";
import React from "react";
import NotFound404 from "../../assets/img/NotFound.png";

function NotFound() {
    return (
        <>
            <CommanHero  title={"404 Not Found"}/>
            <Container
                sx={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <ImgContainer src={NotFound404} />
                <CustomTypo variant="h4" color={"#152970"}>
                    
                    Oops ! The page you requested was not found!
                </CustomTypo>
                <CustomeBtn>
                    <CustomTypo variant="h5" color={"#FFFF"}>
                    Back To Home
                    </CustomTypo>
                </CustomeBtn>
                <Services />
            </Container>
        </>
    );
}

const ImgContainer = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    marginBottom: 40,
}));
const CustomeBtn = styled("div")(({ theme, }) => ({
    marginTop:30,
    height: 40,
    width: "20%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    cursor: "pointer",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.down("md")]:{
    width: "50%",
    },
    "&:hover":{
        backgroundColor:theme.palette.primary.dark,
    }
    
}));
const CustomTypo = styled(Typography)(({ theme,color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "600",
    
}));
export default NotFound;
