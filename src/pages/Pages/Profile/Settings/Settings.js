import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table } from 'reactstrap';
import classnames from "classnames";
import MetaTags from 'react-meta-tags';
import Flatpickr from "react-flatpickr";
import MyBrowser from './MyBrowser';
import MyTest from './MyTest';
import MyPurchase from './MyPurchase';
import MyScore from './MyScore';
import MyImage from './MyImage';
import MyOpinion from './MyOpinion';
import MyInformation from './MyInformation';
import { useSelector, useDispatch } from "react-redux";
//import images
import progileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
import { downloadCurrentAvatar } from '../../../../helpers/fakebackend_helper';

import { getAuthenticatedUser } from '../../../../helpers/fakebackend_helper';

const Settings = () => {
    const [activeTab, setActiveTab] = useState("1");
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');

    const myInformationSelector = useSelector(state => state.Profile.myinformation);

    useEffect(() => {
        if (myInformationSelector) {
            setUsername(myInformationSelector.username);
            setName(myInformationSelector.name);
        } else {
            setUsername('');
            setName('');
        }
    }, [myInformationSelector])


    useEffect(() => {

    }, [])


    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };
    document.title = "Profile Settings | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">

                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={progileBg} className="profile-wid-img" alt="" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={downloadCurrentAvatar(myInformationSelector)} alt="user-img" style={{ width: 80, height: 80 }}
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">{name}</h3>
                                </div>
                            </Col>

                            <Col xs={12} className="col-lg-auto order-last order-lg-0">
                                <Row className="text text-white-50 text-center">
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">2000</h4>
                                            <p className="fs-14 mb-0">Current Free Score</p>
                                        </div>
                                    </Col>
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">1000</h4>
                                            <p className="fs-14 mb-0">Adding Score</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        {/* <Col xxl={3}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title mb-3">Info</h5>
                                    <div className="table-responsive">
                                        <Table className="table-borderless mb-0">
                                            <tbody>
                                                <tr>
                                                    <th className="ps-0" scope="row">Full Name :</th>
                                                    <td className="text-muted">Anna Adame</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">Mobile :</th>
                                                    <td className="text-muted">+(1) 987 6543</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">E-mail :</th>
                                                    <td className="text-muted">daveadame@velzon.com</td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">Location :</th>
                                                    <td className="text-muted">California, United States
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className="ps-0" scope="row">Joining Date</th>
                                                    <td className="text-muted">24 Nov 2021</td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col> */}

                        <Col xxl={12}>
                            <Card className="">
                                <CardHeader>
                                    <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "1" })}
                                                onClick={() => {
                                                    tabChange("1");
                                                }}>
                                                <i className="fas fa-home"></i>
                                                Personal Details
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "2" })}
                                                onClick={() => {
                                                    tabChange("2");
                                                }}
                                                type="button">
                                                <i className="far fa-user"></i>
                                                Browsing History
                                            </NavLink>
                                        </NavItem>
                                        <NavItem >
                                            <NavLink
                                                className={classnames({ active: activeTab === "3" })}
                                                onClick={() => {
                                                    tabChange("3");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Passed Test
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "4" })}
                                                onClick={() => {
                                                    tabChange("4");
                                                }}
                                                type="button">
                                                <i className="far fa-envelope"></i>
                                                Purchase History
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "5" })}
                                                onClick={() => {
                                                    tabChange("5");
                                                }}
                                                type="button">
                                                <i className="far fa-score"></i>
                                                Score Management
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "6" })}
                                                onClick={() => {
                                                    tabChange("6");
                                                }}
                                                type="button">
                                                <i className="far fa-img"></i>
                                                Image Icon Purchase
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({ active: activeTab === "7" })}
                                                onClick={() => {
                                                    tabChange("7");
                                                }}
                                                type="button">
                                                <i className="far fa-img"></i>
                                                Opinion
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </CardHeader>
                                <CardBody className="p-4">
                                    <TabContent activeTab={activeTab}>
                                        <TabPane tabId="1">
                                            <MyInformation />
                                        </TabPane>

                                        <TabPane tabId="2" className='full-tab-table'>
                                            <Row className="g-2">
                                                <Col lg={12}>
                                                    <MyBrowser />
                                                </Col>
                                            </Row>
                                        </TabPane>

                                        <TabPane tabId="3">
                                            <MyTest />
                                        </TabPane>

                                        <TabPane tabId="4">
                                            <MyPurchase />
                                        </TabPane>

                                        <TabPane tabId="5">
                                            <MyScore />
                                        </TabPane>

                                        <TabPane tabId="6">
                                            <MyImage />
                                        </TabPane>

                                        <TabPane tabId="7">
                                            <MyOpinion />
                                        </TabPane>

                                    </TabContent>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Settings;