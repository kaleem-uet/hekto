import { colorObject } from "../../Theme/customColors";
import { Link, styled, Typography } from "@mui/material";
import React from "react";
import BlogHero from "./BlogHero";
function BlogPostsCard() {
    return (
        <Wrapper>
            <BlogHero/>
            <SubTypo color="#8A8FB9" variant="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
                facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
                malesuada vitae ultrices in in neque, porta dignissim.
                Adipiscing purus, cursus vulputate id id dictum at.
            </SubTypo>

            <ReadMoreTypo underline="hover" variant="h5" color={colorObject.darkBlue}>
                Read More
            </ReadMoreTypo>
        </Wrapper>
    );
}

const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
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
    cursor:"pointer"
}));
export default BlogPostsCard;
