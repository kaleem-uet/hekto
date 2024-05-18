import React from 'react'
import { Typography, Grid, Rating, IconButton,styled } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { colorObject } from '../../Theme/customColors';

function Listing() {
  return (
    <ListingWrapper>
    <Ttile variant='h2'>Playwood arm chair</Ttile>
    <RatingContainer>
        <Rating
            name="read-only"
            value={5}
            readOnly
            sx={{
                fontSize:18,
            }}
        />
        <CustomeTypo variant='h6' color={'#0D134E'}>(20)</CustomeTypo>
    </RatingContainer>
    <PriceContainer>
        <CustomeTypo variant='h5' color={colorObject.navyBlue}>$32.00</CustomeTypo>
        <CustomeTypo variant='h5' color={colorObject.primary}>
            <del>$32.00</del>
        </CustomeTypo>
    </PriceContainer>
    <CustomeTypo variant='h5' color={"#0D134E"}>Color</CustomeTypo>
    <div style={{ width: "auto" }}>
        <CustomeTypo variant='h5' color={"#A9ACC6"}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Mauris tellus porttitor
            purus, et volutpat sit.
        </CustomeTypo>
    </div>
    <AddToCartContainer>
        <CustomeTypo  variant='h5' color={colorObject.navyBlue}  sx={{cursor:'pointer'}}>
            Add To cart
        </CustomeTypo>
        <IconButton sx={{backgroundColor:"#FFF",boxShadow: `0px 8px 40px rgba(49, 32, 138, 0.05)`}}>
            <FavoriteBorderIcon sx={{ color:"#535399",}}/>
        </IconButton>
    </AddToCartContainer>
    <div>
        <CustomeTypo variant="h5" color={colorObject.navyBlue}>
            Categories:
        </CustomeTypo>
    </div>
    <div>
    <CustomeTypo variant="h5" color={colorObject.navyBlue}>
    Tags        
    </CustomeTypo>
    
    </div>
    <AvatarContainer>
        <CustomeTypo variant='h5' color={colorObject.navyBlue}>Share</CustomeTypo>
        <Stack direction="row" spacing={1}>
            <CustomAvatar
                color={colorObject.navyBlue}
            >
             <FacebookRoundedIcon sx={{fontSize:"12px"}}/>
            </CustomAvatar>
            <CustomAvatar
               color={colorObject.primary}
            >
              <InstagramIcon sx={{fontSize:"12px"}}/>
                
            </CustomAvatar>
            <CustomAvatar
                color={colorObject.navyBlue}    
            >
                <TwitterIcon sx={{fontSize:"12px"}}/>
            </CustomAvatar>
           
        </Stack>
    </AvatarContainer>
</ListingWrapper>
  )
}

const ListingWrapper=styled("div")(({theme})=>({
    display: "flex",
    flexDirection: "column",
    marginTop:16

}))

const Ttile=styled(Typography)(({theme})=>({
    color:"#0D134E",
    fontFamily: theme.typography.customFonts.JosefinSans,
   fontWeight:"600",
   
}))
const RatingContainer=styled('div')(({theme})=>({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}))
const CustomeTypo=styled(Typography)(({theme,color})=>({
    color:color,
    fontFamily: theme.typography.customFonts.JosefinSans,
    lineHeight:2,
    [theme.breakpoints.down('md')]:{
        width:"70%",
    }
}))
const CustomAvatar=styled(Avatar)(({theme,color})=>({
   backgroundColor:color,
    width:20,
    height:20
}))

const AddToCartContainer=styled('div')(({theme})=>({
    marginLeft: 30,
    display: "flex",
    flexDirection: "row",
    width: "35%",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]:{
       width: "60%",
          
    }
}))
const AvatarContainer=styled('div')(({theme})=>({

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width:"30%",
    justifyContent:"space-between",
  [theme.breakpoints.down('md')]:{
    width:"50%"
  }
}))
const PriceContainer=styled('div')(({theme})=>({
    display: "flex",
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]:{
        wodth:"100%"
    }
}))
export default Listing