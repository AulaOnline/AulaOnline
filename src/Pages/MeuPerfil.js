import React from 'react';
import NavbarWidgets from '../Layout/components/NavBarWidgets';
import VideoCard from '../Layout/components/VideoCards/VideoCard';
import { Divider, Box, Grid } from '@mui/material';
import Footer from '../Layout/components/Footer';


function MeuPerfil() {
  return (
    <Grid container className='main' sx={{ bgcolor: "#101824", display: "flex", height: "calc(100vh - 64px)" }}>
      <NavbarWidgets name="Aula Online" cor="#017BF7" />

      <div className="content" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        {/*  cards de vídeo */}
        <Box className="cardSelf" sx={{ height: '200px', width: '200px', borderRadius: '8px', overflow: 'hidden' }}>
          <VideoCard title="Título do Vídeo 1" imageUrl="/caminho/para/imagem1.jpg" duration={10} />
        </Box>

        <Divider className='divi' orientation="vertical" flexItem/>
       
        <Box className="cardSelf" sx={{ height: '200px', width: '200px', borderRadius: '8px', overflow: 'hidden', backgroundColor:'#017BF7' }}>
          <VideoCard title="Título do Vídeo 2" imageUrl="/caminho/para/imagem2.jpg" duration={15} />
        </Box>        
        
        <Divider className='divi' orientation="vertical" flexItem/>

        <Box className="cardSelf" sx={{ height: '200px', width: '200px', borderRadius: '8px', overflow: 'hidden', backgroundColor:'#017BF7' }}>
          <VideoCard title="Título do Vídeo 3" imageUrl="/caminho/para/imagem3.jpg" duration={15} />
        </Box>    

        <Divider className='divi' orientation="vertical" flexItem/>
       
        <Box className="cardSelf" sx={{ height: '200px', width: '200px', borderRadius: '8px', overflow: 'hidden', backgroundColor:'#017BF7' }}>
          <VideoCard title="Título do Vídeo 4" imageUrl="/caminho/para/imagem2.jpg" duration={15} />
        </Box>      

        <Divider className='divi' orientation="vertical" flexItem/>
       
        <Box className="cardSelf" sx={{ height: '200px', width: '200px', borderRadius: '8px', overflow: 'hidden', backgroundColor:'#017BF7' }}>
          <VideoCard title="Título do Vídeo 5" imageUrl="/caminho/para/imagem2.jpg" duration={15} />
        </Box>      
        <Divider className='divi' orientation="vertical" flexItem/>
       
        <Box className="cardSelf" sx={{ height: '200px', width: '200px', borderRadius: '8px', overflow: 'hidden', backgroundColor:'#017BF7' }}>
          <VideoCard title="Título do Vídeo 6" imageUrl="/caminho/para/imagem2.jpg" duration={15} />
        </Box>      
      </div>

      <Grid><Footer cor={'#017BF7'} style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#f1f1f1', textAlign: 'center', padding: '10px' }}></Footer></Grid>
    
    </Grid>
  );
}

export default MeuPerfil;