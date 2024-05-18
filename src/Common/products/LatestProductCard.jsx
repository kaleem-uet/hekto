import React, { useState } from "react";
import { IconButton, Tooltip, Typography, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import image1166 from "../../assets/img/image 1166.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import DownUpTrails from "../../Components/Animations/DownUpTrails";
function LatestProductCard({ data }) {
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
            showOptions={showOptions}
        >
            <ProdImgContainer>
                <ProductImage src={image1166} />
            </ProdImgContainer>
            <ProductActionsWrapper show={showOptions}>
                <DownUpTrails delay={0} show={showOptions}>
                    <Stack direction="column">
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
                </DownUpTrails>
            </ProductActionsWrapper>

            {data.sale ? (
                <>
                    <ProductSalebtn variant="contained" show={showOptions}>
                        <Typography variant="body2">Sale</Typography>
                    </ProductSalebtn>
                </>
            ) : (
                <></>
            )}

            <ProductContent>
                <ProductTitle variant="h6">{data.title}</ProductTitle>
                <PriceWrapper>
                    <NewPrice variant="h6">${data.price}</NewPrice>
                    <OldPrice variant="h6">
                        <del>${data.oldPrice}</del>
                    </OldPrice>
                </PriceWrapper>
            </ProductContent>
        </Product>
    );
}

const Product = styled(Box)(({ theme, showOptions }) => ({
    height: "270px",
    width: "100%",
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    transition: "all 0.2s ease",
    [theme.breakpoints.down("md")]: {
        width: "auto",
    },
}));

/*
============ Product Image Section ===========
*/

const ProdImgContainer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    background: "#F7F7F7",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
        background: "#fff",
    },
}));
const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "200px",
}));

/*
============ Product Content Section ===========
*/

const ProductContent = styled("div")(({ theme }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    // padding: "0px 15px",
    justifyContent: "space-between",
}));

const ProductTitle = styled(Typography)(({ theme, showOptions }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: theme.palette.primary.navyBlue,
    lineHeight: 2,
    fontWeight: "700",
}));

/*
============ Product Price Section ===========
*/

const PriceWrapper = styled("div")(({ theme, showOptions }) => ({
    width: "27%",
    display: "flex",
    justifyContent: "space-around",
}));
const NewPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.navyBlue,
}));
const OldPrice = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

/*
============ Product Actions ===========
*/

const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
    display: show ? "visible" : "none",
    position: "absolute",
    bottom: 40,
    left: 10,
}));

const ProductActionButton = styled(IconButton)(({ theme }) => ({
    margin: 0,
}));
const ProductSalebtn = styled("button")(({ theme, show }) => ({
    position: "absolute",
    top: 30,
    left: 40,
    color: "#FFF",
    backgroundColor: "#3F509E",
    width: 80,
    height: 23,
    fontSize: 12,
    padding: 0,
    borderRadius: "20px 0px 20px 0px",
    borderColor: "#3F509E",
    borderWidth: "0px 10px 0px 10px",
    transform: "rotate(-40.12deg)",

    display: show ? "visible" : "none",
    "&:hover": {
        backgroundColor: "#303e7f",
        borderRadius: "20px 0px 20px 0px",
        borderColor: "#303e7f",
        borderWidth: "0px 10px 0px 10px",
    },
}));

export default LatestProductCard;
