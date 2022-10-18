import {BodyContainer, BlogSpaceContainer, SkillsContainer, 
        BlogPaper, BlogHeader, BlogTitle, BlogBody, 
        SkillsHeader, SkillsBody } 
        from "../../styles/body"
import { Box, Stack } from '@mui/material'
import { browserWidth } from "../../styles/theme"

export default function BodyDesktop({ matches }) {
  return (
    <BodyContainer>
      
      <BlogSpaceContainer>
        <Stack>
          <BlogHeader>Blog Space</BlogHeader>
          <Box sx={{height: 500, overflow: 'auto', minWidth: browserWidth * .7}}>
            <BlogPaper color="paperBrown">
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </BlogPaper>
            <BlogPaper>
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </BlogPaper>
            <BlogPaper>
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </BlogPaper>
            <BlogPaper>
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </BlogPaper>
          </Box>
        </Stack>
      </BlogSpaceContainer>
      
      <SkillsContainer>
        <Stack>
          <SkillsHeader>Skills and Knowledge</SkillsHeader>

          <SkillsBody>Full Stack Development</SkillsBody>
          <SkillsBody>React</SkillsBody>
          <SkillsBody>Django</SkillsBody>
          <SkillsBody>GitHub</SkillsBody>
          <SkillsBody>VS Code</SkillsBody>
          <SkillsBody>JavaScript</SkillsBody>
          <SkillsBody>TypeScript</SkillsBody>
          <SkillsBody>Java</SkillsBody>
          <SkillsBody>Python</SkillsBody>
        </Stack>
      </SkillsContainer>

    </BodyContainer>
  )
}