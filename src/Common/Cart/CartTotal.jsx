import { colorObject } from "../../Theme/customColors";
import {
    Divider,
    Typography,
    styled,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import React from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CartTotal() {
    return (
        <CardWrapper>
            <RowWrapper>
                <CustomTypo variant="h4" color={"#1D3178"}>
                    Subtotals:
                </CustomTypo>
                <CustomTypo variant="h4" color={"#1D3178"}>
                    ‎£219.00
                </CustomTypo>
            </RowWrapper>
            <Divider sx={{ color: "#E8E6F1", lineHeight: 1 }} />
            <div style={{ marginTop: 20 }}>
                <RowWrapper>
                    <CustomTypo variant="h4" color={"#1D3178"}>
                        Totals:
                    </CustomTypo>
                    <CustomTypo variant="h4" color={"#1D3178"}>
                        ‎£325.00
                    </CustomTypo>
                </RowWrapper>
                <Divider sx={{ color: "#E8E6F1", lineHeight: 1 }} />
            </div>
            <FormControleWrapper>
                <CustomeFormControle control={
                        <CustomeCheckBox
                            size="small"
                            checkBoxColor={colorObject.btnGreen}/>}
                           label="Shipping & taxes calculated at checkout"/>
            </FormControleWrapper>
            <div style={{ padding: 10 }}>
                <CustomeBtn>
                    <CustomTypo2 variant="h5" color={colorObject.white}>
                        Proceed To Checkout
                    </CustomTypo2>
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
    [theme.breakpoints.down("md")]: {
        width: "auto",
    },
}));
const RowWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
}));
const FormControleWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    padding: 10,
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: color,
    fontWeight: "500",
    // lineHeight:2,
}));
const CustomTypo2 = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: color,
    fontWeight: "700",
}));
const CustomeFormControle = styled(FormControlLabel)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    color: "#8A91AB",
    "& .MuiTypography-root ": {
        fontSize: 10,
    },
}));
const CustomeCheckBox = styled(Checkbox)(({ theme, checkBoxColor }) => ({
    "& .MuiSvgIcon-root": { fontSize: 10 },
    "&.Mui-checked": {
        color: checkBoxColor,
    },
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    height: 40,
    width: "100%",
    backgroundColor: colorObject.btnGreen,
    borderRadius: 3,
    cursor: "pointer",
    color: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover": {
        backgroundColor: colorObject.btnHoverGreen,
    },
}));
export default CartTotal;
