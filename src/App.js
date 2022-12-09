import React from 'react'

import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/theme/index.js'
import Appbar from './components/appbar'
import Header from './components/header'
import Body from './components/body'
import { Background as PinkBackground } from './styles/background/index.js'


export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <Header />
          <Appbar />
        <PinkBackground>
          <hr size="10" color="black"></hr>
          <Body />
        </PinkBackground>
    </ThemeProvider>
  )
}