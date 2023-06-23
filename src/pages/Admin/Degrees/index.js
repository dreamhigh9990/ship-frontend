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

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";
   

//redux
import { Link } from "react-router-dom";

import { getDegrees} from "../../../helpers/fakebackend_helper";

const Degrees = (props) => {
  // const dispatch = useDispatch();

  // const { degrees } = useSelector((state) => ({
  //   degrees: state.Degree.degreeList,
  // }));
  // const [degree, setDegree] = useState(null);

  const [degreeList, setDegreeList] = useState([]);
  useEffect(() => {
    getDegreeList();
  }, []); 

  const getDegreeList = () => {
    getDegrees().then(res => {
      setDegreeList(res);
    })
  }

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: () => {
          return <input type="checkbox" />;
        },
      },
      
      {
        Header: "Name",
        accessor: "name",
        filterable: false,
      },
      {
        Header: "maxdegree",
        accessor: "maxdegree",
        filterable: false,
      }
    ],
    []
  );
  document.title = "Degrees";
  return (
    <div className="page-content">

      <Container fluid>
        <BreadCrumb title="Degrees" pageTitle="Admin" />

        <Row>
          <div className="col-xl-12 col-lg-12">
            <div>
              <div className="card">

                <div className="card-body">
                  <TabContent className="text-muted">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        {degreeList && degreeList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={degreeList}
                            isGlobalFilter={false}
                            isAddDegreeList={false}
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

export default Degrees;
