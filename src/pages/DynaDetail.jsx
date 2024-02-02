import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Dyna from "../assets/img/dyna/1.jpg";
import Dyna1 from "../assets/img/dyna/6.jpg";
import Dyna2 from "../assets/img/dyna/7.jpg";
import Dyna3 from "../assets/img/dyna/8.jpg";
import Dyna4 from "../assets/img/dyna/9.jpg";
import Dyna5 from "../assets/img/dyna/9.jpg";
import Dyna6 from "../assets/img/dyna/10.jpg";
import Dyna7 from "../assets/img/dyna/11.jpg";
import { dyna, dynaToyota, typeDyna } from '../data/index';
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

const DynaDetail = () => {
    return (
        <div className='productToyota-page'>
            <div className='productToyota'>
                <img src={Dyna} className="d-block w-100" alt="banner" />
            </div>
            <Container>
                <Row>
                    <Col>
                        <h4 className='fw-light mt-5'>Starting From <span className='fw-bold'>Rp398.400.000</span></h4>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-center'>
                        <h2 className='fw-bold'>Discover Your All New Dyna</h2>
                    </Col>
                </Row>
                <Row>
                    {dynaToyota.map((data) => (
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
                        {typeDyna.map((data) => (
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
                            <p className='text-center'>Ketangguhan yang hadirkan keberhasilan.</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Dyna1} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Head Lamp & Fog Lamp</h5>
                        <p>Desain lampu depan dan kabut datang dengan lebih modern, dengan white color lense, hadirkan penerangan maksimal untuk keamanan berkendara.
                            <br /> <span>(All Type)</span>
                        </p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Dyna2} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Front Grille & Bumper</h5>
                            <p>Ketangguhan langsung tampak dari sisi depan, dengan desain grille dan bumper terbaru yang lebih kuat.
                                (All Type)</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Dyna3} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Front Panel Design</h5>
                            <p>Sisi depan Dyna datang dengan desain yang lebih tangguh dan juga stylish.
                                <span> (All Type)</span>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3 className='text-center fw-bold mt-5'>Beyond Interior</h3>
                            <p className='text-center'>Selalu nyaman di segala medan.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img src={Dyna4} className="d-block w-100 mx-auto" alt="banner" />
                        </div>
                        <h5 className='mt-3'>New Brown Dashboard & Center Cluster</h5>
                        <p>Didesain dengan warna coklat tua yang hadirkan atmosfer modern, ditambah dengan tempat ponsel yang disediakan di panel tengah untuk kenyamanan setiap pengendara.</p>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div>
                                <img src={Dyna6} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Darker Color Seat Cover</h5>
                            <p>Interior datang dengan desain kursi menarik dengan warna yang lebih gelap untuk hadirkan kesan modern dan nuansa penuh kenyamanan.</p>
                        </Col>
                        <Col md={6}>
                            <div>
                                <img src={Dyna7} className="d-block w-100" alt="banner" />
                            </div>
                            <h5 className='mt-3'>New Blower</h5>
                            <p>Dengan boost ventilator hadirkan kesejukan untuk kenyamanan berkendara.</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default DynaDetail;
