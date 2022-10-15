import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button, Container } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { useEffect } from 'react';
import theme from "./styles/theme/index.js"
import Appbar from "./components/appbar"

export default function App(){
  
  useEffect(() => {
    document.title = "react material UI - Home"
  }, [])
  
  
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="1x"
        sx={{
          background: '#fff'
        }}
      >
        {
          <Appbar />
          /*
          
          Banner
          Promotions
          Title
          Products
          Footer
          AppDrawer
          */
        }
        <Button variant='contained'>hello</Button>
      </Container>
    </ThemeProvider>
  )
}