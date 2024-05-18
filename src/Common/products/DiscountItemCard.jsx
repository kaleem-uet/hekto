import { Button, Typography, Grid ,Link,styled,Box,Container} from "@mui/material";
import React from "react";
import discount from "../../assets/img/discount.png";
import DoneIcon from '@mui/icons-material/Done';
function DiscountItemCard({title,name,desc,image}) {
  return (
    <Container>
    <Grid
        container
        spacing={0}
        sx={{ justifyContent: "center", alignItems: "center" }}>
        <Grid item xs={6} md={8}>
            <BannerTitle variant="h2">
            {title}
            </BannerTitle>
           
            <ContantContiner>
                <CustomeTypo variant="h4">
                {name}
                </CustomeTypo>
            </ContantContiner>
            <ContantContiner>
                <DescTypo variant="h6">
                 {desc}
                </DescTypo>
            </ContantContiner>
              <DescContainer >
                  <DescListContainer >
                  <DoneIcon  sx={{
                    color:"#7569B2"
                  }}/>
                  <DescTypo variant="h6">
                     Material expose like metals
                     </DescTypo>
                  </DescListContainer>
                  <DescListContainer>
                  <DoneIcon  sx={{
                    color:"#7569B2"
                  }}/>
                  <DescTypo variant="h6">
                     Material expose like metals
                     </DescTypo>
                  </DescListContainer>                          
              </DescContainer>
              <DescContainer >
                  <DescListContainer>
                  <DoneIcon  sx={{
                    color:"#7569B2"
                  }}/>
                  <DescTypo variant="h6">
                     Material expose like metals
                     </DescTypo>
                  </DescListContainer>
                  <DescListContainer>
                  <DoneIcon  sx={{
                    color:"#7569B2"
                  }}/>
                  <DescTypo variant="h6">
                     Material expose like metals
                     </DescTypo>
                  </DescListContainer>                          
              </DescContainer>
            <HeroShopButton>Shop Now</HeroShopButton>
            <BtnContainer></BtnContainer>
        </Grid>
        <Grid item xs={12} md={4}>
            <BgImage>
                <img
                    src={discount}
                    style={{
                        width:"100%",
                        height:"100%"
                    }}
                    position="absolute"
                />
            </BgImage>
        </Grid>
    </Grid>
</Container>
  )
}
const BannerTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.navyBlue,
    fontFamily: theme.typography.customFonts.JosefinSans,
    fontWeight: "600",
    letterSpacing: "0.015em",
}));


const ContantContiner = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("md")]:{
        width:"100%"
    }
}));

const DescContainer =styled('div')(({theme})=>({
    display:"flex", 
    alignItems:"center",
    flexDirection:"row",
    width:"80%", 
    justifyContent:"space-between",
    [theme.breakpoints.down('md')]:{
        width:"100%"
    }
}))
const DescTypo = styled(Typography)(({ theme }) => ({
    color: "#ACABC3",
    fontWeight: "400",
    fontFamily: theme.typography.customFonts.Lato,
}));
const DescListContainer=styled('div')(({theme})=>({
    display:"flex",
     alignItems:"center",
      flexDirection:"center"
}))
const CustomeTypo = styled(Typography)(({ theme }) => ({ 
    color:theme.palette.primary.main,
    lineHeight:3,
    fontWeight: "500",
    fontFamily: theme.typography.customFonts.JosefinSans,
}));
const HeroShopButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.white,
    backgroundColor: theme.palette.primary.main,
    fontFamily: theme.typography.customFonts.JosefinSans,
    borderRadius: 2,
    width: 130,
    height: 40,
    marginTop: 20,
    padding: 10,
    textTransform: "none",

    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.secondary.white,
    },
    [theme.breakpoints.down('md')]:{
        marginBottom:"10px"
    }
}));
const BtnContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}));
const BgImage = styled("div")(({ theme }) => ({
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
     backgroundColor:"#FCECF1",
    // backgroundImage: `url(${bg})`,
    width: "300px",
    height: "300px",
    borderRadius:"50%",
    [theme.breakpoints.down('md')]: {
        width: "auto",
    height: "auto",
      }
}));


export default DiscountItemCard