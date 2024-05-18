import LatestProductCard from "../../Common/products/LatestProductCard";
import { Box, Container, Link, styled, Typography, Grid } from "@mui/material";
import { product } from "../../assets/data/product";
import React from "react";
import { SectionHeading } from "../../Common/CommonTypo";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function LatestProducts() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Wrapper sx={{ marginTop: "50px" }}>
      <HeaderContainer>
        <SectionHeading variant="h1">Leatest Products</SectionHeading>
      </HeaderContainer>
      <Container maxWidth="md">
        <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="primary"
              aria-label="full width tabs example"
            >
              <CustomTab label="Best Seller" {...a11yProps(0)} />
              <CustomTab label=" Featured" {...a11yProps(1)} />
              <CustomTab label="New Arrival" {...a11yProps(2)} />
              <CustomTab label=" Special Offer" {...a11yProps(3)} />
            </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <GridContainer container spacing={4}>
                {product.leatestProducts.map((data, index) => (
                  <CustomeGridItem key={index} item xs={12} sm={6} md={4}>
                    <LatestProductCard data={data} />
                  </CustomeGridItem>
                ))}
              </GridContainer>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <GridContainer container spacing={4}>
                {product.leatestProducts.map((data, index) => (
                  <CustomeGridItem key={index} item xs={12} sm={6} md={4}>
                    <LatestProductCard data={data} />
                  </CustomeGridItem>
                ))}
              </GridContainer>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <GridContainer container spacing={4}>
                {product.leatestProducts.map((data, index) => (
                  <CustomeGridItem key={index} item xs={12} sm={6} md={4}>
                    <LatestProductCard data={data} />
                  </CustomeGridItem>
                ))}
              </GridContainer>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <GridContainer container spacing={4}>
                {product.leatestProducts.map((data, index) => (
                  <CustomeGridItem key={index} item xs={12} sm={6} md={4}>
                    <LatestProductCard data={data} />
                  </CustomeGridItem>
                ))}
              </GridContainer>
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Container>
    </Wrapper>
  );
}
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: 30,
}));
const CustomTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: theme.palette.primary.navyBlue,
  fontWeight: "600",
  lineHeight: 2,
}));

const NavigationContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "cneter",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavText = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.navyBlue,
  fontFamily: theme.typography.customFonts.Lato,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));

const Wrapper = styled("div")(({ theme }) => ({
  width: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const CustomeGridItem = styled(Grid)(({ theme }) => ({}));

const GridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  gap: 0,
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Lato,
}));
