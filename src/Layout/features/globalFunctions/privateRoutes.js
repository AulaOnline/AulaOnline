import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "./background";
import {CircularProgress, Grid, Typography} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import {blue} from "@mui/material/colors";
import { API_URL } from '../../../App';
export function PrivateRoute( { Carregando, loading, loadingMessage } ) {
  const navigate = useNavigate();
  const [isValidToken, setIsValidToken] = useState(false);


  useEffect(() => {
    // Verifica se há um token no localStorage
    const token = localStorage.getItem("token");
    //console.log("Token:", token);
    if (token) {
      // Faz uma requisição para verificar se o token é válido
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/login/verificar-token`,
          { token },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
         // console.log("Resposta da verificação de token:", response.data);
          const { success } = response.data;
          if (success) {
            setTimeout(() => {

                setIsValidToken(true)
                Carregando(loading)
            }, 2000)

          } else {
            // Se o token não for válido, redireciona para a página inicial
            setTimeout(() => {
              navigate("/");
        }, 1000);
          }
        })
        .catch((error) => {
          console.error("Erro ao verificar o token:", error);
          // Em caso de erro na requisição, redireciona para a página inicial
          setTimeout(() => {
            navigate("/");
      }, 1000);
        });
    } else {
      // Se não houver token no localStorage, redireciona para a página inicial
      setTimeout(() => {
          navigate("/");
    }, 1000);
    }
  }, []); 

  return (
    <Section>
        <Grid container sx={{ minHeight: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#BFCEDE', paddingBottom: '150px', paddingTop: '10%' }}>
            <Stack sx={{ width: '50%', color: 'grey.500' }} spacing={2}>
                <LinearProgress sx={{ "& .MuiLinearProgress-bar": { backgroundColor: blue['800'] } }} />
            </Stack>
            {loadingMessage && (
                <Typography sx={{ marginTop: 2, color: "white" }}>{loadingMessage}</Typography> // Renderiza a mensagem se ela existir
            )}
        </Grid>
    </Section>
  ); 
}
