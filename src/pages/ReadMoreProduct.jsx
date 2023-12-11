import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AvanzaVeloz from '../assets/img/avanzavelozReadMore.jpg';
import Innova from "../assets/img/tt.png";
import ExteriorVeloz from "../assets/img/exteriorveloz.jpg";
import ExteriorVeloz1 from "../assets/img/exteriorveloz1.jpg";
import ExteriorVeloz2 from "../assets/img/exteriorveloz2.jpg";
import InteriorVeloz from "../assets/img/interiorveloz.jpg";
import InteriorVeloz1 from "../assets/img/interiorveloz1.jpg";
import InteriorVeloz2 from "../assets/img/interiorveloz2.jpg";
import { type, veloz } from '../data/index';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
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
                <Card.Text className='fw-bold'>{price}</Card.Text>
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);

const ReadMoreProduct = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={AvanzaVeloz} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>Rp.288.700.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your All New Veloz</h2>
                    </Col>
                </Row>
                <Row>
                    {veloz.map((data) => (
                        <ProductCard
                            key={data.id}
                            image={data.image}
                            title={data.title}
                            price={data.price}
                            desc={data.desc}
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
                        {type.map((data) => (
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
                            <img src={Innova} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>The All New Veloz comes with an attractive intention yet more challenging look in every way</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorVeloz} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Distinctive Front Looks (All Type)</h5>
                        <p>Leave a lasting impression with a New Formidable Design Front Grille and New Front Bumper where The New Advanced LED Headlamp <br />with Sequential Turnlamp and The New Fog Lamp will progressively enhance your presence on the road.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorVeloz1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Sturdy Rear Bumper (All Type)</h5>
                            <p>Crafted with attention to detail that transmit aggressive looks in every way.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorVeloz2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Progressive Rear Combination Lamp with Full Backdoor LED (All Type)</h5>
                            <p>Fullback door tail LED rear combination lamp will take your presence even more for your comfort and stylish journey ahead.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>The all New Veloz is meant to keep you and your family in leisure yet always go with the styles as multiple distinctive features await you to convey</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorVeloz} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Comfortable Full Dashboard Interior (All Type)</h5>
                        <p>Luxurious design dashboard with high-end technology surrounding the cabin, including The New Vibrant Illumination Light on the front <br />and side panel supported by The New High Positioned console to assure your journey and simplify your everyday life.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorVeloz1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Fabric & Leather Combination Seat (All Type)</h5>
                            <p>A whole new leatherette combined with convenient fabric seat for a stylish vibration inside the vehicle.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorVeloz2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Spacious Cabin with New Long Sofa Mode (All Type)</h5>
                            <p>A spacious and quiet cabin with New Long Sofa Mode made by the flexible seat arrangement ensure maximum convenience inside the vehicle.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ReadMoreProduct;
