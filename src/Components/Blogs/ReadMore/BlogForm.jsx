import { IconButton, OutlinedInput, styled, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
function BlogForm() {
    return (
        <div style={{ marginTop: 20 }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <CustomInput
                    placeholder="Your Name*"
                    fullWidth
                    color={"primary"}
                    startAdornment={
                        <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                        >
                            <PersonIcon sx={{ color: "#8A8FB9" }} />
                        </IconButton>
                    }
                />
                <CustomInput
                    placeholder="Write Your Email*"
                    fullWidth
                    color={"primary"}
                    startAdornment={
                        <IconButton
                            type="button"
                            sx={{ p: "10px" }}
                            aria-label="search"
                        >
                            <EmailIcon sx={{ color: "#8A8FB9" }} />
                        </IconButton>
                    }
                    sx={{ ml: 5 }}
                />
            </div>

            <CustomInput
                placeholder="Write your comment*"
                fullWidth
                color={"primary"}
                multiline={true}
                minRows={5}
                // startAdornment={
                //     <IconButton
                //         type="button"
                //         sx={{ p: "10px" }}
                //         aria-label="search"
                //     >
                //         <ChatBubbleIcon sx={{ color: "#8A8FB9" }} />
                //     </IconButton>
                // }
            />
            <div style={{ marginTop: 20 }}>
                <CustomeBtn>
                    <CustomTypo variant="h6" color={"#FFFF"}>
                        Continue Shipping
                    </CustomTypo>
                </CustomeBtn>
            </div>
        </div>
    );
}
const CustomInput = styled(OutlinedInput)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#8A8FB9",
    marginTop: 20,
    "&.MuiOutlinedInput-root": {
        padding: 0,
    },
    "& .MuiOutlinedInput-input": {
        padding: 10,
        width: "100%",
        placeholder: "#8A8FB9",
        height: "100%",
        fontSize: "16px",
        color: "#8A8FB9",
        fontWeight: "400",
    },
}));
const CustomeBtn = styled("div")(({ theme }) => ({
    marginTop: 30,
    height: 40,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: 2,
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },
   
}));
const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "400",
    lineHeight: 2,
}));

export default BlogForm;
