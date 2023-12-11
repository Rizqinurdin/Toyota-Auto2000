import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { allProduct } from "../data/index";
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    return (
        <div className="allProduct-page">
            <div className="allProduct min-vh-100">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className="text-center">
                            <h1 className="fw-bold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Semua Product</h1>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                Temukan keajaiban dalam setiap detail. Dari desain yang elegan hingga performa yang luar biasa,
                                produk kami diciptakan untuk memberikan pengalaman yang tak terlupakan. Jelajahi kualitas terbaik
                                yang memenuhi kebutuhan Anda.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        {allProduct.map((product) => {
                            return (
                                <Col md-4 key={product.id} md={3} className="productCard mt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={product.delay}>
                                    <Card className="product-card shadow-sm mb-4">
                                        <Card.Img src={product.image} alt="productCard" />
                                        <Card.Body>
                                            <h5 className="fw-bold">{product.productMerk}</h5>
                                            <Card.Text>
                                                {product.price}
                                            </Card.Text>
                                            <Link to={`/productToyota`}>
                                                <Button variant="danger">Read More</Button>
                                            </Link>
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

export default ProductComponent