import React from 'react';
import { Col, Container, Row, Form, FloatingLabel } from 'react-bootstrap';



const CreateGig = () => {
    return (
       <div className='gs h-100'>
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form>

                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                Gig Title
                            </Form.Label>
                            <Col sm={10}>
                                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '130px' }}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalEmail">
                            <Form.Label column sm={2}>
                                category
                            </Form.Label>
                            <Col sm={5}>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col sm={5}>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-5" controlId="formHorizontalPassword">
                            <Form.Label column sm={2}>
                                Search Tag
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" />
                            </Col>
                        </Form.Group>

                    </Form>
                </Col>
            </Row>
        </Container>

       </div>
    );
};

export default CreateGig;