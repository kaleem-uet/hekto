import { Container, Typography, Box, TextField, Grid ,styled} from "@mui/material";
import React, { useState } from "react";
import GridViewSharpIcon from "@mui/icons-material/GridViewSharp";
import ViewListSharpIcon from "@mui/icons-material/ViewListSharp";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
export default function Filter({ setView }) {
    const [age, setAge] = useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <MainContainer>
            <TextContainer>
                <TitleText variant="h6">
                    Ecommerce Acceories & Fashion item{" "}
                </TitleText>
                <SubTitle variant="h6">
                    About 9,620 results (0.62 seconds)
                </SubTitle>
            </TextContainer>
            <FilterContainer>
                <SubTitle variant="h5">
                    Sort By:{" "}
                </SubTitle>{" "}
                <CustomSelect
                    variant={"outlined"}
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={age}
                    onChange={handleChange}
                    sx={{
                        borderColor: "blue",
                    }}
                >
                    <CustomMenuItem value="none" selected>
                       Best Match
                    </CustomMenuItem>
                    <CustomMenuItem value={10} selected></CustomMenuItem>
                    <CustomMenuItem value={20}>Best Match</CustomMenuItem>
                    <CustomMenuItem value={30}>Best Match</CustomMenuItem>
                </CustomSelect>
                <SubTitle variant="h5" sx={{ marginLeft: 2, marginRight: 1 }}>
                    View:
                </SubTitle>
                <IconButton onClick={() => setView(false)}>
                    <GridViewSharpIcon color={""} fontSize={"small"} />
                </IconButton>
                <IconButton onClick={() => setView(true)}>
                    <ViewListSharpIcon fontSize={"small"} />
                </IconButton>
            </FilterContainer>
        </MainContainer>
    );
}

const MainContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    marginTop: 50,
    marginBottom: 50,
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItem: "center",
    },
}));

const TextContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
}));
const TitleText = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    fontSize: 22,
    lineHeight: 1,
    color: "#151875",
}));
const SubTitle = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    fontWeight: "400",
    fontSize: 12,
    color: "#3F509E",
}));
const FilterContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContant: "center",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
    },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
    width: '100%',
    height: 35,
    padding: 2,
    marginLeft:10,
    borderColor: "#E7E6EF",
    color: "#8A8FB9",
    fontSize: 12,
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
}));
const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: 8,
    fontFamily: theme.typography.customFonts.Lato,
    "& .MuiMenuItem-root": {
        fontSize: 12,
        fontFamily: theme.typography.customFonts.Lato,
    },
}));
