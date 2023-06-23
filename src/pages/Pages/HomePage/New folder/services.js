import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import companyintroduction from "../../../assets/images/shipservices/companyintroduction.png";
import dataservice from "../../../assets/images/shipservices/dataservice.png";
import help from "../../../assets/images/shipservices/help.png";
import mypage from "../../../assets/images/shipservices/mypage.png";
import questionservice from "../../../assets/images/shipservices/questionservice.png";
import software from "../../../assets/images/shipservices/software.png";
import testfield from "../../../assets/images/shipservices/testfield.png";
import studyfield from "../../../assets/images/shipservices/studyfield.png";
const Services = () => {
    return (
        <React.Fragment>
            <section className="section" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="text-center mb-5">
                                <h1 className="mb-3 ff-secondary fw-semibold lh-base">About Each Filed</h1>
                                <p className="text-muted">To achieve this, it would be necessary to have uniform grammar,
                                    pronunciation and more common words. If several languages coalesce the grammar</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="g-3">
                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-pencil-ruler-2-line fs-36"></i> */}
                                          <img alt="" src={studyfield} style={{width:"40px"}}></img>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Study Field</h5>
                                    <p className="text-muted my-3 ff-secondary">The creative design includes designs that are unique, effective and memorable.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-palette-line fs-36"></i> */}
                                            <img alt="" src={questionservice}style={{width:"40px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Question Service</h5>
                                    <p className="text-muted my-3 ff-secondary">The collection of rules and guidelines which designers use to communicate with users through appealing.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-lightbulb-flash-line fs-36"></i> */}
                                            <img alt="" src={dataservice}style={{width:"40px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">DataService</h5>
                                    <p className="text-muted my-3 ff-secondary">Business development firm that provides strategic planning, market research services and project.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-customer-service-line fs-36"></i> */}
                                            <img alt="" src={software}style={{width:"40px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Software</h5>
                                    <p className="text-muted my-3 ff-secondary">Awesome Support is the most versatile and feature-rich support plugin for all version.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-stack-line fs-36"></i> */}
                                            <img alt="" src={testfield}style={{width:"30px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Test Field</h5>
                                    <p className="text-muted my-3 ff-secondary">You usually get a broad range of options to play with. This enables you to use a single theme across multiple.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-settings-2-line fs-36"></i> */}
                                            <img alt="" src={mypage}style={{width:"40px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">My Page</h5>
                                    <p className="text-muted my-3 ff-secondary">Personalise your own website, no matter what theme and what customization options.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-slideshow-line fs-36"></i> */}
                                            <img alt="" src={companyintroduction}style={{width:"40px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Company Introduction</h5>
                                    <p className="text-muted my-3 ff-secondary">Responsive design is a graphic user interface (GUI) design approach used to create content.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            {/* <i className="ri-google-fill fs-36"></i> */}
                                            <img alt=""  src={help}style={{width:"40px"}}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Help</h5>
                                    <p className="text-muted my-3 ff-secondary">Google Fonts is a collection of 915 fonts, all available to use for free on your website.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col lg={4}>
                            <div className="d-flex p-3">
                                <div className="flex-shrink-0 me-3">
                                    <div className="avatar-sm icon-effect">
                                        <div className="avatar-title bg-transparent text-success rounded-circle">
                                            <i className="ri-briefcase-5-line fs-36"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <h5 className="fs-18">Top Industry Specialists</h5>
                                    <p className="text-muted my-3 ff-secondary">An industrial specialist works with industrial operations to ensure that manufacturing facilities work.</p>
                                    <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};

export default Services;