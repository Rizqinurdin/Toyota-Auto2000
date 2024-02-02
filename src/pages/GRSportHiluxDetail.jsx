import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import GRSportHilux from "../assets/img/GRSportHilux/1.jpg"
import GRSportHilux1 from "../assets/img/GRSportHilux/5.jpg"
import GRSportHilux2 from "../assets/img/GRSportHilux/6.jpg"
import GRSportHilux3 from "../assets/img/GRSportHilux/7.jpg"
import GRSportHilux4 from "../assets/img/GRSportHilux/8.jpg"
import GRSportHilux5 from "../assets/img/GRSportHilux/9.jpg"
import GRSportHilux6 from "../assets/img/GRSportHilux/10.jpg"
import { toyotaGR86, toyotaGRSportHilux, typeGR86, typeToyotaGRSportHilux } from '../data/index';
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

const GRSportHiluxDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={GRSportHilux} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp785.800.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your New Hilux GR Sport</h2>
                    </Col>
                </Row>
                <Row>
                    {toyotaGRSportHilux.map((data) => (
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
                        {typeToyotaGRSportHilux.map((data) => (
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
                            <p className='text-center'>Beyond Exterior
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={GRSportHilux1} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Tough Front Grille & Bumper Extension</h5>
                        <p>Ramble every journey with the exclusive New Front Grille and Bumper Extension that adds the doughty experience on every fierce road..</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={GRSportHilux2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Exclusive LED Headlamp & Fog Lamp Bezel</h5>
                            <p>A blazing LED Headlamp that will illuminate your bold adventure even in daylight hours and a Fog Lamp Bezel that is made with detailed attention for great visibility.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={GRSportHilux3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New GR Sport Bar with Deck Guard</h5>
                            <p>A solid Deck Guard for powerful protection with the sporty design as the GR Sport Bar is binded on the rear side.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Beyond Interior</p>
                        </Col>
                    </Row>
                    <Row>

                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={GRSportHilux4} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Sturdy Full Dashboard</h5>
                        <p>Sense the undivided sporty feeling with the full black color design.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={GRSportHilux5} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Advanced 8-inch Head Unit</h5>
                            <p>Perceive premium connectivity wherever you go as the 8-inch Multimedia System is attached to link you to the broader journey and gives you full control.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={GRSportHilux6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New GR Seat with Leather Suede Material</h5>
                            <p>Adding more solace while you capture all the bold experiences with the elegant feeling of leather suede.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default GRSportHiluxDetail;
