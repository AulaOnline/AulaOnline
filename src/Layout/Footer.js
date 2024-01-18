import { Grid } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <Grid container sx={{ justifyContent: 'center', backgroundColor: '#2C664D', padding: '10px' }}>
      <Grid item sx={{ marginX: '40px' }}>
        <FacebookIcon />
      </Grid>
      <Grid item sx={{ marginX: '40px' }}>
        <InstagramIcon />
      </Grid>
    </Grid>
  );
}

export default Footer;
