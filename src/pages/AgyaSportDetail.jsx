import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AgyaSportGR from "../assets/img/agyaGRSport/1.jpg";
import AgyaSportGR1 from "../assets/img/agyaGRSport/9.png";
import AgyaSportGR2 from "../assets/img/agyaGRSport/10.jpg";
import AgyaSportGR3 from "../assets/img/agyaGRSport/11.jpg";
import AgyaSportGR4 from "../assets/img/agyaGRSport/12.jpg";
import AgyaSportGR5 from "../assets/img/agyaGRSport/13.jpg";
import AgyaSportGR6 from "../assets/img/agyaGRSport/14.jpg";
import AgyaSportGR7 from "../assets/img/agyaGRSport/15.jpg";
import { agyaGRSport, alphard, typeAgyaSport, typeAlphard } from '../data/index';
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

const AgyaSportDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={AgyaSportGR} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp167.900.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Agya Sport</h2>
                    </Col>
                </Row>
                <Row>
                    {agyaGRSport.map((data) => (
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
                        {typeAgyaSport.map((data) => (
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
                            <img src={AgyaSportGR1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>Style With No Boundaries</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={AgyaSportGR2} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>LED Headlamp & Illumination Lamp</h5>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={AgyaSportGR3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>15" Machined Alloy Wheel</h5>
                            <p>(GR-S Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={AgyaSportGR4} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Two Tone Roof</h5>
                            <p>(GR-S Type)</p>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Experience exceptional satisfation on every drive wtih the touch of advanced technologies that enhance your journey
                                .</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={AgyaSportGR5} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Exceptional Satisfaction with No Boundaries</h5>
                        <p>(GR-S Type)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={AgyaSportGR6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Sophisticated 8" Audio Head Unit with Mirrorlink & Back Camera</h5>
                            <p>Advance features that complimenting the interior while satisfying your senses. (GR-S Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={AgyaSportGR7} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Spacious Cabin</h5>
                            <p>(All Types)</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AgyaSportDetail;
