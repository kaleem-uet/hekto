import LoginCard from '../../Common/Auth/LoginCard'
import CommanHero from '../../Common/HeroCom/CommanHero'
import Services from '../../Components/Services'
import { Container } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <>
     <CommanHero title="My Account"/>
      <Container sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:10}}>
        <LoginCard/>
      </Container>
      <div style={{marginTop:109}}>
        <Services/>
      </div>  
    </>
  )
}

export default Login