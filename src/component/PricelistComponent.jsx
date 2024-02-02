import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import {
    priceListVios, priceListCorolla, priListCamry, priceListAgya,
    priceListYaris, priceListCalya, priceListAvanza, priceListVeloz, priceListInnova, priceListVoxy, priceListAlphard, priceListFortuner, priceListRaize, priceListRush
} from '../data/index';
import BgImage from "../assets/img/bg-sales.jpg"

const PricelistComponent = () => {
    return (
        <div className='pricelist-page'>
            <div className='bg-sales mt-5'>
                <img src={BgImage} alt="" />
            </div>
            <Container>
                <Row className='pt-5'>
                    <Col data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                        <h2 className='fw-bold text-center'>Pricelist Toyota</h2>
                    </Col>
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListVios.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListCorolla.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priListCamry.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListAgya.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListAvanza.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListVeloz.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListCalya.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListCorolla.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListYaris.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListInnova.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListVoxy.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListAlphard.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListRaize.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListRush.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
                <Row className='justify-content-center pt-3'>
                    {priceListFortuner.map((data) => (
                        <Col key={data.id} lg={6}>
                            <Accordion className='shadow-sm' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={data.delay}>
                                <Accordion.Item eventKey='0'>
                                    <Accordion.Header className='text-center'>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className='list-unstyled'>
                                            {data.product.map((item, index) => (
                                                <li key={index} className='text-center'>
                                                    <span>{item}</span>
                                                    <span className='price'>{data.price[index]}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PricelistComponent;
