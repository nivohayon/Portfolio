import './Projects.css'
import { projects } from '../../PortfolioData'
import { Card, Col, Container, Row } from 'react-bootstrap'

function Projects()
{
  const handleLinks = (index, e)=>{
    switch(e.target.id)
    {
      case "github": window.open(projects[index].sourceCode)
      break;
      case "external": window.open(projects[index].livePreview)
      break;
      default: window.location.reload()
      break;
    }
  }

  return(
      <Container id="Projects">
        <h1 id="title">Projects</h1>
        <Row>
          {
            projects.length &&
            projects.map((project, index)=>
                <Col style={{ marginTop:"1.5em", display:"flex", justifyContent:"center"}} key={index}>
                  <Card style={{ width: '18em', textAlign:"center", boxShadow:"0 0 2vh #999999", borderStyle:"none", borderRadius:"5%"}}>
                    <Card.Body style={{borderRadius:"5%"}}>
                      <Card.Title><p className="projName">{project.name}</p></Card.Title>
                      <p className="projDesc">{project.description}</p>
                      <Container className="center">
                        <Row>
                          {project.stack?.map((lang)=>
                            <Col className='projectStackItem' key={lang}>
                              <p>{lang}</p>
                            </Col>
                          )}
                        </Row>
                      </Container>
                      <Container id="link">
                        <Row>
                          <Col><i onClick={(e)=>handleLinks(index, e)} id="github" title="GitHub" className="bi bi-github linkitem"></i></Col>
                          <Col><i onClick={(e)=>handleLinks(index, e)} id="external" title="External Link" className="bi bi-box-arrow-up-right linkitem"></i></Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </Col>
              )
          }
        </Row>
      </Container>
  )
}

export default Projects