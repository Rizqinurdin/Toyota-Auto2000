import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Hiace from "../assets/img/hiace/1.jpg";
import Hiace1 from "../assets/img/hiace/7.png";
import Hiace2 from "../assets/img/hiace/8.jpg";
import Hiace3 from "../assets/img/hiace/9.jpg";
import Hiace4 from "../assets/img/hiace/10.jpg";
import Hiace5 from "../assets/img/hiace/11.jpg";
import Hiace6 from "../assets/img/hiace/12.jpg";
import { hiaceToyota, typeHiace } from '../data/index';
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

const HiaceDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Hiace} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>
                            Rp647.300.000
                        </span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your  All Hiace Premio</h2>
                    </Col>
                </Row>
                <Row>
                    {hiaceToyota.map((data) => (
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
                        {typeHiace.map((data) => (
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
                            <img src={Hiace1} className="d-block w-50 mx-auto rotate-image" alt="banner" />
                        </div>
                    </Row>
                </div>
                <div className="beyond-exterior">
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Exterior</h3>
                            <p className='text-center'>Tingkatkan perjalanan Anda dengan ruang yang lebih luas, keamanan dan fasilitas layaknya sedang berada di premium suites bagi pengemudi dan penumpang.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Hiace2} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Front View (Hiace Premio)</h5>
                        <p>Gabungan dari desain headlamp, bumper dan grille yang memberikan kesan tampilan luar yang tangguh dan modern</p>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Hiace3} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Semi-Bonnet Body Type (Hiace Premio)</h5>
                        <p>Selain meningkatkan safety pada mobil, desain semi-bonnet juga mampu memberikan performa berkendara yang lebih baik dan kabin yang lebih kedap sehingga membuat perjalanan Anda lebih nyaman dan berkesan.</p>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Kabin yang lebih nyaman dan mewah dari New Hiace Premio semakin memanjakan penumpang sepanjang perjalanan
                                .</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Hiace4} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>Exclusive Dashboard Design (Hiace Premio)</h5>
                        <p>Dengan desain modern yang memberikan kesan eksklusif di area pengemudi yang mempermudah pengoprasian mobil sehingga setiap perjalanan semakin nyaman dan aman.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Hiace5} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Audio (Hiace Premio)</h5>
                            <p>Tampilan audio baru, Basic AVX 7 inch dengan layar yang lebar dan tampilan yang mempermudah penggunaan audio dan menambah kualitas selama perjalanan.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Hiace6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>Spacious Cabin (Hiace Premio)</h5>
                            <p>Desain interior dengan perubahan pada susunan tempat duduk untuk memberikan tambahan ruang pada barisan kursi penumpang, sehingga memberikan cabin space yang lebih luas serta legroom yang lebih lebar.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default HiaceDetail;
