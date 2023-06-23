import React, { useEffect, useState, useMemo } from "react";
import { Card, CardBody, Col, Container, ListGroup, Button, CardHeader, ListGroupItem, Input, Label, Tooltip, Nav, NavItem, NavLink, Row, TabContent, TabPane, Modal, ModalBody, ModalFooter, } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
//Import Flatepicker
import Flatpickr from "react-flatpickr";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import { addNewQuestion, getQuestion, updateOneQuestion } from "../../../helpers/fakebackend_helper";
import { addNewAnswer, getAnswer, deleteAnswer, getAnswers } from "../../../helpers/fakebackend_helper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { FadeRightExample } from "../../AdvanceUi/UiAnimation/UiAnimationCode";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

function QuestionDetail(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [ttop, setttop] = useState(false);

  const [customActiveTab, setcustomActiveTab] = useState("1");
  let { id } = useParams();
  const [question, setQuestion] = useState({
    id: '',
    degreeId: '',
    level: '',
    description: '',
  });

  const [modal_list, setmodal_list] = useState(false);
  function tog_list() {
    setmodal_list(!modal_list);
  }

  const [modal_delete, setmodal_delete] = useState(false);
  function tog_delete() {
    setmodal_delete(!modal_delete);
  }
  // useEffect(() => {
  //   // getAnswerList();

  // }, []); 

  // const getAnswerList = () => {


  // }

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const [currentID, setCurrentID] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [newAnswer, setNewAnswer] = useState({
    description: "",
    result: "1",
    questionId: ""
  });

  const onClickDelete = (answer) => {
    setCurrentID(answer.id);
    // setAnswer(answer);
    setDeleteModal(true);
  };

  const handleDeleteAnswer = () => {
    if (currentID) {
      deleteAnswer(currentID).then(res => {
        if (res == 1) {
          getAnswerList();
          setDeleteModal(false);
        } else {
          setDeleteModal(false);
        }
      })
    }
  };

  // const columns = useMemo(
  //   () => [      
  //     {
  //       Header: "Answer",
  //       accessor: "answer",
  //       filterable: false,
  //     },
  //     {
  //       Header: "Action",
  //       accessor: "action",
  //       filterable: false,
  //     },
  //   ],
  //   []
  // );

  useEffect(() => {
    setNewAnswer({ ...newAnswer, ...{ questionId: id } })
    if (id) {
      getQuestion(id).then(res => {
        setQuestion({
          ...question,
          ...{ id: res.id },
          ...{ degreeId: res.degree.name },
          ...{ level: res.level },
          ...{ description: res.description },
        });
        console.log(res);
        getAnswers(res.id).then(res => {
          // setAnswerList(res);
          setAnswers(res.answers);
        })
      })
    }
  }, []);

  useEffect(() => {
    if (id) {
      getAnswers(id).then(res => {
        // setAnswerList(res);
        setAnswers(res.answers);
      })
    }
  }, [answers.length]);

  const toggleCustom = tab => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  document.title = "Question Details | Velzon - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          <BreadCrumb title="Question Details" pageTitle="Ecommerce" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Row className="gx-lg-5">
                    <Col xl={8}>
                      <div className="mt-xl-0 mt-5">
                        <div className="d-flex">
                          <h4 className="card-title mb-0">{question.degreeId} {question.level} Level</h4>
                        </div>

                        <div className="table-responsive">
                          <table className="table mb-0">
                            <tbody>
                              <tr>
                                <th scope="row"> Question :</th>
                                <td>{question.description}</td>
                                <td>                            <Tooltip
                                  placement="top"
                                  isOpen={ttop}
                                  target="TooltipTop"
                                  toggle={() => {
                                    setttop(!ttop);
                                  }}
                                >
                                  <Link
                                    to="/admin-add-question"
                                    className="btn btn-success"
                                  >
                                    <i className="ri-add-line align-bottom me-1"></i> Edit Question
                                  </Link>
                                </Tooltip>
                                  <a
                                    href={"/admin-add-question/" + id}
                                    id="TooltipTop"
                                    className="btn btn-light"
                                  >
                                    <i className="ri-pencil-fill align-bottom"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <Row>
                    <div className="d-flex gap-1" >
                      <Button color="success" className="add-btn" onClick={() => tog_list()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add</Button>
                    </div>
                  </Row>
                  <Row>


                    <div className="table-responsive table-card mt-3 mb-1">
                      <table className="table align-middle table-nowrap" id="customerTable">
                        <thead className="table-light">
                          <tr>
                            <th className="sort" data-sort="phone">Answer</th>
                            <th className="sort" data-sort="phone">Action</th>
                            <th className="sort" data-sort="phone">Edit</th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          {
                            answers.map((answer) => {
                              return (
                                // <Record
                                // // record={record}
                                // // deleteRecord={() => deleteRecord(record._id)}
                                // // key={record._id}
                                // />
                                <tr>
                                  <td className="email">{answer.description}</td>
                                  <td className="status">
                                    {answer.result == 1 ? <span className="badge badge-soft-success text-uppercase">True</span> : <span className="badge badge-soft-danger text-uppercase">False</span>}
                                  </td>
                                  <td>
                                    <div className="d-flex gap-2">
                                      {/* <div className="edit">
                                        <button className="btn btn-sm btn-success edit-item-btn"
                                          data-bs-toggle="modal" data-bs-target="#showModal">Edit</button>
                                      </div> */}
                                      <div className="remove">
                                        <button className="btn btn-sm btn-danger remove-item-btn"
                                          onClick={() => { 
                                            setDeleteId(answer.id);
                                            tog_delete() }}
                                        >
                                          Remove</button>
                                        {/* <Button color="success" className="add-btn" onClick={() => tog_delete()} id="create-btn"><i className="ri-add-line align-bottom me-1"></i> Add</Button> */}
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              );
                            })
                          }


                        </tbody>
                      </table>
                    </div>
                    {/* <div className="d-flex justify-content-end">
                      <div className="pagination-wrap hstack gap-2">
                        <Link className="page-item pagination-prev disabled" to="#">
                          Previous
                        </Link>
                        <ul className="pagination listjs-pagination mb-0"></ul>
                        <Link className="page-item pagination-next" to="#">
                          Next
                        </Link>
                      </div>
                    </div> */}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Add Modal */}
      <Modal isOpen={modal_list} toggle={() => { tog_list(); }} centered >
        <div className="modal-header bg-light p-3">
          {question.degreeId} {question.level} Level
          <Button type="button" onClick={() => { setmodal_list(false); }} className="btn-close" aria-label="Close" >
          </Button>
        </div>
        <form>
          <ModalBody>
            <div className="mb-3" id="modal-id" style={{ display: "none" }}>
              <label htmlFor="id-field" className="form-label">ID</label>
              <input type="text" id="id-field" className="form-control" placeholder="ID" readOnly />
            </div>

            <div className="mb-3">
              <label htmlFor="customername-field" className="form-label">Add Answer</label>
              <textarea type="text" id="customername-field" className="form-control" placeholder="Enter Answer"
                // value={answer.answer} 
                onChange={e => {
                  setNewAnswer({ ...newAnswer, ...{ description: e.target.value } })
                }}
                required />
            </div>
            <div>
              <label htmlFor="status-field" className="form-label">Action</label>
              <select className="form-control" data-trigger name="status-field" id="status-field"
                onChange={e => {
                  setNewAnswer({ ...newAnswer, ...{ result: e.target.value } })
                }} >
                {/* <option value="">  </option> */}
                <option value="1">True</option>
                <option value="0">False</option>
              </select>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="hstack gap-2 justify-content-end">
              <button type="button" className="btn btn-light" onClick={() => setmodal_list(false)}>Close</button>
              <button type="submit" className="btn btn-success" id="add-btn" onClick={e => {
                console.log(newAnswer);
                e.preventDefault();
                addNewAnswer(newAnswer).then(res => {
                  getAnswers(id).then(res => {
                    setAnswers(res.answers);
                  })
                  console.log("SS", res);
                })
                // }
              }}>Add Answer</button>
            </div>
          </ModalFooter>
        </form>
      </Modal>
      {/* Remove Modal */}
      <Modal isOpen={modal_delete} toggle={() => { tog_delete(); }} centered >
        <div className="modal-header">
          <Button type="button" onClick={() => setmodal_delete(false)} className="btn-close" aria-label="Close"> </Button>
        </div>
        <ModalBody>
          <div className="mt-2 text-center">
            <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop"
              colors="primary:#ffbe0b,secondary:#f06548" style={{ width: "100px", height: "100px" }}></lord-icon>
            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
              <h4>Are you Sure ?</h4>
              <p className="text-muted mx-4 mb-0">Are you Sure You want to Remove this Answer ?</p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <button type="button" className="btn w-sm btn-light" onClick={() => setmodal_delete(false)}>Close</button>
            <button type="submit" className="btn btn-success" id="add-btn" onClick={e => {
              setmodal_delete(false);
              e.preventDefault();
              deleteAnswer(deleteId).then(res => {
                getAnswers(id).then(res => {
                  setAnswers(res.answers);
                })
              })
              // }
            }}>Yes,delete it!!</button>
            
            {/* <button type="button" className="btn w-sm btn-danger " id="delete-record">Yes, Delete It!</button> */}
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

export default QuestionDetail;