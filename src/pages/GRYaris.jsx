import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import BannerYaris from "../assets/img/yaris/1.jpg";
import Yaris from '../assets/img/yaris/11.jpg';
import Yaris1 from '../assets/img/yaris/12.jpg';
import Yaris2 from '../assets/img/yaris/13.jpg';
import Yaris3 from '../assets/img/yaris/14.jpg';
import Yaris4 from '../assets/img/yaris/15.jpg';
import Yaris5 from '../assets/img/yaris/16.jpg';
import Yaris6 from '../assets/img/yaris/10.png';
import { alphard, typeAlphard, typeyarisGR, yarisGR } from '../data/index';
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

const GRYaris = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={BannerYaris} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>

                            Rp440.600.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Yaris Cross HEV</h2>
                    </Col>
                </Row>
                <Row>
                    {yarisGR.map((data) => (
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
                        {typeyarisGR.map((data) => (
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
                            <img src={Yaris6} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>The adventurous soul with urban lifestyle fused into one delicate design.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Yaris} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Seamless Electric Power Back Door with Kick Sensor (All S Type)</h5>
                        <p>Conveniently open and close the back door with only a swipe of your feet.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Yaris1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Stunning 18" Alloy Wheel (All S Type)</h5>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Yaris2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Blazing LED Headlamp with DLR & Follow Me Home (All S Type)</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Energizing comfort for your artive and stylish lifestyle</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Yaris3} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Fancy Panoramic Glass Roof with Power Sunshade (All HV Type)
                        </h5>
                        <p>Enjoy the sky scenery with the advance technology.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Yaris4} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Marvelous 10.1" Display Audio with Wireless Smartphone Connectivity (All S Type)</h5>
                            <p>Fulfill your senses and stay seamlessly connected through advanced multimedia system.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Yaris5} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Multicolor Ambient Illumination Light with Voice Command Control (All HV Type)</h5>
                            <p>Set up your mood according to your heart with 14 color choices.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default GRYaris;
