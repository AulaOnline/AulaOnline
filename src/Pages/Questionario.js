import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid } from '@mui/material';
import Navbar from '../Layout/components/Navbar';
import Footer from '../Layout/components/Footer';
import {useLocation, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { PrivateRoute } from '../Layout/features/globalFunctions/privateRoutes';
import {ExtrairTkenEretornarID} from "../Layout/features/globalFunctions/pegarusername";
import { URL } from '../App';

let steps = [
    {
        label: 'Questão 1',
        question: 'Qual é a capital do Brasil?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Brasília', 'Jacaré dos Homens', 'Barra de São Miguel', 'Maceió'],
        answer: 'A'
    },
    {
        label: 'Questão 2',
        question: 'Qual é o maior planeta do sistema solar?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Júpiter', 'Plutão', 'Terra Plana', 'Planeta Brasil'],
        answer: 'A'
    },
    {
        label: 'Questão 3',
        question: 'Quem escreveu "Dom Quixote"?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Machado de Assis', 'Cervantes', 'Shakespeare', 'Dostoiévski'],
        answer: 'B'
    },
    {
        label: 'Questão 4',
        question: 'Qual é a fórmula química da água?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['H2O', 'CO2', 'O2', 'NaCl'],
        answer: 'A'
    },
    {
        label: 'Questão 5',
        question: 'Quem pintou a "Mona Lisa"?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Van Gogh', 'Da Vinci', 'Picasso', 'Michelangelo'],
        answer: 'B'
    },
];
export default function Questionario() {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const linkAula = queryParams.get('linkAula');
    const [isValidToken, setIsValidToken] = useState(false);
    const [loading, setLoading] = useState(true)
    const [loadingQuestions, setloadingQuestions] = useState(false);
    const cor = "#212626";

    function Carregando(loading) {
        setLoading(!loading)
    }
    useEffect(() => {
        setloadingQuestions(true);
        const fetchQuestions = async () => {
            try {
                const response = await axios.post(`${URL}/generate/generateQuestion`, {
                    videoLink: linkAula
                });
                const questionsData = response.data.data;
                Object.keys(questionsData).forEach((key, index) => {
                    if (steps[index]) {
                        const questionData = questionsData[key];
                        steps[index].question = questionData.statement;
                        steps[index].alternatives = Object.values(questionData.alternatives);
                        steps[index].options = Object.keys(questionData.alternatives);
                        steps[index].answer = questionData.correctAnswer;
                    }
                });
                setloadingQuestions(false);
            } catch (error) {
                console.log(error.response ? error.response.data : "An error occurred");
            }
        };
        fetchQuestions();
    }, []);


    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(steps.length).fill(''));
    const [openDialog, setOpenDialog] = useState(false);

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleOptionClick = index => {
        const newSelectedOptions = [...selectedOptions];
        newSelectedOptions[activeStep] = `option-${index}`;
        setSelectedOptions(newSelectedOptions);
    };

    const handleConfirm = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const calculateCorrectAnswers = () => {
        return selectedOptions.reduce((count, selectedOption, index) => {
            const correctAnswer = `option-${steps[index].options.indexOf(steps[index].answer)}`;
            return count + (selectedOption === correctAnswer ? 1 : 0);
        }, 0);
    };

    const correctAnswers = calculateCorrectAnswers();
    const maxSteps = steps.length;

    return (
        <>  {(loading || loadingQuestions) &&
            <div>
            <PrivateRoute Carregando={Carregando} loading={loading} loadingMessage={"Gerando Questionario"} />
            </div>
        }
            {!loading && !loadingQuestions &&(
                <Grid container>
                    <Navbar />
                    <Grid
                        container
                        direction="column"
                        xs={12}
                        sx={{
                            paddingTop:"8%",
                            bgcolor: "#101824",
                            display: "flex",
                            height: "calc(100vh - 125px)",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center"
                        }}
                    >
                        <Paper  xs="12" md="12" sx={{ borderRadius: 6, bgcolor:cor, height: "85%", width: "55%", overflow: "auto" }}>
                            <Grid container xs="12" md="12" direction="column" alignItems="center" sx={{ height: '100%', alignItems: "flex-start", overflow: "auto", border:"2px solid #017BF7",borderRadius: 6 }}>
                                <Box item container justifyContent="center" sx={{ borderRadius: '32px 32px 0 0', bgcolor: "#017BF7", width: "100%" }}>
                                    <Typography sx={{ fontSize: '2vw', textAlign: 'center' }}>{steps[activeStep].label}</Typography>
                                </Box>
                                <Grid item container sx={{ bgcolor: "#D9D9D9", height: '25%', width: '100%', p: 2 }}>
                                    <Typography sx={{ width: '100%', textAlign: 'center', fontSize: '1.4vw' }}>{steps[activeStep].question}</Typography>
                                </Grid>:
                                <Box sx={{ bgcolor:cor, width: '100%', overflow: 'auto'}}>
                                    <Grid container direction="column" spacing={1} sx={{display:"flex", alignItems:"center", pt:"7%"}}>
                                        {steps[activeStep].options.map((option, index) => (
                                            <Grid item container xs={12} md={12} sx={{ bgcolor:cor, width: '90%', padding: 'px' }}>
                                                <Grid item xs={2} md={1}>
                                                    <Button
                                                        variant={selectedOptions[activeStep] === `option-${index}` ? 'contained' : 'outlined'}
                                                        onClick={() => handleOptionClick(index)}
                                                        sx={{
                                                            fontSize: '1vw',
                                                            borderRadius: '9px 0 0 9px',
                                                            color: selectedOptions[activeStep] === `option-${index}` ? 'white' : '#017BF7',
                                                            backgroundColor: selectedOptions[activeStep] === `option-${index}` ? '#017BF7' : 'transparent',
                                                            minWidth: '10%',
                                                            maxHeight: '100%',
                                                        }}
                                                    >
                                                        {option}
                                                    </Button>
                                                </Grid>
                                                <Grid item xs={10} md={11} sx={{ display: "flex", alignItems: 'stretch', bgcolor: "#D9D9D9", borderRadius: '0 9px 9px 0', padding: '0px' }}>
                                                    <Typography sx={{ fontSize: '1vw', textAlign: 'left', padding: 1, width: '100%' }}>{steps[activeStep].alternatives[index]}</Typography>
                                                </Grid>
                                            </Grid>
                                        ))}
                                        <Grid item xs={6} md={6} sx={{ maxWidth: '50%' }}>
                                            {activeStep === steps.length - 1 && (
                                                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                                    <Button variant="contained" onClick={handleConfirm}>
                                                        Confirmar Respostas
                                                    </Button>
                                                </Box>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Paper>
                        <Grid item container justifyContent="center" sx={{ width: "100%", overflow: "auto" }}>
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
                                        {theme.direction === 'rtl' ? <ArrowBackIcon /> : <ArrowForwardIcon />}
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
                                        {theme.direction === 'rtl' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                                    </Button>
                                }
                            />
                        </Grid>
                    </Grid>
                    <Footer cor={'#017BF7'} />
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>Resultado</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                {`Você acertou ${correctAnswers} de ${steps.length} perguntas!`}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog}>Fechar</Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            )
            }
        </>

    );
}