import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Button, Grid } from '@mui/material';
import Footer from './Footer.js';
import SearchInput from '../features/SearchInput/Search.js';
import { useNavigate } from 'react-router';
import { PrivateRoute } from '../features/globalFunctions/privateRoutes.js';
import { Section } from '../features/globalFunctions/background.js';
import { blue } from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Link } from 'react-router-dom';
import VideoCard from '../features/VideoCards/VideoCard.js';
import { ExtrairTkenEretornarID } from '../features/globalFunctions/pegarusername.js'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../App'

const drawerWidth = 240;

export default function MeuPerfilPC() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);
  const [videos, setVideos] = useState([])

  function Carregando(loading) {
    setLoading(!loading);
  }

  useEffect(() => {
    ExtrairTkenEretornarID().then(id => {
      if (id) {
        const fetchVideos = async () => {
          try {
            const response = await axios.get(`${URL}/video/getVideosOfUser/${id}`);
            console.log(response.data);
            setVideos(response.data.data)
          }
          catch (error){
            console.log(error.response.data)
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
      {loading &&
        <PrivateRoute Carregando={Carregando} loading={loading} />
      }
      {!loading && (
        <Box sx={{ display: 'flex'}}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: blue['800']}}
          >
            <Toolbar>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: blue['800'],
              },
            }}
            variant="permanent"
            anchor="left"
          >
              <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography variant="h6" noWrap component="div" sx={{ color: "white" }}>
                      Aula Online
                  </Typography>
              </Toolbar>
            <Divider />
            <List>
              <ListItem component={Link} to="/" onClick={() => navigate('/')} button key="Home">
                <ListItemIcon>
                  <HomeIcon sx={{ color: '#f9f9f9' }} />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ color: '#f9f9f9' }} />
              </ListItem>
              <ListItem component={Link} to="/Input" onClick={() => navigate('/Chatbot')} button key="Chatbot">
                <ListItemIcon>
                  <AddCircleOutlineIcon sx={{ color: '#f9f9f9' }} />
                </ListItemIcon>
                <ListItemText primary="Adicionar vídeo" sx={{ color: '#f9f9f9' }} />
              </ListItem>
              <ListItem component={Link} to="/MeuPerfil" onClick={() => navigate('/MeuPerfil')} button key="Meu Perfil">
                <ListItemIcon>
                  <AccountCircleIcon sx={{ color: '#f9f9f9' }} />
                </ListItemIcon>
                <ListItemText primary="Meu Perfil" sx={{ color: '#f9f9f9' }} />
              </ListItem>
              <Divider />
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1}}
          >
            <Section>
              <Grid container sx={{ minHeight: "calc(110vh - 64px)"}}>
                {/* Isto é um comentário em JSX
                {loading &&
                  <PrivateRoute Carregando={Carregando} loading={loading} />
                }
                {!loading && (
                  <SearchInput />
                )}
                */}
                <Grid container md={12} alignItems={'center'} justifyContent={'center'}>
                  <Grid item xs={12} md={3}>
                    <Button variant='contained' color='primary' fullWidth={true} sx={{height:"5vh"}} onClick={() => navigate('/Input')}>adicionar vídeo</Button>
                  </Grid>
                </Grid>
                <Grid container>
                  {videos.map(video => (
                      <Grid item xs={12} md={4} lg={4}>
                        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                          <VideoCard key={video.video_id} title={video.title} link={video.video_link} />
                        </Box>
                      </Grid>
                  ))}
                </Grid>
            </Grid>
            <Footer sx={{ width: '100%' }} cor={'#017bf7'} />
          </Section>
        </Box>
        </Box >
      )
}
    </>
  );
}
