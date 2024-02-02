import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Icon from "../assets/img/icon.png"

const FooterComponent = () => {

    const handleWhatsAppChat = () => {
        const phoneNumber = '+6285817211644';
        const message = 'Halo, saya ingin memesan produk Toyota';
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };
    return (
        <div className="footer py-5">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col lg="5">
                        <img src={Icon} alt="icon-img" className="w-50" />
                        <p className="desc mt-4">Jl. Ciledug Raya No.16, Petukangan Selatan Pesanggrahan = Jakarta Selatan 12270 <br />
                            Mohon ditransfer atas Nama PT.Astra Internasional Tbk : <br />
                            BCA - Cabang Bintaro No. Rek : 6800 304 430 <br />
                            Bank Permata - Cabang Bintaro No. Rek : 0 2000 33116</p>
                        <div className="no mb-2 mt-4">
                            <Link className="text-decoration-none">
                                <i className="fa-brands fa-whatsapp"></i>
                                <p className="m-0" onClick={handleWhatsAppChat}>6285817211644</p>
                            </Link>
                        </div>
                        {/* <div className="mail">
                            <Link className="text-decoration-none">
                                <i className="fa-regular fa-envelope"></i>
                                <p className="m-0">info@indivaragroup.com</p>
                            </Link>
                        </div> */}
                    </Col>
                    <Col className="d-flex flex-column col-lg-2 col mt-lg-0 mt-5">
                        <h5 className="fw-bold">Menu</h5>
                        <Link to="">Beranda</Link>
                        <Link to="product">Produk Kami</Link>
                        <Link to="promo">Promo</Link>
                        <Link to="priceList">Pricelist</Link>
                        <Link to="contact">Hubungi Kami</Link>
                    </Col>
                    <Col lg="4" className="mt-lg-0 mt-5">
                        <h5 className="fw-bold mb-5">Subscribe untuk info Menarik</h5>
                        <div className="subscribes">
                            <input type="text" placeholder="Subscribe..." />
                            <button className="btn btn-danger rounded-end rounded-0">Subscribe</button>
                        </div>
                        <div className="social mt-3">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Hamba Allah SWT</span>, All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FooterComponent