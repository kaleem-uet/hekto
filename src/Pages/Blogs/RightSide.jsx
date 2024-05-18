import React from "react";
import Search from "../../Components/Blogs/Search";
import Categories from "../../Components/Blogs/Categories";
import RecentPost from "../../Components/Blogs/RecentPost";
import SaleProduct from "../../Components/Blogs/SaleProduct";
import OfferProduct from "../../Components/Blogs/OfferProduct";
import Follow from "../../Components/Blogs/Follow";
import Tags from "../../Components/Blogs/Tags";
import Services from "../../Components/Services";
import { styled } from "@mui/material";
function RightSide() {
    return (
        <Wrapper>
            <Search />
            <Categories />
            <RecentPost />
            <SaleProduct />
            <OfferProduct />
            <Follow />
            <Tags />
        </Wrapper>
    );
}
const Wrapper =styled('div')(({theme})=>({
    [theme.breakpoints.down('md')]:{
        display:"none"
    }
}))
export default RightSide;
