import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { multiPurposeVehicle, sportUtilityVehicle, hatchBack, sedan, commerc, innovaZenixProduct, innovaZenixProductHEV, newVoxy, newAvanzaVeloz, calya, yaris, corolla, fortuner, raize, cruiser, agya, grsupra, gr86, vios, camry, camryHEV, yarisGR, dyna, hiace, hiluxGRSport, hiaceCommuter, hiluxCab } from "../data/index";
import { bannerProduct } from '../data/index';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const ProductComponent = () => {

    const [selectedCategory, setSelectedCategory] = useState('MPV');
    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    };

    return (
        <div className="allProduct-page">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                className="mySwiper"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {bannerProduct.map((data) => (
                    <SwiperSlide key={data.id} style={{ backgroundColor: "transparent" }}>
                        <img src={data.image} className="d-block w-100" alt="banner" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="allProduct min-vh-100 py-5">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className="text-center" data-aos="fade-up" data-aos-duration="1000">
                            <h1 className="fw-bold">WE BELIEVE IN CAR THAT TASTES INCREDIBLE</h1>
                            <p>Nikmati pengalaman berkendara yang sporty dan premium dengan mobil Toyota Jakarta.</p>
                        </Col>
                    </Row>
                </Container>
                <div className="artikel">
                    <Container>
                        <Row>
                            <Col className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                                <h5 onClick={() => handleCategoryClick('MPV')} className={`artikelAll mt-5 ${selectedCategory === 'MPV' ? 'active' : ''}`}>MPV</h5>
                                <h5 onClick={() => handleCategoryClick('SUV')} className={`artikelAll mt-5 ${selectedCategory === 'SUV' ? 'active' : ''}`}>SUV</h5>
                                <h5 onClick={() => handleCategoryClick('Hatchback')} className={`artikelAll mt-5 ${selectedCategory === 'Hatchback' ? 'active' : ''}`}>Hatchback</h5>
                                <h5 onClick={() => handleCategoryClick('Sedan')} className={`artikelAll mt-5 ${selectedCategory === 'Sedan' ? 'active' : ''}`}>Sedan</h5>
                                <h5 onClick={() => handleCategoryClick('Commercial')} className={`artikelAll mt-5 ${selectedCategory === 'Commercial' ? 'active' : ''}`}>Commercial</h5>
                            </Col>
                        </Row>
                    </Container>
                    <Container className="mt-4">
                        <Row>
                            {selectedCategory === 'MPV' && (
                                <>
                                    {multiPurposeVehicle.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={mpv.image} alt="productCard" className='w-80'
                                                    />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`alphard`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {innovaZenixProductHEV.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={mpv.image} alt="productCard" className='w-80'
                                                    />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`innova`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {newVoxy.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={mpv.image} alt="productCard" className='w-80'
                                                    />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`voxy`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {innovaZenixProduct.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={mpv.image} alt="productCard" className='w-80'
                                                    />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`innova-zenix`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {newAvanzaVeloz.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={mpv.image} alt="productCard" className='w-80'
                                                    />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`/product/veloz`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {calya.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={mpv.image} alt="productCard" className='w-80'
                                                    />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`calya`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </>

                            )}
                            {selectedCategory === 'SUV' && (
                                <>
                                    {sportUtilityVehicle.map((suv) => {
                                        return (
                                            <Col md-4 key={suv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={suv.image} alt="productCard" className='w-80' />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{suv.title}</h5>
                                                        <Card.Text>
                                                            {suv.price}
                                                        </Card.Text>
                                                        <Link to={`raf4`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {yaris.map((suv) => {
                                        return (
                                            <Col md-4 key={suv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={suv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{suv.title}</h5>
                                                        <Card.Text>
                                                            {suv.price}
                                                        </Card.Text>
                                                        <Link to={`yaris`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {corolla.map((suv) => {
                                        return (
                                            <Col md-4 key={suv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={suv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{suv.title}</h5>
                                                        <Card.Text>
                                                            {suv.price}
                                                        </Card.Text>
                                                        <Link to={`corolla`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {fortuner.map((suv) => {
                                        return (
                                            <Col md-4 key={suv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={suv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{suv.title}</h5>
                                                        <Card.Text>
                                                            {suv.price}
                                                        </Card.Text>
                                                        <Link to={`fortuner`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {raize.map((suv) => {
                                        return (
                                            <Col md-4 key={suv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={suv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{suv.title}</h5>
                                                        <Card.Text>
                                                            {suv.price}
                                                        </Card.Text>
                                                        <Link to={`raize`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {cruiser.map((suv) => {
                                        return (
                                            <Col md-4 key={suv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={suv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{suv.title}</h5>
                                                        <Card.Text>
                                                            {suv.price}
                                                        </Card.Text>
                                                        <Link to={`cruiser`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </>
                            )}
                            {selectedCategory === 'Hatchback' && (
                                <>
                                    {hatchBack.map((hatch) => {
                                        return (
                                            <Col md-4 key={hatch.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={hatch.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{hatch.title}</h5>
                                                        <Card.Text>
                                                            {hatch.price}
                                                        </Card.Text>
                                                        <Link to={`yaris-gr-sport`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {/* {gryaris.map((hatch) => {
                                        return (
                                            <Col md-4 key={hatch.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={hatch.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{hatch.title}</h5>
                                                        <Card.Text>
                                                            {hatch.price}
                                                        </Card.Text>
                                                        <Link to={`/productToyota`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })} */}
                                    {agya.map((hatch) => {
                                        return (
                                            <Col md-4 key={hatch.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={hatch.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{hatch.title}</h5>
                                                        <Card.Text>
                                                            {hatch.price}
                                                        </Card.Text>
                                                        <Link to={`agya-sport`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </>
                            )}
                            {selectedCategory === 'Sedan' && (
                                <>
                                    {sedan.map((sedan) => {
                                        return (
                                            <Col md-4 key={sedan.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4 w-80">
                                                    <Card.Img src={sedan.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{sedan.title}</h5>
                                                        <Card.Text>
                                                            {sedan.price}
                                                        </Card.Text>
                                                        <Link to={`corolla-atlis`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {grsupra.map((sedan) => {
                                        return (
                                            <Col md-4 key={sedan.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={sedan.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{sedan.title}</h5>
                                                        <Card.Text>
                                                            {sedan.price}
                                                        </Card.Text>
                                                        <Link to={`supra`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {gr86.map((sedan) => {
                                        return (
                                            <Col md-4 key={sedan.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={sedan.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{sedan.title}</h5>
                                                        <Card.Text>
                                                            {sedan.price}
                                                        </Card.Text>
                                                        <Link to={`/supraGR86`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {vios.map((sedan) => {
                                        return (
                                            <Col md-4 key={sedan.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={sedan.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{sedan.title}</h5>
                                                        <Card.Text>
                                                            {sedan.price}
                                                        </Card.Text>
                                                        <Link to={`vios`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {camry.map((sedan) => {
                                        return (
                                            <Col md-4 key={sedan.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={sedan.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{sedan.title}</h5>
                                                        <Card.Text>
                                                            {sedan.price}
                                                        </Card.Text>
                                                        <Link to={`amry`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {camryHEV.map((sedan) => {
                                        return (
                                            <Col md-4 key={sedan.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={sedan.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{sedan.title}</h5>
                                                        <Card.Text>
                                                            {sedan.price}
                                                        </Card.Text>
                                                        <Link to={`camry-hev`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}

                                </>
                            )}
                            {selectedCategory === 'Commercial' && (
                                <>
                                    {commerc.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={mpv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`hilux`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {dyna.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={mpv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`dyna`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {hiace.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={mpv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`hiace`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {hiluxGRSport.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={mpv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`gr-sport-hilux`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {hiaceCommuter.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={mpv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`hiace`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                    {hiluxCab.map((mpv) => {
                                        return (
                                            <Col md-4 key={mpv.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000">
                                                <Card className="product-card shadow-sm mb-4">
                                                    <Card.Img src={mpv.image} alt="productCard" />
                                                    <Card.Body>
                                                        <h5 className="fw-bold fs-6">{mpv.title}</h5>
                                                        <Card.Text>
                                                            {mpv.price}
                                                        </Card.Text>
                                                        <Link to={`s-hilux`}>
                                                            <Button variant="danger btn-sm">Read More</Button>
                                                        </Link>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        );
                                    })}
                                </>
                            )}
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent