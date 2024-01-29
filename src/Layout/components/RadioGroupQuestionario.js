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
    <Grid container direction="column" spacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Grid item container alignItems="center" spacing={3}>
        <Grid item xs={1}>
          <Button
            variant={selectedOption === 'A' ? 'contained' : 'outlined'}
            onClick={() => handleOptionClick('A')}
            fullWidth
            sx={{
              borderRadius: 3,
              color: selectedOption === 'A' ? 'white' : '#017BF7',
              backgroundColor: selectedOption === 'A' ? '#017BF7' : 'transparent',
              width: '100%',
              height: '100%',
            }}
          >
            A
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography sx={{ width: '100%', textAlign: 'left', bgcolor: '#D9D9D9', padding: 1, borderRadius: 3 }}>Alternativa com linha maior de texto para fazer teste de flexbox Alternativa com linha maior de texto para fazer teste de flexbox Alternativa com linha maior de texto para fazer teste de flexbox</Typography>
            </Grid>
          </Grid>
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
              width: '100%',
              height: '100%',
            }}
          >
            B
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography sx={{ width: '100%', textAlign: 'left', bgcolor: '#D9D9D9', padding: 1, borderRadius: 3 }}>Alternativa com linha maior de texto para fazer teste de flexbox Alternativa com linha maior de texto para fazer teste de flexbox</Typography>
            </Grid>
          </Grid>
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
              width: '100%',
              height: '100%',
            }}
          >
            C
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography sx={{ width: '100%', textAlign: 'left', bgcolor: '#D9D9D9', padding: 1, borderRadius: 3 }}>Alternativa com linha maior de texto para fazer teste de flexbox</Typography>
            </Grid>
          </Grid>
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
              width: '100%',
              height: '100%',
            }}
          >
            D
          </Button>
        </Grid>
        <Grid item xs={11}>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Typography sx={{ width: '100%', textAlign: 'left', bgcolor: '#D9D9D9', padding: 1, borderRadius: 3 }}>Alternativa</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}