{/* <CardHeader >


<Select
  value={selectedSingle}
  onChange={() => {
    handleSelectSingle();
  }}
  options={SingleOptions}
/>
</CardHeader> */}

import React, { useEffect, useState, useMemo } from "react";
import MetaTags from 'react-meta-tags';
import product10 from "./assets/images2.jpeg";
import {
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  UncontrolledCollapse,
  Modal, ModalBody, ModalHeader,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
  Button,

} from "reactstrap";
import classnames from "classnames";

import TreeView, { flattenTree } from "react-accessible-treeview";
import { IoMdArrowDropright } from "react-icons/io";
import cx from "classnames";

// import { Col, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Row, TabPane, TabContent, UncontrolledDropdown, UncontrolledTooltip, UncontrolledCollapse, ButtonGroup, Button, UncontrolledButtonDropdown, Modal, ModalBody, ModalHeader, Input, Progress, Card, CardHeader, CardBody, Alert } from 'reactstrap';

// RangeSlider
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import DeleteModal from "../../../Components/Common/DeleteModal";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import TableContainer from "../../../Components/Common/TableContainer";
import { Rating, Published, Price } from "./EcommerceProductCol";
//Import data
import { productsData } from "./Data";

//Import actions
import { getProducts as onGetProducts, deleteProducts } from "../../../store/ecommerce/action";
import { isEmpty } from "lodash";
import Select from "react-select";

//redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SingleOptions = [
  { value: 'Watches', label: 'Watches' },
  { value: 'Headset', label: 'Headset' },
  { value: 'Sweatshirt', label: 'Sweatshirt' },
  { value: '20% off', label: '20% off' },
  { value: '4 star', label: '4 star' },
];

const folder = {
  name: "",
  children: [
    {
      name: "Fruits",
      children: [
        { name: "Avocados" },
        { name: "Bananas" },
        { name: "Berries" },
        { name: "Oranges" },
        { name: "Pears" },
      ],
    },
    {
      name: "Drinks",
      children: [
        { name: "Apple Juice" },
        { name: "Chocolate" },
        { name: "Coffee" },
        {
          name: "Tea",
          children: [
            { name: "Black Tea" },
            { name: "Green Tea" },
            { name: "Red Tea" },
            { name: "Matcha" },
          ],
        },
      ],
    },
    {
      name: "Vegetables",
      children: [
        { name: "Beets" },
        { name: "Carrots" },
        { name: "Celery" },
        { name: "Lettuce" },
        { name: "Onions" },
      ],
    },
  ],
};

const data = flattenTree(folder);



const ArrowIcon = ({ isOpen, className }) => {
  const baseClass = "arrow";
  const classes = cx(
    baseClass,
    { [`${baseClass}--closed`]: !isOpen },
    { [`${baseClass}--open`]: isOpen },
    className
  );
  return <IoMdArrowDropright className={classes} />;
};






