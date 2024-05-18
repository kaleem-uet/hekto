import React from 'react'
import {

    OutlinedInput,
    Rating,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import StarIcon from "@mui/icons-material/Star";
import SearchIcon from "@mui/icons-material/Search";
function ShopLeftSideBar() {
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
    }}>
 <div>
                <HeaderTitle variant="h5">Product Brand</HeaderTitle>
                <FormGroup>
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#603EFF"}/>}
                        label="Coaster Furniture"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#603EFF"}/>}
                        label="Fusion Dot High Fashion"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#603EFF"}/>}
                        label="Unique Furnitture Restor"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#603EFF"}/>}
                        label="Dream Furnitture Flipping"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#603EFF"}/>}
                        label="Young Repurposed"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#603EFF"} />}
                        label="Green DIY furniture"
                    />
                </FormGroup>
            </div>
            <div style={{ marginTop: 20 }}>
                <HeaderTitle variant="h5">Discount Offer</HeaderTitle>
                <FormGroup>
                    <CustomeLabel
                        control={<CustomeCheckBox  checkBoxColor={"#FF3EB2"}/>}
                        label="20% Cashback"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox  checkBoxColor={"#FF3EB2"}/>}
                        label="5% Cashback Offer"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox  checkBoxColor={"#FF3EB2"}/>}
                        label="25% Discount Offer"
                    />
                </FormGroup>
            </div>
            <div style={{ marginTop: 20 }}>
                <HeaderTitle variant="h5">Rating Item</HeaderTitle>
                <FormGroup>
                     <CustomeLabel
                        control={<CustomeCheckBox  checkBoxColor={"#FFC107"}/>}
                        label={<Rating name="read-only" value={5} readOnly />}
                    />
                    
                    <CustomeLabel
                        control={<CustomeCheckBox  checkBoxColor={"#FFC107"}/>}
                        label={<Rating name="read-only" value={4} readOnly />}
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#FFC107"}/>}
                        label={<Rating name="read-only" value={3} readOnly />}
                    />
                   
                </FormGroup>
            </div>
            <div style={{ marginTop: 20 }}>
                <HeaderTitle variant="h5">Categories</HeaderTitle>
                <FormGroup>
                    <CustomeLabel
                        control={<CustomeCheckBox  checkBoxColor={"#FF3EB2"}/>}
                        label="20% Cashback"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#FF3EB2"}/>}
                        label="5% Cashback Offer"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#FF3EB2"} />}
                        label="25% Discount Offer"
                    />
                </FormGroup>
            </div>
            <div style={{ marginTop: 20 }}>
                <HeaderTitle variant="h5">Price Filter</HeaderTitle>
                <FormGroup>
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#FF3EB2"} />}
                        label="$0.00 - $150.00"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox  checkBoxColor={"#FF3EB2"} />}
                        label="$150.00 - $350.00"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#FF3EB2"} />}
                        label="$150.00 - $504.00"
                    />
                    <CustomeLabel
                        control={<CustomeCheckBox checkBoxColor={"#FF3EB2"} />}
                        label="$450.00 +"
                    />

                    <SearchBox>
                        <CustomTextField
                            variant="standard"
                            placeholder="$10.00 - 20000$"
                        />
                        <SearchIcon
                            fontSize="small"
                            sx={{
                                color: "#BCBDDB",
                            }}
                        />
                    </SearchBox>
                </FormGroup>
            </div>
            <div style={{ marginTop: 20 }}>
                <HeaderTitle variant="h5">Filter By Color</HeaderTitle>
                <ColorWrapper>
                    <ColorInnerWrapper>
                        <ColorCircle color={"#5E37FF"} />
                        <DesTypo>Blue</DesTypo>
                    </ColorInnerWrapper>

                    <ColorInnerWrapper>
                        <ColorCircle color={"#FF9437"} />
                        <DesTypo>Brown</DesTypo>
                    </ColorInnerWrapper>

                    <ColorInnerWrapper>
                        <ColorCircle color={"#FFBF95"} />
                        <DesTypo>Orange</DesTypo>
                    </ColorInnerWrapper>
                </ColorWrapper>
                <ColorWrapper>
                    <ColorInnerWrapper>
                        <ColorCircle color={"#33D221"} />
                        <DesTypo>Green</DesTypo>
                    </ColorInnerWrapper>

                    <ColorInnerWrapper>
                        <ColorCircle color={"#E248FF"} />
                        <DesTypo>Purple</DesTypo>
                    </ColorInnerWrapper>

                    <ColorInnerWrapper>
                        <ColorCircle color={"#26CBFF"} />
                        <DesTypo>Sky</DesTypo>
                    </ColorInnerWrapper>
                </ColorWrapper>
            </div>

    </div>
  )
}
const HeaderTitle = styled(Typography)(({ theme }) => ({
    color: "#151875",
    fontWeight: "400",
    lineHeight: 2,
    textDecoration: "underLine",
    fontFamily: theme.typography.customFonts.JosefinSans,
}));

const CustomeLabel = styled(FormControlLabel)(({ theme }) => ({
    color: "#7E81A2",
    "& .MuiTypography-root": {
        fontSize: 12,
    },
}));

const CustomeCheckBox = styled(Checkbox)(({ theme,checkBoxColor }) => ({
    color: "#E5E0FC",

    "& .MuiSvgIcon-root": { fontSize: 18 },
    "&.Mui-checked": {
        color: checkBoxColor,
    },
}));
const SearchBox = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#BCBDDB",
    width: "90%",
    borderWidth: 1,
    [theme.breakpoints.down("custom_sm")]: {
        display: "none",
    },
}));

const CustomTextField = styled(TextField)(({ theme }) => ({
    width: "90%",
    "& input::placeholder": {
        fontSize: "14px",
    },
    borderColor: "#BCBDDB",
    "& .MuiInputBase-input": {
        padding: "2px",
        borderWidth: 0,
    },
}));

const ColorWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
}));

const ColorCircle = styled("div")(({ theme, color }) => ({
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: color,
}));

const DesTypo = styled(Typography)(({ theme }) => ({
    marginLeft: 4,
}));

const ColorInnerWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));

export default ShopLeftSideBar