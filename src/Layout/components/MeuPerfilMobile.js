import React from 'react';
import { useState, useEffect } from 'react';
import NavbarWidgets from './NavBarWidgets.js';
import VideoCard from '../features/VideoCards/VideoCard.js';
import { Divider, Grid, Box } from '@mui/material';
import Footer from './Footer.js';
import SearchInput from '../features/SearchInput/Search.js';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { PrivateRoute } from '../features/globalFunctions/privateRoutes.js';
import { ExtrairTkenEretornarID } from '../features/globalFunctions/pegarusername.js';

function MeuPerfil() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  const [videos, setVideos] = useState([])

  function Carregando(loading) {
    setLoading(!loading)
  }

  useEffect(() => {
    ExtrairTkenEretornarID().then(id => {
      if (id) {
        const fetchVideos = async () => {
          try {
            const response = await axios.get(`http://localhost:3001/video/getVideosOfUser/${id}`);
            console.log(response.data);
            setVideos(response.data.data)
          }
          catch{
            setVideos([])
          }
        };
        fetchVideos();
      }
    }).catch(error => {
      console.error('Erro ao extrair o ID do usuário:', error);
    });
  }, []);

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
            {/* <Grid item xs={12} md={4} lg={4} sx={{}}>
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
            </Grid> */}

            {videos.map(video => (
              <Grid item xs={12} md={4} lg={4}>
                <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                  <VideoCard key={video.video_id} title={video.title} link={video.video_link} />
                </Box>
              </Grid>
            ))}

          </Grid>
        )
        }
        <Footer cor={'#017bf7'} />
      </Grid>
    </>
  )
}

export default MeuPerfil;
