import React from 'react';
import NavbarWidgets from '../Layout/components/NavBarWidgets';
import VideoCard from '../Layout/components/VideoCards/VideoCard';
import { Divider, Box } from '@mui/material';


function MeuPerfil() {
  return (
    <div className="main">
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
    </div>
  );
}

export default MeuPerfil;
