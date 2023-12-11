import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import BgRush from "../assets/img/rushkece.jpg"

const DetailPromoPage = () => {
    return (
        <div className='detail-promo-page'>
            <div className='image-rush'>
                <img src={BgRush} alt="" className='w-100 h-100' />
            </div>
            <Container>
                <Row>
                    <Col className='mt-5 text-center'>
                        <h2>PROMO TOYOTA RUSH BULAN INI!</h2>
                        <br />
                        <h5>All New Toyota Rush</h5>
                    </Col>
                </Row>
                <Row>
                    <div class="text-center mt-2">
                        <p class="list-item">PROMO KREDIT DP MULAI 15%</p>
                        <p class="list-item">PROMO CASH DISKON BESAR</p>
                        <p class="list-item">PROMO BUNGA 0% 1 TAHUN</p>
                        <p class="list-item">FREE KACA FILM</p>
                        <p class="list-item">FREE KARPET BLUDRU</p>
                        <p class="list-item">FREE TATAKAN PLAT</p>
                        <p class="list-item">FREE JASA SERVICE</p>
                        <p class="list-item">FREE HADIAH MENARIK LAINNYA</p>
                    </div>
                </Row>
                <Row>
                    <Col className='mt-5 text-center'>
                        <h2>SYARAT DAN KETENTUAN!</h2>
                        <br />
                        <p>
                            1. Promo berlaku untuk pembelian Toyota Rush.
                        </p>
                        <p>
                            2. Harga promo dapat berubah tanpa pemberitahuan sebelumnya.
                        </p>
                        <p>
                            3. Promo kredit dengan DP mulai 15% berlaku untuk jangka waktu tertentu.
                        </p>
                        <p>
                            4. Cash diskon besar hanya berlaku untuk pembelian tunai.
                        </p>
                        <p>
                            5. Promo bunga 0% 1 tahun dengan syarat dan ketentuan yang berlaku.
                        </p>
                        <p>
                            6. Free kaca film, karpet bludru, tatakan plat, jasa service, dan hadiah menarik lainnya berlaku untuk pembelian tertentu.
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default DetailPromoPage