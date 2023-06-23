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

import { getUsers, deleteUser } from "../../../helpers/fakebackend_helper";

const Users = (props) => {

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = () => {
    getUsers().then(res => {
      setUserList(res);
    })
  }

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (user) => {
    setCurrentID(user.id);
    setDeleteModal(true);
  };

  const handleDeleteUser = () => {
    if (currentID) {
      deleteUser(currentID).then(res => {
        if (res === 1) {
          getUserList();
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
        Header: "User",
        Cell: (user) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="avatar-sm bg-light rounded p-1">
                  <img
                    src={user.row.original.image}
                    alt=""
                    className="img-fluid d-block"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-1">
                  <Link
                    to={"/admin-user-details/" + user.row.original.id}
                    className="text-dark"
                  >
                    {" "}
                    {user.row.original.name}
                  </Link>
                </h5>
              </div>
            </div>
          </>
        ),
        accessor: "name",
        filterable: false,
      },
      {
        Header: "Username",
        accessor: "username",
        filterable: false,
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: false,
      },
      {
        Header: "Gender",
        accessor: "gender",
        filterable: false,
      },
      {
        Header: "Birthday",
        accessor: "birthday",
        filterable: false,
      },
      {
        Header: "Balance",
        accessor: "balance",
        filterable: false,
      },
      {
        Header: "Free_balance",
        accessor: "free_balance",
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
                {/* <DropdownItem href={"admin-user-details/" + cellProps.row.original.id}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem> */}

                <DropdownItem href={"admin-add-user/" + cellProps.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const userData = cellProps.row.original;
                    onClickDelete(userData);
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
  document.title = "Users";
  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteUser}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="Users" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-user"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          User
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Users..."
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
                        {userList && userList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={userList}
                            isGlobalFilter={false}
                            isAddUserList={false}
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

export default Users;
