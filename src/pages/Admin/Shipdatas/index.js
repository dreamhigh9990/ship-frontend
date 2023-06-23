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
import { getShipDatas, deleteShipData, downloadShipImage } from "../../../helpers/fakebackend_helper";


const ShipDatas = (props) => {
  const [shipDataList, setShipDataList] = useState([]);
  useEffect(() => {
    getShipDataList();
  }, []);

  const getShipDataList = () => {
    getShipDatas().then(res => {
      setShipDataList(res);
    })
  }

  //delete order
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentID, setCurrentID] = useState(false);

  const onClickDelete = (shipData) => {
    setCurrentID(shipData.id);
    // setShipData(shipData);
    setDeleteModal(true);
  };

  const handleDeleteShipData = () => {
    if (currentID) {
      deleteShipData(currentID).then(res => {
        if (res === 1) {
          getShipDataList();
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
        Cell: (shipData) => {
          return <input type="checkbox" />;
        },
      },
      {
        Header: "ShipData",
        Cell: (shipDataList) => (
          <>
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0 me-3">
                <div className="shipData-sm bg-light rounded p-1">
                  <img
                    src={downloadShipImage(shipDataList.row.original.id)}
                    alt=""
                    className="img-fluid d-block"
                  />
                </div>
              </div>
              <div className="flex-grow-1">
                <h5 className="fs-14 mb-1">
                  <Link
                    to={"/admin-shipData-details/" + shipDataList.row.original.id}
                    className="text-dark"
                  >
                    {" "}
                    {shipDataList.row.original.name}
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
        Header: "Plan_date",
        accessor: "plan_date",
        filterable: false,
      },
      {
        Header: "Port",
        accessor: "port",
        filterable: false,
      },
      {
        Header: "Type",
        accessor: "type",
        filterable: false,
      },
      {
        Header: "Price",
        accessor: "price",
        filterable: false,
      },
      {
        Header: "Owner",
        accessor: "owner",
        filterable: false,
      },
      {
        Header: "Runner",
        accessor: "runner",
        filterable: false,
      },
      {
        Header: "Total_weight",
        accessor: "total_weight",
        filterable: false,
      },
      {
        Header: "Load_weight",
        accessor: "load_weight",
        filterable: false,
      },
      {
        Header: "Weight",
        accessor: "weight",
        filterable: false,
      },
      {
        Header: "Length",
        accessor: "length",
        filterable: false,
      },
      {
        Header: "Width",
        accessor: "width",
        filterable: false,
      },
      {
        Header: "Current_height",
        accessor: "current_height",
        filterable: false,
      },
      {
        Header: "Full_load",
        accessor: "full_load",
        filterable: false,
      },
      {
        Header: "Engine",
        accessor: "engine",
        filterable: false,
      },
      {
        Header: "Built_date",
        accessor: "built_date",
        filterable: false,
      },
      {
        Header: "Factory",
        accessor: "factory",
        filterable: false,
      },
      {
        Header: "Location",
        accessor: "location",
        filterable: false,
      },
      {
        Header: "Status",
        accessor: "status",
        filterable: false,
      },
      {
        Header: "VoterId",
        accessor: "voterId",
        filterable: false,
      },
      {
        Header: "Action",
        Cell: (shipDataList) => {
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
                <DropdownItem href={"admin-shipData-details/" + shipDataList.row.original.id}>
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href={"admin-add-shipData/" + shipDataList.row.original.id}>
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem divider />
                <DropdownItem
                  href="#"
                  onClick={() => {
                    const shipDataData = shipDataList.row.original;
                    onClickDelete(shipDataData);
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
  document.title = "ShipDatas";
  return (
    <div className="page-content">
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteShipData}
        onCloseClick={() => setDeleteModal(false)}
      />

      <Container fluid>
        <BreadCrumb title="ShipDatas" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header border-0">
                  <div className="row g-4">
                    <div className="col-sm-auto">
                      <div>
                        <Link
                          to="/admin-add-shipData"
                          className="btn btn-success"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          ShipData
                        </Link>
                      </div>
                    </div>
                    <div className="col-sm">
                      <div className="d-flex justify-content-sm-end">
                        <div className="search-box ms-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ShipDatas..."
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
                        {shipDataList && shipDataList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={shipDataList}
                            isGlobalFilter={false}
                            isAddShipDataList={false}
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

export default ShipDatas;
