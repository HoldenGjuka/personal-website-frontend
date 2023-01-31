import React from 'react'

import { ThemeProvider } from '@mui/system'
import CssBaseline from '@mui/material/CssBaseline';

import theme from './styles/Theme'
import { FormatContainer } from './styles/FormatContainer';

import Appbar from './components/Appbar'
import Header from './components/Header'
import BlogSpace from './components/BlogSpace'
import Divider from './components/Divider';
import Footer from './components/Footer';
import SkillSpace from './components/SkillSpace';




export default function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

        <FormatContainer>
          <Header />
          <Appbar />
          <Divider />
          <BlogSpace />
          <SkillSpace />
          <Footer />
        </FormatContainer>
        
    </ThemeProvider>
  )
}