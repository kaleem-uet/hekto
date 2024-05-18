import { colorObject } from "../../Theme/customColors";
import { Typography, styled, Input } from "@mui/material";
import React from "react";

function CalculateShoppingCard() {
    return (
        <CardWrapper>
            <CustomInput
                placeholder="Bangladesh"
                fullWidth
                variant="standard"
                sx={{}}
            />
            <div style={{ marginTop: 20 }}>
                <CustomInput
                    placeholder="Mirpur Dhaka - 1200"
                    fullWidth
                    variant="standard"
                />
            </div>
            <div style={{ marginTop: 20 }}>
                <CustomInput
                    placeholder="Postal Code"
                    fullWidth
                    variant="standard"
                />
            </div>
            <div style={{ marginTop: 40 }}>
                <CustomeBtn>
                    <CustomTypo variant="h5" color={"#FFF"}>
                        Calculate Shiping
                    </CustomTypo>
                </CustomeBtn>
            </div>
        </CardWrapper>
    );
}
const CardWrapper = styled("div")(({ theme }) => ({
    width: "auto",
    height: "284px",
    backgroundColor: "#F4F4FC",
    marginBottom: 10,
    borderRadius: 5,
    padding: 20,
}));

const CustomInput = styled(Input)(({ theme }) => ({
    "& .Mui-focused": {
        borderColor: "red",
    },
    "& input::placeholder": {
        fontSize: "14px",
        color: "#C5CBE3",
    },
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "400",
}));

const CustomeBtn = styled("div")(({ theme }) => ({
    height: 40,
    width: "65%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    cursor: "pointer",
    color: theme.palette.primary.whiteColor,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover": {
        backgroundColor: colorObject.btnHoverGreen,
    },
}));
export default CalculateShoppingCard;
