import React, { useState, useEffect } from "react";
import MetaTags from 'react-meta-tags';
import { Button, Card, CardBody, Col, Label, Input, Modal, ModalHeader, TabContent, TabPane } from 'reactstrap';
import { Link } from 'react-router-dom';
//SimpleBar
import SimpleBar from "simplebar-react";
import { getNotifications } from "../../../helpers/fakebackend_helper";

const NotificaitonModal = () => {
    var currentdate = new Date();

    useEffect(() => {
        setIsOpenModal(!(localStorage.getItem("cookie")>currentdate.getTime())&&isOpenModal);
        getNotifications().then(res => {
            let new_res = [];
            for(let i=res.length-1; (i>=res.length-10)&&i>=0;i--)
                new_res.push(res[i]);
            setNotificationList(new_res);
            console.log(new_res);
        })
    }, []);

    const [NotificationList, setNotificationList] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(true);
    function showModalAction() {
        setIsOpenModal(!isOpenModal);
    }
    function setCookie(){
        let checkbox = document.getElementById("formCheck1");
        if(checkbox.checked)
        {
            let date = new Date();
            localStorage.setItem("cookie", date.getTime() + (24*60*60*1000));
        }
    }

    return (
        <React.Fragment>
            {/* ZoomIn Animation */}
            <Modal id="flipModal" isOpen={isOpenModal} toggle={() => { showModalAction(); }} modalClassName="zoomIn" centered >
                <ModalHeader>
                    Notifications
                </ModalHeader>
                <div className="modal-body">
                    <SimpleBar style={{ maxHeight: "300px" }} className="pe-2">
                        {
                            NotificationList.map((e, key) => (
                                <div key={key} className="text-reset notification-item d-block dropdown-item position-relative">
                                    <div className="d-flex">
                                        <div className="avatar-xs me-3">
                                            <span className="avatar-title bg-soft-info text-info rounded-circle fs-16 shadow">
                                                <i className="bx bx-badge-check"></i>
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <Link to="#" className="stretched-link">
                                                <h6 className="mt-0 mb-2 lh-base">
                                                    {e.description}
                                                </h6>
                                            </Link>
                                            <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                                <span><i className="mdi mdi-clock-outline"></i> {e.date}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>))
                        }
                        {/* <div className="my-3 text-center">
                            <button type="button" className="btn btn-soft-success waves-effect waves-light shadow-none">View
                                All Notifications <i className="ri-arrow-right-line align-middle"></i></button>
                        </div> */}
                    </SimpleBar>
                </div>
                <div className="modal-footer d-block">
                    <div className="form-check form-check-outline form-check-success mb-3" style={{float: "left"}}>
                        <Input className="form-check-input" type="checkbox" id="formCheck1" />
                        <Label className="form-check-label" htmlFor="formCheck1">
                            Hide for a day
                        </Label>
                    </div>
                    <div className="form-check form-check-outline form-check-success mb-3" style={{float: "right"}}>
                        <Button color="primary" link="#" onClick={() => { setCookie(); showModalAction(); }}> Close </Button>
                    </div>
                </div>
            </Modal>
        </React.Fragment>
    );
};

export default NotificaitonModal;