import {
    Container,
    Divider,
    Grid,
    Link,
    styled,
    Typography,
    Stack,
} from "@mui/material";

import React, { useState } from "react";

import CommanHero from '../../Common/HeroCom/CommanHero';
import Services from "../../Components/Services";
import BlogProduct from "../../Common/Blogs/BlogProduct";
import Avatar from "@mui/material/Avatar";


import BlogForm from "../../Components/Blogs/ReadMore/BlogForm";
import RightSide from "./RightSide";
import BlogHero from "../../Common/Blogs/BlogHero";
import BlogImageAndVideo from "../../Common/Blogs/BlogImageAndVideo";
import BlogFooter from "../../Common/Blogs/BlogFooter";

function BlogReadMore() {
    return (
        <>
            <CommanHero title="Single Blog" />
            <Container sx={{ marginTop: 10 }}>
                <Grid container spacing={2}>
                    <Grid item md={8} sm={12} xs={12}>
                        <ContainerMain>
                            <BlogHero />
                            <SubTypo color="#8A8FB9" variant="h6">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Velit facilisis quis auctor
                                pretium ipsum, eu rutrum. Condimentum eu
                                malesuada vitae ultrices in in neque, porta
                                dignissim. Adipiscing purus, cursus vulputate id
                                id dictum at.
                            </SubTypo>
                            <SubTypo
                                color="#8A8FB9"
                                variant="h6"
                                sx={{ marginTop: 5 }}
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Velit dapibus est, nunc,
                                montes, lacus consequat integer viverra. Sit
                                morbi etiam quam rhoncus. Velit in arcu platea
                                donec vitae ante posuere malesuada.Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit.
                                Velit dapibus est, nunc, montes, lacus consequat
                                integer viverra. Sit morbi etiam quam rhoncus.
                                Velit in arcu platea donec vitae ante posuere
                                malesuada.Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Velit dapibus est,
                                nunc,
                            </SubTypo>
                            <Wrapper color="#FAFAFB">
                            <div style={{padding:20}}>
                            <SubTypo variant="h6" color="#969CB4">
                                    “Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Commodo dictum sapien,
                                    amet, consequat. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Commodo dictum
                                    sapien, amet, consequat toamk risusu”
                                </SubTypo>
                            </div>
                                
                            </Wrapper>
                            <BlogImageAndVideo />
                            {/* <Grid
                                container
                                spacing={2}
                                sx={{ marginTop: 5, marginBottom: 5 }}
                            >
                                <Grid item md={6} sm={12}>
                                    <video
                                        src={office}
                                        controls
                                        autoPlay
                                        loop
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                        }}
                                    />
                                </Grid>
                                <Grid item md={6} sm={12}>
                                    <img
                                        src={blogG}
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                        }}
                                    />
                                </Grid>
                            </Grid> */}
                            <GContainer>
                                <SubTypo variant="h6" color="#8A8FB9">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Velit dapibus est, nunc,
                                    montes, lacus consequat integer viverra. Sit
                                    morbi etiam quam rhoncus. Velit in arcu
                                    platea donec vitae ante posuere
                                    malesuada.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Velit dapibus
                                    est, nunc, montes, lacus consequat integer
                                    viverra. Sit morbi etiam quam rhoncus. Velit
                                    in arcu platea donec vitae ante posuere
                                    malesuada.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Velit dapibus
                                    est, nunc,
                                </SubTypo>
                            </GContainer>

                            <GContainer>
                                <Grid container spacing={2}>
                                    <Grid item md={3} sm={12}>
                                        <BlogProduct />
                                    </Grid>
                                    <Grid item md={3} sm={12}>
                                        <BlogProduct />
                                    </Grid>
                                    <Grid item md={3} sm={12}>
                                        <BlogProduct />
                                    </Grid>
                                    <Grid item md={3} sm={12}>
                                        <BlogProduct />
                                    </Grid>
                                </Grid>
                            </GContainer>
                            <GContainer>
                                <SubTypo variant="h6" color="#8A8FB9">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Velit dapibus est, nunc,
                                    montes, lacus consequat integer viverra. Sit
                                    morbi etiam quam rhoncus. Velit in arcu
                                    platea donec vitae ante posuere
                                    malesuada.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Velit dapibus
                                    est, nunc, montes, lacus consequat integer
                                    viverra. Sit morbi etiam quam rhoncus. Velit
                                    in arcu platea donec vitae ante posuere
                                    malesuada.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Velit dapibus
                                    est, nunc,
                                </SubTypo>
                            </GContainer>
                            <GContainer>
                                <SubTypo variant="h6" color="#8A8FB9">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Velit dapibus est, nunc,
                                    montes, lacus consequat integer viverra. Sit
                                    morbi etiam quam rhoncus. Velit in arcu
                                    platea donec vitae ante posuere
                                    malesuada.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Velit dapibus
                                    est, nunc, montes, lacus consequat integer
                                    viverra. Sit morbi etiam quam rhoncus. Velit
                                    in arcu platea donec vitae ante posuere
                                    malesuada.Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Velit dapibus
                                    est, nunc,
                                </SubTypo>
                            </GContainer>
                        </ContainerMain>
                        <CustomeDivider />
                        <BlogFooter />
                        <GContainer>
                            <BlogForm />
                        </GContainer>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <RightSide />
                    </Grid>
                </Grid>
                <div style={{ marginTop: 40 }}>
                    <Services />
                </div>
            </Container>
        </>
    );
}

