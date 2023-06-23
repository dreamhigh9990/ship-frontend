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

import { getAnswers, deleteAnswer } from "../../../helpers/fakebackend_helper";

const Answers = (props) => {
  // const dispatch = useDispatch();

  // const { Answers } = useSelector((state) => ({
  //   Answers: state.Answer.AnswerList,
  // }));
  // const [Answer, setAnswer] = useState(null);

  const [AnswerList, setAnswerList] = useState([]);
  useEffect(() => {
    getAnswerList();
  }, []);

  const getAnswerList = () => {
    getAnswers().then(res => {
      setAnswerList(res);
    })
  }

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (Answer) => {
    setCurrentID(Answer.id);
    // setAnswer(Answer);
    setDeleteModal(true);
  };

  const handleDeleteAnswer = () => {
    if (currentID) {
      deleteAnswer(currentID).then(res => {
        if (res === 1) {
          getAnswerList();
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
        Header: "Dscription",
        accessor: "description",
        filterable: false,
      },
      {
        Header: "Result",
        accessor: "result",
        filterable: false,
      },
      {
        Header: "Question",
        accessor: "question.title",
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
                <DropdownItem href={"admin-Answer-details/" + cellProps.row.original.id}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href={"admin-add-Answer/" + cellProps.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const AnswerData = cellProps.row.original;
                    onClickDelete(AnswerData);
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
  document.title = "Answers";
  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteAnswer}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="Answers" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-Answer"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Answer
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Answers..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
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
                        {AnswerList && AnswerList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={AnswerList}
                            isGlobalFilter={false}
                            isAddAnswerList={false}
                            customPageSize={10}
                            divClass="table-responsive mb-1"
                            tableClass="mb-0 table-borderless"
                            theadClass="table-light text-muted"
                          />
                        ) : (
                          <div className="py-4 text-center">
                            <div>
                              <lord-icon
                                src="https://cdn.lordicon.com/msoeawqm.json"
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

export default Answers;
