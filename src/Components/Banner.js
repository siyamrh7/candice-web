import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Carousel } from 'react-bootstrap';
import CardMini from './CardMini';
import Card from './Card';

function Banner() {
    return (
        <>



            <Container>
                <Row>
                    <Col sm={12} className='p45'>
                        <h1 className='section_heading'>The easy, reliable way to take care of your home.</h1>
                    </Col>

                    <Col xs={12} className='p60'>
                        <Row>
                            <Col md={4} sm={4}>
                                <CardMini imgsrc={process.env.PUBLIC_URL + '/images/svg1.svg'} title='home cleaing'></CardMini>
                            </Col>
                            <Col md={4} sm={4}>
                                <CardMini imgsrc={process.env.PUBLIC_URL + '/images/svg2.svg'} title='Health & Beauty'></CardMini>
                            </Col>
                            <Col md={4} sm={4}>
                                <CardMini imgsrc={process.env.PUBLIC_URL + '/images/svg3.svg'} title='Repair'></CardMini>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* First Row */}


                <Row>
                    <Col sm={12}>
                        <h1 className='section_heading'>Cleaning and Handyman Tasks</h1>

                    </Col>
                    <Col sm={12} className='pt-3'>
                        <h5 className='text-color'>Instantly book highly rated pros for cleaning and handyman tasks at an upfront price.</h5>

                    </Col>
                </Row>
                {/* First Slider Heading */}


                <Row className='p45'>
                    <Carousel fade>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all1.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all2.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all3.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all4.jpg'} heading="home cleaing"></Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all5.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all6.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all7.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all8.jpg'} heading="home cleaing"></Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all9.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all10.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all11.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all12.jpg'} heading="home cleaing"></Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>

                {/* First Slider */}



                <Row>
                    <Col sm={12}>
                        <h1 className='section_heading py-2'>Home Furniture with Assembly Included</h1>

                    </Col>
                    <Col sm={12} className='pt-3'>
                        <h5 className='text-color'>Instantly book highly rated pros for cleaning and handyman tasks at an upfront price.</h5>

                    </Col>
                </Row>
                {/* Second Slider Heading */}


                <Row className='p45'>
                    <Carousel fade>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all1.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all2.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all3.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all4.jpg'} heading="home cleaing"></Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all5.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all6.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all7.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all8.jpg'} heading="home cleaing"></Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Row>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all9.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all10.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all11.jpg'} heading="home cleaing"></Card>
                                </Col>
                                <Col md={3} sm={6}>
                                    <Card imgSrc={process.env.PUBLIC_URL + '/images/all12.jpg'} heading="home cleaing"></Card>
                                </Col>
                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                {/* Second Slider */}

            </Container>



        </>

    );
}

export default Banner;