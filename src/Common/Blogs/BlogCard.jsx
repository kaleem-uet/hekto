import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import blog from "../../assets/img/blog.png";
import pen from "../../assets/img/pen.png";
import date from "../../assets/img/date.png";
export default function BlogCard({data}) {
    return (
        <Wrapper>
            <BlogImgContainer>
                <BlogImage src={blog} />
            </BlogImgContainer>
            <BlogContant>
                <RowItems>
                    <SubContantWrapper>
                        <img src={pen} width={12} height={12} />
                        <SubContant variant="subtitle1">{data.author}</SubContant>
                    </SubContantWrapper>
                    <SubContantWrapper>
                    <img src={date} width={12} height={12} />
                        <SubContant variant="subtitle1">
                            {data.date}
                        </SubContant>
                    </SubContantWrapper>
                </RowItems>
                <BlogTitle variant="h4" titleColor={data.titleColor}>
                    {data.title}
                </BlogTitle>
                <BlogDescription variant="h5">
                {data.details.slice(1,60)}...
                </BlogDescription>
                <div style={{
                   marginLeft:10
                }}>
                    <CustomBtn
                    component="button"
                    variant="h5"
                    underline="hover"
                    onClick={() => {
                        console.info("I'm a button.");
                    }}
                  >
                 Read More
                </CustomBtn>    
                </div>
            </BlogContant>
        </Wrapper>
    );
}

const Wrapper = styled(Box)(({ theme }) => ({
    height: "400px",
    width: "270px",
    borderRadius: 5,
    backgroundColor: `linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;`,
    display: "flex",
    flexDirection: "column",
    boxShadow: `0px 8px 40px rgba(49, 32, 138, 0.05)`,
    position: "relative",
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }
}));

const BlogImgContainer = styled("div")(({ theme }) => ({
    width: "auto",
    height: "210px",
    [theme.breakpoints.down('md')]:{
        width:"auto",
        height:"210px"
    }

}));

const BlogImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    height: "210px",
    borderRadius:5,
   
    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "210px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "210px",
    }
}));
const BlogContant = styled("div")(({ theme }) => ({
    flexDirection: "column",
    display: "flex",
    margin: 0,
    width:"100%"
}));
const RowItems = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));
const SubContantWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    justifyContent:"center",
}));
const SubContant = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.navyBlue,
    fontFamily: theme.typography.customFonts.JosefinSans,
    marginLeft: 2,
    fontSize: 14,
}));
const BlogTitle = styled(Typography)(({ theme ,titleColor}) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color:titleColor, 
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "600",
}));

const BlogDescription = styled(Typography)(({ theme }) => ({
    margin: 10,
    fontFamily: theme.typography.customFonts.Lato,
    fontWeight: "400",
    color: "#72718F",
}));



const CustomBtn = styled(Link)(({ theme }) => ({
    fontSize:"16px",
    fontWeight:"400",
    lineHeight: 2,
    color: theme.palette.primary.navyBlue,
    fontFamily: theme.typography.customFonts.Lato,
    "&:hover": {
        color: theme.palette.primary.main,
    },
    
}));