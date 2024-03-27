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
import {API_URL} from "../App";
import {ExtrairTkenEretornarID} from "../Layout/features/globalFunctions/pegarusername";

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

    const handleSaveNotation = async (body) => {
        ExtrairTkenEretornarID().then(id => {
            if (id) {
                const fetchVideos = async () => {
                    try {
                        const response = await axios.post(`${API_URL}/annotation/postNewNotation/${id}`,{
                            "title": "Anotacao Sobre o Video",
                            "body": body,
                            "videoLink": linkAula
                        });
                    }
                    catch (error){
                        return error;
                    }
                };
                fetchVideos();
            }
        }).catch(error => {
            console.error('Erro ao extrair o ID do usuário:', error);
        });
    }
    const handleGerarResumo = () => {
        setGetResumo(true)
    }

    useEffect(() => {
        const FetchResumo = async () => {
            if (getResumo) {
                try {
                    console.log(linkAula)
                    const response = await axios.post(`${API_URL}/generate/generateSummary`, {
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

                <Grid container sx={{ minHeight: 'calc(90vh)', paddingLeft: '40px', paddingTop: '50px' }}>
                    <Grid item xs={12} md={8} sx={{ display: 'flex', height: "calc(65vh)", justifyContent: 'center', alignItems: 'center' }}>
                        <ReactPlayer url={linkAula}
                            width='100%'
                            height='100%'
                            controls={true}
                        />
                    </Grid>
                    <Grid item xs={12} md={3.75} sx={{marginLeft: '20px' }}>
                        <Editor />
                        <Button variant="contained" sx={{ width: '100%',height:"40px",backgroundColor: '#0886b4'}} onClick={handleSaveNotation}>Salvar</Button>
                    </Grid>
                    <Grid container xs={12} md={3} sx={{height: "5.5vh",paddingTop:"20px"}}>
                        <Grid item md={6}>
                        <Button variant="contained"  sx={{ width: '80%', height:"100%", backgroundColor: '#0CA789'}} onClick={() => navigate(`/questionario?linkAula=${encodeURI(linkAula)}`)}>
                            Gerar Questionario</Button>
                        </Grid>
                        <Grid item md={6}>
                        <Button variant="contained" sx={{ width: '80%',height:"100%",backgroundColor: '#0886b4'}} onClick={handleGerarResumo} disabled={disabled}>Gerar Resumo</Button>
                        </Grid>
                    </Grid>
                    {
                        getResumo && (
                            <Grid container sx={{paddingBottom: "20vh", paddingTop:"2vh"}}>
                            <Grid item xs={12} md={12}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflowY: 'auto',
                                        bgcolor: 'background.paper',
                                        border: '5px solid #0886b4',
                                        boxShadow: 24,
                                        p: 4,
                                        width:"65%",
                                        borderRadius: '7px',
                                        backgroundColor: '#19202a',
                                        color: 'white'
                                    }}
                                >
                                    <Typography fontSize={18}>{resumo}</Typography>
                                </Box>
                            </Grid>
                            </Grid>
                        )}
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
        if (token) {
            // Faz uma requisição para verificar se o token é válido
            axios.post(`${API_URL}/login/verificar-token`, { token }, {
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