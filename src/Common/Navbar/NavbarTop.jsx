import React from "react";
import { styled, Typography, Container, IconButton } from "@mui/material";
import { Wrapper } from "../Wrapper/Wrapper";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Stack } from "@mui/system";
import TranslateIcon from "@mui/icons-material/Translate";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import {colorObject} from '../../Theme/customColors'


/*
================ TOP-NAV ITEMS =================
*/

const NavbarTopLinkItems = [
    {
        title: "Eglish",
        icon: <TranslateIcon fontSize="string" />,
        arrowIcon: <KeyboardArrowDownIcon fontSize="string" />,
    },
    {
        title: "USD",
        icon: <PaidOutlinedIcon fontSize="string" />,
        arrowIcon: <KeyboardArrowDownIcon fontSize="string" />,
    },
    {
        title: "Login",
        icon: "",
        arrowIcon: <PersonOutlineIcon fontSize="string" />,
    },
    {
        title: "Wishlist",
        icon: "",
        arrowIcon: <FavoriteBorderIcon fontSize="string" />,
    },
    {
        title: "",
        icon: <ShoppingCartOutlinedIcon color="secondary" fontSize="small" />,
        arrowIcon: "",
    },
];



/*
================TOP-NAV COMPONENT STARTS =================
*/

function NavbarTop() {
    return (
        <Wrapper type="row" color={colorObject.purple}>
            <NavContainer>
                <Stack direction="row">
                    {TopNavContactItems.map((item, i) => (
                        <TopMenuButton className="email" key={i}>
                            {item.icon}
                            <CustomTypograpy variant="p" color="secondary">
                                {item.title}
                            </CustomTypograpy>
                        </TopMenuButton>
                    ))}
                </Stack>
                <Stack direction="row">
                    {NavbarTopLinkItems.map((item, i) => (
                        <TopMenuButton size="small" color="secondary" key={i}>
                            {item.icon}
                            <CustomTypograpy variant="p" color="secondary">
                                {item.title}
                            </CustomTypograpy>
                            {item.arrowIcon}
                        </TopMenuButton>
                    ))}
                </Stack>
            </NavContainer>
        </Wrapper>
    );
}
/*
================ TOP-NAV CONTAINER  =================
*/

const NavContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    placeItems: "center",
    maxHeight: "25px",
    justifyContent: "space-between",
    margin: "0px",

    [theme.breakpoints.down("custom_sm")]: {
        maxWidth: "100%",
        justifyContent: "space-between",
    },
}));

/*
================ TOP-MENU BUTTONS =================
*/

const TopMenuButton = styled(IconButton)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    padding: "0px",
    fontSize: "16px",
    lineHeight: "24px",
    marginRight: "10px",
}));

/*
================ CUSTOM TYPOGRAPHY =================
*/

const CustomTypograpy = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    marginLeft: 4,
    fontSize: "13px",
    [theme.breakpoints.down("sm")]: {
        display: "none",
    },
}));

const TopNavContactItems = [
    {
        title: "mhhasanul@gmail.com",
        icon: <MailOutlineIcon color="secondary" fontSize="string" />,
    },
    {
        title: "(12345)67890",
        icon: <PhoneInTalkIcon color="secondary" fontSize="string" />,
    },
];
export default NavbarTop;
