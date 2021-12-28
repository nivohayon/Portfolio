import React from 'react'
import { Container, Row } from 'react-bootstrap'
import "../Skills/Skills.css"
import { skills } from '../../PortfolioData'

function Skills() {
    return (
        <Container id="Skills">
            <h1 id="title">Skills</h1>
            <Container style={{ width:"60%"}}>
                <Row id="SkillRow">
                    {
                        skills.length &&
                        skills.map((skill)=>
                        <div key={skill} className='HoverDiv'>
                            <div id="SkillItem" className="btn">
                                {skill}
                            </div>
                        </div>
                        )
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default Skills
