import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Hilux from "../assets/img/hilux/1.jpg"
import Hilux1 from "../assets/img/hilux/9.jpg"
import Hilux2 from "../assets/img/hilux/10.jpg"
import Hilux3 from "../assets/img/hilux/11.jpg"
import Hilux4 from "../assets/img/hilux/12.jpg"
import Hilux5 from "../assets/img/hilux/13.jpg"
import Hilux6 from "../assets/img/hilux/14.jpg"
import { hiluxToyota, type, typeHilux, veloz } from '../data/index';
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

const HiluxDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Hilux} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>Rp525.100.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your All New Hilux D Cab</h2>
                    </Col>
                </Row>
                <Row>
                    {hiluxToyota.map((data) => (
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
                        {typeHilux.map((data) => (
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
                        <h5 className='mt-3'>New Headlamp Design</h5>
                        <p>With a sharp design and auto leveling LED projector to give a tough look yet perfect vision in any road conditions.
                            <br /> <span> (V Type Double Cabin)</span>
                        </p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Hilux2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Front Chrome Grille</h5>
                            <p>A bold and iconic trapezoidal design to give a stronger presence for its new look.
                                (V & G Type Double Cabin)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Hilux3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New LED Fog Lamp Design*</h5>
                            <p>To enhance visibility as well as giving long-lasting performance. (V & G Type Double Cabin)
                                <span className='fw-bold'>*jika tersedia</span>

                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>The interior space of the cabin is now equipped with the latest features to increase comfort when driving.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Hilux4} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Luxurious Black Leather Seat</h5>
                        <p>First row leather seat with elegant black color giving you a luxurious feel as you dominate the road ahead.
                            (V Type Double Cabin)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Hilux5} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Combimeter Design</h5>
                            <p>Combining the element of high-class and precision to create an even tougher image. Also with MID to ensure better visibility for road's information. Equipped with ECO indicator zone for any feedback on the driving behaviour.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Hilux6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Flat Head Unit Design</h5>
                            <p>Equipped with a great entertainment of 7" Display audio which can be connected to DVD, Radio, USB, and Bluetooth.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default HiluxDetail;
