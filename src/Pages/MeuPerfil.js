import React from 'react';
import { useState, useEffect } from 'react';
import NavbarWidgets from '../Layout/components/NavBarWidgets';
import VideoCard from '../Layout/features/VideoCards/VideoCard.js';
import { Divider, Grid, Box } from '@mui/material';
import Footer from '../Layout/components/Footer';
import SearchInput from '../Layout/features/SearchInput/Search.js';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { PrivateRoute } from '../Layout/features/globalFunctions/privateRoutes.js';

function MeuPerfil() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  function Carregando(loading) {
    setLoading(!loading)
  }

  return (
    <>
      <Grid container sx={{ bgcolor: "#101824" }}>
        <NavbarWidgets name="Aula Online" cor="#017BF7" />
        {loading &&
          <PrivateRoute Carregando={Carregando} loading={loading} />
        }
        {!loading && (
          <SearchInput />
        )
        }

        {!loading && (
          <Grid container sx={{ minHeight: "calc(100vh - 64px)", paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }} spacing={2}>
            {/* Cards de vídeo */}
            <Grid item xs={12} md={4} lg={4} sx={{}}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                <VideoCard
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                <VideoCard
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                <VideoCard/>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                <VideoCard/>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                <VideoCard/>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} lg={4}>
              <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                <VideoCard/>
              </Box>
            </Grid>
          </Grid>
        )
        }
        <Footer cor={'#017bf7'} />
      </Grid>
    </>
  )
}

export default MeuPerfil;
