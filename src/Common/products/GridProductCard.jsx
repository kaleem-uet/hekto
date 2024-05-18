import { IconButton, Tooltip, Typography, styled } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import { colorObject } from "../../Theme/customColors";
import DownUpTrails from "../../Components/Animations/DownUpTrails";

export default function GridProductCard({ name, newPrice, oldPrice, src }) {
  const [showOptions, setShowOptions] = useState(0);
  const handleMouseEnter = () => {
    setShowOptions(1);
  };
  const handleMouseLeave = () => {
    setShowOptions(0);
  };
  return (
    <Product
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      showOptions={showOptions}
    >
      <ProdImgContainer>
        <ProductImage src={src} />
      </ProdImgContainer>

      <ProductActionsWrapper show={showOptions}>
        <DownUpTrails delay={0} show={showOptions}>
          <CustomStack direction="column">
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
          </CustomStack>
        </DownUpTrails>
      </ProductActionsWrapper>

      <ProductTitle variant="h6">{name}</ProductTitle>
      <ColorContainer>
        <AvailableColor customColor={colorObject.navyBlue} />
        <AvailableColor customColor={colorObject.darkPrimary} />
        <AvailableColor customColor={colorObject.primary} />
      </ColorContainer>
      <PriceWrapper>
        <NewPrice variant="subtitle2">${newPrice}</NewPrice>
        <OldPrice variant="subtitle2">
          <del>${oldPrice}</del>
        </OldPrice>
      </PriceWrapper>
    </Product>
  );
}

const CustomStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    marginLeft: 30,
  },
}));
const Product = styled(Box)(({ theme, showOptions }) => ({
  height: "100%",
  width: "100%",
  borderRadius: 5,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  transition: "all 0.2s ease",
  padding: 5,
}));

const ProdImgContainer = styled("div")(({ theme }) => ({
  width: "80%",
  height: "auto",
  background: "#F7F7F7",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));
const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "128px",
  height: "128px",
}));

/*
============ Product Content Section ===========
*/

const ProductTitle = styled(Typography)(({ theme, showOptions }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: theme.palette.primary.navyBlue,
  lineHeight: 2,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
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
  fontFamily: theme.typography.customFonts.Lato,
  fontWeight: "400",
}));
const OldPrice = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.customFonts.Lato,
  fontWeight: "400",
}));

/*
============ Product Actions ===========
*/

const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
  display: show ? "visible" : "none",
  position: "absolute",
  bottom: 80,
  left: 10,
}));

const ProductActionButton = styled(IconButton)(({ theme }) => ({
  margin: 0,
  "&:hover": {
    background: "#FFF",
  },
}));

const ColorContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginTop: 5,
  marginBottom: 10,
}));

const AvailableColor = styled("div")(({ customColor }) => ({
  backgroundColor: customColor,
  width: 5,
  height: 5,
  marginLeft: 5,
  borderRadius: 10,
}));
