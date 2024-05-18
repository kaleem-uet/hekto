import { Container, Stack, styled, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { colorObject } from "../../Theme/customColors";
import { Wrapper } from "../Wrapper/Wrapper";


function FooterBottom() {
    return (
        <Wrapper type="row" color={colorObject.grayFooter}>
            <FooterContainer direction="row" maxWidth="md">
                <Typography variant="caption" noWrap component="a" href="/">
                    ©Webecy - All Rights Reserved
                </Typography>
                <Stack direction="row" spacing={2}>
                    <FooterAvatar>
                        <FacebookRoundedIcon sx={avatarStyling} />
                    </FooterAvatar>
                    <FooterAvatar>
                        <InstagramIcon sx={avatarStyling} />
                    </FooterAvatar>
                    <FooterAvatar>
                        <TwitterIcon sx={avatarStyling} />
                    </FooterAvatar>
                </Stack>
            </FooterContainer>
        </Wrapper>
    );
}
const FooterContainer = styled(Container)(({ theme }) => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "4px",
    alignItems: "center",
}));

const FooterAvatar = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.darkBlue,
    size: "small",
    width: "20px",
    height: "20px",
}));

const avatarStyling = {
    width: "11px",
    height: "11px",
};

export default FooterBottom;
