import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Toaster } from 'react-hot-toast'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from 'pages/_main'
import { ThemeProvider } from '@mui/material'
import theme from 'styles/theme'
import { otherPaths, paths, secondaryPaths } from './paths'

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              {paths.map((path) => (
                <Route path={path.to} key={path.key} element={<path.component />} />
              ))}
              {secondaryPaths.map((path) => (
                <Route path={path.to} key={path.key} element={<path.component />} />
              ))}
            </Route>
            {otherPaths.map((path) => (
                <Route path={path.to} key={path.key} element={<path.component />} />
              ))}
          </Routes>
        </BrowserRouter>
        <Toaster />
      </ThemeProvider>
    </>
  )
}

export default App
