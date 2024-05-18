import React, { useState, useEffect } from "react";
import { Button, IconButton, Tooltip, Typography, styled } from "@mui/material";
import { Box, Container, Stack, style } from "@mui/system";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import featured1 from "../../assets/img/featured-1.png";
import Trails from "../../Components/Animations/Trails";
import { colorObject } from "../../Theme/customColors";
export default function FeaturedProductCard({ title, price, imgUrl }) {
    const [showOptions, setShowOptions] = useState(false);
    const handleMouseEnter = () => {
        setShowOptions(true);
    };
    const handleMouseLeave = () => {
        setShowOptions(false);
    };

    return (
        <Product
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            show={showOptions}
        >
            <ProdImgContainer>
                <ProductImage src={featured1} />
            </ProdImgContainer>

            <ProductActionsWrapper show={showOptions}>
                <Trails delay={0} show={showOptions}>
                    <Stack direction="row">
                        <ProductActionButton>
                            <Tooltip placement="left" title="Full view">
                                <ZoomInOutlinedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#1DB4E7",
                                    }}
                                />
                            </Tooltip>
                        </ProductActionButton>
                        <ProductActionButton>
                            <Tooltip placement="left" title="Add to cart">
                                <ShoppingCartOutlinedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#1DB4E7",
                                    }}
                                />
                            </Tooltip>
                        </ProductActionButton>
                        <ProductActionButton>
                            <Tooltip placement="left" title="Add to Fav">
                                <FavoriteBorderOutlinedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#1DB4E7",
                                    }}
                                />
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>
                </Trails>
            </ProductActionsWrapper>

            <ProductViewDetails variant="contained" show={showOptions}>
                View Details
            </ProductViewDetails>

            <ProductContent>
                <ProductTitle show={showOptions} variant="h6">
                    {title}
                </ProductTitle>
                <ColorContainer>
                    <AvailableColor customColor={colorObject.navyBlue} />
                    <AvailableColor customColor={colorObject.darkPrimary} />
                    <AvailableColor customColor={colorObject.primary} />
                </ColorContainer>
                <ProdPriceAndCode show={showOptions} variant="subtitle2">
                    Code - Y523201
                </ProdPriceAndCode>
                <ProdPriceAndCode show={showOptions} variant="price">
                    ${price}
                </ProdPriceAndCode>
            </ProductContent>
        </Product>
    );
}
const Product = styled(Box)(({ theme, show }) => ({
    width: "100%",
    borderRadius: 5,
    backgroundColor: show
        ? theme.palette.primary.Blue
        : theme.palette.secondary.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: `0px 0px 3px 0px rgb(0 0 0 / 10%)`,
    position: "relative",
    marginBottom:3
}));

const ProdImgContainer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: theme.palette.primary.shade,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "25px",
}));
const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "120px",
    padding:20,
    [theme.breakpoints.down("md")]: {},
}));

const ProductContent = styled("div")(({ theme }) => ({
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px",
}));
const ProductTitle = styled(Typography)(({ theme, show }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: show ? theme.palette.secondary.white : theme.palette.primary.main,
    fontWeight: "700",
}));

const ColorContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
}));

const AvailableColor = styled("div")(({ customColor }) => ({
    backgroundColor: customColor,
    width: 14,
    height: 2,
    marginLeft: 5,
    bottom: 12,
    borderRadius: 12,
}));

const ProdPriceAndCode = styled(Typography)(({ theme, show }) => ({
    fontSize: 14,
    fontFamily: theme.typography.customFonts.JosefinSans,
    // lineHeight:1.5,
    marginBottom: 5,
    color: show
        ? theme.palette.secondary.white
        : theme.palette.primary.navyBlue,
}));

const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
    display: show ? "visible" : "none",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: "40%",
    left: 0,
    // animation: show && `${slideInRight} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
}));
const ProductFavButton = styled(IconButton)(({ isfav, theme }) => ({
    color: isfav ? colorObject.primary : colorObject.shade,
    position: "absolute",
    right: 0,
    top: 0,
}));
const ProductActionButton = styled(IconButton)(({ theme }) => ({
    margin: 4,
}));
const ProductViewDetails = styled(Button)(({ theme, show }) => ({
    position: "absolute",
    bottom: "43%",
    color: theme.palette.secondary.white,
    backgroundColor: theme.palette.primary.Green,
    width: 94,
    fontFamily: theme.typography.customFonts.JosefinSans,
    height: 29,
    fontSize: 10,
    padding: 0,
    borderRadius: 2,
    display: show ? "visible" : "none",
    "&:hover": {
        backgroundColor: theme.palette.primary.hoverGreen,
    },
}));
