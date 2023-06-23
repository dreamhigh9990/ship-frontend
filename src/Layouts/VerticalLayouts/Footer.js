import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid>
                    <Row>
                        <Col sm={3}>
                            <span>Depart: &nbsp; 00-000-0000</span>
                        </Col>
                        <Col sm={3}>
                            <div className="text-sm-center d-none d-sm-block">
                                Address XXXX
                            </div>
                        </Col>
                        <Col sm={3}>
                            <span>Depart: &nbsp; 00-000-0000</span>
                        </Col>
                        <Col sm={3}>
                            <div className="text-sm-center d-none d-sm-block">
                                Address XXXX
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;