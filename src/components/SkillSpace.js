import React from 'react'

import { SkillsContainer, SkillsHeader, SkillsBody,
        SkillsBodyContainer, GreenHighlightSpanBox } 
        from "../styles/SkillSpace"

export default function Skills() {
  return (
    <SkillsContainer>
      <div>
        <SkillsHeader>
          <GreenHighlightSpanBox>
            Skills
          </GreenHighlightSpanBox>
        </SkillsHeader>
        <SkillsBodyContainer>
          <SkillsBody>Full Stack Dev   </SkillsBody>
          <SkillsBody>React</SkillsBody>
          <SkillsBody>Django</SkillsBody>
          <SkillsBody>GitHub</SkillsBody>
          <SkillsBody>VS Code</SkillsBody>
          <SkillsBody>JavaScript</SkillsBody>
          <SkillsBody>TypeScript</SkillsBody>
          <SkillsBody>Java</SkillsBody>
          <SkillsBody>Python</SkillsBody>
        </SkillsBodyContainer>
      </div>
    </SkillsContainer>
  )
}