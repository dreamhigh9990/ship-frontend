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

import { getNotifications, deleteNotification } from "../../../helpers/fakebackend_helper";

const Notifications = (props) => {
  // const dispatch = useDispatch();

  // const { notifications } = useSelector((state) => ({
  //   notifications: state.Notification.notificationList,
  // }));
  // const [notification, setNotification] = useState(null);

  const [notificationList, setNotificationList] = useState([]);
  useEffect(() => {
    getNotificationList();
  }, []);

  const getNotificationList = () => {
    getNotifications().then(res => {
      setNotificationList(res);
    })
  }

  // useEffect(() => {
  //   if (notifications && !notifications.length) {
  //     dispatch(onGetNotifications());
  //   }
  // }, [dispatch, notifications]);

  // useEffect(() => {
  //   setNotificationList(notifications);
  // }, [notifications]);

  // useEffect(() => {
  //   dispatch(onGetNotifications());
  // }, [dispatch]);

  // useEffect(() => {
  //   if (!isEmpty(notifications)) setNotificationList(notifications);
  // }, [notifications]);

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (notification) => {
    setCurrentID(notification.id);
    // setNotification(notification);
    setDeleteModal(true);
  };

  const handleDeleteNotification = () => {
    if (currentID) {
      deleteNotification(currentID).then(res => {
        if (res == 1) {
          getNotificationList();
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
        Header: "Date",
        accessor: "date",
        filterable: false,
      },
      {
        Header: "Description",
        accessor: "description",
        filterable: false,
      },
      {
        Header: "Type",
        accessor: "type",
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
                <DropdownItem href={"admin-add-notification/" + cellProps.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const notificationData = cellProps.row.original;
                    onClickDelete(notificationData);
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
  document.title = "Notifications";
  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteNotification}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="Notifications" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-notification"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> 
                          Add Notification
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Notifications..."
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
                        {notificationList && notificationList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={notificationList}
                            isGlobalFilter={false}
                            isAddNotificationList={false}
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

export default Notifications;
