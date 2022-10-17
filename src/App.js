import React from 'react'

import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/theme/index.js'
import Appbar from './components/appbar'
import Header from './components/header'
import Body from './components/body'
import { FooterContainer } from './styles/footer/index.js'


export default function Geck () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
      </Container>
      <Container>
        <Appbar />
      </Container>
      <Container>
        <Body />
      </Container>
      <FooterContainer>
        Made by Holden Gjuka, last updated 2022
      </FooterContainer>
    </ThemeProvider>
  )
}