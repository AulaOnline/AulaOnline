import axios from "axios";
import { API_URL } from "../../../App";

export async function ExtrairTkenEretornarID () {
    // Extrair o token do localStorage
    const token = localStorage.getItem('token');

    // Verificar se o token foi encontrado
    if (token) {
        // Decodificar o token para obter os dados do usuário
        const tokenData = JSON.parse(atob(token.split('.')[1]));

        // Extrair o nome de usuário do tokenData
        const username = tokenData.username;

        // Agora você pode usar o nome de usuário conforme necessário
        console.log('Nome de usuário:', username);

        try {
            // Fazer a solicitação HTTP para obter o ID do usuário
            const response = await axios.get(`${API_URL}/login/getUserID/${username}`);
            
            // A resposta da solicitação HTTP estará disponível aqui
            return response.data.data.id
        } catch (error) {
            // Se ocorrer um erro durante a solicitação HTTP
            console.error('Erro ao fazer a solicitação HTTP:', error);
        }
    } else {
        console.error('Token não encontrado no localStorage');
    }
}
