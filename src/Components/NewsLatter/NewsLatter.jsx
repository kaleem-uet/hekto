import { styled, Typography,Button } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import Banner from '../../assets/img/banner.png'
export default function NewsLatter() {
  return (
  <Wrapper>
         <BannerContaner banner={Banner}/>
        <BannerContant>
        <BannerTitle variant='h2'> 
                Get Leatest Update By Subscribe
                0ur Newslater
        </BannerTitle>
        <HeroShopButton >Shop Now </HeroShopButton>
        </BannerContant>
  </Wrapper>
  )
}

const Wrapper=styled(Box)(({theme})=>({
   marginTop:70,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
}));
const BannerContaner=styled(Box)(({theme,banner})=>({
    width:"100%",
    height:"300px",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    [theme.breakpoints.down('md')]: {
         height:"200px"
      },
      
}))
const BannerImg= styled('img')(({theme})=>({
     width:"100%",
     height:"400px",
}))

const BannerContant=styled(Box)(({theme})=>({
  display:"flex",
  flexDirection: "column",
  position:"absolute",
  alignItems:"center",
  justifyContent:"center",

}));
const BannerTitle =styled(Typography)(({theme})=>({
  //  alignItems:"center",
  //  justifyContent:"center",
   fontFamily:theme.typography.customFonts.JosefinSans,
   color:"#151875",
   width: 550,
   fontWeight:"400",
   textAlign:"center",
   [theme.breakpoints.down('md')]: {
     width:"auto",
     height:"auto",
 },
}));

const HeroShopButton = styled(Button)(({ theme }) => ({
  marginTop:15,
  color: theme.palette.secondary.white,
  backgroundColor: theme.palette.primary.main,
  borderRadius: 2,
  width: 130,
  height: 40,
  // marginTop: 20,
  padding: 10,
  fontSize:15,
  textTransform: "none",
  fontFamily:theme.typography.customFonts.JosefinSans,
  "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.white,    
  },
 
}));
