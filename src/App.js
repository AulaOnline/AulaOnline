import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import Input from "./Pages/Input";
import Widgets from "./Pages/Widgets";
import Player from "./Pages/Player";


function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/Input" element={<Input/>}/>
            <Route path="/Player" element={<Player/>}/>
            <Route path="/Widgets" element={<Widgets/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
