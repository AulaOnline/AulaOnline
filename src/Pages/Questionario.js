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
            <Grid
                container
                direction="column"
                xs='12'
                sx={{
                    bgcolor: "#101824",
                    display: "flex",
                    height: "calc(100vh - 64px)",
                    width: "calc(100vw - 20%)",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}>
                <Paper elevation={5} sx={{ borderRadius: 6, bgcolor: "#101818", height: "80%", width: "50%" }}>
                    <Grid container
                        xs={'auto'}
                        direction="column"
                        alignItems="flex-start"
                        sx={{
                            height: '100%',
                            alignItems: "flex-start"
                        }}>
                        <Grid item container
                            justifyContent="center"
                            sx={{
                                borderRadius: '32px 32px 0 0',
                                bgcolor: "#017BF7",
                                width: "100%"
                            }}>
                            <Typography sx={{ fontSize: '2vw', textAlign: 'center' }}>{steps[activeStep].label}</Typography>
                        </Grid>
                        <Grid item container sx={{ bgcolor: "#D9D9D9", height: '25%', width: '100%', p: 2 }}>
                            <Typography sx={{ width: '100%', textAlign: 'center', fontSize: '1.4vw' }}>{steps[activeStep].description}</Typography>
                        </Grid>
                            <Grid item container xs={'8'} sx={{ display: "flex", bgcolor: "#101818", width: '100%', p: 2, overflowY: 'auto', alignItems: 'center', height: '75%' }}>
                            <Grid container
                                direction="column"
                                spacing={2}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: 'center'
                                }}>
                                {steps[activeStep].options.map((option, index) => (
                                    <Grid item container xs='auto' sx={{ display: "flex", bgcolor: "#101818", width: '100%', p: 2 }}>
                                    <Grid item xs={2}>
                                        <Button
                                            variant={selectedOption[activeStep] === option ? 'contained' : 'outlined'}
                                            onClick={() => handleOptionClick(option, activeStep)}
                                            sx={{
                                                fontSize: '1vw',
                                                borderRadius: '9px 0 0 9px',
                                                color: selectedOption[activeStep] === option ? 'white' : '#017BF7',
                                                backgroundColor: selectedOption[activeStep] === option ? '#017BF7' : 'transparent',
                                                width: '100%', // Remova fullWidth e use width: '100%'
                                                height: '100%',
                                            }}
                                        >
                                            {option}
                                        </Button>
                                    </Grid>
                                    <Grid item xs={10} sx={{ display: "flex", alignItems: 'stretch', bgcolor: "#D9D9D9", borderRadius: '0 9px 9px 0' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '1vw',
                                                textAlign: 'left',
                                                padding: 1,
                                                width: '100%',
                                            }}
                                        >
                                            Alternativa com linha maior de texto para fazer teste de flexbox
                                        </Typography>
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