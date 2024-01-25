import React from 'react'
import Navbar from "../Layout/components/Navbar";
import Footer from "../Layout/components/Footer";
import {Button, Grid} from "@mui/material";
import {styled} from "styled-components";
import Editor from "../Layout/features/Notepad/Editor";
const StyledSection = styled.section`
  background-color: #101824;
  background-size: 3000px 3000px;
`;
function VideoAndChat(){
    return (
        <Grid container spacing={0} sx={{ border: '1px solid red', height: 'calc(90vh)', paddingLeft: '40px', paddingTop: '50px', paddingBottom: '0px' }}>
            <Grid item xs={12} md={8.3} sx={{ border: '1px solid #000', display: 'flex', height: "calc(65vh)", justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="contained">Video</Button>
            </Grid>
            <Grid item xs={12} md={3.3} sx={{ border: '1px solid #000', display: 'flex', height: "calc(65vh)", justifyContent: 'center', alignItems: 'center', marginLeft: '30px' }}>
                <Button variant="contained">ChatBot</Button>
            </Grid>
            <Button variant="contained" sx={{ height: '5%', width: '10%', marginRight: '30px', backgroundColor: '#0CA789'}}>Gerar Questionario</Button>
            <Button variant="contained" sx={{ height: '5%', width: '10%', backgroundColor: '#9a8c1c' }}>Gerar Resumo</Button>
        </Grid>
    )
}

function Notepad(){
    return (
        <Grid container sx={{border:'1px solid green', marginTop: '20px'}}>
            <Grid item xs={12} md={8} sx={{height: "calc(60vh)", marginLeft:'40px'}}>
                <Editor/>
            </Grid>
        </Grid>
    )
}


function Player() {
    return (
        <StyledSection>
            <Navbar/>
            <VideoAndChat/>
            <Notepad/>
            <Footer cor={'#017BF7'}/>
        </StyledSection>
    );
}



export default Player;