import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Projects() {
    return (
        <div>
            <Container id="projects">
                <Row>
                    <Col>
                        <h1 className="mt-2 text-center">My Projects</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card className="mt-2" mb-2>
                    <Card.Img variant="top" src="../img/image.png" />
                        <Card.Body>
                            <Card.Title>Todo App</Card.Title>
                            <Card.Text>
                                An App to give notes of day to day work.
                            </Card.Text>
                            <Button
                                onClick={()=> {
                                        window.open("https://jyothi-todoapp.netlify.app/")
                                }}
                            variant="primary">Live Demo</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    
                    <Col>
                    <Card className="mt-2" mb-2>
                    <Card.Img variant="top" src="../img/image.png" />
                        <Card.Body>
                            <Card.Title>Todo App</Card.Title>
                            <Card.Text>
                                An App to give notes of day to day work.
                            </Card.Text>
                            <Button
                                onClick={()=> {
                                        window.open("https://jyothi-todoapp.netlify.app/")
                                }}
                            variant="primary">Live Demo</Button>
                        </Card.Body>
                    </Card>
                    </Col>

                    <Col>
                    <Card className="mt-2" mb-2>
                    <Card.Img variant="top" src="../img/image.png" />
                        <Card.Body>
                            <Card.Title>Todo App</Card.Title>
                            <Card.Text>
                                An App to give notes of day to day work.
                            </Card.Text>
                            <Button
                                onClick={()=> {
                                        window.open("https://jyothi-todoapp.netlify.app/")
                                }}
                            variant="primary">Live Demo</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects
