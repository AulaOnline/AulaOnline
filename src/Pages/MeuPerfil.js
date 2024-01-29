import React from 'react';
import NavbarWidgets from '../Layout/components/NavBarWidgets';
import VideoCard from '../Layout/components/VideoCards/VideoCard';
import { Divider, Grid, Box } from '@mui/material';
import Footer from '../Layout/components/Footer';

function MeuPerfil() {
  return (
    <Grid container>
      <NavbarWidgets name="Aula Online" cor="#017BF7" />

      <Grid container sx={{ minHeight: "calc(100vh - 64px)", paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }} spacing={2}>
        {/* Cards de vídeo */}
        <Grid item xs={12} md={4} lg={4} sx={{}}>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 2"
            imageUrl="/caminho/para/imagem2.jpg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 2"
            imageUrl="/caminho/para/imagem2.jpg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 2"
            imageUrl="/caminho/para/imagem2.jpg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 2"
            imageUrl="/caminho/para/imagem2.jpg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 2"
            imageUrl="/caminho/para/imagem2.jpg"
            duration={15}
            sx={{ backgroundColor: '#017BF7' }}
          />
          </Box>
        </Grid>

        <Grid item xs={12} md={4} lg={4}>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          <VideoCard
            title="Título do Vídeo 2"
            imageUrl="/caminho/para/imagem2.jpg"
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
