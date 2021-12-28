import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
                        <Col key={skill} id='HoverDiv'>
                            <div id="SkillItem" className="btn">
                                {skill}
                            </div>
                        </Col>
                        )
                    }
                </Row>
            </Container>
        </Container>
    )
}

export default Skills
