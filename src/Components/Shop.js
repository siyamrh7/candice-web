import React from 'react';
import { Container, Row, Col, Carousel, ListGroup, Card } from 'react-bootstrap';

function Shop(props) {
    return (
        <Container>
            <Row>
                <Col md={8}>
                    <h4>I will create a wordpress website or wordpress website design</h4>

                    <div className='sgInfo py-4'>
                        <img src={process.env.PUBLIC_URL + '/images/all4.jpg'} alt="" srcset="" /> &nbsp; <span>ahmadubaid
                        </span> &nbsp;
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i>
                        <i class="fas fa-star text-warning"></i> 8 (2 orders in queue)
                    </div>








                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/all4.jpg'}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/all4.jpg'}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={process.env.PUBLIC_URL + '/images/all4.jpg'}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                    <div className='aGig py-5'>
                        <h4>About the gig</h4>
                        <p>Full wordpress sites creation, Landing page, New look to old Sites, Business websites, E-commerce sites, wordpress blogs.</p>
                        <p>Hi, I'm Ahmad , having 6 years of experience in  WordPress Development and Designing. I can custom design a Wordpress Website or tailor it to your specific business needs. I provide the highest quality service at the most competitive and affordable pricing.</p>

                        <h4><b>You will get:</b></h4>
                        <ListGroup>
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </div>
                    {/* About Gig */}


                    <div className='agSeller pb-4'>
                        <Card className='d-flex justify-content-between flex-row align-items-center px-3 border-0 pb-4'>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/all4.jpg'} />
                            <Card.Body className='d-flex justify-content-between flex-column'>
                                <Card.Title className='mb-0'>Seller Name</Card.Title>
                                <div className='py-1 text-black-50'><span>ard working and creative
                                </span> &nbsp;</div>
                                <div><i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i> 5 (8) &nbsp;</div>
                                <a href="http://" className='w-50 text-center px-0 mt-2'>Contact</a>
                            </Card.Body>
                        </Card>


                        <div className='border px-4'>
                            <div className='d-flex justify-content-between py-3'>
                                <div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>

                                </div>
                                {/* First Div */}
                                <div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>
                                    <div className='pb-3 fs-6 fw-bold'>
                                        <p className='text-black-50'>From</p>
                                        <p>Bangladesh</p>
                                    </div>

                                </div>
                                {/* Second Div */}
                            </div>
                            <hr />

                            <p className='pb-4'>Hi, I am Software engineer working as wordpress website developer for over 6 years. I have firm believe on hardworking and creativity. I can design and develop your website according to high standard of market.</p>
                        </div>
                    </div>
                    {/* About Seller */}
                </Col>
                {/* Left Side */}
                <Col md={4} className='priceList d-flex align-item-center flex-column'>
                    <div className='pTitle d-flex justify-content-between'>
                        <h6><b>Bronze Package</b></h6>
                        <p><b>$560</b></p>
                    </div>
                    <p>For any CSS/ HTML issue, new website, editing in current website, PSD TO HTML</p>
                    <div className='d-flex justify-content-between fw-bold pb-3'>
                        <span><i class="fas fa-clock text-color"></i> &nbsp; 3 Days Delivery</span>
                        <span><i class="fas fa-history text-color"></i> &nbsp; Unlimited Revisions</span>
                    </div>
                    <ul>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                        <li><i class="fas fa-check text-color"></i> &nbsp; Design Customization</li>
                    </ul>
                    <div className='d-flex justify-content-center pt-3'>
                    <a href="">Contuine ($560)</a>
                    </div>
                </Col>
                {/* Right Side */}
            </Row>
        </Container>
    );
}

export default Shop;