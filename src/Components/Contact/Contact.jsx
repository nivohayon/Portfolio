import React from 'react'
import { Container } from 'react-bootstrap'
import { contact } from '../../PortfolioData'
import "../Contact/Contact.css"

function Contact() {
    return (
        <Container id="Contact">
            <h1 id="title">Contact</h1>
                {contact && (
                        <span type='button'  onClick={()=>{
                            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                                window.open(`mailto:${contact.email}`)
                            }
                            else {
                                window.open(`https://mail.google.com/mail/?view=cm&source=mailto&to=${contact.email}`)
                            }
                        }} title="nivohayon1582@gmail.com" className='contactbtn contactbtn--outline'>
                        Email Me
                        </span>
                )}
        </Container>
    )
}

export default Contact
