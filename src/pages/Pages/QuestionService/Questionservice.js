import React, { useState } from 'react';
import Navbar from '../../Landing/navbar';
import Footer from '../../Landing/footer';
import { Container, Button, Modal, ModalHeader, ModalBody, Label, CardBody, Col, Input, Nav, NavItem, NavLink, Row, TabContent, TabPane, Table, CardHeader } from "reactstrap";
import { ArticleData, BaseExample, CardTableExample, PaginationExample, SearchExample, SortingExample, LoadingStateExample, FixedHeaderExample, HiddenColumnsExample } from '../../../pages/Tables/GridTables/GridTablesData';
import { Link } from "react-router-dom";
import Select from "react-select";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

const SingleOptions = [
    { value: 'Eelectric', label: 'Eelectric' },
    { value: 'Chemitical', label: 'Chemitical' },
    { value: 'Math', label: 'Math' },
];

const QuestionService = () => {
    const [modal_newarticle, setmodal_newarticle] = useState(false);
    const [selectedSingle, setSelectedSingle] = useState(null);

    function tog_newarticle() {
        setmodal_newarticle(!modal_newarticle);
    }

    function handleSelectSingle(selectedSingle) {
        setSelectedSingle(selectedSingle);
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Question Service" />
                    <div className="py-3">
                        <Row>
                            <Col md={10}>
                                <div className="pb-0 question-table" id="">
                                    <div>
                                        <ArticleData />
                                    </div>
                                </div>
                            </Col>
                            <Col md={2} className="notification-question-g">
                                <div className="card p-0 card-body">
                                    <div className="rounded-top alert-solid border-0 rounded-0 m-0 d-flex align-items-center justify-content-center alert alert-danger fade show text-center">
                                        <span>Article Sort Selection</span>
                                    </div>
                                    <div className="question-article-sel d-flex align-items-center flex-column pt-3">
                                        <a href="#">Total </a>
                                        <a href="#">Notification </a>
                                        <a href="#">Question </a>
                                        <a href="#">Genral </a>
                                        <a href="#">Software </a>
                                        <a href="#">Foreign </a>
                                        <a href="#">Other </a>
                                    </div>
                                </div>
                                <div className="card mt-3 p-0 card-body">
                                    <div className="rounded-top alert-solid border-0 rounded-0 m-0 d-flex align-items-center justify-content-center alert alert-danger fade show text-center">
                                        <span>Best Voter</span>
                                    </div>
                                    <div className="question-vot-sel d-flex align-items-center flex-column pt-3">
                                        <a href="#">id123 Robert</a>
                                        <a href="#">id123 Robert </a>
                                        <a href="#">id123 Robert </a>
                                        <a href="#">id123 Robert </a>
                                        <a href="#">id123 Weston </a>
                                        <a href="#">id123 Robert </a>
                                        <a href="#">id123 Robert </a>
                                    </div>
                                </div>
                                <div className="card mt-5 py-3 px-3 card-body text-center">
                                    <div className="notification-pan">
                                        <span className="badge bg-secondary p-3">Notification</span>
                                    </div>
                                    <h5>Vote method</h5>
                                    <p>
                                        Set the direction of flex items in a flex container with direction utilities. In most cases you can omit the horizontal class here as the browser default is row. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Modal
                size="xl"
                isOpen={modal_newarticle}
                toggle={() => {
                    tog_newarticle();
                }}
                backdrop={'static'}
                id="addnewarticle"
                centered
            >
                <ModalHeader>
                    New Article Vote
                    <Button type="button" className="btn-close"
                        onClick={() => {
                            tog_newarticle(false);
                        }} aria-label="Close"></Button>
                </ModalHeader>
                <ModalBody className="p-5 new-article-modal">
                    <div className="mt-4">
                        <div className='d-flex align-items-center'>
                            <Label htmlFor="choices-single-default" className="form-label text-muted">Default</Label>
                            <Select
                                value={selectedSingle}
                                onChange={() => {
                                    handleSelectSingle();
                                }}
                                options={SingleOptions}
                                className = "sort"
                            />
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    )
}


export default QuestionService