import { colorObject } from "@/Theme/customColors";
import {
    Box,
    Container,
    IconButton,
    styled,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";
import productList from "../../src/img/productList.png";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";

export default function ProductDetailsCard() {
    return (
        <Wrapper>
            <Product>
             <div style={{display:"flex",flexDirection:"column"}}>
             <ProdImgContainer>
                    <ProductImageLeft src={productList} />
                </ProdImgContainer> 
                <ProdImgContainer>
                    <ProductImageLeft src={productList} />
                </ProdImgContainer>
                <ProdImgContainer>
                    <ProductImageLeft src={productList} />
                </ProdImgContainer>
               
             </div>
                 
                 <div style={{display}}>
                 <ProductImage src={productList} />
                    
                 </div>
                {/* <ProdImgContainer>
                </ProdImgContainer> */}
                {/* <ProductContent>
                    <ProductRow>
                        <ProductTitle variant="h4">
                            Accumsan tincidunt
                        </ProductTitle>
                        <ColorContainer sx={{ marginLeft: 8 }}>
                            <AvailableColor
                                customColor={colorObject.navyBlue}
                            />
                            <AvailableColor
                                customColor={colorObject.darkPrimary}
                            />
                            <AvailableColor customColor={colorObject.primary} />
                        </ColorContainer>
                    </ProductRow>
                    <RatingRow>
                        <ProdPrice
                            variant="subtitle1"
                            value={0}
                            color={colorObject.navyBlue}
                        >
                            $26.00
                        </ProdPrice>
                        <ProdPrice
                            variant="subtitle1"
                            value={5}
                            color={colorObject.primary}
                        >
                            <del>$26.00 </del>{" "}
                        </ProdPrice>
                        <Rating
                            name="read-only"
                            size={"small"}
                            value={4}
                            readOnly
                            sx={{ marginLeft: 4 }}
                        />
                    </RatingRow>
                    <ProdDec variant="h5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                    </ProdDec>
                    

                    <Stack direction="row" sx={{ marginTop: 2 }}>
                        <ProductActionButton>
                            <Tooltip placement="left" title="Add to cart">
                                <ShoppingCartOutlinedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#535399",
                                    }}
                                />
                            </Tooltip>
                        </ProductActionButton>

                        <ProductActionButton>
                            <Tooltip placement="left" title="Add to Fav">
                                <FavoriteBorderOutlinedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#535399",
                                    }}
                                />
                            </Tooltip>
                        </ProductActionButton>
                        <ProductActionButton>
                            <Tooltip placement="left" title="Full view">
                                <ZoomInOutlinedIcon
                                    fontSize="small"
                                    sx={{
                                        color: "#535399",
                                    }}
                                />
                            </Tooltip>
                        </ProductActionButton>
                    </Stack>
                </ProductContent> */}
            </Product>
        </Wrapper>
    );
}
const Wrapper = styled("div")(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
}));

const Product = styled(Box)(({ theme }) => ({
    padding: 10,
    height: "500px",
    width: "100%",
    borderRadius: 5,
    backgroundColor: `linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFFFF;`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    boxShadow: "0px 0px 25px 5px rgba(246, 246, 253, 0.5)",
}));

const ProdImgContainer = styled("div")(({ theme }) => ({
    // backgroundColor: "#F5F6F8",
    width: "auto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const ProductImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "100%",
    height: "96%",
    marginLeft:20,
    [theme.breakpoints.down("md")]: {
        width: "auto",
    },
}));
const ProductImageLeft = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    width: "150px",
    height: "150px",
    margin:10,
    [theme.breakpoints.down("md")]: {
        width: "auto",
    },
}));
const ProductContent = styled("div")(({ theme }) => ({
    flexDirection: "column",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    width: "100%",
    marginLeft:10,
}));

const ProductTitle = styled(Typography)(({ theme, show }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: "#111C85",
    // show ? theme.palette.secondary.white:theme.palette.primary.main,
    lineHeight: 1,
    fontWeight: "600",
    textAlign: "center",
}));
const ProdPrice = styled(Typography)(({ theme, color, value }) => ({
    fontSize: 14,
    //  color:"#111C85",
    marginLeft: value,
    fontFamily: theme.typography.customFonts.JosefinSans,
    lineHeight: 2,
    fontWeight: "400",
    color: color,
}));

const ProductRow = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
}));

const RatingRow = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
}));
const ColorContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
}));

const AvailableColor = styled("div")(({ customColor }) => ({
    backgroundColor: customColor,
    width: 10,
    height: 10,
    marginLeft: 5,
    borderRadius: 10,
}));

const ProdDec = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.textColor,
    fontFamily: theme.typography.customFonts.Lato,
}));

const ProductActionButton = styled(IconButton)(({ theme }) => ({
    margin: 0,
    "&:hover": {
        background: "#FFF",
    },
}));
