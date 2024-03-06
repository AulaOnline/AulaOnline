import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useMediaQuery } from '@mui/material';
import MeuPerfilPC from '../Layout/components/MeuPerfilPC';
import MeuPerfilMobile from '../Layout/components/MeuPerfilMobile';

function MeuPerfil() {
  const isSmallScreen = useMediaQuery('(min-width: 700px)');

  return (
    <>
      {isSmallScreen ? <MeuPerfilPC /> : <MeuPerfilMobile/>}
    </>
  )
}

export default MeuPerfil;
