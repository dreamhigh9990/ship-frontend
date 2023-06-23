import React from 'react';
import { Label, CardBody, Col, Input, Row, TabPane } from "reactstrap";
import { HorizontalForm } from '../../Forms/FormLayouts/FormlayoutsCode';
import Flatpickr from "react-flatpickr";

const MyInformation = () => {
    return (
        <React.Fragment>
            <TabPane tabId="1" id="v-pills-information">
                <CardBody className='pt-0'>
                    <div className="live-preview">
                        <form action="#">
                            <Row className="mb-3">
                                <Col lg={3} >
                                    <Label htmlFor="identifierInput" className="form-label">Identifier</Label>
                                </Col>
                                <Col lg={9} >
                                    <Input type="text" className="form-control" id="identifierInput" placeholder="Enter your Identififer" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col lg={3} >
                                    <Label htmlFor="leaveemails" className="form-label">Email Address</Label>
                                </Col>
                                <Col lg={9} >
                                    <Input type="email" className="form-control" id="leaveemails" placeholder="Enter your email" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col lg={3} >
                                    <Label htmlFor="nameinput" className="form-label">Name</Label>
                                </Col>
                                <Col lg={9} >
                                    <Input type="url" className="form-control" id="username" placeholder="Enter your url" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col lg={3} >
                                    <Label htmlFor="mankind" className="form-label">Man / Woman</Label>
                                </Col>
                                <Col lg={9} >
                                    <select type="number" className="form-select" id="mankind" >
                                        <option value="man" selected>Man</option>
                                        <option value="woman">Woman</option>
                                    </select>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col lg={3} >
                                    <Label htmlFor="birthday" className="form-label">Birthday</Label>
                                </Col>
                                <Col lg={9} >
                                    <Flatpickr
                                        className="form-control"
                                        options={{
                                            dateFormat: "d M, Y"
                                        }}
                                    />
                                </Col>
                            </Row>

                            <div className="text-end">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>                    
                </CardBody>
            </TabPane>
        </React.Fragment>
    )


}

export default MyInformation;