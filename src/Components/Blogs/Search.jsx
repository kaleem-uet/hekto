import { SectionHeading } from "../../Common/CommonTypo";
import { IconButton, OutlinedInput, styled, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
    return (
        <div>
            <SectionHeading variant="h4">Search</SectionHeading>
            <CustomInput
                placeholder="Search For Posts*"
                fullWidth
                color={"primary"}
                endAdornment={
                    <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                    >
                        <SearchIcon sx={{color:"#BDBDD8"}} />
                    </IconButton>
                }
            />
        </div>
    );
}


const CustomInput = styled(OutlinedInput)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    
    "&.MuiOutlinedInput-root": {
        padding: 0,
        borderRadius: 3,
        borderColor:"#BDBDD8",
    },
    "& .MuiOutlinedInput-input": {
        padding: 10,
        width: "100%",
        height: "100%",
        fontSize: "16px",
        color: "#BDBDD8",
        fontWeight: "400",
    },
}));
export default Search;
