import * as React from 'react';
import { Typography, Button, Grid, Box } from "@mui/material";

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
    <Grid container direction="column" spacing={2}>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid item container alignItems="center" spacing={1}>
        <Grid item xs={1}>
          <Button
            variant={selectedOption === 'A' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('A')}
            fullWidth
            sx={{
              borderRadius: 3,
              color: selectedOption === 'A' ? 'white' : '#017BF7',
              backgroundColor: selectedOption === 'A' ? '#017BF7' : 'transparent',
            }}
          >
            A
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ backgroundColor: '#D9D9D9', padding: 1, borderRadius: 3 }}>
            <Typography sx={{ width: '100%', textAlign: 'left' }}>Alternativa com linha maior de texto para fazer teste de flexbox Alternativa com linha maior de texto para fazer teste de flexbox Alternativa com linha maior de texto para fazer teste de flexbox</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" spacing={1}>
        <Grid item xs={1}>
          <Button
            variant={selectedOption === 'B' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('B')}
            fullWidth
            sx={{
              borderRadius: 3,
              color: selectedOption === 'B' ? 'white' : '#017BF7',
              backgroundColor: selectedOption === 'B' ? '#017BF7' : 'transparent',
            }}
          >
            B
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ backgroundColor: '#D9D9D9', padding: 1, borderRadius: 3 }}>
            <Typography sx={{ width: '100%', textAlign: 'left' }}> Alternativa com linha maior de texto para fazer teste de flexbox Alternativa com linha maior de texto para fazer teste de flexbox</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" spacing={1}>
        <Grid item xs={1}>
          <Button
            variant={selectedOption === 'C' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('C')}
            fullWidth
            sx={{
              borderRadius: 3,
              color: selectedOption === 'C' ? 'white' : '#017BF7',
              backgroundColor: selectedOption === 'C' ? '#017BF7' : 'transparent',
            }}
          >
            C
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ backgroundColor: '#D9D9D9', padding: 1, borderRadius: 3 }}>
            <Typography sx={{ width: '100%', textAlign: 'left' }}>  Alternativa com linha maior de texto para fazer teste de flexbox</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item container alignItems="center" spacing={1}>
        <Grid item xs={1}>
          <Button
            variant={selectedOption === 'D' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('D')}
            fullWidth
            sx={{
              borderRadius: 3,
              color: selectedOption === 'D' ? 'white' : '#017BF7',
              backgroundColor: selectedOption === 'D' ? '#017BF7' : 'transparent',
            }}
          >
            D
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ backgroundColor: '#D9D9D9', padding: 1, borderRadius: 3 }}>
            <Typography sx={{ width: '100%', textAlign: 'left' }}>Alternativa</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}