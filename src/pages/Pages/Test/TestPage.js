import React, { useState, useEffect } from 'react';
import { Button, Form, Label, Col, Container, Row, Input, TabContent, TabPane, Progress } from 'reactstrap';
import "./test-page-custom.css";
import { Link, useParams } from 'react-router-dom';


// Import Images
import macImg from "../../../assets/images/mac-img1.png";

import { findSomeQuestions, addNewPassedTest, updatePassedTest, getAuthenticatedUser } from "../../../helpers/fakebackend_helper";


import 'aos/dist/aos.css';

const TestPage = () => {


    // fetch question data

    const fetchData = async () => {
        findSomeQuestions(degreeId, level).then(someQue => {
            setSomeQuestions(someQue);
        });
    };

    //progress

    const [activeTab, setactiveTab] = useState(1);
    const [someQuestions, setSomeQuestions] = useState([{
        answers: [],
        id: '',
    }]);
    // const [answers, setAnswers] = useState([{}]);
    const [progressbarvalue, setprogressbarvalue] = useState(0);
    const [passedNum, setPassedNum] = useState({});
    const [passedSteps, setPassedSteps] = useState([1]);

    const [progressVal, setProgressVal] = useState(0);
    const [scoreFlag, setScoreFlag] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    // const [trueAnswers, setTrueAnswers] = useState([0]);

    var user = getAuthenticatedUser();
    var trueAnswers = [];

    var questionLength = someQuestions.length;
    var passedStatus = "Unpassed";
    var maxInterVal = questionLength + 2;
    var interVal = 100 / (questionLength - 1);

    var { degreeId, level, currentLevel } = useParams();


    useEffect(() => {
        fetchData();
        // passedData();
        console.log(degreeId, level);

    }, []);

    useEffect(() => {
        someQuestions.map((elements, key) => {
            let trueAnsNum = 0;
            // console.log(elements.answers);
            elements.answers.map((ele) => {
                if (ele.result === true)
                    trueAnsNum++;
            })
            // console.log(trueAnsNum);
            // setTrueAnswers(trueAnswers, ...[trueAnsNum]);
            trueAnswers.push(trueAnsNum);
        })

    });


    useEffect(() => {
        toggleTab(activeTab + 1, progressVal);
    }, [progressVal]);

    function toggleTab(tab, value) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= maxInterVal) {
                setactiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
        setprogressbarvalue(value);
    }


    document.title = "Test Page";
    return (
        <React.Fragment>


            <div className="layout-wrapper landing">
                <section className="section pb-0 hero-section" id="hero" style={{ height: '100vh' }}>
                    <div className="bg-overlay bg-overlay-pattern"></div>
                    <div className='container'>
                        <div className="content">
                            <Container>
                                <Row>
                                    <Col xl={12}>
                                        <Form action="#">
                                            <div className="text-center pt-3 pb-4 mb-1">
                                                <h1 style={{ color: "#4b38b3", fontSize: "4vw" }}>{currentLevel}</h1>
                                            </div>

                                            <div className="progress-nav mb-4">
                                                <Progress
                                                    value={progressbarvalue}
                                                    style={{ height: "4px" }}
                                                />
                                            </div>

                                            <TabContent activeTab={activeTab}>
                                                {someQuestions.map((que, key) => (
                                                    <TabPane tabId={key + 2} key={key}>
                                                        <Row>
                                                            <Col md={7} className='mt-5'>
                                                                <div style={{ position: 'relative' }}>
                                                                    <img src={macImg} alt="Mac " className="img-fluid test-field-img" />
                                                                </div>
                                                                <div className='test-detail'>
                                                                    <div className='test-problem justify-content-center'>
                                                                        <h1 className='mt-5'>{"Problem(" + (key + 1) + "/" + questionLength + ")"}</h1>
                                                                    </div><hr />
                                                                    <div className='test-problem-detail'>
                                                                        <p>{que.description}</p>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col md={5}>
                                                                <div className="p-4 pb-0 margin-top-custom">
                                                                    <Row>
                                                                        <Col lg={12}>
                                                                            {
                                                                                que.answers.map((ans, key_answer) => (
                                                                                    <div className="live-preview mt-2 mt-2" key={key_answer}>
                                                                                        <Input type="checkbox" className="btn-check" id={"btn-check-outlined" + ans.id}

                                                                                            onClick={() => {
                                                                                                // console.log("the result is ", ans.result);
                                                                                                let isChecked = document.getElementById("btn-check-outlined" + ans.id).checked;
                                                                                                if ((ans.result === true) && isChecked)
                                                                                                    setScoreFlag(scoreFlag + 1);
                                                                                                if ((ans.result !== true) && isChecked)
                                                                                                    setScoreFlag(scoreFlag - 1);
                                                                                                if ((ans.result === true) && !isChecked)
                                                                                                    setScoreFlag(scoreFlag - 1);
                                                                                                if ((ans.result !== true) && !isChecked)
                                                                                                    setScoreFlag(scoreFlag + 1);
                                                                                                console.log("result", scoreFlag);
                                                                                            }} />
                                                                                        <Label className="btn btn-customize shadow-none fs-17" for={"btn-check-outlined" + ans.id}>{(key_answer + 1) + ". " + ans.description}</Label>
                                                                                    </div>
                                                                                ))
                                                                            }
                                                                        </Col>
                                                                    </Row>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                        <div className="d-flex align-items-start gap-3 mt-4 custom-next-btn">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-primary btn-label right ps-4 ms-auto nexttab nexttab fs-20"
                                                                onClick={() => {

                                                                    setProgressVal(progressVal + interVal);
                                                                    if (scoreFlag == trueAnswers[key]) {
                                                                        setTotalScore(totalScore + 1);
                                                                        console.log("----------->okay!!!", totalScore);
                                                                    }
                                                                    else
                                                                        console.log("----------->false!!!", totalScore);

                                                                    setScoreFlag(0);
                                                                    // console.log("total answer length is ", trueAnswers[key]);


                                                                }}
                                                            >
                                                                <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                                Next
                                                            </button>
                                                        </div>
                                                    </TabPane>
                                                ))}
                                                <TabPane tabId={maxInterVal}>
                                                    <div>
                                                        <div className="text-center" style={{ height: "425px" }}>
                                                            <div className="mb-4" style={{ fontSize: "10vw" }}>
                                                                {(totalScore / questionLength * 10).toFixed(1)}
                                                            </div>
                                                            <h1>Examination is finished!</h1>
                                                            <h3 className="text-muted pt-4">
                                                                Your score is <span style={{ fontSize: "30px" }}>{(totalScore / questionLength * 10).toFixed(1)} </span> It will be saved your History.
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-3 mt-4 float-end">
                                                        <Link to="/test-test-page-start">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-primary btn-label right ms-auto nexttab nexttab fs-20"
                                                                onClick={() => {

                                                                    if ((totalScore / questionLength * 10) > 6.5)
                                                                        passedStatus = "Passed";
                                                                    addNewPassedTest({
                                                                        date: new Date(),
                                                                        level: currentLevel,
                                                                        total: questionLength,
                                                                        matched: totalScore,
                                                                        status: passedStatus,
                                                                        userId: user.id
                                                                    });
                                                                    console.log("Success!", totalScore, passedStatus);
                                                                }}
                                                            >
                                                                <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                                Go to test start page
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                        </Form>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default TestPage;