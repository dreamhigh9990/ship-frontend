import React, { useState, useEffect } from "react";
import { useHistory  } from "react-router-dom";

import {
    Container,
    Row,
    Card,
    CardHeader,
    Button,
    CardBody,
    Col,
    Alert
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { getProgram, ProgramUpVote, ProgramDownVote, getUser, updateOneUser, downloadProgram } from "../../../helpers/fakebackend_helper";

const BuySoftware = (props) => {
    document.title = "Software Detail";

    const [userID, setUserID] = useState('');
    const [userData, setUserData] = useState({});
    const myInformationSelector = useSelector(state => state.Profile.myinformation);
    const history = useHistory();

    useEffect(() => {
        if (myInformationSelector) {
            setUserID(myInformationSelector.id);
        }
        else {
            history.push('/login');
        }
    }, [myInformationSelector]);

    useEffect(() => {
        getUser(userID).then(res => {
            setUserData(res);
        });
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
    const [program, setProgramList] = useState({
        name: "",
        requirement: "",
        description: "",
        cost: "",
        recommends: "",
    });

    const [enterSerialNumber, setEnterSerialNumber] = ('');

    useEffect(() => {
        if (id) {
            getProgram(id).then(res => {
                setProgramList(res);
            })
        }
    }, []);

    useEffect(() => {
        console.log("aaa", program.recommends);
    }, [program]);
    const [disable, setDisable] = useState(false);
    const [show, setShow] = useState(false);
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
                                            <Link to="/pages-software">
                                                <Button
                                                    type="button"
                                                    color="success"
                                                    style={{ width: "100px" }}
                                                >
                                                    Back
                                                </Button>
                                            </Link>
                                        </Col>
                                        <Col lg={11}>
                                            <h1 style={{ textAlign: "center" }}>{program.name}</h1>
                                            {console.log("AAAAADD", program.name)}
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody className='px-5 py-5'>
                                    <div className='d-flex justify-content-center'>
                                        <div className="col-sm-3 me-5">
                                            {/* <div className="avatar-lg bg-light rounded p-1"> */}
                                            <div style={{ width: 1000 }}>
                                                <img
                                                    src={downloadProgram(program.id)} alt="..." className="img-fluid d-block">
                                                </img>
                                            </div>
                                        </div>
                                        <Col lg={6} className="fs-5">
                                            <div>
                                                <label
                                                    className="form-label"
                                                    htmlFor="manufacturer-brand-input"
                                                >
                                                    Enter Serial Number
                                                </label>
                                                <div className="mb-3 d-flex" >
                                                    <div className="me-3">
                                                        <input
                                                            style={{ width: "350px" }}
                                                            type="text"
                                                            className="form-control"
                                                            id="manufacturer-brand-input"
                                                            placeholder="Enter Serial Number"
                                                            value={enterSerialNumber}
                                                            onChange={e => {
                                                                setEnterSerialNumber(e.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="live-preview">
                                                        <div id="liveAlertPlaceholder">
                                                            <Button type="button" color="success" id="liveAlertBtn" onClick={() => setShow(true)}>Generator</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <Alert color="success" isOpen={show} toggle={() => setShow(false)}>
                                                successfully generatoried!
                                            </Alert>
                                        </Col>
                                    </div>
                                    <div style={{ padding: "50px 20%" }}>
                                        <Row className="pt-4">
                                            <div className="col-sm-6 text-center">
                                                <Button style={{ width: "100px" }} color="success" onClick={() => {
                                                }} >
                                                    Download
                                                </Button>
                                            </div>
                                            <div className="col-sm-6 text-center">
                                                <Button disabled={disable} style={{ width: "100px" }} color="success" onClick={() => {
                                                    setProgramList({
                                                        ...program, ...{ recommends: program.recommends + 1 }
                                                    })
                                                    ProgramUpVote(id, program);
                                                    let temp = [];
                                                    if (userData.votestate) temp = JSON.parse(userData.votestate);
                                                    temp.push(id);
                                                    setUserData({
                                                        ...userData, ... { votestate: JSON.stringify(temp) }
                                                    });
                                                    setDisable(true);
                                                }} >
                                                    Agree
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

export default BuySoftware;










