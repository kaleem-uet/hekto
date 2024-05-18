import { IconButton, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import prod1 from "../../assets/img/image-product-1.jpg";
import prod2 from "../../assets/img/image-product-2.jpg";
import prod3 from "../../assets/img/image-product-3.jpg";
import prod4 from "../../assets/img/image-product-4.jpg";

const IMAGES = [prod1, prod2, prod3, prod4];
function ProductCrouselMobile() {
    const [currentMobileImage, setCurrentMobileImage] = useState(prod1);
    const [mobileImageIndex, setMobileImageIndex] = useState(1);

    const handleIncrement = () => {
        if (mobileImageIndex === IMAGES.length - 1) {
            setCurrentMobileImage(IMAGES[0]);
            setMobileImageIndex(0);
        } else {
            setCurrentMobileImage(IMAGES[mobileImageIndex + 1]);
            setMobileImageIndex(mobileImageIndex + 1);
        }
    };

    const handleDecrement = () => {
        if (mobileImageIndex === 0) {
            setCurrentMobileImage(IMAGES[IMAGES.length - 1]);
            setMobileImageIndex(IMAGES.length - 1);
        } else {
            setCurrentMobileImage(IMAGES[mobileImageIndex - 1]);
            setMobileImageIndex(mobileImageIndex - 1);
        }
    };

    return (
        <div style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
            }}>
            <img src={currentMobileImage} style={{width:"100%"}}/>

            <IconButtonLeft disableRipple onClick={handleDecrement}>
                <ArrowBackIosIcon fontSize="medium" />
            </IconButtonLeft>
            <IconButtonRight disableRipple onClick={handleIncrement}>
                <ArrowForwardIosIcon fontSize="medium" />
            </IconButtonRight>
  </div>
    );
}

const ImageContainer = styled("div")(({ theme, bgImage }) => ({
    backgroundImage: `url(${bgImage})`,
    width: "100%",
    height: 800,
}));

const IconButtonLeft = styled(IconButton)(({ theme }) => ({
    height: "25px",
    // width: "42px",
    backgroundColor: "gray",

    position: "absolute",
    top: "50%",
    width: "25px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    marginTop: "-22px",
    left: 0,
}));
const IconButtonRight = styled(IconButton)(({ theme }) => ({
    height: "25px",
    // width: "42px",
    backgroundColor: "gray",
    position: "absolute",
    top: "50%",
    width: "25px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    marginTop: "-22px",
    right: 0,
}));
export default ProductCrouselMobile;
