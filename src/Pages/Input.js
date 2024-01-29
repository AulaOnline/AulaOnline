import React from "react";
import Navbar from "../Layout/components/Navbar";
import Footer from "../Layout/components/Footer"
import {Grid, Typography, TextField, Button} from '@mui/material'
import styled from "styled-components";
import '@fontsource/inter';

function Input() {
    return (
        <Grid container>
            <Navbar cor = {'black'}/>
            <Section>
            <Grid container sx={{height: "calc(100vh - 94px)", display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color:'#BFCEDE', paddingBottom:'150px'}}>
                <Grid item md={9} sx={{marginTop:'11%', border: 'solid 1px red', alignItems:'center', justifyContent:'center'}}>
                    <Typography sx={{fontFamily:'Inter,sans-serif', fontWeight: 800}} variant="h1" component="h1">
                        Otimizando O aprendizado
                    </Typography>
                    <Typography sx={{paddingBottom:"70px", fontFamily:'Inter,sans-serif', fontWeight: 800, color:'#BFCEDE'}} variant="h1" component="h1">Ao Nível Máximo...</Typography>
                    <Grid item sx={{display:'flex', alignItems:'row'}}>
                        <TextField sx={{width:'100vh', backgroundColor:'#BFCEDE', boxShadow:'0 2px 4px rgba(0, 0, 0, 0.1)'}}
                                   id="outlined-basic" label="Insira o link da sua aula" variant="filled" />
                        <Button variant="contained" size={"large"} sx={{ width:'5%', borderRadius: '0px'}}>></Button>
                    </Grid>
                </Grid>
            </Grid>
            </Section>
            <Footer cor={'black'}/>
        </Grid>
    )
}

//Estilizacao do background (conteudo perigoso)
const Section = styled.section`
  background:radial-gradient(circle at 1.77% 47.6%, #101824, transparent 100%), radial-gradient(circle at 99.11% 63.1%, #3a7bd5, transparent 100%),
  radial-gradient(circle at 50% 50%, #0a0a0a, #0a0a0a 100%);
  width: 100%;
  background-size: 3000px 3000px;

  animation: identifier 20s ease infinite;

  @keyframes identifier {
    0% {
      background-position: 0% 0%;
    }
    20% {
      background-position: 0% 100%;
    }
    40% {
      background-position: 100% 0%;
    }
    60% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export default Input;
