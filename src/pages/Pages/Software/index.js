import classnames from "classnames";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Container,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal, ModalBody, ModalHeader,
  Row,
  Card,
  CardHeader,
  Col,
  Input,
  Button,
  CardBody,
  Table,
  Label,
} from "reactstrap";

//Title
import BreadCrumb from "../../../Components/Common/BreadCrumb";

//data
import { sellersList } from "../../../common/data/ecommerce";

//redux
import { Link } from "react-router-dom";

//treeview
import TreeView, { flattenTree } from "react-accessible-treeview";
import CheckboxTree from 'react-checkbox-tree';
// import TextField from "@mui/material/TextField";
import { IoMdArrowDropright } from "react-icons/io";
import { RiCheckboxBlankLine, RiCheckboxIndeterminateLine, RiCheckboxLine } from "react-icons/ri";
import cx from "classnames";
import { getAllSoftwareByCategory, getAllSoftware, getProgramCategories, getTopSoftwares, addNewBrowserHistory } from '../../../helpers/fakebackend_helper';
import { downloadProgram } from "../../../helpers/fakebackend_helper";
import "./softwarefield.css"
// import { Search } from "gridjs/dist/src/view/plugin/search/search";

const Software = () => {

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const myInformationSelector = useSelector(state => state.Profile.myinformation);

  const fetchData = async () => {
    if (selectedCategoryId === 1) {
      getTopSoftwares().then(res => {
        setTopsoftwareData(res);
      });
      getAllSoftware().then(softwareList => {
        setsoftwareData(softwareList);
      });
    } else {
      getAllSoftwareByCategory(selectedCategoryId).then(categoryData => {
        setsoftwareData(categoryData.programs);
      });
    }
  };

  const getSoftwareByCate = (id) => {
    getAllSoftwareByCategory(id).then(categoryData => {
      setsoftwareData(categoryData);
    });
  }

  const [softwareData, setsoftwareData] = useState([]);
  const [TopsoftwareData, setTopsoftwareData] = useState([]);
  const [userId, setUserId] = useState([]);
  const [originalCategoryList, setOriginalCategoryList] = useState([]);

  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  useEffect(() => {
    getCategoryList();
    fetchData();
    if (myInformationSelector) {
      setUserId(myInformationSelector.id);
    } else {
      setUserId('');
    }
  }, [myInformationSelector]);

  useEffect(() => {
    fetchData();
  }, [selectedCategoryId])

  function getCategoryList() {
    getProgramCategories().then(categoryList => {
      let nodes = [];
      let categoryNodes = [];
      let lookupList = {};
      categoryList = categoryList.sort((a, b) => a.parentId - b.parentId);
      // setOriginalCategoryList(categoryList);

      for (const category of categoryList) {
        let item = {
          id: category.id,
          category_id: category.id,
          name: category.title,
          value: category.id,
          label: category.title,
          parent_id: ((category.parentId === 0) ? null : category.parentId),
          children: []
        };
        lookupList[item.id] = item;
        nodes.push(item);
        if (item.parent_id == null) {
          categoryNodes.push(item);
        }
      }
      for (let i = 0; i < nodes.length; i++) {
        let n = nodes[i];
        if (!(n.parent_id == null)) {
          lookupList[n.parent_id].children = lookupList[n.parent_id].children.concat([n]);
        }
      }
      let folder = {
        label: "",
        value: 0,
        children: categoryNodes,
      };

      setCategory(categoryNodes);
    });
  }

  //selection category
  const [selectedSingle, setSelectedSingle] = useState(null);
  function handleSelectSingle(value) {
    if (selectedSingle != value) {
      setCategory(value);
    }
    setSelectedSingle(value);
  }

  // Data
  const [softwareList, setsoftwareList] = useState(sellersList);

  //program detail
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [requirement, setRequirement] = useState("");
  const [description, setDescription] = useState("");
  const [recommends, setRecommends] = useState("");
  const [cost, setCost] = useState("");
  const [imageId, setImageId] = useState("");
  const [programId, setProgramId] = useState("");
  const [purchases, setPurchases] = useState("");

  //modal
  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };

  //modal first
  const [showProgramModal, setShowProgramModal] = useState(false);
  function showProgram(selectedProgram) {
    setProgramId(selectedProgram.id);
    setName(selectedProgram.name);
    setDate(selectedProgram.date);
    setRequirement(selectedProgram.requirement);
    setDescription(selectedProgram.description);
    setRecommends(selectedProgram.recommends);
    setCost(selectedProgram.cost);
    setPurchases(selectedProgram.purchases);
    setImageId(selectedProgram.id);
    setShowProgramModal(!showProgramModal);
  }

  //modal second
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  function purchaseProgram() {
    setShowPurchaseModal(!showPurchaseModal);
  }

  //treeview

  //data folder
  const [category, setCategory] = useState([]);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = softwareData.filter((el) => {
    //if no input the return the original
    if (inputText === '') {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.name.toLowerCase().includes(inputText);
    }
  })

  const CheckBoxIcon = ({ variant, ...rest }) => {
    switch (variant) {
      case "all":
        return <RiCheckboxLine {...rest} />;
      case "none":
        return <RiCheckboxBlankLine  {...rest} />;
      case "some":
        return <RiCheckboxIndeterminateLine {...rest} />;
      default:
        return null;
    }
  };


  const [expandedIds, setExpandedIds] = useState();

  return (
    <div className="page-content">
      {/* Top software modal */}
      {/* ---------------------------------- */}
      <Modal
        isOpen={showProgramModal}
        toggle={() => {
          showProgram();
        }}
        id="firstmodal"
        centered
      >

        <ModalBody className=" p-2">
          <CardBody>
            <Row className="d-flex ">

              <div className="col-sm-5">
                <div className="avatar-lg bg-light rounded p-1">
                  <img
                    src={downloadProgram(imageId)} alt="..." className="img-fluid d-block">
                  </img>
                </div>
              </div>
              <div className="col-sm-7">
                <br />
                <h5 className="fs-15">Name : {name}</h5>
                <h5 className="fs-15">Date : {date}</h5>
                <h5 className="fs-15">Requirement : {requirement}</h5>
              </div>

            </Row>
            <Row className="pt-3">
              <div className="col-sm-5">
                <h5 className="fs-15">
                  Description :
                </h5>
              </div>
              <div className="col-sm-7">
                <h5 className="fs-15">
                  {description}
                </h5>
              </div>
            </Row>
            <Row className="pt-3">
              <div className="col-sm-5">
                <h5 className="fs-15">
                  UpVote :
                </h5>
              </div>
              <div className="col-sm-7">
                <h5 className="fs-15">
                  {recommends}
                </h5>
              </div>
            </Row>
            <Row className="pt-3">
              <div className="col-sm-5">
                <h5 className="fs-15">
                  Cost :
                </h5>
              </div>
              <div className="col-sm-7">
                <h5 className="fs-15">
                  {cost}
                </h5>
              </div>
            </Row>
            <Row className="pt-4">
              <div className="col-sm-6 text-center">
                <Button color="success" onClick={() => { setShowProgramModal(); purchaseProgram(false); }} >Purchase</Button>
              </div>
              <div className="col-sm-6 text-center">
                <Button color="success" onClick={() => {
                  setShowProgramModal(false);
                }}>Close</Button>
              </div>
            </Row>
          </CardBody>
        </ModalBody>
      </Modal>

      {/* second Top software modal */}
      <Modal
        isOpen={showPurchaseModal}
        toggle={() => {
          purchaseProgram();
        }}
        id="secondmodal"
        centered
      >

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
                    <span>current: </span><p>5971.67</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>{cost}</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>real valance: </span><p>{5971.67 - cost}</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>

              <TabPane tabId="2" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p>5971.67</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>{cost}</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>free valance: </span><p>{5971.67 - cost}</p>
                  </div><br /><hr /><br />

                </div>
              </TabPane>
            </TabContent>

            <Row className='d-flex' >
              <div className="col-sm-6">
                <Link to={"/pages-software-buySoftware/" + programId}><Button color="success" onClick={() => {
                  console.log("programId", programId);
                  /** purchaseProgram(false); */
                  addNewBrowserHistory({ date: new Date(), count: 0, userId: 5, programId: programId })
                }}  >
                  Purchase
                </Button></Link></div>
              <div className="col-sm-6">
                <Link to="/pages-profile-settings"><Button color="success" onClick={() => { }}>
                  Charging score
                </Button></Link></div>
              {/* <div className="col-sm-4">
                <Link to="/pages-profile-settings"><Button color="success" onClick={() => { }} >
                  Download
                </Button></Link></div> */}

            </Row><br /><br />
          </div>
        </div>
      </Modal>
      {/* --------------------- */}

      <Container fluid>
        <BreadCrumb title="Software" pageTitle="Software" />

        <Row>
          <Col xl={3} lg={4}>
            <Card>
              <div className="accordion accordion-flush ">
                {/* -------------treeview---------------- */}
                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    <i className="bi bi-hand-thumbs-up"></i>
                    Categories
                  </p>
                  <CheckboxTree
                    nodes={category}
                    checked={checked}
                    expanded={expanded}
                    onCheck={e => {
                      console.log(e);
                      if (e.length) {
                        getSoftwareByCate(e.join(','))
                      }
                      setChecked(e)
                    }}
                    onExpand={e => setExpanded(e)}
                    iconsClass="fa5"
                    showExpandAll={true}
                    nativeCheckboxes={true}
                    icons={{
                      check: <span className="rct-icon rct-icon-check" />,
                      uncheck: <span className="rct-icon rct-icon-uncheck" />,
                      halfCheck: <span className="rct-icon rct-icon-half-check" />,
                      expandClose: <span className="rct-icon rct-icon-expand-close" />,
                      expandOpen: <span className="rct-icon rct-icon-expand-open" />,
                      expandAll: <span className="rct-icon rct-icon-expand-all" />,
                      collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                      parentClose: <span className="rct-icon rct-icon-parent-close" />,
                      parentOpen: <span className="rct-icon rct-icon-parent-open" />,
                      leaf: <span className="rct-icon rct-icon-leaf" />,
                    }}
                  />
                </div>

                {/* -------------Top software------------ */}
                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    Top Software
                  </p>

                  <div className="p-3">{TopsoftwareData.map((softwareItem, key) => (
                    <React.Fragment key={softwareItem.id}>
                      <Card className="product" onClick={() => showProgram(softwareItem)}>
                        <Link to='#'
                          className="text-dark"
                        >
                          <CardBody>
                            <div className="d-flex align-items-center text-muted  ">
                              <div className="flex-shrink-0 me-3">
                                <img src={downloadProgram(softwareItem.id)} className="avatar-sm rounded-circle shadow bg-light" alt="..."></img>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="fs-14">{softwareItem.name}</h5>
                                <h5 className="fs-14">purchases:{softwareItem.purchases}</h5>
                              </div>
                            </div>
                          </CardBody>
                        </Link>
                      </Card>
                    </React.Fragment>
                  ))}
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <div className="col-xl-9 col-lg-8">
            <div className="card">
              {/* --------------------search... --------------------- */}
              <CardHeader >
                <Row>
                  <div className="col-sm-6"></div>

                  <div className="col-sm-6">
                    <div className="filter-choices-input">
                      <Input
                        id="outlined-basic"
                        onChange={inputHandler}
                        placeholder={"Search..."}
                        variant="outlined"
                      />
                    </div>
                  </div>
                </Row>
              </CardHeader>

              {/* -----------------main table display------------------ */}
              <Row className="p-3">
                {filteredData.map((software, key) => (
                  <Col lg={4} key={software.id}>
                    <Card className="product" onClick={() => showProgram(software)}>
                      <Link to='#'
                        className="text-dark"
                      >
                        <CardBody>
                          <Row className="gy-3">
                            <div className="col-sm-6">
                              <div className="avatar-lg bg-light rounded p-1">
                                <img
                                  // src={software.file}
                                  src={downloadProgram(software.id)}
                                  alt=""
                                  className="img-fluid d-block"
                                />
                              </div>
                            </div>

                            <div className="col-sm-6">
                              <h5 className="pt-4 fs-20 text-truncate">

                                {software.name}
                              </h5>
                            </div>
                          </Row>
                        </CardBody>

                        <div className="card-footer">
                          <div className="row align-items-center gy-3">
                            <div className="col-sm-6">
                              <div className="d-flex align-items-center gap-2 text-muted">
                                <div>Cost:</div>
                                <h5 className="fs-12 mb-0">
                                  <span className="product-line-price">
                                    {" "}

                                    {software.cost}
                                  </span>
                                </h5>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="d-flex align-items-center gap-2 text-muted">
                                <div>UpVote:</div>
                                <h5 className="fs-12 mb-0">
                                  <span className="product-line-price">
                                    {" "}
                                    {software.recommends}
                                  </span>
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Software;











