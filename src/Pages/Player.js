import React from 'react'
import Navbar from "../Layout/components/Navbar";
import Footer from "../Layout/components/Footer";
import {Button, Grid} from "@mui/material";
import {styled} from "styled-components";
import Editor from "../Layout/features/Notepad/Editor";
import ReactPlayer from 'react-player/youtube';
import {useLocation} from "react-router-dom";

const StyledSection = styled.section`
  background-color: #101824;
  background-size: 3000px 3000px;
`;

function VideoAndChat(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const linkAula = queryParams.get('linkAula');

    return (
        <Grid container sx={{height: 'calc(90vh)', paddingLeft: '40px', paddingTop: '50px', paddingBottom: '0px' }}>
            <Grid item xs={12} md={8.3} sx={{display: 'flex', height: "calc(65vh)", justifyContent: 'center', alignItems: 'center' }}>
                    <ReactPlayer url={linkAula}
                             width='100%'
                             height='100%'
                             controls={true}
                />)
            </Grid>
            <Grid item xs={12} md={3.5} sx={{ height: "calc(60vh)", marginLeft:'20px'}}>
                <Editor/>
            </Grid>
            <Button variant="contained" sx={{ height: '5%', width: '10%', marginRight: '30px', backgroundColor: '#0CA789'}}>Gerar Questionario</Button>
            <Button variant="contained" sx={{ height: '5%', width: '10%', backgroundColor: '#9a8c1c' }}>Gerar Resumo</Button>
        </Grid>
    )
}


function Player() {
    return (
        <StyledSection>
            <Navbar/>
            <VideoAndChat/>
            <Footer cor={'#017BF7'}/>
        </StyledSection>
    );
}



export default Player;