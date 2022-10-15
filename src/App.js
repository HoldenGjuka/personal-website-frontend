import React from 'react'

import { Container } from '@mui/material'
import { ThemeProvider } from '@mui/system'

import theme from './styles/theme/index.js'
import Appbar from './components/appbar'
import Header from './components/header'

export default function Geck () {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
      <Container>
        <Appbar />
      </Container>
    </ThemeProvider>
  )
}