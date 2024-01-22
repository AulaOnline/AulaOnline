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
            <Grid container spacing={2} sx={{ border: '1px solid red', height: "calc(100vh)", display: 'flex' }}>
                <Grid item md={3} sx={{ border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="contained">Contained</Button>
                </Grid>
                <Grid item md={3} sx={{ border: '1px solid #000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant="contained">Contained</Button>
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