import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem, Button, ButtonGroup, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HistoryIcon from '@mui/icons-material/History';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,

      }),
      marginLeft: 0,
    }),
  }),
);

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function PersistentDrawerLeft({ open, handleDrawerClose }) {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
       
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
    
          <ListItem key='Meu Histórico' disablePadding>
            <ListItemButton >
              <ListItemIcon>
               <HistoryIcon/>
              </ListItemIcon>
              <ListItemText primary='Meu Histórico' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Minhas Anotações' disablePadding>
            <ListItemButton >
              <ListItemIcon>
               
                <NoteAddIcon/>
              </ListItemIcon>
              <ListItemText primary='Minhas Anotações' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Questionários Finalizados' disablePadding>
            <ListItemButton >
              <ListItemIcon>
             
                <PlaylistAddCheckIcon/>
              </ListItemIcon>
              <ListItemText primary='Questionários Finalizados' />
            </ListItemButton>
          </ListItem>
    
      </List>
    </Drawer>
  );
}

const Navbar = ({ name, cor }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setDrawerOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const isSmallScreen = useMediaQuery('(max-width: 420px)');

  return (
    <div>
      <StyledAppBar position="sticky" open={drawerOpen}>
        <Toolbar sx={{ paddingRight: '5px', bgcolor: cor }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {/* Deixei vazio para não mostrar itens no Menu */}
          </Menu>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
          {!isSmallScreen && (
            <ButtonGroup variant="text" aria-label="text button group" sx={{ padding: '20px' }}>
              <Button style={{ color: 'white', borderRight: 'transparent', paddingRight: '8px' }}>Login</Button>
              <Button style={{ color: 'white', borderRight: 'transparent', paddingRight: '8px' }}>Chatbot</Button>
              <Button style={{ color: 'white', borderRight: 'transparent', paddingRight: '8px' }}>Meu Perfil</Button>
              <Button style={{ color: 'white' }}>Sobre</Button>
            </ButtonGroup>
          )}
        </Toolbar>
      </StyledAppBar>

      {/* Renderiza o conteúdo do Sidebar quando o MenuIcon é clicado */}
      {drawerOpen && <PersistentDrawerLeft open={drawerOpen} handleDrawerClose={handleDrawerClose} />}
    </div>
  );
};

export default Navbar;
