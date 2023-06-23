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

import { getProgramCategories, deleteProgramCategory } from "../../../helpers/fakebackend_helper";

const ProgramCategories = (props) => {
  // const dispatch = useDispatch();

  // const { ProgramCategorys } = useSelector((state) => ({
  //   ProgramCategorys: state.ProgramCategory.ProgramCategoryList,
  // }));
  // const [ProgramCategory, setProgramCategory] = useState(null);

  const [ProgramCategoryList, setProgramCategoryList] = useState([]);
  useEffect(() => {
    getProgramCategoryList();
  }, []);

  const getProgramCategoryList = () => {
    getProgramCategories().then(res => {
      setProgramCategoryList(res);
    })
  }

  // useEffect(() => {
  //   if (ProgramCategorys && !ProgramCategorys.length) {
  //     dispatch(onGetProgramCategories());
  //   }
  // }, [dispatch, ProgramCategorys]);

  // useEffect(() => {
  //   setProgramCategoryList(ProgramCategorys);
  // }, [ProgramCategorys]);

  // useEffect(() => {
  //   dispatch(onGetProgramCategories());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isEmpty(ProgramCategorys)) setProgramCategoryList(ProgramCategorys);
  // }, [ProgramCategorys]);

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (ProgramCategory) => {
    setCurrentID(ProgramCategory.id);
    // setProgramCategory(ProgramCategory);
    setDeleteModal(true);
  };

  const handleDeleteProgramCategory = () => {
    if (currentID) {
      deleteProgramCategory(currentID).then(res => {
        if (res == 1) {
          getProgramCategoryList();
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
        Header: "Title",
        Cell: (ProgramCategory) => (
          <>
            <div className="d-flex align-items-center">
              {/* <div className="flex-shrink-0 me-3">
                <div className="avatar-sm bg-light rounded p-1">
                  <img
                    src={ProgramCategory.row.original.image}
                    alt=""
                    className="img-fluid d-block"
                  />
                </div>
              </div> */}
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-1">
                  <Link
                    to={"/admin-ProgramCategory-details/" + ProgramCategory.row.original.id}
                    className="text-dark"
                  >
                    {" "}
                    {ProgramCategory.row.original.title}
                  </Link>
                </h5>
              </div>
            </div>
          </>
        ),
        accessor: "title",
        filterable: false,
      },
      {
        Header: "Dscription",
        accessor: "description",
        filterable: false,
      },
      {
        Header: "ParentId",
        accessor: "parentId",
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
                <DropdownItem href={"admin-ProgramCategory-details/" + cellProps.row.original.id}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href={"admin-add-ProgramCategory/" + cellProps.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const ProgramCategoryData = cellProps.row.original;
                    onClickDelete(ProgramCategoryData);
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
  document.title = "ProgramCategories";
  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteProgramCategory}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="ProgramCategories" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-ProgramCategory"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          ProgramCategory
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ProgramCategories..."
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
                        {ProgramCategoryList && ProgramCategoryList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={ProgramCategoryList}
                            isGlobalFilter={false}
                            isAddProgramCategoryList={false}
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

export default ProgramCategories;
