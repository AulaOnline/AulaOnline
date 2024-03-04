import React from 'react';
import { useState, useEffect } from 'react';
import NavbarWidgets from '../Layout/components/NavBarWidgets';
import VideoCard from '../Layout/features/VideoCards/VideoCard.js';
import { Divider, Grid, Box } from '@mui/material';
import Footer from '../Layout/components/Footer';
import SearchInput from '../Layout/features/SearchInput/Search.js';
import { useNavigate } from 'react-router';
import axios from 'axios';

function MeuPerfil() {

  const navigate = useNavigate();
  const [isValidToken, setIsValidToken] = useState(false);

  useEffect(() => {
    // Verifica se há um token no localStorage
    const token = localStorage.getItem('token');
    console.log('Token:', token);
    if (token) {
        // Faz uma requisição para verificar se o token é válido
        axios.post('http://localhost:3001/login/verificar-token', { token }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log('Resposta da verificação de token:', response.data);
            const { success } = response.data;
            if (success) {
                // Se o token for válido, define isValidToken como true
                setIsValidToken(true);
            } else {
                // Se o token não for válido, redireciona para a página inicial
                navigate('/');
            }
        })
        .catch((error) => {
            console.error('Erro ao verificar o token:', error);
            // Em caso de erro na requisição, redireciona para a página inicial
            navigate('/');
        });
    } else {
        // Se não houver token no localStorage, redireciona para a página inicial
        navigate('/');
    }
}, []); // Executa apenas uma vez, quando o componente é montado

  return (
    <Grid container sx={{bgcolor: "#101824"}}>
      <NavbarWidgets name="Aula Online" cor="#017BF7" />

     <SearchInput/>

      <Grid container sx={{ minHeight: "calc(100vh - 64px)", paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }} spacing={2}>
        {/* Cards de vídeo */}
        <Grid item xs={12} md={4} lg={4} sx={{}}>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 1"
            imageUrl="/video1.jpeg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 2"
            imageUrl="/video2.jpeg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 3"
            imageUrl="/video3.jpeg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 4"
            imageUrl="/video4.jpeg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 5"
            imageUrl="/video5.jpeg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 6"
            imageUrl="/video6.jpeg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>
      </Grid>

      <Footer cor={'#017bf7'} />
    </Grid>
  );
}

export default MeuPerfil;
