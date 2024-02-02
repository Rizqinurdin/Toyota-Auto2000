import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Innova from '../assets/img/cruiser/1.jpg';
import Innova1 from "../assets/img/cruiser/8.png";
import ExteriorInnova from "../assets/img/cruiser/9.jpg";
import ExteriorInnova1 from "../assets/img/cruiser/10.jpg";
import ExteriorInnova2 from "../assets/img/cruiser/11.jpg";
import InteriorInnova from "../assets/img/cruiser/12.jpg";
import InteriorInnova2 from "../assets/img/cruiser/13.jpg";
import InteriorInnova3 from "../assets/img/cruiser/14.jpg";
import { cruiserToyota, toyotaCalya, typeCalya, typeCruiser, } from '../data/index';
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

const CruiserDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Innova} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp2.521.400.000
                        </span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All New Land Cruiser</h2>
                    </Col>
                </Row>
                <Row>
                    {cruiserToyota.map((data) => (
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
                        {typeCruiser.map((data) => (
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
                            <p className='text-center'>When the rigorous meet the marvelous</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Adaptive Headlamp Design</h5>
                        <p>All Type</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Grille Design</h5>
                            <p>GR-S Type</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Front Bumper</h5>
                            <p>GR-S Type</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>All new divine convenience.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>All New Divine Convenience</h5>
                        <p>From the delicate ornamentation and modern technology surrounding the cabin, The All-New Land Cruiser will provide you with more quietness inside the cabin as the world of unlimited pleasure will accompany your majestic journey ahead.
                            (GR-S Type)</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Freedom In Space</h5>
                            <p>Exceed all the obstacles in every ease on any road with the sporty and fierce look of The All-New Land Cruiser that comes with the combination of red and black color.
                                (GR-S Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Embrace The Boundless Extravagance</h5>
                            <p>A more capacious space of freedom awaits you with elegant materials and artistic ornamentation. The All-New Land Cruiser gives you adjustable seats for every passenger to enjoy the splendid service that will lead you to a beautiful experience.
                                (VX-R Type)</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CruiserDetail;
