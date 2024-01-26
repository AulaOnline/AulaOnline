import React from 'react';
import NavbarWidgets from '../Layout/components/NavBarWidgets';
import VideoCard from '../Layout/components/VideoCards/VideoCard';
import { Divider } from '@mui/material';


function MeuPerfil() {
  return (
    <div className="main">
      <NavbarWidgets name="Aula Online" cor="#017BF7" />
      <div className="content">
        {/*  cards de vídeo */}
        <VideoCard title="Título do Vídeo 1" imageUrl="/caminho/para/imagem1.jpg" duration={10} />
        <Divider/>
        <VideoCard title="Título do Vídeo 2" imageUrl="/caminho/para/imagem2.jpg" duration={15} />
        <Divider/>
      </div>
    </div>
  );
}

export default MeuPerfil;
