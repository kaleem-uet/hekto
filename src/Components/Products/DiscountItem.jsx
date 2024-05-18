import { Link, styled, Box, Container, Typography } from "@mui/material";
import React from "react";
import { SectionHeading } from "../../Common/CommonTypo";
import DiscountItemCard from "../../Common/products/DiscountItemCard";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const DiscountProd = [
  {
    id: 1,
    category: "Wood Chair",
    name: "Eams Sofa Compact",
    title: " 20% Discount Of All Products",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.",
    imgUrl:
      "https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281511_960_720.png",
    details: [
      "Material expose like metals",
      "Material expose like metals",
      "Material expose like metals",
      "Material expose like metals",
    ],
  },
  {
    id: 2,
    category: "Plastic Chair",
    name: "Plastic Chair",
    title: " 50% Discount Of All Products",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected",
    imgUrl:
      "https://cdn.pixabay.com/photo/2019/06/18/06/01/chair-4281512_960_720.png",

    details: [
      "Material expose like metals",
      "Material expose like metals",
      "Material expose like metals",
      "Material expose like metals",
    ],
  },
  {
    id: 3,
    category: "Sofa Colletion",
    name: "Sofa Collection",
    title: " 30% Discount Of All Products",
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,",
    imgUrl:
      "https://cdn.pixabay.com/photo/2019/06/18/06/05/chair-4281517_960_720.png",

    details: [
      "Material expose like metals",
      "Material expose like metals",
      "Material expose like metals",
      "Material expose like metals",
    ],
  },
];

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

export default function DiscountItem() {
  const [CurrentTab, setCurrentTab] = useState("1");
  const theme = useTheme();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Wrapper>
      <SectionHeading variant="h1" color="primary">
        Discount Item
      </SectionHeading>
      <Container maxWidth="md">
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            aria-label="full width tabs example"
          >
            <CustomTab label="Wood Chair" {...a11yProps(0)} />
            <CustomTab label="Plastic Chair" {...a11yProps(1)} />
            <CustomTab label="Sofa Collection" {...a11yProps(2)} />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              {DiscountProd.map((data, index) => (
                <div key={index}>
                  {CurrentTab === `${data.id}` && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DiscountItemCard
                          layoutId="underline"
                          title={data.title}
                          name={data.name}
                          desc={data.desc}
                          image={data.imgUrl}
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {DiscountProd.map((data, index) => (
                <div key={index}>
                  {CurrentTab === `${data.id}` && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DiscountItemCard
                          layoutId="underline"
                          title={data.title}
                          name={data.name}
                          desc={data.desc}
                          image={data.imgUrl}
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              {DiscountProd.map((data, index) => (
                <div key={index}>
                  {CurrentTab === `${data.id}` && (
                    <AnimatePresence>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DiscountItemCard
                          layoutId="underline"
                          title={data.title}
                          name={data.name}
                          desc={data.desc}
                          image={data.imgUrl}
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Container>
      {/* <TabContainer>
        <NavigationContainer>
          {DiscountProd.map((data, index) => (
            <NavText
              key={index}
              id={data.id}
              component="button"
              underline="hover"
              variant="body1"
              onClick={(e) => {
                setCurrentTab(e.target.id);
              }}
            >
              {data.category}
            </NavText>
          ))}
        </NavigationContainer>
      </TabContainer>
      {DiscountProd.map((data, index) => (
        <div key={index}>
          {CurrentTab === `${data.id}` && (
            <AnimatePresence>
            <motion.div
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             exit={{ y: -20, opacity: 0 }}
             transition={{ duration: 0.2 }}
            >
              <DiscountItemCard
                layoutId="underline"
                title={data.title}
                name={data.name}
                desc={data.desc}
                image={data.imgUrl}
              />
            </motion.div>
            </AnimatePresence>

          )}
        </div>
      ))} */}
    </Wrapper>
  );
}
const Wrapper = styled("div")(({ theme }) => ({
  width: "100%",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  height: "100%",
  margin: "20px 0px",
}));
const TabContainer = styled(Container)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  width: "30%",
  marginBottom: 3,
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

const CustomTab = styled(Tab)(({ theme }) => ({
  fontFamily: theme.typography.customFonts.Lato,
}));
