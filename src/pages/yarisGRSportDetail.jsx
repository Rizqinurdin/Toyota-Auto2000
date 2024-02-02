import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Yaris from "../assets/img/yarisGRSport/1.jpg";
import Yaris1 from "../assets/img/yarisGRSport/8.png";
import Yaris2 from "../assets/img/yarisGRSport/9.jpg";
import Yaris3 from "../assets/img/yarisGRSport/10.jpg";
import Yaris4 from "../assets/img/yarisGRSport/11.jpg";
import Yaris5 from "../assets/img/yarisGRSport/12.jpg";
import Yaris6 from "../assets/img/yarisGRSport/13.jpg";
import Yaris7 from "../assets/img/yarisGRSport/14.jpg";
import { typeYarisGRSport, yarisGRSportToyota } from '../data/index';
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

const yarisGRSportDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Yaris} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>Rp326.100.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your All New Yaris GR Sport</h2>
                    </Col>
                </Row>
                <Row>
                    {yarisGRSportToyota.map((data) => (
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
                        {typeYarisGRSport.map((data) => (
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
                            <img src={Yaris1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>The new speedy hatchback that ready to excite the roads as the sporty yet stylish bi-tone design, provide head-turning agility and persuasive sensation in every turn.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Yaris2} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Front Look with GR Emblem</h5>
                        <p>More confident on every road with a bold look emblem along with LED Headlamp and Fog Lamp remarkable design.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Yaris3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Eye-Catching Tape Stripes</h5>
                            <p>Boost your driving experience with bolder move from the New Tape Stripes Design and Black Alloy Wheel.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Yaris4} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Black Outer Mirror Design</h5>
                            <p>The sporty design that enhance your fascinating look on the road.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Prepare for the Toyota Yaris new model. Led by the new front look design and new high-end technology that cause a head-turning situation in any way it perform.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Yaris5} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Sporty Look Interior</h5>
                        <p>With supported smartphone connectivity and panaromic view monitor.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Yaris6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Panoramic View Monitor with 9" Head Unit</h5>
                            <p>Bigger Head Unit with Smartphone Connectivity to experience more and completed with New Panoramic View Monitor.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Yaris7} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Sporty Seat with GR Headrest</h5>
                            <p>More convenient when you drive with the new seat material.
                                (All Type)</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default yarisGRSportDetail;
