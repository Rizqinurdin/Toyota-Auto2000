import React from 'react'
import { Container, Row, Col, Accordion } from "react-bootstrap"
import { faq } from "../data/index"

const FaqComponent = () => {
    return (
        <div className='faq'>
            <Container>
                <Row>
                    <Col>
                        <h2 className='fw-bold text-center'>Pertanyaan yang sering ditanyakan!</h2>
                    </Col>
                </Row>
                <Row className='row-cols-lg-2 row-cols-1 g-2 pt-5'>
                    {faq.map((data) => {
                        return (
                            <Col key={data.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={faq.delay}>
                                <Accordion className='shadow-sm'>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>{data.title}</Accordion.Header>
                                        <Accordion.Body>
                                            {data.desc}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                        );
                    })}
                </Row>
            </Container>

        </div>
    )
}

export default FaqComponent