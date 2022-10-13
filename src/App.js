import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material'
import Container from '@mui/material/Container'
import { useEffect } from 'react';

export default function App(){
  
  useEffect(() => {
    document.title = "react material UI - Home"
  }, [])
  
  
  return (
    <Container
      max
    >
      <Button>hello</Button>
    </Container>
  )
}