import {BodyContainer, BlogSpaceContainer, SkillsContainer, 
        BlogHeader, BlogTitle, BlogBody, BlogPostStack, SkillsHeader,
        SkillsBody } 
        from "../../styles/body"
import { Stack } from '@mui/material'

export default function BodyDesktop({ matches }) {
  return (
    <BodyContainer>
      
      <BlogSpaceContainer>
        <BlogPostStack>
          <BlogHeader>asdf</BlogHeader>
          <BlogTitle>title</BlogTitle>
          <BlogBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</BlogBody>
        </BlogPostStack>
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