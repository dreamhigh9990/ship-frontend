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
import { IoMdArrowDropright } from "react-icons/io";
import { RiCheckboxBlankLine, RiCheckboxIndeterminateLine, RiCheckboxLine } from "react-icons/ri";
import cx from "classnames";
//selection category

import "./studyfield.css"
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

import { useHistory  } from "react-router-dom";

import {
  getAllStudyByCategory,
  getAuthenticatedUser,
  getAllStudy,
  getAllCampusWithBrowses,
  getCampusCategories,
  getTopCampus,
  addNewBrowserHistory,
  getTopUsers,
  downloadAvatar
} 
from '../../../helpers/fakebackend_helper';
const Study = () => {


  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const myInformationSelector = useSelector(state => state.Profile.myinformation);
  const history = useHistory();

  const fetchData = async () => {
    if (selectedCategoryId === 1) {
      getTopCampus().then(res => {
        setTopcampusData(res);

      });

      getAllStudy().then(res => {
        setstudyData(res);
      });
    } else {
      getAllStudyByCategory(selectedCategoryId).then(categoryData => {
        setstudyData(categoryData.campuses);
      });
    }
  };
  //   const [inputText, setInputText] = useState("");
  //   const filterData = studyData.filter((el) => {
  //     //if no input the return the original
  //     if (inputText === '') {
  //         return el;
  //     }
  //     //return the item which contains the user input
  //     else {
  //         return el.name.toLowerCase().includes(inputText)
  //     }
  // })
  //   let inputHandler = (e) => {
  //     //convert input text to lower case
  //     var lowerCase = e.target.value.toLowerCase();
  //     setInputText(lowerCase);
  //   };


  const getStudyByCate = (id) => {
    getAllStudyByCategory(id).then(categoryData => {
      setstudyData(categoryData);
    });
  }

  const [studyData, setstudyData] = useState([]);
  const [selectedStyData, setSelectedStyData] = useState("");
  const [TopcampusData, setTopcampusData] = useState([]);
  const [TopUsersData, setTopUsersData] = useState([]);
  const [browseCnt, setBrowseCnt] = useState([]);
  const [originalCategoryList, setOriginalCategoryList] = useState([]);
  const [userId, setUserId] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);


  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const getAndSetIds = () => {
    setSelectedIds(
      document
        .querySelector("#txtIdsToSelect")
        .value.split(",")
        .map((x) => parseInt(x.trim()))
    );
  };

  useEffect(() => {
    getTopUsers().then(res => {

      setTopUsersData(res)
    })
  }, [])
  useEffect(() => {
    getAllCampusWithBrowses().then(allCampusListWithBrowses => {
      setBrowseCnt(allCampusListWithBrowses)
    })
  }, [])

  useEffect(() => {
    getCategoryList();
    fetchData();
    if (getAuthenticatedUser()) {
      setUserId(getAuthenticatedUser().id);
    } else {
      setUserId('');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedCategoryId])
  function getCategoryList() {
    getCampusCategories().then(categoryList => {
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
          // children: []
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
          if (!lookupList[n.parent_id].children) {
            lookupList[n.parent_id].children = []
          }
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

  // Data
  const [productLists, setproductLists] = useState(sellersList);
  //product detail
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [request, setRequest] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [campusId, setCampuseId] = useState("");

  //modal
  // Border Top Nav Justified Tabs
  const [topBorderjustifyTab, settopBorderjustifyTab] = useState("1");
  const topBorderJustifytoggle = (tab) => {
    if (topBorderjustifyTab !== tab) {
      settopBorderjustifyTab(tab);
    }
  };
  //modal first
  const [showCampusModal, setShowCampusModal] = useState(false);
  function showCampus(selectedCampus) {
    setCampuseId(selectedCampus.id);
    setTitle(selectedCampus.name);
    setDescription(selectedCampus.description.substring(0, 30) + "...");
    setPrice(selectedCampus.cost);
    setShowCampusModal(true);
  }
  //modal second
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  function purchaseCampus() {
    setShowPurchaseModal(true);
  }

  //treeview

  //data folder
  const [category, setCategory] = useState([]);

  const data = flattenTree(category);
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
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData = studyData.filter((el) => {
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
      <Modal
        isOpen={showCampusModal}
        id="firstmodal"
        centered
      >
        <ModalBody className=" p-2">
          <CardBody>

            <Row className="pt-3">
              <div className="col-sm-3">
                <h5 className="fs-15">
                  Title :
                </h5>
              </div>
              <div className="col-sm-9">
                <h5 className="fs-15">
                  {title}
                </h5>
              </div>
            </Row>
            <Row className="pt-3">
              <div className="col-sm-3">
                <h5 className="fs-15">
                  Description :
                </h5>
              </div>
              <div className="col-sm-9">
                <h5 className="fs-15">
                  {description}
                </h5>
              </div>
            </Row>
            <Row className="pt-4">
              <div className="col-sm-6 text-center">
                <Button color="success" onClick={() => { 
                  if (!myInformationSelector) {
                    history.push('/login');
                  } else {
                    setShowCampusModal(true); purchaseCampus(); 
                  }
                }} >Buy</Button>
              </div>
              <div className="col-sm-6 text-center">
                <Button color="primary" onClick={() => {
                  setShowCampusModal(false);
                }}>Close</Button>
              </div>
            </Row>
          </CardBody>
        </ModalBody>
      </Modal>

      <Modal
        isOpen={showPurchaseModal}
        id="secondmodal"
        centered
      >

        <div className="modal-body text-center">
          <div className=" ">
            <h3 className="mb-5">Purchase</h3>
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
                    <span>current: </span><p>3000</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>{price}</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>real valance: </span><p>{3000 - price}</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>
              <TabPane tabId="2" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p>2000 </p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>{price}</p>
                  </div><br /><hr />

                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>free valance: </span><p>{2000 - price}</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>
            </TabContent>

            <div className='d-flex'>
              <div className="col-sm-4">
                <Link to={"/pages-study-detail/" + campusId}><Button color="primary" onClick={() => {

                  addNewBrowserHistory({ date: new Date(), userId: userId, campusId: campusId })
                }} >
                  Buy
                </Button></Link></div>
              <div className="col-sm-4">
                <Link to="/pages-profile-settings"><Button color="primary">
                  Charge
                </Button></Link></div>
              <div className="col-sm-4">
                <Button color="primary" onClick={() => { setShowPurchaseModal(false); }}>
                  Close
                </Button></div>
            </div><br /><br />
          </div>
        </div>
      </Modal>
      <Container fluid>
        <BreadCrumb title="Study" pageTitle="Study" />

        <Row>
          <Col xl={3} lg={4}>
            {/* <CardHeader className="border-bottom" >
              <Select
                value={selectedSingle}
                onChange={() => {
                  handleSelectSingle();
                }}
                options={SingleOptions}
              />
            </CardHeader> */}
            <Card>
              <div className="accordion accordion-flush ">
                <div className="card-body border-bottom">
                  <p className="text-muted text-uppercase fs-12 fw-medium mb-3 pt-3 border-bottom">
                    Categories
                  </p>
                  <CheckboxTree
                    nodes={category}
                    checked={checked}
                    expanded={expanded}
                    onCheck={e => {

                      if (e.length) {
                        getStudyByCate(e.join(','))
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

                  {/* <TreeView
                    data={data}
                    className="checkbox p-2"
                    aria-label="Checkbox tree"
                    expandedIds={expandedIds}
                    multiSelect
                    selectedIds={selectedIds}
                    propagateSelect
                    propagateSelectUpwards
                    togglableSelect
                    defaultExpandedIds={[1]}
                    nodeRenderer={({
                      element,
                      isBranch,
                      isExpanded,
                      isSelected,
                      isHalfSelected,
                      isDisabled,
                      getNodeProps,
                      level,
                      handleSelect,
                      handleExpand,
                    }) => {
                      return (
                        <div
                          {...getNodeProps({ onClick: handleExpand })}
                          style={{
                            marginLeft: 20 * (level - 1),
                            opacity: isDisabled ? 0.5 : 1,
                          }}
                        >
                          {isBranch && <ArrowIcon isOpen={isExpanded} />}
                          <CheckBoxIcon
                            className="checkbox-icon"
                            onClick={(e) => {

                              console.log("AAAAAA", selectedIds, element,
                                isBranch,
                                isExpanded,
                                isSelected,
                                isHalfSelected,
                                isDisabled);
                                console.log("BBBBBBBBBBB",document
                                .querySelectorAll(".tree-node--selected"));
                              handleSelect(e);
                              e.stopPropagation();
                            }}
                            variant={
                              isHalfSelected ? "some" : isSelected ? "all" : "none"
                            }
                          />
                          <span className="name" onClick={() => {
                            // tog_togFirst(element)
                          }}>
                            {element.name}
                          </span>
                </div>
                );
                    }}
                  /> */}
                </div>
                <div className="card-body border-bottom">
                  <p className="text-primary text-uppercase fs-15 fw-medium mb-3 pt-3 border-bottom">
                    Top Article
                  </p>

                  <div className="p-3">{TopcampusData.map((campusItem, key) => (
                    <React.Fragment key={key}>
                      <Card className="product" onClick={() => showCampus(campusItem)} >
                        <Link to='#'
                          className="text-dark"
                        >
                          <CardBody>
                            <div className="d-flex align-items-center ">
                              <div className="flex-grow-1">
                                <div className="fs-15 text-dark ">{campusItem.name}</div>
                                <div>
                                  <span className="fs-14 me-2 text-primary"> <i className="ri-thumb-up-fill me-1"></i>{campusItem.recommends}</span>
                                  <span className="fs-14 text-dark"><i className="ri-thumb-down-fill me-1"></i> {campusItem.unrecommends}</span>
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Link>
                      </Card>
                    </React.Fragment>
                  ))}
                  </div>
                </div>
                <div className="card-body border-bottom">
                  <p className="text-primary text-uppercase fs-15 fw-medium mb-3 pt-3 border-bottom">
                    Top Reader
                  </p>


                  {/* <div className="d-flex me-2">
                        <div className="me-2">
                          <img
                            style={{
                              width: "50px",
                              height: "auto",
                              borderRadius: "50%",
                            }} alt="Img"
                            src={avatar1}
                          />
                        </div> */}
                  <div className="p-3">{TopUsersData.map((UsersItem, key) => (

                    <React.Fragment key={UsersItem.userId}>
                      <Card className="product">
                        <Link to='#'
                          className="text-dark"
                        >


                          {/* <CardBody>
                            <div className="d-flex">

                              <div className="me-4 ">
                                <img
                                  style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",

                                  }}
                                  alt="Img"
                                  src={downloadAvatar(UsersItem.userId)}
                                />
                              </div>
                              <div className="align-items-center text-muted  mt-1">

                                <div className="flex-grow-1 ">
                                  <h5 className=" fs-15 text-dark">{UsersItem.username} </h5>

                                </div>
                              </div></div>
                          </CardBody> */}
                          <CardBody>
                            <div className="d-flex align-items-center text-muted  ">
                              <div className="flex-shrink-0 me-3">
                                <img
                                  src={downloadAvatar(UsersItem.currentAvatarsId)}
                                  className="avatar-sm rounded-circle shadow bg-light"
                                  alt="...">
                                </img>
                              </div>
                              <div className="flex-grow-1">
                                <h5 className="fs-14">{UsersItem.username}</h5>

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
              <CardHeader >
                <Row>
                  <div className="col-sm-6"></div>

                  <div className="col-sm-6">
                    <div className="filter-choices-input">
                      <Input
                        id="outlined-basic"
                        onChange={inputHandler}
                        variant="outlined"
                        placeholder={"Search..."} />
                    </div>
                  </div>
                </Row>
              </CardHeader>
              <Row>
                <div className="table-responsive mt-4 mt-xl-0  p-4 pt-1">
                  <Table className="table-hover  align-middle table-nowrap mb-0 ">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Browses</th>
                        <th scope="col">Upvote</th>
                        <th scope="col">Downvote</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredData.map((study, key) => (

                        <React.Fragment key={study.id} >
                          <tr onClick={() => {
                            setSelectedStyData(study.name);
                            console.log(selectedStyData);
                          }}>
                            <td className="text-truncate" style={{ "border": "none", "width": "25%" }} onClick={() => showCampus(study)}><Link to="#"><div>{study.name}</div></Link></td>
                            <td className="text-truncate" style={{ "border": "none", "width": "45%" }} onClick={() => showCampus(study)}><Link to="#"><div>{study.description.substring(0, 40) + "..."}</div></Link></td>
                            <td style={{ border: "none" }}>{study.cost}</td>
                            <td style={{ border: "none" }}>
                              { browseCnt.map((cnt, key) => (cnt.campusId == study.id && 
                              <React.Fragment key={cnt.campusId} >{cnt.browseCnt}</React.Fragment>))
                                
                            }</td>
                            <td style={{ border: "none" }}>{study.recommends}</td>
                            <td style={{ border: "none" }}>{study.unrecommends}</td>
                          </tr>
                          {/* browseCnt.map((cnt, key)=>(cnt.campusId==study.id && <React.Fragment key={cnt.campusId} ><tr><td>{cnt.browseCnt}</td></tr></React.Fragment>)) */}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </Table>
                </div>

              </Row>
            </div>
          </div>
        </Row>
      </Container>
    </div >
  );
};

export default Study;









