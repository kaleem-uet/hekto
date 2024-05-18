import React from "react";
import Typography from "@mui/material/Typography";
import { OutlinedInput, styled } from "@mui/material";
import { colorObject } from "../../Theme/customColors";

function QuestionCard() {
    return (
        <Wrapper>
            <CustomTypo variant="h5" color="#1D3178">
                Ask a Question
            </CustomTypo>
            <div>
                <CustomInput
                    placeholder="Your Name*"
                    fullWidth
                    color={"primary"}
                />
                <CustomInput
                    placeholder="Subject*"
                    fullWidth
                    color={"primary"}
                />
                <CustomInput
                    placeholder="Type Your Message"
                    multiline={true}
                    minRows={"6"}
                    fullWidth
                    color={"primary"}
                />
                <CustomeBtn>
                    <CustomTypo2 variant="h6" color={colorObject.white}>
                        Send Mail
                    </CustomTypo2>
                </CustomeBtn>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.heroGray,
    width: "auto",
    marginTop: 60,
    display: "flex",
    padding: "20px",
    height: "100%",
    flexDirection: "column",
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "800",
    marginTop: 10,
}));
const CustomTypo2 = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "600",
}));
const CustomInput = styled(OutlinedInput)(({ theme }) => ({
    "&.MuiOutlinedInput-root": {
        marginTop: 30,
        padding: 0,
        borderRadius: 3,
        backgroundColor: "#FFF",
    },
    "& .MuiOutlinedInput-input": {
        padding: 10,
        width: "100%",
        height: "100%",
        fontSize: "16px",
        color: "#9096B2",
        fontWeight: "400",
    },
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    marginTop: 60,
    height: 40,
    width: "30%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("md")]: {
        width: "50%",
    },
}));
export default QuestionCard;
