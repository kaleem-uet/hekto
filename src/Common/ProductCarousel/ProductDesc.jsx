import { Container, Link, styled, Typography, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Wrapper } from "../Wrapper/Wrapper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colorObject } from "../../Theme/customColors";
const Tabs = [
    {
        id: 1,
        title: "Description",
        desc: `
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the
        release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of
        `,
    },

    {
        id: 2,
        title: "Additional Info",
        desc: "this is tabe 2",
    },
    {
        id: 3,
        title: "Reviews",
        desc: "this is tabe 3",
    },
    {
        id: 4,
        title: "Video",
        desc: "this is tab 4",
    },
];
function ProductDesc() {
    const [CurrentTab, setCurrentTab] = useState("1");

    return (
        <Wrapper color={"#F9F8FE"} style={{ position: "relative" }}>
            {/* <IconButtonLeft disableRipple>
                <Typography variant="h4" style={{ fontWeight: "600" }}>
                    {" "}
                    {"<"}{" "}
                </Typography>
            </IconButtonLeft>
            <IconButtonRight disableRipple>
                <Typography varinat="h4" style={{ fontWeight: "600" }}>
                    {" "}
                    {">"}{" "}
                </Typography>
            </IconButtonRight> */}
            <Container sx={{ padding: 10 }}>
                <TabContainer>
                    {Tabs.map((tab, index) => (
                       
                            <CustomeTab
                                component="button"
                                variant="body1"
                                underline="hover"
                                key={index}
                                id={tab.id}
                                onClick={(e) => {
                                    setCurrentTab(e.target.id);
                                }}
                            >
                                {tab.title}
                            </CustomeTab>
                       
                    ))}
                </TabContainer>
                <div style={{ marginTop: 20 }}>
                    <CustomeTitle>Varius tempor</CustomeTitle>

                    {Tabs.map((tab, index) => (
                        <MoreDetailsContainer key={index}>
                            {CurrentTab === `${tab.id}` && (
                                <CustomTypo variant="caption">
                                    {tab.desc}
                                </CustomTypo>
                            )}
                        </MoreDetailsContainer>
                    ))}                    
                </div>
                <div style={{ marginTop: 30 }}>
                    <CustomeTitle>More details</CustomeTitle>
                    <MoreDetailsContainer>
                        <ArrowForwardIcon sx={IconStyle} />
                        <CustomTypo variant="caption">
                            Aliquam dis vulputate vulputate integer sagittis.
                            Faucibus ds diam arcu, nulla lobortis justo netus
                            dis. Eu in fringilla vulputate nunc nec. Dui, massa
                            viverr .
                        </CustomTypo>
                    </MoreDetailsContainer>

                    <MoreDetailsContainer>
                        <ArrowForwardIcon sx={IconStyle} />
                        <CustomTypo variant="caption">
                            Aliquam dis vulputate vulputate Aliquam dis
                            vulputate vulputate in integer sagittis. Faucibus ds
                            diam arcu, nulla lobortis justo netus dis. Eu in
                            fringilla vulputate nunc nec. Dui, massa viverr .
                        </CustomTypo>
                    </MoreDetailsContainer>

                    <MoreDetailsContainer>
                        <ArrowForwardIcon sx={IconStyle} />
                        <CustomTypo variant="caption">
                            Aliquam dis vulputate vulputate integer sagittis.
                            Faucibus ds diam arcu, nulla lobortis justo netus
                            dis. Eu in fringilla vulputate nunc nec. Dui, massa
                            viverr .
                        </CustomTypo>
                    </MoreDetailsContainer>
                    <MoreDetailsContainer>
                        <ArrowForwardIcon sx={IconStyle} />
                        <CustomTypo variant="caption">
                            Aliquam dis vulputate vulputate integer sagittis.
                            Faucibus ds diam arcu, nulla lobortis justo netus
                            dis. Eu in fringilla vulputate nunc nec. Dui, massa
                            viverr .
                        </CustomTypo>
                    </MoreDetailsContainer>
                </div>
            </Container>
        </Wrapper>
    );
}

const TabContainer = styled("div")(({ theme }) => ({
    display: "flex",
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const CustomeTab = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.darkBlue,
    fontFamily: theme.typography.customFonts.JosefinSans,
}));

const CustomTypo = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: theme.palette.primary.textColor,
    textAlign: "justify",
}));

const CustomeTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: theme.palette.primary.navyBlue,
    lineHeight: 3,
}));

const IconStyle = {
    fontSize: 18,
    "&:hover": {
        color: colorObject.blue,
    },
};

const MoreDetailsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
}));
const IconButtonLeft = styled(IconButton)(({ theme }) => ({
    height: "25px",
    // width: "42px",
    backgroundColor: "gray",

    position: "absolute",
    top: "50%",
    width: "25px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    marginTop: "-22px",
    left: 20,
    [theme.breakpoints.down("md")]: {
        left: 0,
    },
}));
const IconButtonRight = styled(IconButton)(({ theme }) => ({
    height: "25px",
    // width: "42px",
    backgroundColor: "gray",
    position: "absolute",
    top: "50%",
    width: "25px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    marginTop: "-22px",
    right: 20,
    [theme.breakpoints.down("md")]: {
        right: 0,
    },
}));
export default ProductDesc;
