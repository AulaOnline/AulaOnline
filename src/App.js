import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import Input from "./Pages/Input";
import MeuPerfil from "./Pages/MeuPerfil";
import Player from "./Pages/Player";
import Quintal from "./Pages/quintal";
import Questionario from "./Pages/Questionario";
import Questionario2 from './Pages/teste';
export const URL = "Algum texto aqui";

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/Input" element={<Input/>}/>
            <Route path="/Player" element={<Player/>}/>
            <Route path="/quintal" element={<Quintal/>}/>
            {/*ROTAS TELA WIDGETS E COMPLEMENTARES */}
            <Route path="/MeuPerfil" element={<MeuPerfil/>}/>
            

            <Route path="/questionario" element={<Questionario/>}/>
            <Route path="/questionario2" element={<Questionario2/>}/>

        </Routes>
      </Box>
    </Router>
  );
}

export default App;
