import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import sales from '../assets/img/masAdnri.png';

const ContactPage = () => {
    return (
        <div className='contactUs-page mt-5'>
            <div className='contactUs'>
                <Container>
                    <Row className='justify-content-center align-items-center'>
                        <Col md={6} className='mt-5 d-flex align-items-center justify-content-center' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <div className='contact-card-container'>
                                <Card className='contact-card me-md-3 me-0'>
                                    <Card.Img variant='top' src={sales} />
                                </Card>
                            </div>
                        </Col>
                        <Col md={6}>
                            <Card className='contact-card mt-5' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" >
                                <ListGroup variant='flush'>
                                    <ListGroup.Item className="mt-3">
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-solid fa-user"></i>
                                                <strong className="ms-3">Nama:</strong>
                                            </Col>
                                            <Col md={6}>
                                                Andrian
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="mt-3">
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-solid fa-phone"></i>
                                                <strong className='ms-3'>Telpon:</strong>
                                            </Col>
                                            <Col md={6}>
                                                0858-1721-1644
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="mt-3">
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-brands fa-instagram"></i>
                                                <strong className='ms-3'>Instagram:</strong>
                                            </Col>
                                            <Col md={6}>
                                                @promo_toyota.murah
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="mt-3">
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-solid fa-car"></i>
                                                <strong className='ms-3'>ShowRoom:</strong>
                                            </Col>
                                            <Col md={6}>
                                                Toyota Auto 2000 Ciledug
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                            <Card className='contact-card' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                <ListGroup variant='flush'>
                                    <ListGroup.Item className='mt-3'>
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-solid fa-location-dot"></i>
                                                <strong className='ms-3'>Alamat:</strong>
                                            </Col>
                                            <Col md={6}>
                                                Jl. Ciledug Raya No.16
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='mt-3'>
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-solid fa-user-tie"></i>
                                                <strong className='ms-3'>Jabatan:</strong>
                                            </Col>
                                            <Col md={6}>
                                                Sales Executive
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='mt-3'>
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-brands fa-whatsapp"></i>
                                                <strong className='ms-3'>Whatsapp:</strong>
                                            </Col>
                                            <Col md={6}>
                                                085817211644
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='mt-3'>
                                        <Row>
                                            <Col md={6}>
                                                <i class="fa-regular fa-envelope"></i>
                                                <strong className='ms-3'>Email:</strong>
                                            </Col>
                                            <Col md={6}>
                                                andrian.toyota.jkt@gmail.com
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Card className='mt-5' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <iframe
                                title='Google Maps Location'
                                width='100%'
                                height='300'
                                frameBorder='0'
                                style={{ border: '0' }}
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2039564078314!2d106.74538228090542!3d-6.236826063515652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f12603e463ed%3A0x6ebff0ee337ce30f!2sToyota%20Auto2000%20Ciledug!5e0!3m2!1sid!2sid!4v1700294302311!5m2!1sid!2sid'
                                allowFullScreen=''
                                aria-hidden='false'
                                tabIndex='0'
                            ></iframe>
                        </Card>
                    </Row>
                    <Row>
                        <div className='alamat mt-5' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <h1 className='fw-bold'>PT Astra Internasional Tbk <br />TOYOTA SALES OPERATION-CAB CILEDUG <br /></h1>

                        </div>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default ContactPage;
