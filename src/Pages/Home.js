import React, { useState } from 'react';
import { Grid, Typography, TextField, Button, useMediaQuery } from "@mui/material";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import MailLockOutlinedIcon from '@mui/icons-material/MailLockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Lógica de login aqui, por exemplo, enviar os dados para um servidor
        console.log('Email:', email);
        console.log('Senha:', password);
        // Adicione aqui a lógica para o redirecionamento para a pagina de colocar o link se o usuario for autenticado.
    };

    const isSmallScreen = useMediaQuery('(max-width: 900px)');

    return (
        <Grid container>
            {/* Navbar */}
            <Navbar name={'Login'} />

            {/* Grid Container com imagem de fundo */}
            <Grid
                container
                sx={{
                    backgroundImage: `url('/planodefundologin.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "calc(100vh - 64px)",
                    padding: "20px",
                }}
            >
                {/* Primeiro Item (metade da largura) */}
                {!isSmallScreen && (
                    <Grid item xs={12} md={6}></Grid>
                )
                }

                {/* Segundo Item (metade da largura) */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" gutterBottom sx={{ color: 'black' }}>
                        Bem-vindo!
                    </Typography>

                    <Typography variant="h3" gutterBottom sx={{ color: 'black', paddingBottom: '30px' }}>
                        Faça Login na sua Conta!
                    </Typography>

                    <TextField
                        label={
                            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <MailLockOutlinedIcon sx={{ paddingRight: '5px' }} /> Email
                            </Typography>
                        }
                        variant="outlined"
                        margin="normal"
                        sx={{ marginBottom: 2, width: '50%' }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        label={
                            <Typography sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <LockOpenIcon sx={{ paddingRight: '5px' }} /> Senha
                            </Typography>
                        }
                        variant="outlined"
                        type="password"
                        margin="normal"
                        sx={{ marginBottom: 2, width: '50%' }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button variant="contained" color="primary" onClick={handleLogin} sx={{ bgcolor: '#0CA789', width: '25%' }}>
                        Entrar
                    </Button>
                </Grid>
            </Grid>

            {/* Footer */}
            <Footer />
        </Grid>
    );
}

export default Home;
