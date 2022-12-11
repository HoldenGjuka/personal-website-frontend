import React from 'react'

import { Container, ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/Theme'
import { BigBadContainer } from './styles/BigBad';
// import Background from './styles/Background'


// import Appbar from './components/Appbar'
// import Header from './components/Header'
// import Body from './components/Body'
// import Divider from './components/Divider';
import Remainder from './components/Remainder';




export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BigBadContainer>
          <Container sx={{flex: '0 1 auto'}}>
            header
          </Container>
          {/* <Header />
          <Appbar />
          <Divider />
          <Background>
            <Body />
          </Background> */}
          {/* <Remainder /> */}
          <Container sx={{backgroundColor: 'red', flex: '1 1 auto'}}>
            body
          </Container>
          <Container sx={{flex: '0 1 40px'}}>asdf</Container>
        </BigBadContainer>
    </ThemeProvider>
  )
}