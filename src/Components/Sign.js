import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Forms from './Forms';
function Sign(props) {
    return (
        <Container className='pb-5'>
            <Row>
                <Col sm={{ span: 8, offset: 2 }}>

                    <Forms></Forms>
                </Col>
            </Row>
        </Container>
    );
}

export default Sign;