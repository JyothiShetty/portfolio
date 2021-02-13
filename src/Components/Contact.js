import React from 'react'
import { Col, Row, Form, Button, Container, Card } from 'react-bootstrap'


function Contact() {
    return (
        <div className="container-fluid bg-dark" id="contact">
            
           <Row>
               <Col>
                <h1 className="text-center m-4 text-light">Contact Me</h1>
               </Col>
            </Row>
            <Col sm="12" lg="8" md="8" className="container-fluid text-light">
            <Form action="https://formspree.io/f/xeqprpjk" method="POST">
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name="name" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Enter Message</Form.Label>
                    <Form.Control as="textarea" type="message" name="message" placeholder="Enter message here"  rows={3} />
                </Form.Group>

                <Button variant="primary" value="Send" type="submit">
                    Send
                </Button>
            </Form>
            </Col>
        </div>
    )
}

export default Contact
