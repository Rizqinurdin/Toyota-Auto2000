import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Raf4 from '../assets/img/raf4/1.jpg';
import ExteriorRaf4 from "../assets/img/raf4/5.jpg";
import ExteriorRaf41 from "../assets/img/raf4/6.jpg";
import ExteriorRaf42 from "../assets/img/raf4/7.jpg";
import InteriorRaf4 from "../assets/img/raf4/8.jpg";
import InteriorRaf42 from "../assets/img/raf4/9.jpg";
import InteriorRaf43 from "../assets/img/raf4/10.jpg";
import { rav4grsport, typeRav4 } from '../data/index';
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

const Raf4GRSport = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Raf4} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>

                            Rp1.150.000.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New RAV4 GR Sport PHEV</h2>
                    </Col>
                </Row>
                <Row>
                    {rav4grsport.map((data) => (
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
                        {typeRav4.map((data) => (
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
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>Control your adventure. From enjoying the city lights to overcoming the rough terrains, everything is arranged with its versatile yet elegant design.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorRaf4} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Bold Radiator Grille</h5>
                        <p>Embedded with the GR emblem, the exclusive Bold Radiator Grille will elevate the outstanding driving experience with its rough yet discerning look.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorRaf41} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Sporty Lower Front Bumper</h5>
                            <p>Creates a majestic presence with Lower Front Bumper that will dignify your adventurous driving experience.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorRaf42} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Fog Lamp Bezel</h5>
                            <p>Ignite every ride with the Fog Lamp Bezel that comes with significant shape and great visibility it gives for your rambles.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Elegant Interior with the progressive technology to bring limitless entertainment around the vehicle's interior</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorRaf4} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Elegant Interior</h5>
                        <p>Amplify your journey with the progressive technology to bring limitless entertainment with Dark Gray Metallic Ornament attached around the vehicle's interior.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorRaf42} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>10.3-Inch Wide Display Audio System</h5>
                            <p>Stay connected in all journeys with the 10.3-Inch Toyota Auto Multimedia, equipped with Smartphone Connectivity and Navigation System for boundless enjoyment.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorRaf43} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Dual AC with White Lighting Switches and Display</h5>
                            <p>Control the air distribution system as you desire with the Dual AC equipped, along with White Lighting Switches and Display for powerful impression anywhere.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Raf4GRSport;
