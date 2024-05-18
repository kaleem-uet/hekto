import React from "react";
import Container from "@mui/material/Container";
import CommanHero from "../../Common/HeroCom/CommanHero";
import Grid from "@mui/material/Grid";
import { OutlinedInput, styled, Typography } from "@mui/material";
import contactUs from "../../assets/img/contactUs.png";
function ContactUs() {
    return (
        <>
            <CommanHero title="Contact Us" />
            <Container maxWidth="md">
                <Grid
                    container
                    spacing={3}
                    sx={{ marginTop: 10, marginBottom: 10 }}
                >
                    <Grid item md={6} sm={12} xs={12}>
                        <LeftSideContainer>
                            <CustomTypo variant="h3" color="#151875">
                                Information About us
                            </CustomTypo>
                            <SubTypo variant="h6" color="#8A8FB9">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Mattis neque ultrices mattis
                                aliquam, malesuada diam est. Malesuada sem
                                tristique amet erat vitae eget dolor lobortis.
                                Accumsan faucibus vitae lobortis quis bibendum
                                quam faucibus vitae lobortis quis bibendum quam.
                            </SubTypo>
                            <LeftCircleContainer>
                                <Circle
                                    width={20}
                                    height={20}
                                    color="#5625DF"
                                />
                                <Circle
                                    width={20}
                                    height={20}
                                    color="#FF27B7"
                                />
                                <Circle
                                    width={20}
                                    height={20}
                                    color="#37DAF3"
                                />
                            </LeftCircleContainer>
                        </LeftSideContainer>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <CustomTypo variant="h3" color="#151875">
                            Contact Way
                        </CustomTypo>
                        <RightContantContainer>
                            <RightCircleContainer>
                                <Circle
                                    width={30}
                                    height={30}
                                    color="#5726DF"
                                />
                                <TypoContainer>
                                    <Typography
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        Tel: 877-67-88-99
                                    </Typography>
                                    <Typography
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        E-Mail: shop@store.com
                                    </Typography>
                                </TypoContainer>
                            </RightCircleContainer>
                            <RightCircleContainer>
                                <Circle
                                    width={30}
                                    height={30}
                                    color="#FF27B7"
                                />
                                <TypoContainer>
                                    <Typography
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        Tel: 877-67-88-99
                                    </Typography>
                                    <Typography
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        E-Mail: shop@store.com
                                    </Typography>
                                </TypoContainer>
                            </RightCircleContainer>
                        </RightContantContainer>
                        <RightContantContainer style={{ marginTop: 20 }}>
                            <RightCircleContainer>
                                <Circle
                                    width={30}
                                    height={30}
                                    color="#FFB265"
                                />
                                <TypoContainer>
                                    <Typography
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        Tel: 877-67-88-99
                                    </Typography>
                                    <Typography
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        E-Mail: shop@store.com
                                    </Typography>
                                </TypoContainer>
                            </RightCircleContainer>
                            <RightCircleContainer>
                                <Circle
                                    width={30}
                                    height={30}
                                    color="#1BE982"
                                />
                                <TypoContainer>
                                    <SubTypo
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        Tel: 877-67-88-99
                                    </SubTypo>
                                    <SubTypo
                                        color="#8A8FB9"
                                        variant="subtitle2"
                                    >
                                        E-Mail: shop@store.com
                                    </SubTypo>
                                </TypoContainer>
                            </RightCircleContainer>
                        </RightContantContainer>
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{marginBottom:20,}}>
                    <Grid item md={6} sm={12} xs={12}>
                        <CustomTypo variant="h3" color="#151875">
                            Get In Touch
                        </CustomTypo>
                        <SubTypo variant="h6" color="#8A8FB9">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Mattis neque ultrices tristique amet erat
                            vitae eget dolor los vitae lobortis quis bibendum
                            quam.
                        </SubTypo>
                        <div style={{display:"flex",flexDirection:"row", alignItems:"center",justifyContent: "space-between",}}>
                        <CustomInput
                            placeholder="Your Name*"
                            type="email"
                            fullWidth
                            color={"primary"}
                        />
                        <CustomInput
                            placeholder="Email Address"
                            type="email"
                            fullWidth
                            color={"primary"}
                            sx={{marginLeft:5}}
                        />
                        </div>
                       
                        <CustomInput
                            placeholder="Subject*"
                            type="email"
                            fullWidth
                            color={"primary"}
                        />
                        <CustomInput
                            placeholder="Type Your Messege*"
                            multiline={true}
                            minRows={"6"}
                            fullWidth
                            color={"primary"}
                        />
                        <CustomeBtn>
                            <CustomTypo2 variant="h6" color={"#FFFF"}>
                            Send Mail
                            </CustomTypo2>
                        </CustomeBtn>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <img src={contactUs} style={{width:"100%"}}/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

const LeftSideContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));

const Circle = styled("div")(({ theme, color, width, height }) => ({
    background: color,
    width: width,
    height: height,
    borderRadius: "50%",
}));
const LeftCircleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "20%",
    [theme.breakpoints.down("md")]: {
        width: "50%",
    },
}));

const RightContantContainer = styled("div")(({ theme }) => ({
    width: 470,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        width: "100%",
    },
}));

const RightCircleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    width: "30%",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("md")]: {
        marginTop: 10,
    },
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "800",
    lineHeight: 2,
}));
const CustomTypo2 = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "400",
    lineHeight: 2,
}));

const TypoContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    marginLeft: 5,
}));
const SubTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    textAlign: "justify",
    color: color,
}));
const CustomInput = styled(OutlinedInput)(({ theme }) => ({
    "&.MuiOutlinedInput-root": {
        marginTop: 30,
        padding: 0,
        borderRadius:3,
    },
    "& .MuiOutlinedInput-input": {
        padding: 10,
        width: "100%",
        height: "100%",
        fontSize: "16px",
        color: "#9096B2",
        fontWeight: "400",
    },
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    marginTop: 30,
    height: 40,
    width: "30%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover":{
        backgroundColor:theme.palette.primary.dark,
    },
    [theme.breakpoints.down('md')]:{
        width:"50%"
    }
}));
export default ContactUs;
