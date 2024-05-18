import { colorObject } from "../../Theme/customColors";
import {
    Checkbox,
    Container,
    FormControlLabel,
    Link,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";

function CheckOutForm() {
    return (
        <Wrapper>
            <HeadingContainer>
                <CustomTypo variant="h5" color={"#1D3178"}>
                    Contact Information
                </CustomTypo>
                <CustomTypo2 variant="h6" color={"#C1C8E1"}>
                    Already have an account?{" "}
                    <CustomLink underline={"hover"} variant="h6">Log in</CustomLink>
                </CustomTypo2>
            </HeadingContainer>
            <div style={{ marginTop: 30 }}>
                <CustgomInput
                    variant="standard"
                    placeholder="Email or mobile phone number"
                    type={"email"}
                    fullWidth
                />
            </div>
            <FormControleContainer>
                <CustomeFormControle
                    control={
                        <CustomeCheckBox
                            size="small"
                            checkBoxColor={colorObject.btnGreen}
                        />
                    }
                    label="Keep me up to date on news and excluive offers"
                />
            </FormControleContainer>
            <div style={{ marginTop: 109 }}>
                <CustomTypo variant="h5" color={"#1D3178"}>
                    Shipping address
                </CustomTypo>
            </div>
            <RowWrapper>
                <CustgomInput
                    variant="standard"
                    placeholder="First name (optional)"
                    type={"email"}
                    fullWidth
                />
                <CustgomInput
                    variant="standard"
                    placeholder="Last name"
                    type={"email"}
                    fullWidth
                    sx={{ marginLeft: 5 }}
                />
            </RowWrapper>
            <CustgomInput
                variant="standard"
                placeholder="Address"
                type={"email"}
                fullWidth
                sx={{ marginTop: 4 }}
            />
            <CustgomInput
                variant="standard"
                placeholder="Appaetnentment,suit,e.t.c (optinal)"
                type={"email"}
                fullWidth
                sx={{ marginTop: 4 }}
            />
            <CustgomInput
                variant="standard"
                placeholder="City"
                type={"email"}
                fullWidth
                sx={{ marginTop: 4 }}
            />
            <RowWrapper>
                <CustgomInput
                    variant="standard"
                    placeholder="Bangladesh"
                    type={"email"}
                    fullWidth
                />
                <CustgomInput
                    variant="standard"
                    placeholder="Postal Code"
                    type={"email"}
                    fullWidth
                    sx={{ marginLeft: 5 }}
                />
            </RowWrapper>
            <div style={{ marginTop: 117 }}>
                <CustomeBtn>
                    <CustomTypo variant="h6" color={colorObject.white}>
                        Continue Shipping
                    </CustomTypo>
                </CustomeBtn>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled(Container)(({ theme }) => ({
    backgroundColor: "#F8F8FD",
    // marginTop: 10,
    marginBottom: 20,
    padding: 10,
}));

const HeadingContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
}));

const RowWrapper = styled("div")(({ theme }) => ({
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContant: "space-between",
}));
const CustomeFormControle = styled(FormControlLabel)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: "#8A91AB",
    "& .MuiTypography-root ": {
        fontSize: 12,
    },
}));
const CustomeCheckBox = styled(Checkbox)(({ theme, checkBoxColor }) => ({
    "& .MuiSvgIcon-root": { fontSize: 12 },
    "&.Mui-checked": {
        color: checkBoxColor,
    },
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    height: 44,
    width: "30%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    marginBottom: 30,
    cursor: "pointer",
    color: theme.palette.primary.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover": {
        backgroundColor: colorObject.btnHoverGreen,
    },
    [theme.breakpoints.down("md")]: {
        wodth: "100%",
    },
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "600",
}));
const CustomTypo2 = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: color,
    fontWeight: "400",
    // lineHeight:2,
}));
const CustomLink = styled(Link)(({ theme }) => ({
    ontFamily: theme.typography.customFonts.Lato,
    color: "#C1C8E1",
    fontWeight: "400",
    cursor: "pointer",
}));

const CustgomInput = styled(TextField)(({ theme }) => ({
    "&.MuiTextField-root": {
        "& input::placeholder": {
            fontSize: "16px",
            fontWeight: "500",
        },
    },
    fontSize: 16,
}));

const FormControleContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
}));

export default CheckOutForm;
