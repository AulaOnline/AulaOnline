import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Link, useNavigate } from 'react-router-dom';

const NavbarWidgets = ({ name, cor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (rota) => {
    navigate(`${rota}`);
    setDrawerOpen(false);
  };

  const isSmallScreen = useMediaQuery('(max-width: 420px)');

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ paddingRight: '5px', bgcolor: cor }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          {!isSmallScreen && (
            <div style={{ marginLeft: 'auto' }}>
              {/* Your existing button group */}
            </div>
          )}
          <AccountCircleIcon fontSize="large" style={{ marginLeft: 'auto', color: 'black' }} />
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem component={Link} to="/" onClick={() => navigateTo('/')} button key="Home">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/Input" onClick={() => navigateTo('/Chatbot')} button key="Chatbot">
            <ListItemText primary="Adicionar vídeo" />
          </ListItem>
          <ListItem component={Link} to="/MeuPerfil" onClick={() => navigateTo('/MeuPerfil')} button key="Meu Perfil">
            <ListItemText primary="Meu Perfil" />
          </ListItem>
          <ListItem component={Link} to="/Sobre" onClick={() => navigateTo('/Sobre')} button key="Sobre">
            <ListItemText primary="Sobre" />
          </ListItem>
          <Divider/>
          
          <ListItem button key="Meu Histórico" onClick={() => navigateTo('/historico')}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Meu Histórico" />
          </ListItem>
          <ListItem button key="Minhas Anotações" onClick={() => navigateTo('/anotacoes')}>
            <ListItemIcon>
              <NoteAddIcon />
            </ListItemIcon>
            <ListItemText primary="Minhas Anotações" />
          </ListItem>
          <ListItem button key="Questionários Finalizados" onClick={() => navigateTo('/questionario')}>
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Questionários Finalizados" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavbarWidgets;
