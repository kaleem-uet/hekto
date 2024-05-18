import React from "react";
import office from "../../assets/img/office.mp4";
import blogG from "../../assets/img/blogG.png";
import { Grid } from "@mui/material";

function BlogImageAndVideo() {
    return (
        <div>
            <Grid container spacing={2} sx={{ marginTop: 5, marginBottom: 5 }}>
                <Grid item md={6} sm={12}>
                    <video
                        src={office}
                        controls
                        autoPlay
                        loop
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Grid>
                <Grid item md={6} sm={12}>
                    <img
                        src={blogG}
                        style={{
                            height: "100%",
                            width: "100%",
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export default BlogImageAndVideo;
