import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import { Card, CardBody, Col, Container, CardHeader, Nav, NavItem, NavLink, Row, TabContent, TabPane, Input, Label, Button, Modal, ModalHeader } from "reactstrap";

import { addNewShipData, getAuthenticatedUser, getShipData, updateOneData, updateShipData } from "../../../../helpers/fakebackend_helper";

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

const ShipDataVote = (props) => {

  let { id } = useParams();
  const [category, setCategory] = useState({ label: "About Ship", value: "about_ship" });

  const [shipData, setShipData] = useState({
    name: '',
    image_url: '',
    plan_date: '',
    type:'',
    port: '',
    price: '',
    owner: '',
    runner: '',
    total_weight: '',
    load_weight: '',
    weight: '',
    current_height: '',
    width: '',
    length: '',
    full_load: '',
    engine: '',
    built_date: '',
    factory: '',
    location: '',
    status: '',
  });

  useEffect(() => {
    if (id) {
      getShipData(id).then(res => {
        setShipData(res);
      })
    }
  }, []);

  
  const handleCreate = () => {

    fetch('http://localhost:8080/api/purchaseHistory/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json ;charset=UTF-8'
        },
        body: JSON.stringify({
            date: new Date(),
            type: "data",
            text: currentLevel,
            price: 100,
            userId: user.id
        })
    }).then(() => { tog_togSecond(false);})
}

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
 
  // Formats the size
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  const sortShipOption = [
    {
      options: [
        { label: "Ship1", value: "ship1" },
        { label: "Ship2", value: "ship2" },
        { label: "Ship3", value: "ship3" },
        { label: "Ship4", value: "ship4" },
      ],
    },
  ];

  document.title = "New Data Vote";

  return (
    <React.Fragment>
      <h5 className="fs-24 mb-1 py-4">Input Ship Data</h5>
      <Row>
        <Col lg={6}>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="ship-name-input">
                  1. Ship Name
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="ship-name-input"
                  placeholder="Enter ship name"
                  value={shipData.name}
                  onChange={e => {
                    setShipData({ ...shipData, ...{ name: e.target.value } })
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
                  value={shipData.plan_date}
                  onChange={e => {
                    setShipData({ ...shipData, ...{ plan_date: e[0] } });
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="ship-type-input">
                  5. Type of Ship
                </Label>
              </Col>
              <Col sm={8}>
                <Select
                  value={{ value: shipData.type, label: shipData.type }}
                  onChange={(e) => {
                    console.log(e);
                    setShipData({ ...shipData, ...{ type: e.value } })
                  }}
                  options={sortShipOption}
                  name="choices-publish-visibility-input"
                  classNamePrefix="select2-selection form-select"
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="ship-owner-input">
                  7. Ship owner
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="Ship-owner-input"
                  placeholder="Enter product title"
                  value={shipData.owner}
                  onChange={e => {
                    setShipData({ ...shipData, ...{ owner: e.target.value } })
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
                <Label className="form-label" htmlFor="ship-image-input">
                  2. Ship image
                </Label>
              </Col>
              <Col sm={8}>
                <input
                  className="form-control"
                  id="ship-image-input"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={e => {
                    setShipData({ ...shipData, ...{ image_url: e.target.files[0] } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="plan-ship-input">
                  4. Port
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="plan-ship-input"
                  placeholder="Enter plan port"
                  value={shipData.port}
                  onChange={e => {
                    setShipData({ ...shipData, ...{ port: e.target.value } })
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
                  value={shipData.price}
                  onChange={e => {
                    setShipData({ ...shipData, ...{ price: e.target.value } })
                  }}
                />
              </Col>
            </Row>
          </div>
          <div className="mb-3">
            <Row>
              <Col sm={4}>
                <Label className="form-label" htmlFor="ship-runner-input">
                  8. Ship Runner
                </Label>
              </Col>
              <Col sm={8}>
                <Input
                  type="text"
                  className="form-control"
                  id="ship-runner-input"
                  placeholder="Enter plan port"
                  value={shipData.runner}
                  onChange={e => {
                    setShipData({ ...shipData, ...{ runner: e.target.value } })
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
                    value={shipData.total_weight}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ total_weight: e.target.value } })
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
                    value={shipData.load_weight}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ load_weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="Ship-weight-input">
                    Ship Weight
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="Ship-weight-input"
                    placeholder="Enter  Ship Weight"
                    value={shipData.weight}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ weight: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="ship-length-input">
                    Ship Lenght
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="ship-length-input"
                    placeholder="Enter Ship Lenght"
                    value={shipData.length}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ length: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="ship-width-input">
                    Ship width
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="number"
                    className="form-control"
                    id="ship-width-input"
                    placeholder="Enter Ship width"
                    value={shipData.width}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ width: e.target.value } })
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
                    value={shipData.current_height}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ current_height: e.target.value } })
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
                    value={shipData.full_load}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ full_load: e.target.value } })
                    }}
                  />
                </Col>
              </Row>
            </div>
            <div className="mb-1">
              <Row>
                <Col sm={4}>
                  <Label className="form-label" htmlFor="ship-engine-input">
                    Ship Engine
                  </Label>
                </Col>
                <Col sm={8}>
                  <Input
                    type="text"
                    className="form-control"
                    id="ship-engine-input"
                    placeholder="Enter Ship Engine"
                    value={shipData.engine}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ engine: e.target.value } })
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
                    value={shipData.built_date}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ built_date: e[0] } });
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
                    value={shipData.factory}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ factory: e.target.value } })
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
                    value={shipData.location}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ location: e.target.value } })
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
                    value={shipData.status}
                    onChange={e => {
                      setShipData({ ...shipData, ...{ status: e.target.value } })
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
                formData.append("name", shipData.name);
                formData.append("plan_date", shipData.plan_date);
                formData.append("type", shipData.type);
                formData.append("port", shipData.port);
                formData.append("price", shipData.price);
                formData.append("owner", shipData.owner);
                formData.append("runner", shipData.runner);
                formData.append("total_weight", shipData.total_weight);
                formData.append("load_weight", shipData.load_weight);
                formData.append("weight", shipData.weight);
                formData.append("current_height", shipData.current_height);
                formData.append("width", shipData.width);
                formData.append("length", shipData.length);
                formData.append("full_load", shipData.full_load);
                formData.append("engine", shipData.engine);
                formData.append("built_date", shipData.built_date);
                formData.append("factory", shipData.enginfactorye);
                formData.append("location", shipData.location);
                formData.append("status", shipData.status);
                formData.append("file", shipData.image_url);
                formData.append("voterId", getAuthenticatedUser().id);
                if (id) {
                  updateShipData(id, formData).then(res => {
                    console.log(res);
                  })
                } else {
                  addNewShipData(formData).then(res => {
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
                <Button color="primary" className="ms-3" onClick={() => handleCreate }>Yes</Button>
              </NavLink>
              <Button color="primary" className="me-3" onClick={() => tog_togSecond(false)}>No</Button>
            </div>
          </div>
        </div>

      </Modal>
    </React.Fragment>
  );
};

export default ShipDataVote;
