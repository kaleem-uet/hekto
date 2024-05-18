import Ginfo from "../../Common/Faq/Ginfo";
import QuestionCard from "../../Common/Faq/QuestionCard";
import CommanHero from "../../Common/HeroCom/CommanHero";
import Services from "../../Components/Services";
import { Container, Typography, Grid } from "@mui/material";
import React from "react";
function Faq() {
    return (
        <>
            <CommanHero title="FAQ" />
            <Container >
        
                <Grid container spacing={0} sx={{marginBottom:30}}>
                    <Grid item md={5.5} xl={12}>
                        <Ginfo/>
                    </Grid>
                    <Grid item md={6.5} xl={12}>
                     <QuestionCard/>
                    </Grid>
                </Grid>
                <Services/>
            </Container>
        </>
    );
}

export default Faq;
