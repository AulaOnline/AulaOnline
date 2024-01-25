import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import Input from "./Pages/Input";
import MeuPerfil from "./Pages/Widgets/MeuPerfil";
import Player from "./Pages/Player";
import Test from "./Pages/Test";
import Quintal from "./Pages/quintal";
import Anotacoes from './Pages/Widgets/Anotacoes';
import QuestionariosFinalizados from './Pages/Widgets/QuestionariosFinalizados';
import Questionario from './Pages/Questionario/Questionario';

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/Input" element={<Input/>}/>
            <Route path="/Player" element={<Player/>}/>
            <Route path="/Test" element={<Test/>}/>
            <Route path="/quintal" element={<Quintal/>}/>

            {/*ROTAS TELA WIDGETS E COMPLEMENTARES */}
            <Route path="/MeuPerfil" element={<MeuPerfil/>}/>
            <Route path="/MeuPerfil/Anotacoes" element={<Anotacoes/>}/>
            <Route path="/MeuPerfil/Questionarios" element={<QuestionariosFinalizados/>}/>

            <Route path="/questionario" element={<Questionario/>}/>

        </Routes>
      </Box>
    </Router>
  );
}

export default App;
