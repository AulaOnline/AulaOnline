import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from "../Layout/components/Navbar";
import Footer from "../Layout/components/Footer";
import { Button, Grid, Input, responsiveFontSizes, TextField, Typography, Box } from "@mui/material";
import { styled } from "styled-components";
import Editor from "../Layout/features/Notepad/Editor";
import ReactPlayer from 'react-player/youtube';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { PrivateRoute } from '../Layout/features/globalFunctions/privateRoutes';

const StyledSection = styled.section`
  background-color: #101824;
  background-size: 3000px 3000px;
`;

function VideoAndChat() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const linkAula = queryParams.get('linkAula');
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    function Carregando(loading) {
        setLoading(!loading)
    }

    const [resumo, setResumo] = useState('')
    const [getResumo, setGetResumo] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const handleGerarResumo = () => {
        setGetResumo(true)
    }

    useEffect(() => {
        const FetchResumo = async () => {
            if (getResumo) {
                try {
                    console.log(linkAula)
                    const response = await axios.post('http://localhost:3001/generate/generateSummary', {
                        videoLink: linkAula
                    })
                    setDisabled(true)
                    if (response.data.data) {
                        // Verifica se response.data.data existe
                        if (response.data.data.summary) {
                            // Se summary nao existir previamente.
                            setResumo(response.data.data.summary);
                            getResumo(true)
                        } else {
                            // Caso ja exista: 
                            setResumo(response.data.data);
                            getResumo(true)
                        }
                    }
                }
                catch (error) {
                    console.error(error)
                }
            }
        }
        FetchResumo()
    }, [getResumo])


    return (
        <>

            {loading &&
                <PrivateRoute Carregando={Carregando} loading={loading} />
            }
            {!loading && (

                <Grid container sx={{ minHeight: 'calc(90vh)', paddingLeft: '40px', paddingTop: '50px', paddingBottom: '0px' }}>
                    <Grid item xs={12} md={8} sx={{ display: 'flex', height: "calc(65vh)", justifyContent: 'center', alignItems: 'center' }}>
                        <ReactPlayer url={linkAula}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ minHeight: "calc(65vh)", marginLeft: '20px' }}>
                        <Editor />
                    </Grid>
                    { 
                        getResumo && (
                        <Grid item xs={12} md={8} sx={{ padding: '20px' }}>
                        <Box
                            sx={{
                                overflowY: 'auto',
                                bgcolor: 'background.paper',
                                border: '2px solid #000',
                                boxShadow: 24,
                                p: 4,
                            }}
                        >

                            <Typography>{resumo}</Typography>
                        </Box>
                    </Grid>
                    )}

                    <Grid container xs={12} md={4} sx={{padding:'20px'}}>
                        <Grid item md={6}> 

                        <Button variant="contained" sx={{ marginRight: '30px', backgroundColor: '#0CA789' }} onClick={() => navigate('/questionario')}>Gerar Questionario</Button>
                        </Grid>
                        <Grid item md={6}> 

                        <Button variant="contained" sx={{ backgroundColor: '#9a8c1c' }} onClick={handleGerarResumo} disabled={disabled}>Gerar Resumo</Button>
                        </Grid>
                    </Grid>
                </Grid >
            )
            }
        </>
    )
}


function Player() {

    const navigate = useNavigate();
    const [isValidToken, setIsValidToken] = useState(false);

    useEffect(() => {
        // Verifica se há um token no localStorage
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        if (token) {
            // Faz uma requisição para verificar se o token é válido
            axios.post('http://localhost:3001/login/verificar-token', { token }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log('Resposta da verificação de token:', response.data);
                    const { success } = response.data;
                    if (success) {
                        // Se o token for válido, define isValidToken como true
                        setIsValidToken(true);
                    } else {
                        // Se o token não for válido, redireciona para a página inicial
                        navigate('/');
                    }
                })
                .catch((error) => {
                    console.error('Erro ao verificar o token:', error);
                    // Em caso de erro na requisição, redireciona para a página inicial
                    navigate('/');
                });
        } else {
            // Se não houver token no localStorage, redireciona para a página inicial
            navigate('/');
        }
    }, []); // Executa apenas uma vez, quando o componente é montado

    return (
        <StyledSection>
            <Navbar />
            <VideoAndChat />
            <Footer cor={'#017BF7'} />
        </StyledSection>
    );
}



export default Player;