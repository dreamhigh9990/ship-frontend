import React, { useState } from 'react'
import MySidebar from './MySidebar'
import MyInformation from './MyInformation'
import MyBrowser from './MyBrowser'
import MyTest from './MyTest'
import MyPurchase from './MyPurchase'
import MyScore from './MyScore'
import MyImage from './MyImage'
import MyOpinion from './MyOpinion'


import { Col, Container, Row, Card, CardBody,TabContent } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";


const Mine = () => {
    document.title = "Landing | Velzon - React Admin & Dashboard Template";

    const [verticalTab, setverticalTab] = useState("1");
    const toggleVertical = (tab) => {
        if (verticalTab !== tab) {
            setverticalTab(tab);
        }
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="My Page" />
                        <Row>
                            <Col xl={3} lg={4}>
                                <Card>
                                    <CardBody>
                                        <MySidebar toggleVertical={toggleVertical} verticalTab ={verticalTab}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xl={9} lg={8}>
                                <Card>
                                    <CardBody>
                                    <TabContent
                                        activeTab= {verticalTab}
                                        className="text-muted mt-4 ms-5 mt-md-0"
                                        id="v-pills-tabContent"
                                    >
                                        <MyInformation />
                                        <MyBrowser />
                                        <MyTest />
                                        <MyPurchase />
                                        <MyScore />
                                        <MyImage />
                                        <MyOpinion />
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

export default Mine;