import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, Button, Modal, ModalHeader } from "reactstrap";

import { addNewGoodData, getGoodData, updateOneData, updateGoodData, getAuthenticatedUser } from "../../../../helpers/fakebackend_helper";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import classnames from "classnames";
import Dropzone from "react-dropzone";
import { Link, useParams } from "react-router-dom";
import MetaTags from 'react-meta-tags';

// Import React FilePond
import { registerPlugin } from "react-filepond";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
// Import FilePond styles
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const GoodDataVote = (props) => {

  let { id } = useParams();
  const [category, setCategory] = useState({ label: "About Good", value: "about_good" });

  const [goodData, setGoodData] = useState({});

  useEffect(() => {
    if (id) {
      getGoodData(id).then(res => {
        setGoodData(res);
      })
    }
  }, []);

  // Modal
  const [modal_togFirst, setmodal_togFirst] = useState(false);
  function tog_togFirst() {
    setmodal_togFirst(!modal_togFirst);
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

  const [customActiveTab, setcustomActiveTab] = useState("1");
  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
 
  // Formats the size
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const sortGoodOption = [
    {
      options: [
        { label: "Good1", value: "good1" },
        { label: "Good2", value: "good2" },
        { label: "Good3", value: "good3" },
        { label: "Good4", value: "good4" },
      ],
    },
  ];

  document.title = "New Data Vote";

  return (
    <React.Fragment>
      <h5 className="fs-24 mb-1 py-4">Input Good Data</h5>
      <Row>
        <Col lg={6}>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="good-name-input">
                  1. Good Name
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="good-name-input"
                  placeholder="Enter good name"
                  value={goodData.name}
                  onChange={e => {
                    setGoodData({ ...goodData, ...{ name: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>

          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <label
                  htmlFor="plan-date-input"
                  className="form-label"
                >
                  3. Plan date
                </label>
              </Col>
              <Col sm={8}>
                <Flatpickr
                  className="form-control"
                  id="plan-date-input"
                  options={{
                    altInput: true,
                    altFormat: "F j, Y",
                    mode: "single",
                    dateFormat: "d.m.y",
                  }}
                  value={goodData.plan_date}
                  onChange={e => {
                    setGoodData({ ...goodData, ...{ plan_date: e[0] } });
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="good-type-input">
                  5. Type of Good
                </Label>
              </Col>
              <Col sm={8}>
                <Select
                  value={{ value: goodData.type, label: goodData.type }}
                  onChange={(e) => {
                    console.log(e);
                    setGoodData({ ...goodData, ...{ type: e.value } })
                  }}
                  options={sortGoodOption}
                  name="choices-publish-visibility-input"
                  classNamePrefix="select2-selection form-select"
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="good-tech_prop-input">
                  7. Good tech_prop
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="Good-tech_prop-input"
                  placeholder="Enter product title"
                  value={goodData.tech_prop}
                  onChange={e => {
                    setGoodData({ ...goodData, ...{ tech_prop: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={6}>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="good-image-input">
                  2. Good image
                </Label>
              </Col>
              <Col sm={8}>
                <input
                  className="form-control"
                  id="good-image-input"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={e => {
                    setGoodData({ ...goodData, ...{ image_url: e.target.files[0] } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="plan-good-input">
                  4. Port
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="plan-good-input"
                  placeholder="Enter plan port"
                  value={goodData.port}
                  onChange={e => {
                    setGoodData({ ...goodData, ...{ port: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="default-price-input">
                  6. Default Price
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="number"
                  className="form-control"
                  id="default-price-input"
                  placeholder="Enter plan port"
                  value={goodData.price}
                  onChange={e => {
                    setGoodData({ ...goodData, ...{ price: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="good-usage-input">
                  8. Good Runner
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="good-usage-input"
                  placeholder="Enter plan port"
                  value={goodData.usage}
                  onChange={e => {
                    setGoodData({ ...goodData, ...{ usage: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="mb-3">
        <Label className="form-label" htmlFor="tech-properties-input">
          9. Tech Properties
        </Label>

        <Row className="mt-4 mx-5">
          <Col lg={6}>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="total-weight-input">
                    Total Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="total-weight-input"
                    placeholder="Enter Total Weight"
                    value={goodData.total_weight}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ total_weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="load-weight-input">
                    Load Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="load-weight-input"
                    placeholder="Enter Load Weight"
                    value={goodData.load_weight}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ load_weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="Good-weight-input">
                    Good Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="Good-weight-input"
                    placeholder="Enter  Good Weight"
                    value={goodData.weight}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="good-length-input">
                    Good Lenght
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="good-length-input"
                    placeholder="Enter Good Lenght"
                    value={goodData.length}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ length: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="good-width-input">
                    Good width
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="good-width-input"
                    placeholder="Enter Good width"
                    value={goodData.width}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ width: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="current-height-input">
                    Current Height
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="current-height-input"
                    placeholder="Enter Current Height"
                    value={goodData.current_height}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ current_height: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="full-load-input">
                    Full Load
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="full-load-input"
                    placeholder="Enter Full Load"
                    value={goodData.full_load}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ full_load: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="good-engine-input">
                    Good Engine
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="good-engine-input"
                    placeholder="Enter Good Engine"
                    value={goodData.engine}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ engine: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="build-date-input">
                    Build Date
                  </Label>
                </Col>
                <Col sm={8}>
                  <Flatpickr
                    className="form-control"
                    id="build-date-input"
                    options={{
                      altInput: true,
                      altFormat: "F j, Y",
                      mode: "single",
                      dateFormat: "d.m.y",
                    }}
                    value={goodData.built_date}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ built_date: e[0] } });
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="factory-input">
                    Factory
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="factory-input"
                    placeholder="Enter Factory"
                    value={goodData.factory}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ factory: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="current-location-input">
                    Current Location
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="current-location-input"
                    placeholder="Enter Current Location"
                    value={goodData.location}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ location: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="current-status-input">
                    Current Status
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="current-status-input"
                    placeholder="Enter Current Status"
                    value={goodData.status}
                    onChange={e => {
                      setGoodData({ ...goodData, ...{ status: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <div className="text-end mb-3" style={{ display: 'inline-block', float: 'right' }}>
        <Link
          to="/view-data"
          className="btn btn-primary me-5"
        >
          Back
        </Link>
        <Button color="primary" className="shadow-none me-4" onClick={() => tog_togFirst()}>{id ? "Update Vote" : "Add Vote"}</Button>
      </div>

      <Modal
        isOpen={modal_togFirst}
        toggle={() => {
          tog_togFirst();
        }}
        id="firstmodal"
        centered
      >
        <ModalHeader className='purchase-setting-header'>
        To Add your Data!
          <Button
            type="button"
            className="btn-close"
            onClick={() => {
              setmodal_togFirst(false);
            }}
          >

          </Button>
        </ModalHeader>
        <div className="modal-body text-center">
          <div className=" ">
            <h4 className="mb-4">Would you add your data really? You have to pay!</h4>
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
                    <span>pay: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>real valance: </span><p>none</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>

              <TabPane tabId="2" id="nav-border-top-home">
                <div className="d-block purchase-pro-setting mt-5">
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>current: </span><p> </p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>pay: </span><p>100 Won</p>
                  </div><br /><hr />
                  <div className="flex-grow-1 ms-2 purchase-border-bottom">
                    <span>free valance: </span><p>none</p>
                  </div><br /><hr /><br />
                </div>
              </TabPane>
            </TabContent>
            <div className='purchase-button-group mb-5'>
              <Button color="primary" onClick={(e) => {
                tog_togSecond();
                tog_togFirst(false);
                e.preventDefault();
                const formData = new FormData();
                formData.append("name", goodData.name);
                formData.append("plan_date", goodData.plan_date);
                formData.append("type", goodData.type);
                formData.append("port", goodData.port);
                formData.append("price", goodData.price);
                formData.append("tech_prop", goodData.tech_prop);
                formData.append("usage", goodData.usage);
                formData.append("total_weight", goodData.total_weight);
                formData.append("load_weight", goodData.load_weight);
                formData.append("weight", goodData.weight);
                formData.append("current_height", goodData.current_height);
                formData.append("width", goodData.width);
                formData.append("length", goodData.length);
                formData.append("full_load", goodData.full_load);
                formData.append("engine", goodData.engine);
                formData.append("built_date", goodData.built_date);
                formData.append("factory", goodData.enginfactorye);
                formData.append("location", goodData.location);
                formData.append("status", goodData.status);
                formData.append("file", goodData.image_url);
                formData.append("voterId", getAuthenticatedUser().id);
                if (id) {
                  updateGoodData(id, formData).then(res => {
                    console.log(res);
                  })
                } else {
                  addNewGoodData(formData).then(res => {
                    console.log(res);
                  })
                }
              }} style={{ float: "left" }}>
                pay
              </Button>
              <Button color="primary" onClick={() => { }} style={{ float: "right" }}>
                charge
              </Button>
            </div><br /><br />
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={modal_togSecond}
        toggle={() => {
          tog_togSecond();
        }}
        id="secondmodal"
        centered
      >
        <div className="modal-body text-center p-3">
          <div className="mt-4 pt-3 pb-3">
            <h4 className="mb-3">Do you purchase really?</h4>
            <div className="hstack gap-2 justify-content-center">
              <NavLink href="view-data" className=' d-inline'>
                <Button color="primary" className="ms-3" onClick={() => tog_togSecond(false)}>Yes</Button>
              </NavLink>
              <Button color="primary" className="me-3" onClick={() => tog_togSecond(false)}>No</Button>
            </div>
          </div>
        </div>

      </Modal>
    </React.Fragment>
  );
};

export default GoodDataVote;
