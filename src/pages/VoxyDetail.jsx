import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Voxy from '../assets/img/voxy/1.jpg';
import Voxy1 from "../assets/img/voxy/6.png";
import ExteriorVoxy from "../assets/img/voxy/7.jpg";
import ExteriorVoxy1 from "../assets/img/voxy/8.jpg";
import ExteriorVoxy2 from "../assets/img/voxy/9.jpg";
import InteriorVoxy from "../assets/img/voxy/10.jpg";
import InteriorVoxy1 from "../assets/img/voxy/11.jpg";
import InteriorVoxy2 from "../assets/img/voxy/12.jpg";
import { voxy, typeVoxy } from '../data/index';
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

const VoxyDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Voxy} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>Rp607.800.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your All New Voxy</h2>
                    </Col>
                </Row>
                <Row>
                    {voxy.map((data) => (
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
                        {typeVoxy.map((data) => (
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
                            <img src={Voxy1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>Elevation On Every Design
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorVoxy} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Resilient Front Bumper And Intriguing Grille Design</h5>
                        <p>Crafted to represent your exquisite and radiant personality.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorVoxy1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Bold Headlamp Design</h5>
                            <p>Detail-oriented design that makes a captivating overall looks.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorVoxy2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Dual Sliding Door With New Kick Sensor</h5>
                            <p>A motion sensor below the power sliding door, enables the door slides as simple as swipe with the foot.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Elevation On Every Distinctions</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorVoxy} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Extravagant Cabin</h5>
                        <p>Exquisite cabin with well-tailored seats made from high quality fabric with first class leather on the side, to enhance your comfort, the seats could be arranged easily.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorVoxy1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Flexible Seat Arrangement </h5>
                            <p>For a bigger trunk, simply lift the 3rd row seat into the side. For a comfortable long journey, simply connect the 2nd row with 3rd row. For a restful time, the seat can be flexed into a level bed, allows you to sleep soundly.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorVoxy2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Convenient Panoramic View Monitor</h5>
                            <p>The luxurious design and advance features including Steering Wheel, MID, Head Unit Display (All Type), and DVR (G & HEV Type) to satisfy you in every drive.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default VoxyDetail;
