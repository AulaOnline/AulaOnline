import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem, Button, ButtonGroup, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ name }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isSmallScreen = useMediaQuery('(max-width: 420px)');

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ paddingRight: '5px', bgcolor: '#2C664D' }}>
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
          <MenuItem component={Link} to="/" onClick={handleClose}>
            Home
          </MenuItem>
          <MenuItem component={Link} to="/Chatbot" onClick={handleClose}>
            Chatbot
          </MenuItem>
          <MenuItem component={Link} to="/copa" onClick={handleClose}>
            Sobre
          </MenuItem>
        </Menu>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        {!isSmallScreen && (
          <ButtonGroup variant="text" aria-label="text button group" sx={{ padding: '20px' }}>
            <Button style={{ color: 'white', borderRight: 'transparent', paddingRight: '8px' }}>Login</Button>
            <Button style={{ color: 'white', borderRight: 'transparent', paddingRight: '8px' }}>Chatbot</Button>
            <Button style={{ color: 'white' }}>Sobre</Button>
          </ButtonGroup>
        )}
        <AccountCircleIcon fontSize="large" style={{ marginLeft: 'auto', color: 'black' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
