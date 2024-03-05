import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "./background";
import { CircularProgress, Grid } from "@mui/material";

export function PrivateRoute( { Carregando, loading } ) {
  const navigate = useNavigate();
  const [isValidToken, setIsValidToken] = useState(false);


  useEffect(() => {
    // Verifica se há um token no localStorage
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (token) {
      // Faz uma requisição para verificar se o token é válido
      axios
        .post(
          "http://localhost:3001/login/verificar-token",
          { token },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("Resposta da verificação de token:", response.data);
          const { success } = response.data;
          if (success) {
            setTimeout(() => {

                setIsValidToken(true)
                Carregando(loading)
            }, 2000)

          } else {
            // Se o token não for válido, redireciona para a página inicial
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Erro ao verificar o token:", error);
          // Em caso de erro na requisição, redireciona para a página inicial
          navigate("/");
        });
    } else {
      // Se não houver token no localStorage, redireciona para a página inicial
      setTimeout(() => {

          navigate("/");
    }, 2000);
    }
  }, []); // Executa apenas uma vez, quando o componente é montado

  return (
    <Section>
        <Grid container sx={{ minHeight: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#BFCEDE', paddingBottom: '150px', paddingTop: '10%' }}>
            <CircularProgress color="secondary" />
        </Grid>
    </Section>
  ); 
}
