import React from 'react'

import {BodyContainer, BlogSpaceContainer, SkillsContainer, 
        BlogPaper, BlogHeader, BlogTitle, BlogBody, 
        SkillsHeader, SkillsBody, BlueHighlightSpanBox,
        SkillsBodyContainer, 
        GreenHighlightSpanBox} 
        from "../../styles/body"
import { Box, Stack } from '@mui/material'
import { db_url } from "../../debug"

//Retrieves blogs data and renders the blogs, calls BlogPost for individual blogs
class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [""]
    }
    this.getBlogs()
  }
    
  getBlogs = async () => {
    try {
      const response = await fetch(db_url + 'home/')
      const output = await response.text()
      const parsed_output = JSON.parse(output)
      this.setState({
        blogs: parsed_output,
      })
    } catch (error) {
      console.error(error)
    }
  }

  render(){
    return (
      this.state.blogs.map(function(post, index){  //bad code, should use item ID of some sort
        return <BlogPost key={index} title={post.title} body={post.body} />
      })
    )
  }
}

//creates HTML for a single BlogPost component
function BlogPost(props) {
  return(
    <BlogPaper>
      <BlogTitle>{props.title}</BlogTitle>
      <BlogBody>{props.body}</BlogBody>
    </BlogPaper>
  )
}


//Parent Function rendering the entirety of the Body Component
export default function BodyDesktop({ matches }) {
  return (
    <BodyContainer>
      
      <BlogSpaceContainer>
        <Stack>
          <BlogHeader>
            <BlueHighlightSpanBox>Blog Space</BlueHighlightSpanBox>
          </BlogHeader>
          <Box sx={{height: '65vh', overflow: 'auto', width: '70vw'}}>
            <Blogs />
          </Box>
        </Stack>
      </BlogSpaceContainer>
      
      <SkillsContainer>
        <Stack>
          <SkillsHeader>
            <GreenHighlightSpanBox>
              Skills
            </GreenHighlightSpanBox>
          </SkillsHeader>
          <SkillsBodyContainer>
            <SkillsBody>Full Stack</SkillsBody>
            <SkillsBody>React</SkillsBody>
            <SkillsBody>Django</SkillsBody>
            <SkillsBody>GitHub</SkillsBody>
            <SkillsBody>VS Code</SkillsBody>
            <SkillsBody>JavaScript</SkillsBody>
            <SkillsBody>TypeScript</SkillsBody>
            <SkillsBody>Java</SkillsBody>
            <SkillsBody>Python</SkillsBody>
          </SkillsBodyContainer>
        </Stack>
      </SkillsContainer>

    </BodyContainer>
  )
}