import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Pages/Home';
import Input from "./Pages/Input";


function App() {
  return (
    <Router>
      <Box>
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/Input" element={<Input/>}/>
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