const EcommerceProducts = (props) => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => ({
    products: state.Ecommerce.products,
  }));


  const [productList, setProductList] = useState([]);
  const [activeTab, setActiveTab] = useState("1");
  const [selectedMulti, setselectedMulti] = useState(null);
  const [product, setProduct] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [expandedIds, setExpandedIds] = useState();

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  useEffect(() => {
    if (products && !products.length) {
      dispatch(onGetProducts());
    }
  }, [dispatch, products]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  useEffect(() => {
    dispatch(onGetProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!isEmpty(products)) setProductList(products);
  }, [products]);

  const toggleTab = (tab, type) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      let filteredProducts = productsData;
      if (type !== "all") {
        filteredProducts = productsData.filter((product) => product.type === type);
      }
      setProductList(filteredProducts);
    }
  };

  const onUpdate = (render, handle, value) => {
    setProductList(
      productsData.filter(
        (product) => product.price >= value[0] && product.price <= value[1],
      )
    );
  };

  const [ratingvalues, setRatingvalues] = useState([]);
  /*
  on change rating checkbox method
  */
  const onChangeRating = value => {
    setProductList(productsData.filter(product => product.rating >= value));

    var modifiedRating = [...ratingvalues];
    modifiedRating.push(value);
    setRatingvalues(modifiedRating);
  };

  const onUncheckMark = (value) => {
    var modifiedRating = [...ratingvalues];
    const modifiedData = (modifiedRating || []).filter(x => x !== value);
    /*
    find min values
    */
    var filteredProducts = productsData;
    if (modifiedData && modifiedData.length && value !== 1) {
      var minValue = Math.min(...modifiedData);
      if (minValue && minValue !== Infinity) {
        filteredProducts = productsData.filter(
          product => product.rating >= minValue
        );
        setRatingvalues(modifiedData);
      }
    } else {
      filteredProducts = productsData;
    }
    setProductList(filteredProducts);
  };
  //Modal
  const [description, setDescription] = useState("Composition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power GridComposition and Characteristics of Ship Power Grid");

  const [title, setTitle] = useState("Composition and Characteristics of Ship Power Grid");
  const [modal_togFirst, setmodal_togFirst] = useState(false);
  function tog_togFirst() {
    setmodal_togFirst(!modal_togFirst);
    setTitle();

    // setmodal_togFirst(false);

    // console.log("aaaaaaa",ref.current);
  }
  const [modal_togSecond, setmodal_togSecond] = useState(false);
  function tog_togSecond() {
    setmodal_togSecond(!modal_togSecond);
  }

  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };


  //delete order
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (product) => {
    setProduct(product);
    setDeleteModal(true);

  };

  const handleDeleteOrder = () => {
    if (product.id) {
      dispatch(deleteProducts(product));
      setDeleteModal(false);
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "#",
        Cell: (product) => {
          return <div>{product.row.original.id}</div>;
        },
      },
      {
        Header: "Title",
        Cell: (product) => (
          <>
            <div className="d-flex align-items-center" onClick={tog_togFirst}>

              <div className="flex-grow-1">
                <h5 className="fs-14 mb-1">
                  <Link
                    // to="/apps-ecommerce-product-details"
                    className="text-dark"
                  >
                    {" "}
                    {product.row.original.name}
                  </Link>
                </h5>

              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Score",
        accessor: "price",
        filterable: false
      },
      {
        Header: "Reading",
        accessor: "orders",
        filterable: false
      },

      {
        Header: "Rate",
        accessor: "rating",
        filterable: false

      },


    ],
    []
  );
  document.title = "Products | Velzon - React Admin & Dashboard Template";
  console.log("produdct", { productList });
  console.log("column", { columns });

