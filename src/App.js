import React from 'react'

import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme, { Colors } from './styles/theme/index.js'
import Appbar from './components/appbar'
import Header from './components/header'
import Body from './components/body'
import { FooterContainer } from './styles/footer/index.js'
import { Background as PinkBackground } from './styles/background/index.js'


export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Container>
          <Header />
        </Container>
        <Container>
          <Appbar />
        </Container>
        <PinkBackground>
        <hr size="10" color="black"></hr>
          <Container>
            <Body />
          </Container>
        </PinkBackground>
        <FooterContainer>
            Made by Holden Gjuka, last updated 2022
        </FooterContainer>
    </ThemeProvider>
  )
}