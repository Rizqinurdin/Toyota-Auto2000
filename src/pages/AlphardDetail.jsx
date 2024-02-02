import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Alphard from '../assets/img/alphard/1.jpg';
import Alphard1 from "../assets/img/alphard/7.png";
import ExteriorAlphard from "../assets/img/alphard/8.jpg";
import ExteriorAlphard1 from "../assets/img/alphard/9.jpg";
import ExteriorAlphard2 from "../assets/img/alphard/10.jpg";
import InteriorAlphard from "../assets/img/alphard/11.jpg";
import InteriorAlphard1 from "../assets/img/alphard/12.jpg";
import InteriorAlphard2 from "../assets/img/alphard/13.jpg";
import { alphard, typeAlphard } from '../data/index';
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

const AlphardDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Alphard} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>

                            Rp1.372.100.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Alphard HEV</h2>
                    </Col>
                </Row>
                <Row>
                    {alphard.map((data) => (
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
                        {typeAlphard.map((data) => (
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
                            <img src={Alphard1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>Discover every path with the next level luxury Toyota All New Alphard HEV along with Modellista design to contribute more for the environment.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorAlphard} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Luxury Front Grille
                            The elegance and luxurious Front Grille design mark your presence wherever you go. (All Type)</h5>
                        <p>Leave a lasting impression with a New Formidable Design Front Grille and New Front Bumper where The New Advanced LED Headlamp <br />with Sequential Turnlamp and The New Fog Lamp will progressively enhance your presence on the road.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorAlphard1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Sharp LED Headlamp</h5>
                            <p>Bring stylish look and add powerful eyes for your vehicle in every journey with the sharp LED Headlamp design (All Type) and DRL (G & HEV Type).</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorAlphard2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Rear Combination Lamp</h5>
                            <p>Classy and sharp shine from Rear Combination Lamp to accompany you in every road. (All Type)</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>The luxurious design and advance features to satisfy in every drive.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorAlphard} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Captain Seat</h5>
                        <p>Experience convenience throughout every journey on Captain Seat (All Type) supported Detachable Smartphone-like Remote Control (HEV Type)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorAlphard1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Rear Side Shade</h5>
                            <p>For private ambience and adjustable Rear Side Shade. (All Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorAlphard2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>The Extravagance Interior Design</h5>
                            <p>The luxurious design and advance features including Steering Wheel, MID, Head Unit Display (All Type), and DVR (G & HEV Type) to satisfy you in every drive.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default AlphardDetail;
