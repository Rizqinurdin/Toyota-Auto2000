import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Innova from '../assets/img/innovaZenix/1.jpg';
import Innova1 from "../assets/img/innova/9.png";
import ExteriorInnova from "../assets/img/innova/10.jpg";
import ExteriorInnova1 from "../assets/img/innova/11.jpg";
import ExteriorInnova2 from "../assets/img/innova/12.jpg";
import InteriorInnova from "../assets/img/innova/13.jpg";
import InteriorInnova2 from "../assets/img/innova/14.jpg";
import InteriorInnova3 from "../assets/img/innova/15.jpg";
import { innovaZenix, typeInnova, } from '../data/index';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ProductCard = ({ image, title, price, desc }) => (
    <Col md={4} className="productCard mt-4">
        <Card className="text-center">
            <Card.Img src={image} alt={title} />
            <Card.Body>
                <Card.Title className='mt-4 fw-bold'>{title}</Card.Title>
                <Card.Text className='fw-bold fs-6'>{price}</Card.Text>
                <Card.Text className='fw-light'>{desc}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);

const InnovaZenixDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Innova} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp471.600.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Kijang Innova Zenix HEV</h2>
                    </Col>
                </Row>
                <Row>
                    {innovaZenix.map((data) => (
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
                        {typeInnova.map((data) => (
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
                            <img src={Innova1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>Cross Over to Energize Today</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Crossover Front Looks (All Type)</h5>
                        <p>Expanse your delicate driving moment with the new Front Grille design where the LED Headlamp (All Type), DRL, & Foglamp (Q HEV Type) made flawlessly to make every head turn for your greater journey.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Fascinating 18" Alloy Wheel (All Q HEV Type)</h5>
                            <p>The greater diameter of the tire comes up with a picture-perfect design in a super chrome painting to take you on a grand journey ahead.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Power Backdoor with Voice Command (All Q HEV Type)</h5>
                            <p>Roam effortlessly as The All-New Kijang Innova Zenix is completed with voice command technology to assist you in opening and closing the back door by the slight of your voice.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Cross Over to The New Breathtaking Space</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Captain Seat with Ottoman (All Q HEV Type)</h5>
                        <p>Comes with an Electric Seat and New Leg Rest bringing all kinds of ease in every distinguished journey ahead. <br /> it provides a solace sensation of convenience when crossing over with The All-New Kijang Innova Zenix.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New 10" Dual Rear Seat Entertaiment (All Q HEV & All V Type)</h5>
                            <p>The first in class 10" Dual Rear Seat Entertainment with internet connection that can be played independently.
                                *Also Available without RSE in V Gasoline Type</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Impressive Cabin (All Type)</h5>
                            <p>The rigidity from and equal comfort in all seat rows are perfectly emphasized by the more spacious cabin for the 2nd and 3rd rows, along with the light feel and the driving stability that is created by the finer suspension..</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default InnovaZenixDetail;
