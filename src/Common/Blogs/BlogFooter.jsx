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
import Avatar from "@mui/material/Avatar";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { colorObject } from "../../Theme/customColors";

function BlogFooter() {
    return (
        <div>
            <GContainer>
                <AvatorContainer>
                    <Stack direction="row" spacing={2}>
                        <FooterAvatar color="#5625DF">
                            <FacebookRoundedIcon sx={avatarStyling} />
                        </FooterAvatar>
                        <FooterAvatar color={colorObject.primary}>
                            <InstagramIcon sx={avatarStyling} />
                        </FooterAvatar>
                        <FooterAvatar color="#37DAF3">
                            <TwitterIcon sx={avatarStyling} />
                        </FooterAvatar>
                    </Stack>
                </AvatorContainer>
            </GContainer>
            <GContainer>
                <PaginationWrapper color="#F7F8FB">
                    <PagebtnContainer>
                        <ArrowBackIcon
                            sx={{ color: "#8A8FB9" }}
                            fontSize="small"
                        />
                        <SubTypo variant="h6" color="#8A8FB9">
                            Previous Post
                        </SubTypo>
                    </PagebtnContainer>
                    <PagebtnContainer>
                        <SubTypo variant="h6" color="#8A8FB9">
                            Next Post
                        </SubTypo>

                        <ArrowForwardIcon
                            sx={{ color: "#8A8FB9" }}
                            fontSize="small"
                        />
                    </PagebtnContainer>
                </PaginationWrapper>
            </GContainer>
        </div>
    );
}
const GContainer = styled("div")(({ theme }) => ({
    marginTop: 20,
}));

const PagebtnContainer = styled("div")(({ theme }) => ({
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));
const AvatorContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.whiteColor,
    boxShadow: `0px 8px 40px rgba(49, 32, 138, 0.05)`,
    borderRadius: 3,
    width: "100%",
    height: 41,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

const SubTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    textAlign: "justify",
    color: color,
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

export default BlogFooter;
