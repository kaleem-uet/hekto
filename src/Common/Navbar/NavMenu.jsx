import {
  AppBar,
  Button,
  TextField,
  IconButton,
  Typography,
  styled,
  Container,
  Link
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import Dropdown from "../Dropdown";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import BookIcon from "@mui/icons-material/Book";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CallIcon from "@mui/icons-material/Call";
import { useNavigate } from "react-router-dom";
const dropDownItems = ["item1", "item2", "item3", "item4"];

const pages = [
  { name:"Products", link: "/" },
  { name:"Shop", link: "/shop" },
  { name:"Contact", link: "/contact" },
  {name:"Cart",link:"/cart"},
  { name:"Blog", link: "/blog" },
];
const iOS =
  typeof navigator !== "undefined" &&
  /iPad|iPhone|iPod/.test(navigator.userAgent);

  function NavMenu() {

  const [navDropdownEl, setNavDropdownEl] = useState(null);
  const handleOpen = (e) => setNavDropdownEl(e.currentTarget);
  const handleClose = () => setNavDropdownEl(false);
  const open = Boolean(navDropdownEl);
  const [state, setState] = useState({
    right: false,
  });

  const navigate = useNavigate();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Pages", "Cart", "Blog", "Shop", "Contact"].map(
          (text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  console.log("this is index", text);
                }}
              >
                <ListItemIcon>
                  {index === 0 ? (
                    <HomeIcon color="primary" />
                  ) : index === 1 ? (
                    <PagesIcon color="primary" />
                  ) : index === 2 ? (
                    <ProductionQuantityLimitsIcon color="primary" />
                  ) : index === 3 ? (
                    <BookIcon color="primary" />
                  ) : index === 4 ? (
                    <ShoppingBasketIcon color="primary" />
                  ) :(
                    <CallIcon color="primary" />
                  )
                  }
                </ListItemIcon>
                <CustomListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="inherit" elevation={0}>
      <NavContainer maxWidth="md">
        <LogoTypography variant="h2" noWrap onClick={()=>{navigate('/')}}>
          Hekto
        </LogoTypography>
        <MenuItemsBox>
          <MenuItemButton
            size="small"
            sx={{ padding: "10px" }}
            onClick={handleOpen}
            id="home-button"
          >
            Home
            <KeyboardArrowDownIcon fontSize="small" />
          </MenuItemButton>
          {pages.map(({name,link}) => (
            <MenuItemButton key={name} size="small" variant="text">

             <Link href={link} underline="none">
             {name}
             </Link>
            </MenuItemButton>
          ))}
        </MenuItemsBox>
        <SearchBox>
          <CustomTextField />
          <SearchButton size="small" variant="contained">
            <SearchIcon fontSize="small" />
          </SearchButton>
        </SearchBox>

        {/* Responsive Menu */}
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                size="large"
                color="primary"
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon fontSize="medium" />
              </IconButton>

              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </Box>
      </NavContainer>
      <Dropdown
        items={dropDownItems}
        anchorel={navDropdownEl}
        open={open}
        handleClose={handleClose}
        areaLabelledBy={"home-button"}
      />
    </AppBar>
  );
}

/*
============ CONTAINER ==============
*/

const NavContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  placeItems: "center",
  justifyContent: "space-evenly",
  marginTop: "10px",

  [theme.breakpoints.down("custom_sm")]: {
    maxWidth: "100%",
    justifyContent: "space-between",
  },
}));

/*
============ LOGO ==============
*/

const LogoTypography = styled(Typography)(({ theme }) => ({
  marginRight: "30px",
  fontWeight: "600",
  cursor:"pointer",
  fontFamily: theme.typography.customFonts.JosefinSans,
}));

/*
============ MENU ITEMS ==============
*/

const MenuItemsBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  placeItems: "center",
  alignItems: "center",
  gap: "15px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
    gap: "5px",
  },
}));

const MenuItemButton = styled(Button)(({ theme }) => ({
  maxWidth: "64px",
}));

/*
============= SEARCH =============
*/

const SearchBox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  display: "flex",
  width: "180px",
  [theme.breakpoints.down("custom_sm")]: {
    display: "none",
  },
}));

const SearchButton = styled(Button)({
  padding: "0px",
  minWidth: "36px",
});
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: "0px",
    margin: "2px",
  },
  [theme.breakpoints.down("sm")]: {
    heigth: "20px",
  },
  [theme.breakpoints.down("custom_sm")]: {
    display: "none",
  },
}));

const CustomListItemText = styled(ListItemText)(({ theme }) => ({


   "& .MuiListItemText-primary":{
         fontFamily: theme.typography.customFonts.JosefinSans,
  fontSize: 16,
   }


}));
export default NavMenu;
