import { Box } from "@mui/material";
import React from "react";
import FooterBottom from "./FooterBottom";
import FooterMain from "./FooterMain";

function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
         minHeight: "70vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          mt: "auto",
        }}
      >
        <FooterMain />
        <FooterBottom />
      </Box>
    </Box>
  );
}

export default Footer;
