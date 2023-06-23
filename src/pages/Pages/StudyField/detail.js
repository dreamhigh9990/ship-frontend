import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, CardBody, Button, CardHeader, TabPane } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";

import { getCampus, upVote, downVote, getUser, updateOneUser } from "../../../helpers/fakebackend_helper";
import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { compareNumbers } from '@fullcalendar/react';

// const dispatch = useDispatch();

const StudyDetail = (props) => {
    document.title = "Study Field Detail";

    const [userID, setUserID] = useState('');
    const [userData, setUserData] = useState({});
    const myInformationSelector = useSelector(state => state.Profile.myinformation);

    useEffect(() => {
        if (myInformationSelector) {
            setUserID(myInformationSelector.id);
        }
        else {
            console.log("Please login first")
        }
    }, [myInformationSelector]);

    useEffect(() => {
        getUser(userID).then(res => {
            console.log("getAvatars", res);
            setUserData(res);
        });
        console.log("dasfasdfa", userID)
    }, [userID]);

    useEffect(() => {
        let temp = [];
        if (userData.votestate) temp = JSON.parse(userData.votestate);
        if (temp.includes(id))
            setDisable(true);
        console.log("here", userData);
        updateOneUser(userID, userData);
        // const userinfo = localStorage.getItem("authUser");
        // const NewUpdateUserInfo = {
        //     ...userinfo,
        //     "votestate":userData.votestate
        // }
        // dispatch(NewUpdateUserInfo);
    }, [userData]);

    let { id } = useParams();

    const [campus, setCampusList] = useState({
        name: "",
        description: "",
        recommends: "",
        unrecommends: ""
    });



    const [disable, setDisable] = useState(false);
    { console.log("All CampusList", campus) }
    useEffect(() => {
        if (id) {
            getCampus(id).then(res => {
                setCampusList(res);
            })
        }
        // if(JSON.parse(localStorage.getItem("UserData")).includes(id))
    }, []);


    useEffect(() => {
        console.log("Recommends", campus.recommends);
        console.log("Unrecommends", campus.unrecommends);
    }, [campus]);

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Study Detail" />
                    <Row>
                        <Col xl={12} lg={12}>
                            <Card>
                                <CardHeader>
                                    <Row>
                                        <Col lg={1}>
                                            <Link to="/pages-study-field"><Button
                                                type="button"
                                                color="warning"
                                                style={{ float: "left" }}
                                            >
                                            Back</Button></Link>
                                        </Col>
                                        <Col lg={11}>
                                            <h1 style={{ textAlign: "center" }}>{campus.name}</h1>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='px-5 py-5'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mb-4 fs-5'>
                                            <div>
                                                <span>{campus.description}</span>
                                                {/* {console.log("AAAAAAA", countUpvote)} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ padding: "50px 20%" }}>
                                        <Row className="pt-4">
                                            <div className="col-sm-6 text-center">
                                                <Button disabled={disable} color="success" onClick={() => {
                                                    setCampusList({
                                                        ...campus, ...{ recommends: campus.recommends + 1 }
                                                    });
                                                    upVote(id, campus);
                                                    let temp = [];
                                                    if (userData.votestate) temp = JSON.parse(userData.votestate);
                                                    temp.push(id);
                                                    setUserData({
                                                        ...userData, ... { votestate: JSON.stringify(temp) }
                                                    });


                                                    setDisable(true);
                                                }} >
                                                    Upvote
                                                </Button>
                                            </div>
                                            <div className="col-sm-6 text-center">
                                                <Button disabled={disable} color="primary" onClick={() => {

                                                    setCampusList({
                                                        ...campus, ...{ unrecommends: campus.unrecommends + 1 }
                                                    });
                                                    downVote(id, campus);
                                                    let temp = [];
                                                    if (userData.votestate) temp = JSON.parse(userData.votestate);
                                                    temp.push(id);
                                                    setUserData({
                                                        ...userData, ... { votestate: JSON.stringify(temp) }
                                                    });
                                                    setDisable(true)
                                                }}>
                                                    DownVote

                                                </Button>
                                            </div>
                                        </Row>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};
export default StudyDetail;
