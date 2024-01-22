import React from 'react'
import navbar from "../Layout/Navbar";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import {Button, Grid} from "@mui/material";
import {styled} from "styled-components";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';



function Player() {
    return (
        <StyledSection>
            <Grid container spacing={2} sx={{ border: '1px solid red', height: 'calc(71vh)', paddingLeft: '40px', paddingTop: '50px', paddingRight: '0px' }}>
                <Grid item xs={12} md={8.3} sx={{ border: '1px solid #000', display: 'flex', height: "calc(65vh)", justifyContent: 'center', alignItems: 'center' }}>
                    <Button variant="contained">Contained</Button>
                </Grid>
                <Grid item xs={12} md={3.3} sx={{ border: '1px solid #000', display: 'flex', height: "calc(65vh)", justifyContent: 'center', alignItems: 'center', marginLeft: '30px' }}>
                    <Button variant="contained">Contained</Button>
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{ border: '1px solid red', height: 'calc(30vh)', paddingLeft: '40px', paddingRight: '0px' }}>
                <Grid item xs={12} md={12} sx={{ border: '1px solid #000', display: 'flex' }}>
                    <Button variant="contained" sx={{ height: '10%', width: '10%', marginRight: '10px', backgroundColor: '#0CA789' }}>Gerar Questionario</Button>
                    <Button variant="contained" sx={{ height: '10%', width: '10%', backgroundColor: '#968A20' }}>Gerar Resumo</Button>
                </Grid>
            </Grid>

        </StyledSection>
    );
}



const StyledSection = styled.section`
  background-color: #101824;
  background-size: 3000px 3000px;
  
`;

export default Player;