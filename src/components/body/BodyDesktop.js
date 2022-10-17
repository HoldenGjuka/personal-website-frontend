import {BodyContainer, BlogSpaceContainer, SkillsContainer, 
        BlogHeader, BlogTitle, BlogBody, SkillsHeader,
        SkillsBody } 
        from "../../styles/body"
import { Box, Paper, Stack } from '@mui/material'
import { browserWidth } from "../../styles/theme"

export default function BodyDesktop({ matches }) {
  return (
    <BodyContainer>
      
      <BlogSpaceContainer>
        <Stack>
          <BlogHeader>Blog Space</BlogHeader>
          <Box sx={{height: 500, overflow: 'auto', minWidth: browserWidth * .7}}>
            <Paper sx={{elevation: 10,}}>
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </Paper>
            <Paper sx={{elevation: 10,}}>
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </Paper>
            <Paper sx={{elevation: 10,}}>
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </Paper>
            <Paper sx={{elevation: 10,}}>
              <BlogTitle>title</BlogTitle>
              <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
            </Paper>
          </Box>
        </Stack>
      </BlogSpaceContainer>
      
      <SkillsContainer>
        <Stack>
          <SkillsHeader>Skills and Courses</SkillsHeader>
          <SkillsBody>JavaScript, TypeScript, Java, Python</SkillsBody>
          <SkillsBody>Full Stack Development</SkillsBody>
          <SkillsBody>React, Django, GitHub, VS Code</SkillsBody>
        </Stack>
      </SkillsContainer>

    </BodyContainer>
  )
}