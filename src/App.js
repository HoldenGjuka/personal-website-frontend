import React from 'react'

import { Button, Container } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import theme from './styles/theme/index.js'

export default function Geck () {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button variant='contained'>hello</Button>
      </Container>
    </ThemeProvider>
  )
}