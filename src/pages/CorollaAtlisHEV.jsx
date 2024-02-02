import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Innova from '../assets/img/corollaAtlis/1.jpg';
import Innova1 from "../assets/img/corollaAtlis/7.png";
import ExteriorInnova from "../assets/img/corollaAtlis/8.jpg";
import ExteriorInnova1 from "../assets/img/corollaAtlis/9.jpg";
import ExteriorInnova2 from "../assets/img/corollaAtlis/10.jpg";
import InteriorInnova from "../assets/img/corollaAtlis/11.jpg";
import InteriorInnova2 from "../assets/img/corollaAtlis/12.jpg";
import InteriorInnova3 from "../assets/img/corollaAtlis/13.jpg";
import { corollaAtlisHEV, typeCorollaAtlisHEV } from '../data/index';
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

const CorollaAtlisHEVDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Innova} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp620.100.000
                        </span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Land Cruiser</h2>
                    </Col>
                </Row>
                <Row>
                    {corollaAtlisHEV.map((data) => (
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
                        {typeCorollaAtlisHEV.map((data) => (
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
                            <p className='text-center'>Experience a whole new pleasure on the road for the greater good. The New Corolla Altis grants you advanced technology and sophisticated design to build an eco-friendly vehicle.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Car Front Side (HEV Type)</h5>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Dazzling Grille Design (All Type)</h5>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Striking 17" Alloy Wheels (All Type)</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>The advanced driving experience of the Toyota Hybrid System greets the future with excellent advantages.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Luxurious Interior (HEV Type)</h5>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Wireless Charger (All Type)</h5>
                            <p>The New Corolla Altis is made for you to stay connected to the world with the notable technology for your Qi wireless charging product.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Progressive 12.3" Color TFT MID (All Type)</h5>
                            <p>Satisfy your journey with the advanced large screen display to show lots of important driving-related information with several stunning options that you can customize.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CorollaAtlisHEVDetail;