const GContainer = styled("div")(({ theme }) => ({
    marginTop: 20,
}));
const CustomeDivider = styled(Divider)(({ theme }) => ({
    marginTop: 20,
    color: "#E8E6F1",
    lineHeight: 1,
}));
const PagebtnContainer = styled("div")(({ theme }) => ({
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));
const AvatorContainer = styled("div")(({ theme }) => ({
    backgroundColor: "#FFF",
    boxShadow: `0px 8px 40px rgba(49, 32, 138, 0.05)`,
    borderRadius: 3,
    width: "100%",
    height: 41,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const Wrapper = styled("div")(({ theme, color }) => ({
    marginTop: 30,
    backgroundColor: color,
    width: "100%",
    display: "flex",
    // padding: 20,
    borderStyle:"solid",
    borderWidth: 2,
    borderColor: "transparent",
    "&:hover": {
        borderLeftColor: "#FC45A0",
    },
}));
const PaginationWrapper = styled("div")(({ theme, color }) => ({
    marginTop: 30,
    backgroundColor: color,
    width: "100%",
    display: "flex",
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
}));
const Image = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",
    borderRadius: 6,
}));

const BlogVideoContainer = styled("div")(({ theme }) => ({
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));
const InfoContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "60%",
    justifyContent: "space-between",
    marginTop: 10,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));

const InfoBg = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));

const TextContainer = styled("div")(({ theme }) => ({
    marginLeft: 5,
    width: 127,
    height: 23,
    backgroundColor: "#FFECE2",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
const CustomeTypo = styled(Typography)(({ theme }) => ({
    color: "#151875",
    fontFamily: theme.typography.customFonts.JosefinSans,
    // lineHeight:2
    padding: 5,
}));

const BlogTitle = styled(Typography)(({ theme }) => ({
    color: "#151875",
    fontFamily: theme.typography.customFonts.JosefinSans,
    lineHeight: 3,
    [theme.breakpoints.down("md")]: {
        lineHeight: 2,
    },
}));

const ContainerMain = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));
const ImgContainer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "400px",
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
const SubTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    textAlign: "justify",
    color: color,
}));

const ReadMoreTypo = styled(Link)(({ theme }) => ({
    lineHeight: 3,
    fontWeight: "600",
    fontFamily: theme.typography.customFonts.Lato,
    cursor: "pointer",
}));
const FooterAvatar = styled(Avatar)(({ theme, color }) => ({
    backgroundColor: color,
    size: "small",
    width: "20px",
    height: "20px",
}));

const avatarStyling = {
    width: "11px",
    height: "11px",
};

export default BlogReadMore;
