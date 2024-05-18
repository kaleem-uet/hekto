import { Container } from '@mui/material'
import React from 'react'
import SignUpCard from '../../Common/Auth/SignUpCard'
import CommanHero from '../../Common/HeroCom/CommanHero'
import Services from '../../Components/Services'

function SignUp() {
  return (
    <>
        <CommanHero title={"Register"}/>
       
        <Container sx={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:10}}>
        <SignUpCard/>
      </Container>
      <div style={{marginTop:109}}>
        <Services/>
      </div>  
    </>
  )
}

export default SignUp