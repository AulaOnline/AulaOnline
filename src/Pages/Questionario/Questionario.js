import * as React from 'react';
import Navbar from "../../Layout/components/Navbar";
import { Grid, Paper, Typography, Button } from "@mui/material";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

//gera as questões baseadas na API do GPT
//loop pra trocar as questões no stepper, enviando o index do array de objetos
//radio group pras alternativas seguindo uma logica parecida
const steps = [
    {
        label: 'Questão "X"',
        description: `Texto da questão importada da IA, onde 'X' vai ser o numero da questão.`,
    },
    {
        label: 'Questão "X"',
        description: `Texto da questão importada da IA, onde 'X' vai ser o numero da questão.`,
    },
    {
        label: 'Questão "X"',
        description: `Texto da questão importada da IA, onde 'X' vai ser o numero da questão.`,
    },
];

export default function Questionario() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Grid container>
            <Navbar />
            <Grid container sx={{ display: "flex", height: "calc(100vh - 64px)", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <Paper elevation={5} sx={{ bgcolor: "grey", height: "80%", width: "50%" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>                        <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                        }}
                    >
                        {/* alterar porcentagem pra caber as alternativas */}
                        {/* aprender a mexer no flexbox pra ficar bonito KK */}
                        <Typography sx={{ textAlign: 'center', width: '100%' }}>{steps[activeStep].label}</Typography>                    </Paper>
                        <Box sx={{ height: '100%', maxWidth: '100%', p: 2 }}>
                            <Typography sx={{ textAlign: 'center'}}>{steps[activeStep].description}</Typography> 
                        </Box>
                        <MobileStepper
                            variant="text"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}
