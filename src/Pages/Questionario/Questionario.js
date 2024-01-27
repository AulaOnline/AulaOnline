import * as React from 'react';
import Navbar from "../../Layout/components/Navbar";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";
import { MobileStepper } from "@mui/material";
import { useTheme} from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import RadioGroupQuestionario from '../../Layout/components/RadioGroupQuestionario';

//gera as questões baseadas na API do GPT;
//react stepper pra gerar os questionarios;
//radio group pras alternativas seguindo uma logica parecida.

export default function Questionario() {
    const steps = [
        {
            label: 'Questão 1',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
        },
        {
            label: 'Questão 2',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
        },
        {
            label: 'Questão 3',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
        },
        {
            label: 'Questão 4',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
        },
        {
            label: 'Questão 5',
            description: `Texto da questão importada do chatGPT (alternativas tambem serão importadas), texto generico apenas para mostrar a disposição das funcionalidades na tela.`,
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
    
    return (
        <Grid container>
            <Navbar />
            <Grid container sx={{ bgcolor: "#101824", display: "flex", height: "calc(100vh - 64px)", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <Paper elevation={5} sx={{ borderRadius: 6, bgcolor: "#101818", height: "80%", width: "50%" }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>                        
                    <Paper
                        elevation={0}
                        sx={{
                            bgcolor:"blue",
                            display: 'flex',
                            alignItems: 'center',
                            height: 50,
                            pl: 2,
                            bgcolor: 'background.default',
                            borderRadius: 12
                        }}
                    >
                        {/* alterar porcentagem pra caber as alternativas */}
                        {/* aprender a mexer no flexbox pra ficar bonito KK */}
                        <Typography sx={{ borderRadius: 12, fontSize: '2rem', textAlign: 'center', width: '100%' }}>{steps[activeStep].label}</Typography>     
                    </Paper>
                        <Box sx={{ height: '100%', maxWidth: '100%', p: 2 }}>
                            <Box sx={{ bgcolor: "#D9D9D9", borderRadius: 6, height: '25%', maxWidth: '100%', p: 2 }}>
                                <Typography sx={{ width: '100%', textAlign: 'center', fontSize: '1.4rem'}}>{steps[activeStep].description}</Typography> 
                            </Box>
                            <Box sx={{ height: '70%', maxWidth: '100%', justifyContent: "center", p: 2 }}>
                                <RadioGroupQuestionario />
                            </Box>
                        </Box>

                        <MobileStepper
                            sx={{borderRadius: 16, bgcolor: "#101818"}}
                            variant="text"
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    variant="contained"
                                    sx={{borderRadius: 4}}
                                    bgcolor="#017BF7"
                                    size="large"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button
                                    variant="contained"
                                    sx={{borderRadius: 4}}
                                    bgcolor="#017BF7"
                                    size="large"
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                >
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                </Button>
                            }
                        />                       
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
}