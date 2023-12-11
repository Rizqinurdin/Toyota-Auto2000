import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { allPromo } from "../data/index";
import { useNavigate } from "react-router-dom";

const PromoComponent = () => {

    let navigate = useNavigate();
    return (
        <div className="allPromo-page">
            <div className="allPromo min-vh-100">
                <Container>
                    <Row>
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} className="text-center">
                                <h1 className="fw-bold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Semua Promo Bulan ini</h1>
                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                    Jangan lewatkan kesempatan istimewa kami! Dapatkan diskon hingga 50% untuk pembelian
                                    mobil Toyota pilihan Anda. Segera kunjungi showroom kami atau hubungi kami untuk
                                    informasi lebih lanjut. Promo berlaku hingga akhir bulan ini, jadi segera manfaatkan!</p>
                            </Col>
                        </Row>
                    </Row>
                    <Row>
                        {allPromo.map((data) => {
                            return (
                                <Col md-4 key={data.id} md={3} className="productCard mt-4">
                                    <Card className="promo-card shadow-sm mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
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
                </Container>
            </div>
        </div>
    )
}

export default PromoComponent