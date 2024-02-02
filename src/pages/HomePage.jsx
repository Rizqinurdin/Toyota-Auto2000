import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { artikel, gambar, innovaZenixProductHEV, multiPurposeVehicle, newAvanzaVeloz, newVoxy, news, promo, testimonial, tipes } from "../data/index"
import { banner } from "../data/index";
import { Swiper, SwiperSlide } from 'swiper/react';
import cicilanSyariahImage from "../assets/img/Syariah3.png";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import kijangInnovaVideo from "../assets/video/newKijangInnova.mp4";
import raizeImage from "../assets/img/raizeAgain.jpg";
import FaqComponent from "../component/FaqComponent";


const HomePage = () => {

    let navigate = useNavigate();

    const [selectedCategory, setSelectedCategory] = useState('All');
    const handleCategoryClick = (category) => {
        setSelectedCategory(category)
    };

    const handleWhatsAppChat = () => {
        const phoneNumber = '+6285817211644';
        const message = 'Halo, saya ingin menanyakan untuk Konstultasi Toyota';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const handleWhatsAppChatTestDrive = () => {
        const phoneNumber = '+6285817211644';
        const message = 'Halo, saya ingin menanyakan Konsultasi Test Drive';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const handleWhatsAppChatAdviser = () => {
        const phoneNumber = '+6285817211644';
        const message = 'Halo, saya ingin menanyakan untuk Konsultasi Toyota';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };


    const handleInstagramFollow = () => {
        const instagramUsername = '@rizqinurdin_';
        const instagramURL = `https://www.instagram.com/${instagramUsername}/`;
        window.open(instagramURL, '_blank');
    };


    return (
        <div className="homepage">
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
                {banner.map((data) => (
                    <SwiperSlide key={data.id} style={{ backgroundColor: "transparent" }}>
                        <img src={data.image} className="d-block w-100" alt="banner" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Container>
                <Row className="cicilan-section">
                    <h2 className="fw-bold text-center mt-5">Cicilan Syariah</h2>
                    <p className="text-center">
                        Dapatkan kemudahan pembayaran dengan sistem cicilan syariah yang sesuai dengan prinsip-prinsip keuangan Islam. Kami menyediakan opsi pembayaran yang transparan dan adil.
                    </p>
                    <Col md={12} className="text-center" data-aos="fade-up" data-aos-duration="1000">
                        <img src={cicilanSyariahImage} alt="Cicilan Syariah" className="img-fluid w-100" style={{ maxWidth: '100%' }} />

                    </Col>
                </Row>
            </Container>


            <div className="product">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className="mt-5 text-center" data-aos="fade-up" data-aos-duration="1000">
                            <h1 className="fw-bold">WE BELIEVE IN CAR THAT TASTES INCREDIBLE</h1>
                            <p>Nikmati pengalaman berkendara yang sporty dan premium dengan mobil Toyota Jakarta.</p>
                        </Col>
                    </Row>
                    <Row>
                        {multiPurposeVehicle.map((product) => {
                            return (
                                <Col md-4 key={product.id} md={3} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={product.delay}>
                                    <Card className="product-card shadow-sm mb-4">
                                        <Card.Img src={product.image} alt="productCard" />
                                        <Card.Body>
                                            <h5 className="fw-bold fs-6">{product.title}</h5>
                                            <Card.Text>
                                                <p>{product.price}
                                                </p>
                                            </Card.Text>
                                            <Button variant="danger" size="sm" onClick={() => navigate("/alphardDetail")}>Read More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                        {innovaZenixProductHEV.map((product) => {
                            return (
                                <Col md-4 key={product.id} md={3} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={product.delay}>
                                    <Card className="product-card shadow-sm mb-4">
                                        <Card.Img src={product.image} alt="productCard" />
                                        <Card.Body>
                                            <h5 className="fw-bold fs-6">{product.title}</h5>
                                            <Card.Text>
                                                <p>{product.price}
                                                </p>
                                            </Card.Text>
                                            <Button variant="danger" size="sm" onClick={() => navigate("/innovaDetail")}>Read More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                        {newVoxy.map((product) => {
                            return (
                                <Col md-4 key={product.id} md={3} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={product.delay}>
                                    <Card className="product-card shadow-sm mb-4">
                                        <Card.Img src={product.image} alt="productCard" />
                                        <Card.Body>
                                            <h5 className="fw-bold fs-6">{product.title}</h5>
                                            <Card.Text>
                                                <p>{product.price}
                                                </p>
                                            </Card.Text>
                                            <Button variant="danger" size="sm" onClick={() => navigate("/voxyDetail")}>Read More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                        {newAvanzaVeloz.map((product) => {
                            return (
                                <Col md-4 key={product.id} md={3} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={product.delay}>
                                    <Card className="product-card shadow-sm mb-4">
                                        <Card.Img src={product.image} alt="productCard" />
                                        <Card.Body>
                                            <h5 className="fw-bold fs-6">{product.title}</h5>
                                            <Card.Text>
                                                <p>{product.price}
                                                </p>
                                            </Card.Text>
                                            <Button variant="danger" size="sm" onClick={() => navigate("/productToyota")}>Read More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}

                    </Row>
                </Container>
                <Container>
                    <Row className="konten">
                        <video src={kijangInnovaVideo} type="video/mp4" autoPlay loop muted data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
                        <div className="mainKonten">
                            <h2>BEST SERVICES & CONSULTATION</h2>
                            <h3>Lakukan konsultasi dengan Toyota Sales Kami, dapatkan informasi langsung <br /> seputar update harga, promo, diskon dan informasi test drive yang bisa kami hadirkan <br />Langsung ke rumah atau kantor anda.</h3>
                            <button className="btn btn-danger" onClick={handleWhatsAppChat}>KONSULTAN CHAT</button>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row className="align-items-center justify-content-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                        <Col md={6} className="text-center">
                            <div className="image-with-text-raize">
                                <h1 className="mt-5">BEST CAR OF THE YEAR</h1>
                                <p>Jika anda mencari sebuah produk dengan harga yang terjangkau namun mendapatkan predikat sebagai mobil terbaik di setiap tahunnya, maka pilihan anda bersama Toyota adalah suatu hal yang sangat tepat.</p>
                                <button className="btn btn-danger mb-4" onClick={handleWhatsAppChatAdviser}>CONTACT ADVISER</button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <img src={raizeImage} alt="" />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="image-with-text">
                                <div className="text-choice text-center mt-4">
                                    <h2 className="fw-bold mb-4">GREAT CHOICE</h2>
                                    <h5>
                                        Sebuah produk yang terlahir untuk menjadi
                                        solusi pada kehidupan masyarakat Indonesia,
                                        Menjadi kendaraan yang memudahkan mobilitas pengguna di seluruh Indonesia dengan segala kondisi, cuaca dan medan apapun diberbagai daerah di Indonesia
                                    </h5>
                                    <button className="btn btn-danger mb-4" size="sm" onClick={handleWhatsAppChat}>OPEN CONSULTANT NOW</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={6} className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="image-fortuner-with-text">
                            </div>
                        </Col>
                        <Col md={6} className="d-flex align-items-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <div className="text-bg-fortuner text-center mt-4">
                                <h2 className="">STAY CLOSE WITH ME</h2>
                                <i className="icon fab fa-instagram"></i>
                                <h4 className="mt-3">INSTAGRAM</h4>
                                <h5 className="mt-2">
                                    Kenal lebih dekat dengan saya Agung Jaya, untuk semakin mengerti akan pentingnya siapa saya dan alasan kenapa mendedikasikan pekerjaan saya yang terbaik untuk TOYOTA selama lebih dari 9 tahun saya bekerja bersama seluruh anggota keluarga TOYOTA.
                                </h5>
                                <button className="btn btn-danger" onClick={handleInstagramFollow}>FOLLOW ME!</button>
                            </div>
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        {gambar.map((data) => (
                            <Col key={data.id} md={4} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <div className="image-container">
                                    <img src={data.image} alt="" className="img-fluid" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {/* <div className="promo">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <h1 className="fw-bold">PROMO BULAN INI !</h1>
                        </Col>
                    </Row>
                    <Row>
                        {promo.map((data) => {
                            return (
                                <Col key={data.id} md={3} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                    <Card className="promo-card shadow-sm mb-4">
                                        <Card.Img src={data.image} alt="productCard" />
                                        <Card.Body>
                                            <h5 className="fw-bold">{data.merkMobil}</h5>
                                            <Card.Text>
                                                {data.promo}
                                            </Card.Text>
                                            <Button variant="danger" onClick={(() => navigate("/detailPromo"))}>Read More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                    <Row>
                        <Col className="text-center mb-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <button className="btn btn-success rounded-5 btn-lg mt-5" onClick={(() => navigate("/promo"))}>
                                Lihat Semua Promo <i className="fa-solid fa-chevron-right ms-1"></i>
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div> */}
            <div className="artikel">
                <Container>
                    <Row>
                        <Col className="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <h5 onClick={() => handleCategoryClick('All')} className={`artikelAll mt-5 ${selectedCategory === 'All' ? 'active' : ''}`}>ALL</h5>
                            <h5 onClick={() => handleCategoryClick('News and Event')} className={`artikelAll mt-5 ${selectedCategory === 'News and Event' ? 'active' : ''}`}>NEWS & EVENT</h5>
                            <h5 onClick={() => handleCategoryClick('Tips')} className={`artikelAll mt-5 ${selectedCategory === 'Tips' ? 'active' : ''}`}>TIPS</h5>
                        </Col>
                    </Row>
                </Container>
                <Container className="mt-4">
                    <Row>
                        {selectedCategory === 'All' && (
                            <>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {artikel.map((data) => {
                                        return (
                                            <SwiperSlide key={data.id}>
                                                <div className="dataArtikel">
                                                    <img src={data.image} alt="" className="shadow-sm d-block w-100" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay} />
                                                    <div>
                                                        <h5 className="mb-1 mt-3">{data.title}</h5>
                                                        <p className="mb-1">{data.desc}</p>
                                                        <button className="btn" onClick={() => navigate("/tips")}>Find Out More</button>
                                                    </div>
                                                </div>

                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </>
                        )}
                        {selectedCategory === 'News and Event' && (
                            <>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {news.map((data) => {
                                        return (
                                            <SwiperSlide key={data.id}>
                                                <div className="dataArtikel">
                                                    <img src={data.image} alt="" className="shadow-sm d-block w-100" />
                                                    <div>
                                                        <h5 className="mb-1 mt-3">{data.title}</h5>
                                                        <p className="mb-1">{data.desc}</p>
                                                        <button className="btn">Find Out More</button>
                                                    </div>
                                                </div>

                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </>
                        )}
                        {selectedCategory === 'Tips' && (
                            <>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        992: {
                                            slidesPerView: 2,
                                            spaceBetween: 50,
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
                                    {tipes.map((data) => {
                                        return (
                                            <SwiperSlide key={data.id}>
                                                <div className="dataArtikel">
                                                    <img src={data.image} alt="" className="shadow-lg d-block w-100" />
                                                    <div>
                                                        <h5 className="mb-1 mt-3">{data.title}</h5>
                                                        <p className="mb-1">{data.desc}</p>
                                                        <button className="btn">Find Out More</button>
                                                    </div>
                                                </div>

                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </>
                        )}
                    </Row>
                    <Row className="bg-image text-center py-5 d-block w-100" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <Col>
                            <h1 className="fw-bold mt-4">LAYANAN TEST DRIVE</h1>
                            <h3>
                                Rasakan sensasi berkendara dengan mobil Toyota yang <br />dirancang untuk Anda dan keluarga hanya di Auto 2000
                            </h3>
                            <button className="btn btn-danger rounded-pill px-4 py-2 mt-5" onClick={handleWhatsAppChatTestDrive}>Booking Test Drive</button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="testimonial">
                <Container>
                    <Row>
                        <Col data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <h1 className="fw-bold text-center mt-5">TESTIMONIAL</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                992: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {testimonial.map((data) => (
                                <SwiperSlide key={data.id}>
                                    <div className="swiper-card-wrapper mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                        <Card className="testimonial-card">
                                            <Card.Img variant="top" src={data.image} alt="testimonialCard" className="d-block w-100" />
                                            <Card.Body>
                                                <Card.Text style={{ listStyle: 'disc', marginLeft: '20px', marginTop: '10px' }}>
                                                    {data.desc}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Row>
                </Container>
            </div>

            <FaqComponent />
        </div >
    );
};

export default HomePage