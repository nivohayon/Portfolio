import React from 'react'
import { Container } from 'react-bootstrap'
import { contact } from '../../PortfolioData'
import "../Contact/Contact.css"

function Contact() {
    return (
        <Container id="Contact">
            <h1 id="title" onClick={()=>{
                navigator.clipboard.writeText(contact.email)
            }}>Contact</h1>
                {contact && (
                        <span type='button' title="nivohayon1582@gmail.com" className='contactbtn contactbtn--outline'>
                        Email Me
                        </span>
                )}
        </Container>
    )
}

export default Contact
