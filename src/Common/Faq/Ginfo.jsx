import { Typography,styled } from '@mui/material';
import React from 'react'

function Ginfo() {
  return (
    <div style={{marginTop:60}}>
            <CustomTypo variant='h2' color="#1D3178">Generel Information</CustomTypo>
            <div style={{marginTop:20}}>
            <CustomTypo2 variant='h5' color="#1D3178">
             Eu dictumst cum at sed euismood condimentum?
             </CustomTypo2>
             <SubTypo variant='h6' color="#A1ABCC">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
             </SubTypo>
            </div>
            <div style={{marginTop:20}}>
            <CustomTypo2 variant='h5' color="#1D3178">
            Magna bibendum est fermentum eros.
             </CustomTypo2>
             <SubTypo variant='h6' color="#A1ABCC">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
             </SubTypo>
            </div>
            <div style={{marginTop:20}}>
            <CustomTypo2 variant='h5' color="#1D3178">
            Odio muskana hak eris conseekin sceleton?
             </CustomTypo2>
             <SubTypo variant='h6' color="#A1ABCC">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
             </SubTypo>
            </div>
            <div style={{marginTop:20}}>
            <CustomTypo2 variant='h5' color="#1D3178">
            Elit id blandit sabara boi velit gua mara?
             </CustomTypo2>
             <SubTypo variant='h6' color="#A1ABCC">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.
             </SubTypo>
            </div>            
       </div>
    
  )
}

const CustomTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "600",
}));
const CustomTypo2 = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.JosefinSans,
    color: color,
    fontWeight: "600",
    lineHeight: 3,
}));
const SubTypo = styled(Typography)(({ theme, color }) => ({
    fontFamily: theme.typography.customFonts.Lato,
    textAlign: "justify",
    color: color,
}));
export default Ginfo
