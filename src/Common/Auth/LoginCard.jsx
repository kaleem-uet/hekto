import { colorObject } from "../../Theme/customColors";
import { Box, Link, OutlinedInput, styled, Typography } from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginCard() {
    const Navigate=useNavigate();
  return (
    <CustomeContainer>
      <CustomTypo variant="h3">Login</CustomTypo>
      <CustomSubTypo variant="subtitle1" color={colorObject.textColor2}>
        Please login using account detail bellow.
      </CustomSubTypo>
      <div>
        <CustomInput
          placeholder="Email Address"
          type="email"
          fullWidth
          color={"primary"}
        />
        <CustomInput placeholder="Password" type="password" fullWidth />
      </div>
      <div style={{ marginTop: 5 }}>
        <CustomLink underline="hover" component="button" variant="subtitle1">
          Forgot your password?
        </CustomLink>
      </div>
      <CustomeBtn>
        <CustomTypo2 variant="h5" color={colorObject.white}>
          Sign In
        </CustomTypo2>
      </CustomeBtn>
      <CreateAccContainer>
        <CustomSubTypo variant="subtitle2" color={colorObject.textColor2}>
          Don’t have an Account ?
        </CustomSubTypo>
        <CustomLink
          component="button"
          variant="subtitle2"
          underline="hover"
          onClick={() => {
            Navigate("/register");
          }}
        >
          Create account
        </CustomLink>
      </CreateAccContainer>
    </CustomeContainer>
  );
}

const CustomeContainer = styled(Box)(({ theme }) => ({
  width: 544,
  height: 474,
  backgroundColor: theme.palette.primary.whiteColor,
  boxShadow: `0px 0px 25px 10px #F8F8FB`,
  display: "flex",
  padding: 30,
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
  fontFamily: theme.typography.customFonts.JosefinSans,
  color: color,
  textAlign: "center",
  fontWeight: "800",
  lineHeight: 2,
  // lineHeight:2,
}));
const CustomTypo2 = styled(Typography)(({ theme, color }) => ({
  fontFamily: theme.typography.customFonts.Lato,
  color: color,
  fontWeight: "600",
}));
const CustomSubTypo = styled(Typography)(({ theme, color }) => ({
  fontFamily: theme.typography.customFonts.Lato,
  color: color,
  textAlign: "center",
  fontWeight: "400",
  alignItems: "center",
}));
const CustomInput = styled(OutlinedInput)(({ theme }) => ({
  "&.MuiOutlinedInput-root": {
    marginTop: 30,
    padding: 0,
    borderRadius: 3,
  },
  "& .MuiOutlinedInput-input": {
    padding: 10,
    width: "100%",
    height: "100%",
    fontSize: "16px",
    color: colorObject.textColor2,
    borderWidth: 10,
    fontWeight: "400",
  },
}));
const CustomeBtn = styled("div")(({ theme }) => ({
  height: 40,
  marginTop: 20,
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  borderRadius: 3,
  cursor: "pointer",
  color: theme.palette.primary.whiteColor,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));
const CustomLink = styled(Link)(({ theme }) => ({
  color: colorObject.textColor2,
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
const CreateAccContainer = styled("div")(({ theme }) => ({
  marginTop: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));
export default LoginCard;
