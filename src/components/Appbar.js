import React from 'react'

import { AppbarButton, MyList } from "../styles/Appbar";
import { db_url } from "../debug"


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
      const response = await fetch(db_url + 'home/resume/')
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
    link.download = 'resume.pdf'
    link.href = 'data:application/pdf;base64,' + this.state.resume_b64
    link.click()
  }

  onEmail = () => {
    const link = document.createElement('a')
    link.href = "mailto: holdengjuka@gmail.com"
    link.click()
  }

  goGitHub = () => {
    const link = document.createElement('a')
    link.href = "http://github.com/HoldenGjuka"
    link.target = "_blank"
    link.click()
  }

  render() {
    return (
      <MyList type='row'>
        <AppbarButton onClick={this.onDownload} variant='bold'>Resume</AppbarButton>
        <AppbarButton onClick={this.onDownload} variant='bold'>About Me</AppbarButton>
        <AppbarButton onClick={this.onEmail} variant='bold'>Email Me</AppbarButton>
        <AppbarButton onClick={this.goGitHub} variant='bold'>Upcoming Projects</AppbarButton>
        {/* <Button variant='bold'>Dummy Button</Button> */}
      </MyList>
    )
  }
}

export default function Appbar() {
  return (
    <Navbar />
  )
}