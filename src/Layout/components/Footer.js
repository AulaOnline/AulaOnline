import { Grid, Icon, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer({cor}) {

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank'); // Open Facebook in a new tab
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank'); // Open Instagram in a new tab
  };



  return (
  
    <Grid container sx={{ justifyContent: 'center', bgcolor:cor, padding: '10px' }}>
      <Grid item sx={{ marginX: '40px' }}>
        <IconButton onClick={handleFacebookClick} >
        <FacebookIcon />
        </IconButton>
      </Grid>
      
      <Grid item sx={{ marginX: '40px' }}>
        <IconButton onClick={handleInstagramClick} >

        <InstagramIcon  />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Footer;
