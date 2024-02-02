import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Hilux from "../assets/img/SHiluxCab/1.jpg"
import Hilux1 from "../assets/img/SHiluxCab/9.jpg"
import Hilux2 from "../assets/img/SHiluxCab/10.jpg"
import Hilux3 from "../assets/img/SHiluxCab/11.jpg"
import Hilux4 from "../assets/img/SHiluxCab/12.jpg"
import Hilux5 from "../assets/img/SHiluxCab/13.jpg"
import Hilux6 from "../assets/img/SHiluxCab/14.jpg"
import { hiluxToyota, shiluxcab, type, typeHilux, typeSHilux, veloz } from '../data/index';
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

const SHiluxDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Hilux} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>Rp281.900.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your All New Hilux S Cab</h2>
                    </Col>
                </Row>
                <Row>
                    {shiluxcab.map((data) => (
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
                        {typeSHilux.map((data) => (
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
                            <p className='text-center'>Now with a more aggressive appearance and giving pride when driving.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Hilux1} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Single Cabin</h5>
                        <p>(Single Cabin DSL 4x4 Type)
                        </p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Hilux2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Spacious Deck</h5>
                            <p>(Single Cabin DSL 4x4 Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Hilux3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Single Cabin*</h5>
                            <p>(Single Cabin Gasoline 4x2 Type)
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>The interior space of the cabin is now equipped with the last features to increase comfort when driving.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Hilux4} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Single Cabin Dashboard</h5>
                        <p>(Single Cabin Diesel Type & Gasoline Type)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Hilux5} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Sun Visor</h5>
                            <p>Now equipped with mirror on the passenger side.
                                <br />
                                (All Type Double Cabin, Single Cabin DSL 4x4 Type).</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Hilux6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Overhead Console</h5>
                            <p>A spacious extra storage for sunglasses or other things.
                                <br />
                                (All Type)</p>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    );
};

export default SHiluxDetail;
