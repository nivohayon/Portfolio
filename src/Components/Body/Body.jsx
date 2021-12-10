import React from 'react'
import Projects from '../Projects/Projects'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import { Container } from 'react-bootstrap'

function Body() {
    return (
        <Container>
            <About />
            <Projects />
            <Skills />
            <Contact />
        </Container>
    )
}

export default Body
