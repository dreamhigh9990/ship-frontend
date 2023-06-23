import React, { useEffect, useState, useMemo } from "react";

import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Row,
} from "reactstrap";

// RangeSlider
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";

//redux
import { Link } from "react-router-dom";

import { getQuestions, deleteQuestion } from "../../../helpers/fakebackend_helper";

const Questions = (props) => {
  // const dispatch = useDispatch();

  // const { questions } = useSelector((state) => ({
  //   questions: state.Question.questionList,
  // }));
  // const [question, setQuestion] = useState(null);

  const [questionList, setQuestionList] = useState([]);
  useEffect(() => {
    getQuestionList();
  }, []); 

  const getQuestionList = () => {
    getQuestions().then(res => {
      setQuestionList(res);
    })
  }

  // useEffect(() => {
  //   if (questions && !questions.length) {
  //     dispatch(onGetQuestions());
  //   }
  // }, [dispatch, questions]);

  // useEffect(() => {
  //   setQuestionList(questions);
  // }, [questions]);

  // useEffect(() => {
  //   dispatch(onGetQuestions());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isEmpty(questions)) setQuestionList(questions);
  // }, [questions]);

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (question) => {
    setCurrentID(question.id);
    // setQuestion(question);
    setDeleteModal(true);
  };

  const handleDeleteQuestion = () => {
    if (currentID) {
      deleteQuestion(currentID).then(res => {
        if (res == 1) {
          getQuestionList();
          setDeleteModal(false);
        } else {
          setDeleteModal(false);
        }
      })
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" />;
        },
      },
      
      {
        Header: "degree",
        accessor: "degree.name",
        filterable: false,
      },
      {
        Header: "level",
        accessor: "level",
        filterable: false,
      },
      {
        Header: "description",
        accessor: "description",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown>
              <DropdownToggle
                href="#"
                className="btn-soft-secondary btn-sm"
                tag="button"
              >
                <i className="ri-more-fill" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                
                <DropdownItem href={"admin-question-details/" + cellProps.row.original.id}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  Create Answer
                </DropdownItem>

                <DropdownItem href={"admin-add-question/" + cellProps.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit Question
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const questionData = cellProps.row.original;
                    onClickDelete(questionData);
                  }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );
  document.title = "Questions";
  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteQuestion}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="Questions" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-question"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Question
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <TabContent className="text-muted">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        {questionList && questionList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={questionList}
                            isGlobalFilter={false}
                            isAddQuestionList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless"
                            theadClass="table-light text-muted"
                          />
                        ) : (
                          <div className="py-4 text-center">
                            <div>
                              <lord-icon                              
                                trigger="loop"
                                colors="primary:#405189,secondary:#0ab39c"
                                style={{ width: "72px", height: "72px" }}
                              ></lord-icon>
                            </div>

                            <div className="mt-4">
                              <h5>Sorry! No Result Found</h5>
                            </div>
                          </div>
                        )}
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Questions;
