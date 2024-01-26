import * as React from 'react';
import { Typography, Button, Grid } from "@mui/material";

export default function RadioGroupQuestionario() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid item container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Button 
            variant={selectedOption === 'A' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('A')}
            fullWidth
            sx={{
              borderRadius: 16,
              color: selectedOption === 'A' ? 'white' : 'royalblue',
              backgroundColor: selectedOption === 'A' ? 'royalblue' : 'transparent',
            }}
          >
            A
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">Alternativa</Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Button 
            variant={selectedOption === 'B' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('B')}
            fullWidth
            sx={{
              borderRadius: 16,
              color: selectedOption === 'B' ? 'white' : 'royalblue',
              backgroundColor: selectedOption === 'B' ? 'royalblue' : 'transparent',
            }}
          >
            B
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">Alternativa</Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Button 
            variant={selectedOption === 'C' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('C')}
            fullWidth
            sx={{
              borderRadius: 16,
              color: selectedOption === 'C' ? 'white' : 'royalblue',
              backgroundColor: selectedOption === 'C' ? 'royalblue' : 'transparent',
            }}
          >
            C
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">Alternativa</Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" spacing={2}>
        <Grid item xs={2}>
          <Button 
            variant={selectedOption === 'D' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('D')}
            fullWidth
            sx={{
              borderRadius: 16,
              color: selectedOption === 'D' ? 'white' : 'royalblue',
              backgroundColor: selectedOption === 'D' ? 'royalblue' : 'transparent',
            }}
          >
            D
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">Alternativa com linha maior de texto para fazer teste de flexbox </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
