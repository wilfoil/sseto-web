import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from 'pages/_main';
import { ThemeProvider } from '@mui/material';
import theme from 'styles/theme';
import { paths } from './paths';


function App() {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main />}>
          {paths.map(path => <Route path={path.to} element={<path.component />} />)}
      </Route>      
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
    
    </>
  );
}

export default App;
