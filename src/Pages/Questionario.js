import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Typography, Paper } from '@mui/material';

const steps = ['Questão 1', 'Questão 2', 'Questão 3', 'Questão 4'];

const Questionnaire = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h6">{steps[activeStep]}</Typography>
        <div style={{ margin: '20px 0' }}>
          <Button disabled={activeStep === 0} onClick={handleBack} style={{ marginRight: '10px' }}>
            Voltar
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            {activeStep === steps.length - 1 ? 'Finalizar' : 'Próxima'}
          </Button>
        </div>
        <div>
          {['A', 'B', 'C', 'D'].map((option) => (
            <Button
              key={option}
              variant={selectedOption === option ? 'contained' : 'outlined'}
              onClick={() => handleOptionSelect(option)}
              style={{ marginRight: '10px', marginBottom: '10px' }}
            >
              {option}
            </Button>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Questionnaire;
