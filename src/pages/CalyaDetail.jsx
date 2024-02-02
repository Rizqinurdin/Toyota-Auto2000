import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Innova from '../assets/img/calya/1.jpg';
import Innova1 from "../assets/img/calya/10.png";
import ExteriorInnova from "../assets/img/calya/11.jpg";
import ExteriorInnova1 from "../assets/img/calya/12.jpg";
import ExteriorInnova2 from "../assets/img/calya/13.jpg";
import InteriorInnova from "../assets/img/calya/14.jpg";
import InteriorInnova2 from "../assets/img/calya/15.jpg";
import InteriorInnova3 from "../assets/img/calya/16.jpg";
import { toyotaCalya, typeCalya, } from '../data/index';
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

const CalyaDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Innova} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp164.700.000
                        </span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  New Calya</h2>
                    </Col>
                </Row>
                <Row>
                    {toyotaCalya.map((data) => (
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
                        {typeCalya.map((data) => (
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
                            <p className='text-center'>Compact MPV 7-seater dengan konsep desain yang stylish dan modern, semakin menambah kepuasan Anda dalam berkendara</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={ExteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Smoked Headlamp (All Type)</h5>
                        <p>Tampilan desain yang lebih atraktif yang juga hadirkan kesan sporty di setiap perjalanan.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova1} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Front Mid Grille Design (All Type)</h5>
                            <p>Desain Grille baru dengan aksen geometris dan chrome yang hadirkan kesan sporty maupun modern.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={ExteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Alloy Wheel (All Type)</h5>
                            <p>Dengan Chrome dan desain baru untuk tampilan lebih sporty dan bold.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Dengan dimensi yang terlihat compact dari luar, kabin tetap memiliki ruang luas yang membuat nyaman seluruh penumpang.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={InteriorInnova} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Bolder Interior Colour (All Type)</h5>
                        <p>Tampilan baru yang lebih eksklusif dan maskulin dengan keseluruhan interior.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Advanced Audio Head Unit (All Type) AVX with Mirroring (G-Type) AVX with Bluetooth (E-Type)</h5>
                            <p>Display Audio yang dilengkapi dengan koneksi mirroring (G Grade) dan bluetooth (E Grade), hadirkan hiburan tanpa batas untuk menikmati setiap perjalanan.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={InteriorInnova3} className="d-block w-100" alt="banner" />
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

export default CalyaDetail;
