import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Divider,
  Menu,
  MenuItem,
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import HomeIcon from '@mui/icons-material/Home';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { Link, useNavigate } from 'react-router-dom';

const NavbarWidgets = ({ name, cor }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = useState(null);
  const navigate = useNavigate();

  const navigateTo = (rota) => {
    navigate(`${rota}`);
    setDrawerOpen(false);
  };

  const handleAccountMenuClick = (event) => {
    setAccountMenuAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountMenuAnchorEl(null);
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

            </div>
          )}
          <IconButton
            size="large"
            style={{ marginLeft: 'auto', color: 'black' }}
            onClick={handleAccountMenuClick}
          >
            <AccountCircleIcon fontSize='large'/>
          </IconButton>

          <Menu
            anchorEl={accountMenuAnchorEl}
            id="account-menu-widgets"
            open={Boolean(accountMenuAnchorEl)}
            onClose={handleAccountMenuClose}
          >
            <MenuItem onClick={() => navigateTo('/')}>Login</MenuItem>
            <MenuItem onClick={() => navigateTo('/MeuPerfil')}>Meu Perfil</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem component={Link} to="/" onClick={() => navigateTo('/')} button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component={Link} to="/Input" onClick={() => navigateTo('/Chatbot')} button key="Chatbot">
            <ListItemIcon>
              <AddCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText primary="Adicionar vídeo" />
          </ListItem>
          <ListItem component={Link} to="/MeuPerfil" onClick={() => navigateTo('/MeuPerfil')} button key="Meu Perfil">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Meu Perfil" />
          </ListItem>
          <Divider />
          <ListItem button key="Meu Histórico" onClick={() => navigateTo('/historico')}>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="Meu Histórico" />
          </ListItem>
          <ListItem button key="Questionário" onClick={() => navigateTo('/questionario')}>
            <ListItemIcon>
              <PlaylistAddCheckIcon />
            </ListItemIcon>
            <ListItemText primary="Questionário" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NavbarWidgets;
