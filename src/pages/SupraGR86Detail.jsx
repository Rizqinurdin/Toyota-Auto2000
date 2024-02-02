import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GR86 from "../assets/img/GR86/1.jpg";
import GR861 from "../assets/img/GR86/9.png";
import GR862 from "../assets/img/GR86/10.jpg";
import GR863 from "../assets/img/GR86/11.jpg";
import GR864 from "../assets/img/GR86/12.jpg";
import GR865 from "../assets/img/GR86/13.jpg";
import GR866 from "../assets/img/GR86/14.jpg";
import GR867 from "../assets/img/GR86/15.jpg";
import { toyotaGR86, typeGR86 } from '../data/index';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const ProductCard = ({ image, title, price, desc }) => (
    <Col className="productCard mt-4 d-flex align-items-center justify-content-center">
        <Card className="text-center w-50">
            <Card.Img src={image} alt={title} className='w-50' />
            <Card.Body>
                <Card.Title className='mt-4 fw-bold'>{title}</Card.Title>
                <Card.Text className='fw-bold fs-6'>{price}</Card.Text>
                <Card.Text className='fw-light'>{desc}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);

const SupraGR86Detail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={GR86} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp998.600.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your New GR Supra 86</h2>
                    </Col>
                </Row>
                <Row>
                    {toyotaGR86.map((data) => (
                        <ProductCard
                            key={data.id}
                            image={data.image}
                            title={data.title}
                            price={data.price}
                            desc={data.desc.join(' • ')} // Gabungkan dengan tanda bullet
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
                        {typeGR86.map((data) => (
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
                            <img src={GR861} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>With A More Stylish and Sporty Design Concept
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={GR862} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Prominent Front Bumper Spoiler & Grille</h5>
                        <p>The front look features the GR-specific functional MATRIX Grille and Aerodynamic Front Bumper Spoiler with GR Emblem, which fuses performance and emotionality.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={GR863} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Powerful GR Rear Bumper Spoiler</h5>
                            <p>The formidable rear bumper design creates aggressive touch and aerodynamic performance to own any road.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={GR864} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>GR 86 Grade Emblem</h5>
                            <p>To mark its evolution from the previous generation of 86, the grade emblem is redesigned by combining the classic 86 and Toyota Gazoo Racing logo</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Now comes with a more aggressive appearance and gives the impression of sporty while riding. A most qualified cabin in its class.</p>
                        </Col>
                    </Row>
                    <Row>

                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={GR865} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Sporty Dashboard</h5>
                        <p>The GR red and black colors are available to create a racing-excitement feeling as the leather, and ultra suede materials also give driving convenience inside.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={GR866} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Advance 8" Head Unit with Smartphone Connectivity</h5>
                            <p>A suite of connected services, such as smartphone connectivity, helps you seamlessly stay connected, as the GR logo will welcome you from the start.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={GR867} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Air Purifier</h5>
                            <p>Pleasant Air Purifier to create immeasurable pleasure in every driving moment.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default SupraGR86Detail;
