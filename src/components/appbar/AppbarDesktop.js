import React from 'react'

import { Button } from "@mui/material";
import { MyList } from "../../styles/appbar";


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resume_b64: ""
    }
    this.getResume()
  }
  
  getResume = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/home/resume/')
      const output = await response.text()
      this.setState({
        resume_b64: output,
      })
    } catch (error) {
      console.error(error)
    }
  }

  onDownload = () => {
    const link = document.createElement('a')
    link.download = 'resume.png'
    link.href = 'data:application/png;base64,' + this.state.resume_b64
    link.click()
  }

  render() {
    return (
      <MyList type='row'>
        <Button onClick={this.onDownload} variant='bold'>Resume</Button>
        <Button variant='bold'>About Me</Button>
        <Button variant='bold'>Email Me</Button>
        <Button variant='bold'>Upcoming Projects</Button>
      </MyList>
    )
  }
}

//Parent function that renders the whole Appbar component
export default function AppbarDesktop({matches}) {
  return (
    <Navbar />
  )
}