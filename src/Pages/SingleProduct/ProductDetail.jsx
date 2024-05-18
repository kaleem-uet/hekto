import React from "react";
import ProductCarousel from "../../Common/ProductCarousel/ProductCarousel";
import {
  Container,
  Typography,
  Grid,
  Rating,
  IconButton,
  styled,
} from "@mui/material";
import CommanHero from "../../Common/HeroCom/CommanHero";
import Listing from "../../Common/ProductCarousel/Listing";
import Services from "../../Components/Services";
import ProductDesc from "../../Common/ProductCarousel/ProductDesc";
import RelatedProduct from "../../Common/ProductCarousel/RelatedProduct";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ProductCrouselMobile from "../../Common/ProductCarousel/ProductCrouselMobile";
function ProductDetail() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <CommanHero title={"Shop Left Sidebar"} />
      <Wrapper>
        {!matches ? (
          <>
            <CustomContainer>
              <Grid container spacing={2}>
                <CustomGrid item md={6} lg={6} sm={6}>
                  <ProductCarousel />
                </CustomGrid>
                <CustomGrid item md={6} lg={6} sm={6}>
                  <Listing />
                </CustomGrid>
              </Grid>
            </CustomContainer>
          </>
        ) : (
          <>
            <Grid container spacing={0}>
              <Grid item md={12}>
                <ProductCrouselMobile />
              </Grid>
              <Grid item md={12} lg={12} sm={12}>
                <div style={{ marginLeft: 10 }}>
                  <Listing />
                </div>
              </Grid>
            </Grid>
          </>
        )}
      </Wrapper>
      <ProductDesc />

      <Container sx={{ marginTop: 10, marginBottom: 5 }}>
        <Title variant="h2"> Related Products</Title>
      </Container>
      <Container>
        <CustomGrid container spacing={5} sx={{}}>
          <Grid item md={3} lg={3} sm={12}>
            <RelatedProduct />
          </Grid>
          <Grid item md={3} lg={3} sm={12}>
            <RelatedProduct />
          </Grid>
          <Grid item md={3} lg={3} sm={12}>
            <RelatedProduct />
          </Grid>
          <Grid item md={3} lg={3} sm={12}>
            <RelatedProduct />
          </Grid>
        </CustomGrid>

      </Container>
      <div style={{marginTop:90}}>
      <Services />

      </div>

    </>
  );
}

const Wrapper = styled("div")(({ theme }) => ({
  marginTop: 50,
  marginBottom: 50,
}));
const CustomGrid = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  "&.MuiGrid-item": {
    paddingLeft: "0px",
   paddingTop:0,
},
}));
const CustomContainer = styled(Container)(({ theme }) => ({
  width: "100%",
  height: 384,
  boxShadow: `0px 0px 25px 10px #F6F4FD`,
  borderRadius: 5,
  [theme.breakpoints.down("md")]: {
    height: "100%",
    borderRadius: 0,
    boxShadow: `0px 0px 0px 0px #F6F4FD`,
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  fontWeight: "500",
}));

export default ProductDetail;
