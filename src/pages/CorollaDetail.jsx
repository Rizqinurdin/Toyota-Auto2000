import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Innova from '../assets/img/corolla/1.jpg';
import Innova1 from "../assets/img/corolla/8.jpg";
import Corolla from "../assets/img/corolla/7.png";
import ExteriorInnova from "../assets/img/corolla/9.jpg";
import ExteriorInnova1 from "../assets/img/corolla/10.jpg";
import ExteriorInnova2 from "../assets/img/corolla/11.jpg";
import InteriorInnova from "../assets/img/corolla/12.jpg";
import InteriorInnova2 from "../assets/img/corolla/13.jpg";
import { corollaGR, typeCorolla, } from '../data/index';
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

const CorollaDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Innova} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp608.400.000
                        </span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  Corolla Cross GR Sport HEV</h2>
                    </Col>
                </Row>
                <Row>
                    {corollaGR.map((data) => (
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
                        {typeCorolla.map((data) => (
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
                            <img src={Corolla} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>Go with elegant performance.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Innova1} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>18" GR-S Alloy Wheel</h5>
                        <p>New design with machining and dark grey chrome color providing a more urban look. (HV GR-S Type)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Power Back Door with Kick Sensor</h5>
                            <p>Equipped with kick sensor feature to make it more convenient when loading into the trunk. (All Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Power Moonroof</h5>
                            <p>Providing suficient lighting in the cabin to give a spacious feeling. (All Type)</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>The thrill is real.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorInnova2} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Elegant Full Dashboard</h5>
                        <p>Classy interior design with elegant black chrome and silver details to enhance your luxury impression and driving confidence. (HV GR-S Type)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>9" Multi-Purpose Head Unit with Wireless Smartphone Connectivity</h5>
                            <p>While the driver can enjoy the entertainment through the 9" Multi-Pupose Head Unit with Wireless Smartphone Connectivity to support ease of driving. (HV GR-S Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Audio Steering Switch (G Type)</h5>
                            <p>Kontrol audio pada bagian stir mobil untuk pengendalian musik yang lebih mudah.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CorollaDetail;
