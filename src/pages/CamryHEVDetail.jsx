import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Camry from "../assets/img/camryHEV/1.jpg";
import Camry1 from "../assets/img/camryHEV/8.png";
import Camry2 from "../assets/img/camryHEV/9.jpg";
import Camry3 from "../assets/img/camryHEV/10.jpg";
import Camry4 from "../assets/img/camryHEV/11.jpg";
import Camry5 from "../assets/img/camryHEV/12.jpg";
import Camry6 from "../assets/img/camryHEV/13.jpg";
import Camry7 from "../assets/img/camryHEV/14.jpg";

import { camryHEVToyota, typeCamryToyota } from '../data/index';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ProductCard = ({ image, title, price, desc }) => (
    <Col className="productCard mt-4 d-flex align-items-center justify-content-center">
        <Card className="text-center w-100">
            <Card.Img src={image} alt={title} className='w-50' />
            <Card.Body>
                <Card.Title className='mt-4 fw-bold'>{title}</Card.Title>
                <Card.Text className='fw-bold fs-6'>{price}</Card.Text>
                <Card.Text className='fw-light'>{desc}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);

const CamryHEVDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Camry} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp799.300.000
                        </span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Camry</h2>
                    </Col>
                </Row>
                <Row>
                    {camryHEVToyota.map((data) => (
                        <ProductCard
                            key={data.id}
                            image={data.image}
                            title={data.title}
                            price={data.price}
                            desc={data.desc.join(' • ')}
                        />
                    ))}
                </Row>
                <div className="colorOptions mt-5">
                    <h3 className='text-center fw-bold mb-4'>Color Options</h3>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        className="mySwiper"
                    >
                        {typeCamryToyota.map((data) => (
                            <SwiperSlide key={data.id}>
                                <div className="swiper-card-wrapper">
                                    <div className="typeColorCar-card">
                                        <img src={data.image} alt="typeColorCar" className="d-block w-100" />
                                        <p className='mt-3 fw-bold'>{data.title}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="rotate-car">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>360° Visualizations</h3>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Camry1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>The extraordinary elegance.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Camry2} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Elegant LED Headlamp</h5>
                        <p>An elegant presence and delicate visibility for the finest journey ahead.
                            (HEV Type)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Camry3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Astonishing Front Bumper and Grille</h5>
                            <p>Black astonishing front bumper and grille make a majestic presence for the first impression.
                                (HEV Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Camry4} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Sharp-Edged LED Rear Lamp with Red Reflex Reflector</h5>
                            <p>Provides the dashing look and advanced image on the road.
                                (HEV Type)</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>More than luxurious comfort and sporty appeal, All New Camry offers driving experience like no other.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Camry5} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'> New Captivating Interior Design
                            Not just a luxurious presentation, the New Toyota Camry also gives you a convenient driving experience.</h5>
                        <p>(V Type)
                            *Actual Product may differ from the image shown</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Camry6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Adjustable Advanced Steering Wheel
                                To keep you always in control.</h5>
                            <p>(V Type)
                                *Actual Product may differ from the image shown</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Camry7} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Authentic Titanium Ornamentation</h5>
                            <p>Around the cabin that braces a suitable atmosphere that makes convenience is always in satisfaction.
                                (V Type)
                                *Actual Product may differ from the image shown</p>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    );
};

export default CamryHEVDetail;
