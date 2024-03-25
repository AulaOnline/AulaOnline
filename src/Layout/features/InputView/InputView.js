// InputView.js
import { Button, Grid, TextField, Typography, Snackbar, Alert } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // Importe o arquivo de estilo
import { ExtrairTkenEretornarID } from "../globalFunctions/pegarusername";
import axios from "axios";

function InputView() {
  const [linkAula, SetLinkAula] = useState('');
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleButtonClick = async () => {
    try {
      const id = await ExtrairTkenEretornarID();
      if (id) {
        const response = await axios.post(`http://localhost:3001/video/postNewVideo/${id}`, {
          video_link: linkAula
        });
        console.log('Novo vídeo postado:', response.data);
        // Redirecionar para outra página, se necessário
        navigate(`/Player?linkAula=${encodeURI(linkAula)}`)
      } else {
        console.error('ID do usuário não encontrado');
      }
    } catch (error) {
      setErrorMessage(error.response.data.message)
      setOpenSnackbar(true)
      console.error('Erro ao postar o novo vídeo:', error);
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Grid container>
      <Navbar cor={'black'} />
      <Section className="InputView-container"> {/* Adicione a classe do CSS */}
        <Grid container sx={{ height: "calc(100vh - 94px)", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#BFCEDE', paddingBottom: '150px', paddingTop: '10%' }}>
          <Grid item md={9} className="InputView-content">
            <Typography className="InputView-title" variant="h1" component="h1">
              Otimizando O aprendizado
            </Typography>
            <Typography className="InputView-subtitle" variant="h1" component="h1">
              Ao Nível Máximo...
            </Typography>
            <Grid item className="InputView-inputContainer">
              <TextField className="InputView-input" id="outlined-basic" label="Insira o link da sua aula" variant="filled" onChange={(e) => SetLinkAula(e.target.value)} />
              <Button variant="contained" size={"large"} onClick={handleButtonClick} className="InputView-button">
                &gt;
              </Button>
            </Grid>
          </Grid>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={5000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Snackbar>
        </Grid>
      </Section>
      <Footer cor={'black'} />
    </Grid>
  )
}

const Section = styled.section`
  background: radial-gradient(circle at 1.77% 47.6%, #101824, transparent 100%), radial-gradient(circle at 99.11% 63.1%, #3a7bd5, transparent 100%),
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

export default InputView;
