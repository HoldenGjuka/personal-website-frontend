import React from 'react'

import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/Theme.js'
import Appbar from './components/Appbar'
import Header from './components/Header'
import Body from './components/Body'
import Divider from './components/Divider.js';
import { Background as PinkBackground } from './styles/Background.js'



export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <Header />
          <Appbar />
          <Divider />
        <PinkBackground>
          <Body />
        </PinkBackground>
    </ThemeProvider>
  )
}