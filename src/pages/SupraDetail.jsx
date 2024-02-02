import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Voxy from '../assets/img/supra/1.jpg';
import InteriorVoxy from "../assets/img/supra/10.jpg";
import InteriorVoxy1 from "../assets/img/supra/11.jpg";
import { voxy, typeVoxy, supraToyota, typeSupra } from '../data/index';
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

const SupraDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Voxy} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp2.237.600.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your New GR Supra</h2>
                    </Col>
                </Row>
                <Row>
                    {supraToyota.map((data) => (
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
                        {typeSupra.map((data) => (
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
                            <p className='text-center'>Legacy of Craftmanship.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorVoxy} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>19-Inch Forged Aluminum Wheels with Premium Titanium Dark Silver Shade and Lighter Wheel</h5>
                        <p>The mastery in shaping the finest details, heightened by the 19-inch forged aluminum wheels with premium titanium dark silver shade and lighter wheel, not only bringing up the soul but also rising up the performance.</p>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Touch of Distinction & Pleasant All Around.</p>
                        </Col>
                    </Row>
                    <Row>

                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorVoxy1} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>12 SP JBL Speaker</h5>
                        <p>Experience the astounding Sound Pressure Level to lead the thrilling drive.</p>

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default SupraDetail;
