import React from 'react';
import Home from './home';

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, Row, } from 'reactstrap';
import introData from './introData';
const CompanyIntroduction = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";
    return (
        <div className="page-content">
            <React.Fragment>
                <Container fluid>
                    <BreadCrumb title="Introduction" pageTitle="Ecommerce" />
                    <Row>
                        <Home />
                    </Row>
                    {introData.map(item => (<Row key={item.name}>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <div style={{ padding: '20px' }}>
                                        <Row>
                                            <Col xxl={9} className="card ribbon-box shadow-none mb-lg-0">
                                                <CardBody>
                                                    <div className="ribbon ribbon-primary ribbon-shape">{item.name}</div>
                                                    <div className="ribbon-content text-muted mt-4">
                                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas
                                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio.</p>
                                                    </div>
                                                </CardBody>

                                            </Col>
                                            <Col xxl={3} className="card ribbon-box shadow-none mb-lg-0">
                                                <CardBody>
                                                    <div  >
                                                        <video className="mb-0" controls></video>
                                                    </div>
                                                </CardBody>
                                            </Col>

                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>))};
                </Container>
            </React.Fragment>
        </div>
    );
};

export default CompanyIntroduction;