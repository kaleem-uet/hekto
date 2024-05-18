import { SectionHeading } from "../../Common/CommonTypo";
import { Container, Stack, styled, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { colorObject } from "../../Theme/customColors";
import React from "react";

function Follow() {
    return (
        <div>
            <SectionHeading>Follow</SectionHeading>
            <StackContainer>
                <Stack direction="row" spacing={2}>
                    <FooterAvatar color="#5625DF">
                        <FacebookRoundedIcon sx={avatarStyling} />
                    </FooterAvatar>
                    <FooterAvatar color="#FF27B7">
                        <InstagramIcon sx={avatarStyling} />
                    </FooterAvatar>
                    <FooterAvatar color="#37DAF3">
                        <TwitterIcon sx={avatarStyling} />
                    </FooterAvatar>
                </Stack>
            </StackContainer>
        </div>
    );
}
const StackContainer=styled('div')(({theme})=>({
    backgroundColor: "#FFF",
    boxShadow: `0px 8px 40px rgba(49, 32, 138, 0.05)`,
    borderRadius: 3,
    width:126,
    height:41,
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}))
const FooterAvatar = styled(Avatar)(({ theme, color }) => ({
    backgroundColor: color,
    size: "small",
    width: "20px",
    height: "20px",
    cursor:"pointer",
}));

const avatarStyling = {
    width: "11px",
    height: "11px",
};

export default Follow;
