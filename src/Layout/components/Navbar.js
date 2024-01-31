import React from 'react';
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  ButtonGroup,
  Button,
  useMediaQuery,
  Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ name, cor }) => {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);
  const [accountMenuAnchorEl, setAccountMenuAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClick = (event) => {
    setAccountMenuAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchorEl(null);
    setAccountMenuAnchorEl(null);
  };

  const navigate = useNavigate();

  const navigateTo = (rota) => {
    navigate(`${rota}`);
    handleClose();
  };

  const isSmallScreen = useMediaQuery('(max-width: 420px)');

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ paddingRight: '5px', bgcolor: cor }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => navigateTo('/')}>Home</MenuItem>
          <MenuItem onClick={() => navigateTo('/input')}>Adicionar Vídeo</MenuItem>
          <MenuItem onClick={() => navigateTo('/MeuPerfil')}>Meu Perfil</MenuItem>
        </Menu>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        {!isSmallScreen && (
          <ButtonGroup variant="text" aria-label="text button group" sx={{ padding: '20px' }}>
            <Button style={{ color: 'white', borderRight: 'transparent', paddingRight: '8px' }} onClick={() => navigateTo('/')}>Login</Button>
            <Button style={{ color: 'white', borderRight: 'transparent', paddingRight: '8px' }} onClick={() => navigateTo('/input')}>Adicionar Vídeo</Button>
            <Button style={{ color: 'white' ,  borderRight: 'transparent', paddingRight: '8px'}} onClick={() => navigateTo('/MeuPerfil')}>Meu Perfil</Button>
          </ButtonGroup>
        )}
        <IconButton
          size="large"
          style={{ marginLeft: 'auto', color: 'black' }}
          onClick={handleAccountMenuClick}
        >
          <AccountCircleIcon fontSize='large' />
        </IconButton>
        {/* Custom Menu for AccountCircleIcon */}
        <Menu
          anchorEl={accountMenuAnchorEl}
          id="account-menu"
          open={Boolean(accountMenuAnchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => navigateTo('/')}>Login</MenuItem>
          <MenuItem onClick={() => navigateTo('/MeuPerfil')}>Meu Perfil</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
