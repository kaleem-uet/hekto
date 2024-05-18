import RecentCard from "../../Common/Blogs/RecentCard";
import { SectionHeading } from "../../Common/CommonTypo";
import React from "react";

function SaleProduct() {
    return (
        <div style={{ marginTop: 30 }}>
            <SectionHeading variant="h4">Sale Product</SectionHeading>
            <div style={{marginTop:10}}>
                <RecentCard title="Elit ornare in enim mauris." date="Aug 09 2020"/>
            </div>
            <div style={{marginTop:10}}>
                <RecentCard title="Elit ornare in enim mauris." date="Aug 09 2020"/>
            </div>
            <div style={{marginTop:10}}>
                <RecentCard title="Elit ornare in enim mauris." date="Aug 09 2020"/>
            </div>
            <div style={{marginTop:10}}>
                <RecentCard title="Elit ornare in enim mauris." date="Aug 09 2020"/>
            </div>
            
        </div>
    );
}

export default SaleProduct;
