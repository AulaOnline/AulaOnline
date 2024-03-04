import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '@fontsource/inter';
import InputView from "../Layout/features/InputView/InputView";

function Input() {

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
        <InputView/>
        )
}

export default Input;
