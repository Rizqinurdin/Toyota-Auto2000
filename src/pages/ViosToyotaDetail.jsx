import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import toyotaVios from "../assets/img/vios/1.jpg";
import toyotaVios1 from "../assets/img/vios/9.png";
import toyotaVios2 from "../assets/img/vios/10.jpg";
import toyotaVios3 from "../assets/img/vios/11.jpg";
import toyotaVios4 from "../assets/img/vios/12.jpg";
import toyotaVios5 from "../assets/img/vios/13.jpg";
import toyotaVios6 from "../assets/img/vios/14.jpg";
import toyotaVios7 from "../assets/img/vios/15.jpg";
import { typeViosToyota, viosToyota } from '../data/index';
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

const ViosToyotaDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={toyotaVios} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp363.200.000
                        </span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Vios</h2>
                    </Col>
                </Row>
                <Row>
                    {viosToyota.map((data) => (
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
                        {typeViosToyota.map((data) => (
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
                            <img src={toyotaVios1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>New chapter in style.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={toyotaVios2} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Exquisite Fastback Design</h5>
                        <p>Long wheelbase & large diameter tires placed at the corners, creating a voluminous powerful-looking. With the addition of a slanted rear silhouette, enhancing a sleek cabin look.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={toyotaVios3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Bold Front Bumper and Grille</h5>
                            <p>Create an impressive presence with the elegant design.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={toyotaVios4} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Impressive Headlamp</h5>
                            <p>Make a daring statement with the LED Light Guide and Daytime Running Lights (DRL) headlamp.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Statement of comfort.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={toyotaVios5} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>9" Floating Audio Head Unit With Smartphone Connectivity</h5>
                        <p>Stay seamlessly connected through multimedia system equipped with Radio, USB, and Bluetooth.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={toyotaVios6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Seamless 7-Inch TFT & Digital LED MID</h5>
                            <p>The advanced technology with an integrated interface provides the car information supported with 4 MID patterns. (G & G TSS Type Only)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={toyotaVios7} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Air Purifier</h5>
                            <p>Generate negative ion to improve air quality in the cabin, elevating your driving experience quality.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ViosToyotaDetail;
