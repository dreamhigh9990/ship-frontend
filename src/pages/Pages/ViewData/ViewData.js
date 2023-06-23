import React, { useState } from 'react'
import MySidebar from './MySidebar'
import MyTabBar from './MyTabBar'
import MyTraceView from './DataTable/MyTraceView'
import ShipData from './DataTable/ShipData'
import LoadData from './DataTable/LoadData'
import ProductData from './DataTable/ProductData'
import GoodData from './DataTable/GoodData'
import '../Test/test-page-custom.css'
import { Col, Container, Row, Card, CardBody,TabContent } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { getAuthenticatedUser } from '../../../helpers/fakebackend_helper'


const ViewData = () => {
    document.title = "My Profile";

    // Card Header Tabs
    const [cardHeaderTab, setcardHeaderTab] = useState("1");
    const cardHeaderToggle = (tab) => {
        if (cardHeaderTab !== tab) {
            setcardHeaderTab(tab);
        }
    };
    const user = getAuthenticatedUser();

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="View Data Field" />
                        <Row>
                            <Col xl={12} lg={8}>
                                <Card>
                                    <CardBody>
                                        <MyTabBar cardHeaderToggle={cardHeaderToggle} cardHeaderTab ={cardHeaderTab}/>
                                        <TabContent
                                            activeTab= {cardHeaderTab}
                                            className="text-muted mt-4 mt-md-0 text-align"
                                            id="v-pills-tabContent"
                                            style={{textAlign: "center"}}
                                        >
                                            <ShipData />
                                            <LoadData />
                                            <ProductData />
                                            <GoodData />
                                            {user && <MyTraceView />}
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/* <Col xl={3} lg={4}>
                                <MySidebar />
                            </Col> */}
                        </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ViewData;