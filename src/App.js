import React from 'react'

import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/Theme'
import Background from './styles/Background.js'
import { BigBadContainer } from './styles/BigBad';

import Appbar from './components/Appbar'
import Header from './components/Header'
import BlogSpace from './components/BlogSpace'
import Divider from './components/Divider';
import Footer from './components/Footer';
import Skills from './components/Skills';




export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <BigBadContainer>
          <Header />
          <Appbar />
          <Divider />
          {/* <Background> */}
            <BlogSpace />
            <Skills />
          {/* </Background> */}
          <Footer />
        </BigBadContainer>
    </ThemeProvider>
  )
}