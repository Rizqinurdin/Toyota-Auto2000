import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Innova from '../assets/img/fortuner/1.jpg';
import Innova1 from "../assets/img/fortuner/10.png";
import ExteriorInnova from "../assets/img/fortuner/11.jpg";
import ExteriorInnova1 from "../assets/img/fortuner/12.jpg";
import ExteriorInnova2 from "../assets/img/fortuner/13.jpg";
import InteriorInnova from "../assets/img/fortuner/14.jpg";
import InteriorInnova2 from "../assets/img/fortuner/15.jpg";
import InteriorInnova3 from "../assets/img/fortuner/16.jpg";
import { fortunerToyota, innovaZenix, typeFortunerToyota, typeInnova, } from '../data/index';
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

const FortunerDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Innova} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp564.200.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  New Fortuner GR Sport</h2>
                    </Col>
                </Row>
                <Row>
                    {fortunerToyota.map((data) => (
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
                        {typeFortunerToyota.map((data) => (
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
                            <p className='text-center'>Dominates with virtue. The true definition of dominance is crafted in the new model of Fortuner. One of strongest model that complete with all the primary specification and powered with a 4x4 function.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Front Bumper Spoiler & Grille with GR Emblem (GR Sport Type)</h5>
                        <p>An exclusive GR emblem is embedded on the Front Bumper Grille along with the New Front Bumper Spoiler that will add your divine style as you roam any street firmly.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Black Alloy Wheel (GR Sport Type)</h5>
                            <p>A stunning design of rigorousness that blends with every sporty journey.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New GR Side Sticker (GR Sport Type)</h5>
                            <p>Bold impression for captivating side exterior.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>The world Dominator. The combination of strength, sport appearance, and elegant design at the same time makes its performance stunning on all terrains.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Sporty Interior Design (GR Sport Type)</h5>
                        <p>The elegant black color gives the impression of luxury but also immediately gives a sporty image.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New GR Scuff Plate (GR Sport Type)</h5>
                            <p>Adding more bold protection in style with the exclusive GR emblem.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New GR Floor Mat (GR Sport Type)</h5>
                            <p>The delicate GR Floor Mat to welcome you on every sporty journey that you take.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default FortunerDetail;
