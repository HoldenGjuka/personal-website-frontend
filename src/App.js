import React from 'react'

import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/Theme'
import Background from './styles/Background.js'
import { BigBadContainer } from './styles/BigBad';

import Appbar from './components/Appbar'
import Header from './components/Header'
import Body from './components/Body'
import Divider from './components/Divider';
import Remainder from './components/Remainder';




export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BigBadContainer>
          <Header />
          <Appbar />
          <Divider />
          <Background>
            <Body />
          </Background>
          <Remainder />
        </BigBadContainer>
    </ThemeProvider>
  )
}