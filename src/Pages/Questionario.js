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
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CheckIcon from '@mui/icons-material/Check';
import { Grid } from '@mui/material';
import Navbar from '../Layout/components/Navbar';
import Footer from '../Layout/components/Footer';

const steps = [
    {
        question: 'Qual é a capital do Brasil?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Brasília', 'Jacaré dos Homens', 'Barra de São Miguel', 'Maceió'],
        answer: 'A'
    },
    {
        question: 'Qual é o maior planeta do sistema solar?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Júpiter', 'Plutão', 'Terra Plana', 'Planeta Brasil'],
        answer: 'A'
    },
    {
        question: 'Quem escreveu "Dom Quixote"?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Machado de Assis', 'Cervantes', 'Shakespeare', 'Dostoiévski'],
        answer: 'B'
    },
    {
        question: 'Qual é a fórmula química da água?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['H2O', 'CO2', 'O2', 'NaCl'],
        answer: 'A'
    },
    {
        question: 'Quem pintou a "Mona Lisa"?',
        options: ['A', 'B', 'C', 'D'],
        alternatives: ['Van Gogh', 'Da Vinci', 'Picasso', 'Michelangelo'],
        answer: 'B'
    },
    // Adicione mais etapas conforme necessário
];

export default function TextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(steps.length).fill(''));
    const [openDialog, setOpenDialog] = useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleOptionClick = (index) => {
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

    return (
        <Grid container sx={{ bgcolor: "#101824" }}>
            <Navbar />
            <Grid container sx={{ minHeight: 'calc(100vh - 125px)', alignItems: "center", justifyContent: 'center' }}>
                <Paper elevation={15} variant='outlined' sx={{ bgcolor: "#101824" }}>
                    <Box sx={{ maxWidth: 400, flexGrow: 1, bgcolor: '#017BF7' }}>
                        <Paper
                            square
                            elevation={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                height: 50,
                                pl: 2,
                            }}
                        >
                            <Typography>{steps[activeStep].question}</Typography>
                        </Paper>
                        <Box sx={{ height: 350, maxWidth: 400, width: '100%', p: 2, overflowY: 'auto', bgcolor: "#101824", padding:'0px' }}>
                            <Grid container justifyContent="flex-start" alignItems="center">
                                {steps[activeStep].options.map((option, index) => (
                                    <Grid item key={index} xs={12} md={12}>
                                        <Paper variant='outlined' sx={{ marginBottom: '10px', bgcolor: '#D9D9D9', padding: '10px', }}>
                                            <Button
                                                size='small'
                                                variant={selectedOptions[activeStep] === `option-${index}` ? 'contained' : 'outlined'}
                                                onClick={() => handleOptionClick(index)}
                                            >
                                                {option}
                                            </Button>
                                            <Typography>{steps[activeStep].alternatives[index]}</Typography>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                        <MobileStepper
                            variant="text"
                            steps={steps.length}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === steps.length - 1}
                                >
                                    Proxima
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
                                    Anterior
                                </Button>
                            }
                        />

                    </Box>
                </Paper>
                <Grid item xs={12} md={12}>
                {activeStep === steps.length - 1 && (
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
                        <Button variant="contained" onClick={handleConfirm}>
                            Confirmar Respostas
                        </Button>
                    </Box>
                )}
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
    );
}