//selection
const [selectedSingle, setSelectedSingle] = useState(null);
function handleSelectSingle(selectedSingle) {
  setSelectedSingle(selectedSingle);
}
const SingleOptions = [
  { value: 'Choices 1', label: 'Choices 1' },
  { value: 'Choices 2', label: 'Choices 2' },
  { value: 'Choices 3', label: 'Choices 3' },
  { value: 'Choices 4', label: 'Choices 4' }
];

























































  return (
    <div className="page-content">
      {/* <Modal
        isOpen={modal_togFirst}
        toggle={() => {
          tog_togFirst();
        }}
        id="firstmodal"
        centered
      >
        <ModalHeader>

          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_togFirst(false);
            }}
            aria-label="Close"
          >
          </Button>
        </ModalHeader>
        <ModalBody className="text-center">

          <div className=" pt-4">
            <Row>
              <Col lg={3}>Title:</Col>
              <Col lg={9}> <h4>{title}</h4></Col>
            </Row>
            <Row>
              <Col lg={3}>Description</Col>
              <Col lg={9}> <p className="text-muted"> {description}</p></Col>
            </Row>



            <Button className="btn btn-warning " onClick={() => { tog_togSecond(); tog_togFirst(false); }}>
              Buy
            </Button>


          </div>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={modal_togSecond}
        toggle={() => {
          tog_togSecond();
        }}
        id="secondmodal"
        centered
      >
        <ModalHeader className='purchase-setting-header'>
          Purchase
          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_togSecond(false);
              // setmodal_togFirst(false);
            }}
            aria-label="Close"

          >

          </Button>
        </ModalHeader>
        <div className="modal-body text-center">
          <div className=" ">
            <h4 className="mb-4">You can purchase with real or free score</h4>
            <Nav tabs className="nav nav-tabs nav-border-top nav-border-top-primary mb-3">
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "1", })} onClick={() => { topBorderJustifytoggle("1"); }} >
                  Real score
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderjustifyTab === "2", })} onClick={() => { topBorderJustifytoggle("2"); }} >
                  Free score
                </NavLink>
              </NavItem>
            </Nav>

            <TabContent activeTab={topBorderjustifyTab} className="text-muted">
              <TabPane tabId="1" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p style={{ position: "relative", top: "-3px" }}><Input type="number" id="basiInput purchase-input-sl" style={{ width: "30px", display: "inline", direction: "rtl", padding: "3px" }} />100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>real valance: </span><p>none</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>

              <TabPane tabId="2" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p style={{ position: "relative", top: "-3px" }}><Input type="number" id="basiInput purchase-input-sl" style={{ width: "30px", display: "inline", direction: "rtl", padding: "3px" }} />100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>free valance: </span><p>none</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>
            </TabContent>
            <div className='purchase-button-group mb-5'>
              <Button color="warning" onClick={() => { tog_togSecond(false); }} style={{ float: "left" }}>
                buy
              </Button>
              <Button color="success" onClick={() => { }} style={{ float: "right" }}>
                charging score
              </Button>
            </div><br /><br />
          </div>
        </div>
      </Modal> */}

      <Container fluid>
        <BreadCrumb title="Study Field" pageTitle="Ecommerce" />

        <Row>
          <Col xl={3} lg={4}>
            <Card>
              <CardHeader >


                <Select
                  value={selectedSingle}
                  onChange={() => {
                    handleSelectSingle();
                  }}
                  options={SingleOptions}
                />
              </CardHeader>

              <div className="accordion accordion-flush">
                <div className="card-body border-bottom">
                  <div>
                    <p className="text-muted text-uppercase fs-12 fw-medium mb-2">
                      Products
                    </p>
                    <TreeView
                      data={data}
                      className="basic"
                      aria-label="Controlled expanded node tree"
                      expandedIds={expandedIds}
                      defaultExpandedIds={[1]}
                      nodeRenderer={({
                        element,
                        isBranch,
                        isExpanded,
                        isDisabled,
                        getNodeProps,
                        level,
                        handleExpand,
                      }) => {
                        return (
                          <div
                            {...getNodeProps({ onClick: handleExpand })}
                            style={{
                              marginLeft: 40 * (level - 1),
                              opacity: isDisabled ? 0.5 : 1,
                            }}
                          >
                            {isBranch && <ArrowIcon isOpen={isExpanded} />}
                            <span className="name">
                              {element.name}-{element.id}
                            </span>
                          </div>
                        );
                      }}
                    />

                  </div>
                </div>



              </div>
            </Card>
          </Col>

          <div className="col-xl-9 col-lg-8">
            <div>
              <div className="card">
                <CardHeader >

                  <Row>
                    <div className="col-sm-6"></div>
                    <div className="col-sm-6">
                      <div className="filter-choices-input">
                        <Input placeholder={"Search..."} />
                      </div>
                    </div>
                  </Row>

                </CardHeader>

                {/* <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      <Nav
                        className="nav-tabs-custom card-header-tabs border-bottom-0"
                        role="tablist"
                      >
                        <NavItem>
                          <NavLink
                            className={classnames(
                              { active: activeTab === "1" },
                              "fw-semibold"
                            )}
                            onClick={() => {
                              toggleTab("1", "all");
                            }}
                            href="#"
                          >
                            All{" "}
                            <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                              12
                            </span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames(
                              { active: activeTab === "2" },
                              "fw-semibold"
                            )}
                            onClick={() => {
                              toggleTab("2", "unpublished");
                            }}
                            href="#"
                          >
                            Published{" "}
                            <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                              5
                            </span>
                          </NavLink>
                        </NavItem>

                      </Nav>
                    </div>

                  </div>
                </div> */}

                <div className="card-body">
                  <TabContent className="text-muted">
                    <TabPane>
                      <div
                        id="table-product-list-all"
                        className="table-card gridjs-border-none pb-2"
                      >
                        {productList && productList !== "" ? (
                          <TableContainer
                            columns={columns}
                            data={productList}
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

export default EcommerceProducts;
