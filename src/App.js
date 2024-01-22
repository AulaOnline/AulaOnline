import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import Widgets from './Pages/Widgets';


function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Perfil" element={<Widgets/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
