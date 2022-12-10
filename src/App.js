import React from 'react'

import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/theme/index.js'
import Appbar from './components/appbar'
import Header from './components/header'
import Body from './components/body'
import Divider from './components/divider/index.js';
import { Background as PinkBackground } from './styles/background/index.js'
import { Remainder } from './styles/remainder'



export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
          <Header />
          <Appbar />
          <Divider />
        <PinkBackground>
          <Body />
          <Remainder />
        </PinkBackground>
    </ThemeProvider>
  )
}