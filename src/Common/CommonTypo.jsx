import React from "react";
import { styled,Button, Typography } from "@mui/material";

export const SectionHeading = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: theme.palette.primary.navyBlue,
    fontWeight: "600",
    lineHeight: 2,
}));