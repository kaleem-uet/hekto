import { SectionHeading } from "../../Common/CommonTypo";
import React from "react";
import ShopListProduct from "../Products/ShopListProduct";
import image19 from "../../assets/img/image19.png";
import { styled, Typography, Box } from "@mui/material";
import RecentCard from '../../Common/Blogs/RecentCard';
import TrendingProductCard from "../../Common/products/TrendingProductCard";
function RecentPost() {
    return (
        <div>
            <SectionHeading>Recent Post</SectionHeading>

            <div style={{ marginTop: 10 }}>
                <RecentCard
                    title="It is a long established fact"
                    date="Aug 09 2020"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <RecentCard
                    title="It is a long established fact"
                    date="Aug 09 2020"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <RecentCard
                    title="It is a long established fact"
                    date="Aug 09 2020"
                />
            </div>
            <div style={{ marginTop: 10 }}>
                <RecentCard
                    title="It is a long established fact"
                    date="Aug 09 2020"
                />
            </div>
        </div>
    );
}

export default RecentPost;
