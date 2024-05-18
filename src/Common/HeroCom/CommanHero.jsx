import React from 'react'
import {Wrapper} from '../../Common/Wrapper/Wrapper';
import { Typography, Container, styled } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { colorObject } from '../../Theme/customColors';
export default function CommanHero({title}) {
  const location = useLocation();
  const Str=location.pathname.split('/')[1];
   const PageName= Str.charAt(0).toUpperCase() + Str.slice(1);
  return (
    <Wrapper color='#F6F5FF'>
    <Container maxWidth="md" sx={{alignItems:"center",padding:10,}}>
      <CustomeTypo variant='h2'>
         {title}
      </CustomeTypo>
      <div style={{
       display:'flex',
       flexDirection:"row",
       alignItems:"center",
       gap:10
      }}>
      <SubTypo variant='h6' color={"#"}>
        Home / Pages /
      </SubTypo>
       <SubTypo variant='h6' sx={{color:"primary"}} color={colorObject.primary}>
        {PageName}
       </SubTypo>
      </div>

    </Container>
</Wrapper>
  )
}

const CustomeTypo=styled(Typography)(({theme})=>({
    fontFamily:theme.typography.customFonts.JosefinSans,
    fontWeight:"500",
    color:" #101750",

}));

const SubTypo =styled(Typography)(({theme,color})=>({
    fontFamily:theme.typography.customFonts.Lato,
    color:color,

}))