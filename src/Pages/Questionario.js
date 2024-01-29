import * as React from 'react';
import Navbar from "../Layout/components/Navbar";
import { Grid, Paper, Typography, Button } from "@mui/material";
import { MobileStepper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Questionario() {
    const steps = [
        {
            label: 'Questão 1',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
            options: ['A', 'B', 'C', 'D']
        },
        {
            label: 'Questão 2',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
            options: ['A', 'B', 'C', 'D']
        },
        {
            label: 'Questão 3',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
            options: ['A', 'B', 'C', 'D']
        },
        {
            label: 'Questão 4',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
            options: ['A', 'B', 'C', 'D']
        },
        {
            label: 'Questão 5',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
            options: ['A', 'B', 'C', 'D']
        },
    ];
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const [selectedOption, setSelectedOption] = React.useState(Array(steps.length).fill(null));

    const handleOptionClick = (option, index) => {
        setSelectedOption(prevSelectedOption => {
            const newSelectedOption = [...prevSelectedOption];
            newSelectedOption[index] = option;
            return newSelectedOption;
        });
    };

    return (
        <Grid container>
            <Navbar />
            <Grid container sx={{ bgcolor: "#101824", display: "flex", height: "calc(100vh - 64px)", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <Paper elevation={5} sx={{ borderRadius: 6, bgcolor: "#101818", height: "80%", width: "50%" }}>
                    <Grid container direction="column" alignItems="stretch" sx={{ height: '100%', alignItems: "center" }}>
                        <Grid item container justifyContent="center" sx={{ borderRadius: '32px 32px 0 0', bgcolor: "#017BF7", width: "100%" }}>
                            <Typography sx={{ fontSize: '2rem', textAlign: 'center' }}>{steps[activeStep].label}</Typography>
                        </Grid>
                        <Grid item container sx={{ bgcolor: "#D9D9D9", height: '25%', width: '100%', p: 2 }}>
                            <Typography sx={{ width: '100%', textAlign: 'center', fontSize: '1.4rem' }}>{steps[activeStep].description}</Typography>
                        </Grid>
                        <Grid item container sx={{ display: "flex", bgcolor: "#101818", width: '100%', p: 2 }}>
                            <Grid container direction="column" spacing={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                {steps[activeStep].options.map((option, index) => (
                                    <Grid item container alignItems="center" spacing={3} key={option}>
                                        <Grid item xs={1}>
                                            <Button
                                                variant={selectedOption[activeStep] === option ? 'contained' : 'outlined'}
                                                onClick={() => handleOptionClick(option, activeStep)}
                                                fullWidth
                                                sx={{
                                                    borderRadius: 3,
                                                    color: selectedOption[activeStep] === option ? 'white' : '#017BF7',
                                                    backgroundColor: selectedOption[activeStep] === option ? '#017BF7' : 'transparent',
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            >
                                                {option}
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
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid item container justifyContent="center" sx={{ width: "100%" }}>
                    <MobileStepper
                        sx={{ width: "100%", borderRadius: 16, bgcolor: "#101824" }}
                        variant="text"
                        steps={maxSteps}
                        position="static"
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                variant="contained"
                                sx={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                bgcolor="#017BF7"
                                size="large"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                {theme.direction === 'rtl' ? (
                                    <ArrowBackIcon />
                                ) : (
                                    <ArrowForwardIcon />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button
                                variant="contained"
                                sx={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                bgcolor="#017BF7"
                                size="large"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                            >
                                {theme.direction === 'rtl' ? (
                                    <ArrowForwardIcon />
                                ) : (
                                    <ArrowBackIcon />
                                )}
                            </Button>
                        }
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}