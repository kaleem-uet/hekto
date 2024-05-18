import React from "react";
import ListItems from "../ListItems";
import {
    Box,
    styled,
    Grid,
    Paper,
    Typography,
    Container,
    Button,
    InputBase,
} from "@mui/material";
import Link from "@mui/material/Link";

const footers = [
    {
        title: "Catagories",
        description: ["Team", "History", "Contact us", "Locations"],
    },
    {
        title: "Customer Care",
        description: [
            "Cool stuff",
            "Random feature",
            "Team feature",
            "Developer stuff",
            "Another one",
        ],
    },
    {
        title: "Pages",
        description: [
            "Resource",
            "Resource name",
            "Another resource",
            "Final resource",
        ],
    },
];

const Wrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.shade,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const FooterMainContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    placeItems: "center",
    width: "100%",
    padding: 20,
}));

const CustomTypograpy = styled(Typography)(({ theme }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    // marginLeft: 4,
    fontSize: 38,
    // [theme.breakpoints.down("sm")]: {
    //     display: "none",
    // },
}));

const Search = styled("div")(({ theme }) => ({
    maxHeight: "44px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "0 0 0 5px ",
    width: "100%",
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
    padding: "0px",
    Width: 135,
    Height: "39px",
    borderRadius: "3px",
    fontSize: 12,
    backgroundColor: theme.palette.primary,
    textTransform: "none",
  fontFamily:theme.typography.customFonts.JosefinSans,


}));

const CustomeInput = styled(InputBase)(({ theme }) => ({
    fontSize: 10,
    lineHeight: 19,
    fontFamily: theme.typography.customFonts.Loto,
    "& input::placeholder": {
        fontSize: "14px",
    },
    [theme.breakpoints.down("md")]: {
        "& input::placeholder": {
            fontSize: "16px",
        },
    },
}));

const CustomeGridItem = styled(Grid)(({ theme }) => ({
    "&.MuiGrid-item": {
        paddingLeft: "0px",
        paddingRight: "32px",
    },
}));

const CustomeLink = styled(Link)(({ theme }) => ({
    fontSize: 16,
    fontFamily: theme.typography.customFonts.Loto,
    fontWeight: 400,
}));
function FooterMain() {
    return (
        <Wrapper>
            <FooterMainContainer>
                <Grid
                    container
                    spacing={4}
                    sx={{
                        marginLeft: 0,
                    }}
                >
                    <CustomeGridItem
                        item
                        xs={12}
                        sm={3}
                        sx={{ paddingLeft: 0 }}
                    >
                        <CustomTypograpy variant="h3" gutterBottom>
                            Hekto
                            {/* abc */}
                        </CustomTypograpy>
                        <Search>
                            <CustomeInput
                                type="email"
                                placeholder="Email Address"
                                fullWidth={true}
                                margin="none"
                            />
                            <SubscribeButton size="small" variant="contained">
                                Sign Up
                            </SubscribeButton>
                        </Search>
                        <ul>
                            <li>
                                <Link
                                    sx={{
                                        fontSize: 16,
                                        fontFamily: "Lato",
                                        fontWeight: 400,
                                    }}
                                    href="#"
                                    variant="p"
                                    underline="hover"
                                    color="text.secondary"
                                    fontSize={16}
                                >
                                    contact info
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    variant="p"
                                    sx={{
                                        fontSize: 16,
                                        fontFamily: "Lato",
                                        fontWeight: 400,
                                    }}
                                    underline="hover"
                                    color="text.secondary"
                                    fontSize={16}
                                >
                                    17 Princess Road, London, Greater London NW1
                                    8JR, UK
                                </Link>
                            </li>
                        </ul>
                    </CustomeGridItem>
                    {footers.map((footer) => (
                        <CustomeGridItem
                            p={0}
                            item
                            xs={12}
                            sm={3}
                            key={footer.title}
                        >
                            <CustomTypograpy variant="h3" gutterBottom>
                                {footer.title}
                            </CustomTypograpy>
                            <ul>
                                {footer.description.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            variant="p"
                                            sx={{
                                                fontSize: 16,
                                                fontFamily: "Lato",
                                                fontWeight: 400,
                                                //  lineHeight: 19,
                                            }}
                                            underline="hover"
                                            color="text.secondary"
                                            fontSize={16}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </CustomeGridItem>
                    ))}
                </Grid>
            </FooterMainContainer>
        </Wrapper>
    );
}

export default FooterMain;
